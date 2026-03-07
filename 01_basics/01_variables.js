const accountId = 144553
let accountEmail = "ritik@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  //not allowed to update the value of const variable

accountEmail = "rk@gmail.com"
accountPassword = "54321"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

