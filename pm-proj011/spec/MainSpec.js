describe("Programa 1", function() {

  it("Atribui o número 8 a uma variável chamada tomates", function() {
    expect(tomates).toBe(8);
  });

  it("Atribui o número quatro e meio, a uma variável chamada melancias", function() {
    expect(melancias).toBe(4.5);
  });

  it("Atribui o texto Bom dia à uma variável chamada mensagem", function() {
    expect(mensagem).toBe("Bom dia");
  });

  it("Atribui o valor true à uma variável chamada ligado e o valor false para uma variavel chamada desligado", function() {
    expect(ligado).toBe(true);
    expect(desligado).toBe(false);
  });

});

describe("Programa 2", function() {

  it("Mostra Bom dia Bia, caso o nome informado seja Bia", function() {
    expect(nome).toBe("Bia");
  });

});

describe("Programa 3", function() {

  it("Mostra true caso a idade informada seja maior ou igual a 18", function() {
    expect(maiorIdade).toBe(true);
  });

});
