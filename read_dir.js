var fs = require('fs');
 
var path = process.cwd();
var path = path+'/mine';
 
fs.readdir(path, function(err, items) {
    //console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
        //import items[i];
    }
});

require("./mine/that");
console.log(that);