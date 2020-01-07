describe("Programa 1", function() {

  it("Tarefa 1", function() {
    const motor1 = new Motor(2000, 'gasolina');
    const mensagem1 = 'Motor 2000 cilindradas a gasolina está ligado';
    expect( motor1.ligar() ).toEqual(mensagem1);
    
    const motor2 = new Motor(1000, 'àlcool');
    const mensagem2 = 'Motor 1000 cilindradas a àlcool está desligado';
    expect( motor2.desligar() ).toEqual(mensagem2);

  });

  it("Tarefa 2", function() {
    const calculadora = new Calculadora(10, 2);
    expect( calculadora.somar() ).toEqual(12);
    expect( calculadora.subtrair() ).toEqual(8);
    expect( calculadora.multiplicar() ).toEqual(20);
    expect( calculadora.dividir() ).toEqual(5);
  });

  it("Tarefa 3", function() {
    expect( Calendario.diaSemana('06/06/2019') ).toEqual('quinta-feira');
    expect( Calendario.diaSemana('31/12/2019') ).toEqual('terça-feira');
    expect( Calendario.diaSemana('21/08/2019') ).toEqual('quarta-feira');
  });

  it("Tarefa 4", function() {
    expect( CalendarioIngles.diaSemana('06/06/2019') ).toEqual('thursday');
    expect( CalendarioIngles.diaSemana('31/12/2019') ).toEqual('tuesday');
    expect( CalendarioIngles.diaSemana('21/08/2019') ).toEqual('wednesday');
  });

  it("Tarefa 5", function() {
    const agenda = new Agenda()
    agenda.adicionaContato('Maria', '+55 31 9988-7755')
    agenda.adicionaContato('João', '+55 31 7755-9988')
    expect( agenda.listaContatos()[0].nome ).toEqual('Maria');
    expect( agenda.listaContatos()[1].telefone ).toEqual('+55 31 7755-9988');
  });

});
