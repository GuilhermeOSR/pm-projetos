describe("Programa 1", function() {

  it("Tarefa 1", function() {
    // Teste com os estados MG, SP, RJ e CE	
    expect( calcularFrete("MG") ).toBe(12.5);
    expect( calcularFrete("SP") ).toBe(23.9);
    expect( calcularFrete("RJ") ).toBe(18.2);
    expect( calcularFrete("CE") ).toBe(35.9);
  });

  it("Tarefa 2", function() {
		// Teste com os valores 3, 8, 12 e 15.	
    expect( nomeMes(3) ).toBe("março");
    expect( nomeMes(8) ).toBe("agosto");
    expect( nomeMes(12) ).toBe("dezembro");
    expect( nomeMes(15) ).toBe("Mês inválido");
  });

  it("Tarefa 3", function() {
    expect( tabelaPeriodica("Zn") ).toBe("zinco");
    expect( tabelaPeriodica("Pt") ).toBe("platina");
    expect( tabelaPeriodica("Sn") ).toBe("estanho");
    expect( tabelaPeriodica("Br") ).toBe("bromo");
  });
    


});
