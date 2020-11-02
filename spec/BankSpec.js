describe("Bank", function() {
    it("Returns the balance", function() {
        bank = new Bank 
        expect( bank.balance ).toEqual(0);
    }); 

    it("Returns the balance when 1000 has been added to balance", function() {
        bank = new Bank 
        bank.add(1000)
        expect( bank.balance ).toEqual(1000);
    }); 


});