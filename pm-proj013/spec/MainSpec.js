describe("Programa 1", function() {

  it("Tarefa 1", function() {
    // Teste sua função com as temperaturas 0, -8 e 25.
    expect( termostato(0) ).toBe("Temperatura positiva");
    expect( termostato(-8) ).toBe("Temperatura negativa");
    expect( termostato(25) ).toBe("Temperatura positiva");
  });

  it("Tarefa 2", function() {
    // Teste sua função com as notas -5, 0, 7, 3 e 19    
    expect( boletimEscolar(-5) ).toBe("Nota inválida");
    expect( boletimEscolar(0) ).toBe("Reprovado");
    expect( boletimEscolar(7) ).toBe("Aprovado");
    expect( boletimEscolar(3) ).toBe("Reprovado");
    expect( boletimEscolar(19) ).toBe("Nota inválida");
  });

  it("Tarefa 3", function() {
    //Teste com os estados MG, SP, RJ e CE    
    expect( calcularFrete("MG") ).toBe(12.5);
    expect( calcularFrete("SP") ).toBe(23.9);
    expect( calcularFrete("RJ") ).toBe(18.2);
    expect( calcularFrete("CE") ).toBe(35.9);
  });
  
  it("Tarefa 4", function() {
    //Teste com os valores 1,40  1,70  1,85 e  2,00
    expect( calcularAltura(1.4) ).toBe("baixinho");
    expect( calcularAltura(1.7) ).toBe("altura normal");
    expect( calcularAltura(1.85) ).toBe("altura normal");
    expect( calcularAltura(2) ).toBe("joga basquete?");
  });

  it("Tarefa 5", function() {
    expect( validarSenha("123456") ).toBe("Login efetuado com sucesso");
    expect( validarSenha("123456789") ).toBe("Senha inválida");
  });
  


});
