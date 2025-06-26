import http from 'http';

const server =http.createServer((req,res) => {
    //console.log(req);
    //res.setHeader("Content-Type","text/html");
    //res.statusCode=404;
    //res.statusMessage="BAD";

    //Shothand for status (code,message & header)
    res.writeHead(202,"Good",{"Content-Type","text/html"});
    
    res.write("<h1>hello world</h1>");
});

server.listen(8000,() => console.log("Server UP!"));