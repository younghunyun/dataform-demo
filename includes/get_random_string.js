var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
var uuid = '';
for (var i = 0; i < 4; i++) {
    var randomString = '';
    for (var j = 0; j < 4; j++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    uuid = (i < 3) ? uuid + randomString + '-' : uuid + randomString;
}
module.exports = { uuid };