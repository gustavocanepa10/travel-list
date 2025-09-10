class RegisterForm {
  elements = {
    inputQuantity: () => cy.get('.add-form > [name = "quantity"]'),
    inputName: () => cy.get('.add-form > [name="description"]'),
    submitBtn: () => cy.get('.add-form > [type = "submit"]'),
  };

  Input(text) {
    this.elements.inputName().type(text)
  }

  inputQuantity(number) {
    this.elements.inputQuantity().select(number)
  }
}



describe("Itens para viagem", () => {
  const registerForm = new RegisterForm()
  const input = {
    inputName:'Comprar carregador',
    inputQuantity : 1

  }
  describe("Adicionar item com sucesso", () => {
    it("Estou na página da aplicação", () => {
      cy.visit("/");
    });
    it(`inputQuantity recebendo o valor ${input.inputQuantity} `, () => {
      
      registerForm.inputQuantity(input.inputQuantity)

      // cy.pause();
      registerForm.elements.inputQuantity().should('have.value', input.inputQuantity)

    });
    it(`input recebendo o valor ${input.inputName} `, () => {
      registerForm.Input(input.inputName)
      registerForm.elements.inputName().should('have.value', input.inputName)

    });

  });
});
