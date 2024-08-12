const { createServer } = require("node:http");
const fs = require("node:fs");

const port = 3000;
const hostname = "0.0.0.0";

const server = createServer((req,res) => {
    fs.readFile("eBird.json", function(err, data){
        if(err){
            res.statusCode = 404;
            res.end("Error in connection!");
            console.log("Failed to establish connection");
        } else {
            res.statusCode = 200,
            res.setHeader("Content-Type", "text/json");
            res.write(data);
            return res.end();
        };
    });
});

server.listen(port,hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`);
});
