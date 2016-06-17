var http = require('http');
var querystring = require('querystring')


var postData = querystring.stringify({
    'content':'老好人了',
    'mid':'8837'
})


var header = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'imooc_uuid=3322bf28-0ae7-4624-a684-54982a590b41; imooc_isnew_ct=1449500342; PHPSESSID=sf6lg1fo1t740horh2ivb71ot0; loginstate=1; apsid=JkNzk5MzcyMjZmYmJjMWFkMWNlMjYyMDQ4ODZmY2UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjM0MzMxOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0YW5qaW5jQDEyNi5jb20AAAAAAAAAAAAAAAAAAAAAADRjN2RmMzgyODhjMzJhNzQ5Nzc5NWM5MzU2MmQyNWZiQB5MV0AeTFc%3DNj; last_login_username=tanjinc%40126.com; jwplayer.qualityLabel=é«æ¸; jwplayer.mute=false; OUTFOX_SEARCH_USER_ID_NCOO=2014478095.6912332; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1463965590,1464606193; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1466146433; imooc_isnew=2; cvde=574c1defd15ce-98',
    'Host': 'www.imooc.com',
    'Origin': 'http://www.imooc.com',
    'Referer': 'http://www.imooc.com/video/8837',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
}

var option = {
    hostname: 'www.imooc.com',
    port: 80,
    path:'/course/docomment',
    method:'POST',
    headers:header
}

var req = http.request(option, function (res) {
    console.log('Status:' + res.statusCode);
    console.log('headers:' + JSON.stringify(res.headers));
    
    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    })
    
    res.on('end', function () {
        console.log("评论完毕");
    })
})

// req.on('error', function (e) {
//     console.log('Error:' + e);
// })
req.write(postData);
req.end();


