var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var randomString = '';
var charactersLength = characters.length;
for (let i = 0; i < 16; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
}
module.exports = { randomString };