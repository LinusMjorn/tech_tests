class Bank {
    constructor() {
     this.balance = 0;
     this.statement = ["date || credit || debit || balance"]

    }

    formatDate(date) {
        let month = String(date.getMonth() + 1);
        let day = String(date.getDate());
        const year = String(date.getFullYear());
      
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
      
        return `${day}/${month}/${year}`;
        }

     deposit(number,date = new Date()) {
         this.balance = this.balance + number;
         var formattedDate = this.formatDate(date)
         date.toString();
         var depositAmount = number.toFixed(2).toString();
         var depositFull = formattedDate + " || || " + depositAmount + " || " + this.balance.toFixed(2);
         this.statement.push(depositFull);
        return this.balance
      }

      withdraw(number,date = new Date()) {
        this.balance = this.balance - number;
        var formattedDate = this.formatDate(date)
        date.toString();
        var withdrawAmount = number.toFixed(2).toString();
        var withdrawFull = formattedDate + " || " + withdrawAmount + " || || " + this.balance.toFixed(2);
        this.statement.push(withdrawFull);
       return this.balance
      }


}