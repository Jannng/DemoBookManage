let express = require("express");

let app = express();

app.use(express.static("resume"));

app.listen(8080, ()=>{
    console.log("服务启动成功");
});