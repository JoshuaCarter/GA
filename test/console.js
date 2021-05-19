////////////////////////////
// DO NOT ALTER THIS CODE //
////////////////////////////

const RED = '\x1b[31m';
const GRN = '\x1b[32m';
const YEL = '\x1b[33m';
const BLU = '\x1b[34m';
const WHT = '\x1b[37m';
const CLR = '\x1b[0m';

let expects = [];
let passCount = 0;
let failCount = 0;

module.exports = {
    load: (name) => {
        const matches = name.match(/\/([0-9]+-[a-zA-Z]+)\//);
        if (!matches || matches.length < 2) {
            console.error(`Failed to load file from input "${name}"`)
        }
        const file = `./data/${matches[1]}.json`;
        const json = require(file);
        if (json.expects != undefined) {
            expects = json.expects.reverse();
        }
    },
    log: (val) => {
        const match = expects.pop();
        console.log(`${WHT}----------------------------------------------${CLR}`);
        console.log(`${WHT}You logged:\t${CLR} ${BLU}${val}${CLR}`);
        console.log(`${WHT}Comparing to:\t${CLR} ${WHT}${match}${CLR}`);
        if (val === match) {
            // pass
            console.log(`${WHT}Result:\t\t${CLR} ${GRN}PASS${CLR}`);
            passCount++;
        } else {
            // fail
            console.log(`${WHT}Result:\t\t${CLR} ${RED}FAIL${CLR}`);
            failCount++;
        }
    },
    finalize: () => {
        console.log(`${WHT}----------------------------------------------${CLR}`);
        if (expects.length == 0 && failCount == 0) {
            // passed all
            console.log(`${GRN}All tests passed!${CLR}`);
        } else {
            let final = `${WHT}Final result:\t ${CLR}`;
            if (passCount != 0) {
                // passed some
                final += `${GRN}${passCount} tests passed ${CLR}`;
            }
            if (failCount != 0) {
                // failed some
                final += `${RED}${failCount} tests failed ${CLR}`;
            }
            if (expects.length != 0) {
                // missed some
                final += `${YEL}${expects.length} tests missing`;
            }
            console.log(`${final}\n`);
        }
    }
}
