// TODO: load the "accounting.js" module
const accounting = require("./accounting.js")

// Create object from the exported class
const myAccount = new Account("Jeff");
myAccount.credit(150);
console.log(myAccount.describe());
