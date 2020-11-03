describe("Bank", function() {
    it("Returns the balance", function() {
        bank = new Bank 
        expect( bank.balance ).toEqual(0);
    }); 

    it("Returns the balance when 1000 has been deposited to balance", function() {
        bank = new Bank 
        bank.deposit(1000)
        expect( bank.balance ).toEqual(1000);
    }); 

    it("Returns the balance when 500 has been withdrawn from balance", function() {
        bank = new Bank 
        bank.withdraw(500)
        expect( bank.balance ).toEqual(-500);
    }); 

    it("Bank is initialized with bank statement headers", function() {
        bank = new Bank 
        expect( bank.statement ).toContain("date || credit || debit || balance")

    }); 

    it("adds the deposit amount as a string to the statement array", function() {
        bank = new Bank 
        bank.deposit(1000)
        expect( bank.statement ).toContain("£1000")

    }); 


    


});