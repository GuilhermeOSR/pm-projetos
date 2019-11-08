describe("Programa 1", function() {

  it("Tarefa 1", function() {
    const dias = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
    expect( diasUteis() ).toEqual(dias);
  });

  it("Tarefa 2", function() {
    const dias = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    expect( semanaCompleta() ).toEqual(dias);
  });

  it("Tarefa 3", function() {
    const tabela = [
  		{ Sigla: 'H', nome: 'hidrogênio', numeroAtomico: 1 },
  		{ Sigla: 'He', nome: 'hélio', numeroAtomico: 2 },
  		{ Sigla: 'Li', nome: 'lítio', numeroAtomico: 3 },
  		{ Sigla: 'Be', nome: 'berílio', numeroAtomico: 4 },
  		{ Sigla: 'B', nome: 'boro', numeroAtomico: 5 },
  	];
    expect( tabelaPeriodica() ).toEqual(tabela);
  });

  it("Tarefa 4", function() {
    expect( numerosImpares(10) ).toEqual([1, 3, 5, 7, 9]);
  });

});
