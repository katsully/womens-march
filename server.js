// writing to file

var fs = require("fs");
var myJson = {
    key: "myvalue"
};

fs.writeFile( "iframes.json", JSON.stringify( myJson ), "utf8", yourCallback );

// And then, to read it...
myJson = require("./filename.json");