class Bank {
    constructor() {
     this.balance = 0;
    }
    
     add(number) {
         this.balance = this.balance + number;
        return this.balance;
      }

     withdraw(number){
         this.balance = this.balance - number;
         return this.balance;

      }
}