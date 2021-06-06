const http=require("http");
http
    .createServer((req,res) => {
        console.log(res);
        console.log("404-page has been visited");
        res.write("<h1>Home Page!</h1>");
        res.end();

<<<<<<< HEAD
        //404- feature implemented
        //latest change
        
=======
        //nothing changes
>>>>>>> parent of 42175eb (abort feature added)
    })
    .listen(8080);