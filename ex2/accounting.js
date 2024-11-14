// export an Accounting Class
module.exports = class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0 // starting balance
  }

  // add money into account
  credit(amount) {
    this.balance += amount;
  }

  // describe account and balance
  describe() {
    return `owner: ${this.name}, balance: ${this.balance}`;
  }
}