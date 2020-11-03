class Bank {
    constructor() {
     this.balance = 0;
     this.statement = ["date || credit || debit || balance"]

    }
    
     deposit(number) {
         this.balance = this.balance + number;

         this.statement.push(number.toFixed(2).toString());
        return this.balance;
      }

     withdraw(number){
         this.balance = this.balance - number;
         return this.balance;
      }


}