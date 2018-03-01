let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');
let mineType = require('./model/mineType');
let server = http.createServer(function(req,res){
    let pathname =url.parse(req.url).pathname;
    if(pathname == '/'){
        pathname = '/index.html';
    }
    if(pathname != '/favicon.ico'){
            fs.readFile('static' + pathname, function (err, data) {
                if(err){
                    fs.readFile('static/404.html',function(error,data404){
                        res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
                        res.write(data404);
                        res.end();
                    });
                }else {
                    console.log(path.parse(req.url));
                    let extname = path.parse(req.url).ext;
                    let mine = mineType(extname);
                    res.writeHead(200, {"Content-type": mine+";charset='utf-8'"});
                    res.write(data);
                    res.end();
                }
            });
    }
});
server.listen(5000);
