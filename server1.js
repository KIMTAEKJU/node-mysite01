let connect = require('connect')

// 메소드 체인 f1 -> f2 -> f3
let logger = function(req, resp, next){
    console.log('%s %s', req.method, req.url);
    next();
}

let hello = function(req, resp, next){
    resp.setHeader('Content-Type', 'text/html');
    resp.end('<h1>hello world</h1>');
    next();
}

let app = connect();
app.use( logger, null ); // null부분은 실패했을때 쓰는거
app.use( hello, null );
app.listen( 3000 );  // Cannot GET / 이게뜨면 처리해줄애가없어서 뜨는거