const accountId = 12345
let accountEmail = "rups12@gmail.com"
var accountPassword = "53"
// prefer not to use var because of issue in block scope and functional scope
accountCity = "Kolkata"

//accountId = 2 // not allowed
accountEmail = "dimps18@gmail.com"
accountPassword = "35"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])