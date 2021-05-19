
const file = process.argv[2];
if (!file.match(/(\/lessons\/)/)) {
    console.error('[ERROR] Please run with a lesson script selected');
    return;
}
const con = require('./console.js');
con.load(file);
require(file);
con.finalize();
