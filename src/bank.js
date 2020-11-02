class Bank {
    constructor() {
     this.balance = 0;
     this.statement = ["date || credit || debit || balance"]

    }
    
     add(number) {
         this.balance = this.balance + number;
         this.statement.push(number)
        return this.balance;
      }

     withdraw(number){
         this.balance = this.balance - number;
         return this.balance;
      }


}