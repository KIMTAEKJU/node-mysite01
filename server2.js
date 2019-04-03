let connect = require('connect');
let connectRoute = require('connect-route');
let url = require('url');

let requestHandlers = function(router){
    router.get('/', function (req, resp) {
        resp.setHeader('Content-Type', 'text/html');
        resp.end('<h1>main</h1>');
    });

    router.get('/hello', function (req, resp) {
        let query = url.parse(req.url, true).query; // 리턴해주는 query가 실제 우리가 사용하는거
        // ex : http://localhost:3000/hello?id=12321 라고 치면 id 해서 어쩌구 나옴

        console.log(query);
        resp.setHeader('Content-Type', 'text/html');
        resp.end('<h1>hello</h1> : ' + query['id'] + '<br>' + query['name']);
    });

    router.get('/board/view/:no', function (req, resp) {
        console.log(req.params['no']);
        resp.setHeader('Content-Type', 'text/html');
        resp.end('<h1>hello</h1>');
    });

    router.get('/api/user/checkemail', function (req, resp) {

        let result = {
            result: true,
            data: "exists"
        }

        resp.setHeader('Content-Type', 'application/json');
        resp.end( JSON.stringify(result) );
    });
};

let app = connect();
app.use( connectRoute(requestHandlers, null));
app.listen( 3000 );  // Cannot GET / 이게뜨면 처리해줄애가없어서 뜨는거


// app.use( connectRoute(function (router) {
//     router.get('/', function (req, resp) {
//
//     })