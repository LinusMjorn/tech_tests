class Bank {
    constructor() {
     this.balance = 0;
     this.statement = ["date || credit || debit || balance"]
     this.fullStatement = []
     this.validDate = true

    }

    validateDate(dateString){      
        let dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
              
        // Match the date format through regular expression      
        if(dateString.match(dateformat)){      
            let operator = dateString.split('/');      
          
            // Extract the string into month, date and year      
            let datepart = [];      
            if (operator.length>1){      
                datepart = dateString.split('/');      
            }      
            let day = parseInt(datepart[0]);
            let month = parseInt(datepart[1]);            
            let year = parseInt(datepart[2]);      
                  
            // Create list of days of a month      
            let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];      
            if (month==1 || month>2){      
                if (day>ListofDays[month-1]){      
                    ///This check is for Confirming that the date is not out of its range      
                    return false;      
                }      
            }else if (month==2){      
                let leapYear = false;      
                if ( (!(year % 4) && year % 100) || !(year % 400)) {      
                    leapYear = true;      
                }      
                if ((leapYear == false) && (day>=29)){      
                    return false;      
                }else      
                if ((leapYear==true) && (day>29)){      
                    console.log('Invalid date format!'); 
                    this.validDate = false     
                    return false;      
                }      
            }      
        }else{      
            console.log("Invalid date format!");  
            this.validDate = false    
            return false;      
        }      
        this.validDate = true
        return true;      
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
         if (typeof date == "object") {
         var formattedDate = this.formatDate(date)
         }else{
             formattedDate = date
         }
         this.validateDate(formattedDate);
         if(this.validDate == true) {
         this.balance = this.balance + number;
         var depositAmount = number.toFixed(2).toString();
         var depositFull = formattedDate + " || || " + depositAmount + " || " + this.balance.toFixed(2);
         this.statement.push(depositFull);
         }
        return this.balance
      }

      withdraw(number,date = new Date()) {
        if (typeof date == "object") {
            var formattedDate = this.formatDate(date)
            }else{
                formattedDate = date
            }
            this.validateDate(formattedDate);
            if(this.validDate == true) {
        this.balance = this.balance - number;
        var withdrawAmount = number.toFixed(2).toString();
        var withdrawFull = formattedDate + " || " + withdrawAmount + " || || " + this.balance.toFixed(2);
        this.statement.push(withdrawFull);
            }
       return this.balance
      }

      printStatement(statement = this.statement){
          for (var i = 0; i < statement.length; i ++){
              console.log(statement[i]);
              this.fullStatement.push(statement[i])

          }

      }


}