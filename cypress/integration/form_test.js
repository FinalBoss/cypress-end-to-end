//describe === context, it === specify, beforeEach


describe("Test our form inputs", function () {
beforeEach(function () {

    cy.visit("http://localhost:3000")
});

    
    it("first test", function () {
        cy.get(`[data-cy="name"]`).type("Emi").should("have.value", "Emi")
    });

    it("Second it Test", function () {});

}

)