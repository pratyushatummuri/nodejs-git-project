const http=require("http");
http
    .createServer((req,res) => {
        console.log(res);
        console.log("404-page has been visited");
        res.write("<h1>Home Page!</h1>");
        res.end();

        //404- feature implemented
        //latest change

        console.log("added new");
        
    })
    .listen(8080);