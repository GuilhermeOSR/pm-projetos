describe("Programa 1", function() {

  it("Tarefa 1", function() {
    expect(triplicarValor(3)).toBe(9);
  });

  it("Tarefa 2", function() {
    expect(calcularComissao(100)).toBe(10);
  });

  it("Tarefa 3", function() {
    expect(calculaAnosAposentadoria(30, 65)).toBe(35);
  });
  
  it("Tarefa 4", function() {
    expect(mostrarMensagem(55, 65)).toBe("Faltam 10 anos para a sua aposentadoria");
  });

  it("Tarefa 5", function() {
    expect(temperaturaNegativa(-5)).toBe(true);
  });
  
  it("Tarefa 6", function() {
    expect(respostaTarefa6).toBe(17);
  });
  
  it("Tarefa 7", function() {
    expect(respostaTarefa7).toBe(17);
  });

  it("Tarefa 8", function() {
    expect(respostaTarefa8).toBe("u");
  });

  it("Tarefa 9", function() {
    expect(respostaTarefa9).toBe("Eu sei programar em Javascript");
  });

  it("Tarefa 10", function() {
    expect(respostaTarefa10).toBe(new Date().getDate());
  });



});
