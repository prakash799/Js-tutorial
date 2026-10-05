const accountId = 1256898
let accountEmail = "vedprakash@gmail.com"
var account_password = "12345"
account_city = "Uttar Pradesh"

let account_state;

//accountId = 2; // const cannot be changed

console.log(accountId);

accountEmail = "test@gmail.com";
account_password = "568598";
account_city = "Delhi"

console.log(accountEmail);
console.log(account_password);
console.log(account_city);

/*
Please Please Please do not use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,account_password,account_city]);

console.log(account_state);



