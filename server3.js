let connect = require('connect');
let connectRoute = require('connect-route');
let serveStatic = require('serve-static');
let fs = require('fs');

let app = connect();

app.use(serveStatic(__dirname + "/htdocs"), null); // 정적인파일 요청 처리 __dirname : full path
app.use( connectRoute(function(router){
     router.get('/', function (req, resp) { // 읽어서보내기?
        // resp.setHeader('Content-Type', 'text/html');
        // resp.end('<h1>main</h1>');

         fs.readFile( __dirname + "/htdocs/main/index.html",
                        "utf-8",
                        function (error, data) {
                            resp.writeHead(200, {
                                'Content-Type': 'text/html'
                            });

                            resp.end( data );
                         }
                    );
    });
}), null);

app.listen( 4000 );  // Cannot GET / 이게뜨면 처리해줄애가없어서 뜨는거