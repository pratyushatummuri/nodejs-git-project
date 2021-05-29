const http=require("http");
http
    .createServer((req,res) => {
        console.log(res);
        console.log("404-page has been visited");
        res.write("<h1>Home Page!</h1>");
        res.end();

<<<<<<< HEAD
        //abort feautr
=======
        //404- feature implemented
>>>>>>> 404-feature
    })
    .listen(8080);