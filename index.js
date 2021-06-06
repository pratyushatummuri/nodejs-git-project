const http=require("http");
http
    .createServer((req,res) => {
        console.log(res);
        console.log("404-page has been visited");
        res.write("<h1>Home Page!</h1>");
        res.end();

        //nothing changes
        //added one more line
        console.log("abc");
    })
    .listen(8080);