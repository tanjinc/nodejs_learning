var http = require('http');
var cheerio= require('cheerio')

var url = 'http://www.imooc.com/learn/277';



function filterHtml(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');

    var courseData = [];

    chapters.each(function (item) {
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text();
        var videos = chapter.find('.video').children('li');

        var chapterData = {
          chapterTitle:'',
            videos: []
        };

        videos.each(function (item) {
            var video = $(this).find('.studyvideo');
            var videoTitle = video.text();
            var id = video.attr('href');
            if (id != undefined) {
                id = 'http://www.imooc.com'+id;
                chapterData.videos.push({
                    title:videoTitle,
                    id:id
                });
            }

        });
        chapterData.chapterTitle = chapterTitle;
        courseData.push(chapterData);
    });

    return courseData;
}

function printData(courseData) {
    courseData.forEach(function (item) {
        if (item!=undefined) {
            console.log(item.chapterTitle + '\n');
            item.videos.forEach(function (videoItem) {
                console.log(videoItem.title, videoItem.id)
            })
        }
    })
}

http.get(url, function (res) {
    var html = '';

    res.on('data', function (data) {
        html += data;
    });
    res.on('end', function () {
        var sourse = filterHtml(html)
        printData(sourse)
    })
});