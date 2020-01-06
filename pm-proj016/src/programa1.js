/*******************************************************************************
	Tarefa 1:
		Crie uma função chamada diasUteis que retorna um array com todos
		os dias úteis da semana:
		Segunda-feira, Terça-feira, Quarta-feira, Quinta-feira, Sexta-feira
*******************************************************************************/


             function diasUteis() {
                    
              let dias = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
    
                return dias;
                }


/*******************************************************************************
	Tarefa 2:
		Crie uma função chamada semanaCompleta, ele deve usar a função diasUteis e
		adicionar mais 2 dias, Sábado e Domingo no final do Array usando o comando
		push. Referência:
		https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
*******************************************************************************/


                 function semanaCompleta() {
                    let dias = diasUteis();
                    dias.push('Sábado', 'Domingo');
                     
                      return dias;
                 }



/*******************************************************************************
	Tarefa 3:
		Crie uma função chamada tabelaPeriodica que retorna um array de objetos com
		os 5 primeiros elementos, começando em 1 (hidrogênio) e terminando em 5 (boro)
		Cada objeto deve ter a estrutura como mostrado nesse exemplo:
		{ Sigla: 'H', nome: 'Hidrogênio', numeroAtomico: 1 }
		Tabela Periódica para consulta:
		https://pt.wikipedia.org/wiki/Tabela_peri%C3%B3dica#Estrutura_da_tabela_peri%C3%B3dica
*******************************************************************************/

           function tabelaPeriodica() {

                const tabela = [
                    {Sigla: 'H', nome: 'hidrogênio', numeroAtomico: 1},
                    {Sigla: 'He', nome: "hélio", numeroAtomico: 2},
                    {Sigla: 'Li', nome: "lítio", numeroAtomico: 3},
                    {Sigla: 'Be', nome: "berílio", numeroAtomico: 4},
                    {Sigla: 'B', nome: "boro", numeroAtomico: 5}
                    
                ];
                  return tabela;
           }


/*******************************************************************************
	Tarefa 4:
		Crie uma função chamada numerosImpares(limite). Essa função vai receber o
		parâmetro limite conforme mostrado, que definirá até qual número deve ser
		retornado no array.
		Exemplo: numerosImpares(10) deve retornar o array [1, 3, 5, 7, 9]
*******************************************************************************/
  
                function numerosImpares(limite) {
                      let numeros = [];
                       for(let i = 0; i <= limite; i++) {
                           if(i % 2 !== 0) {
                               numeros.push(i);
                           }
                       }
                    return numeros;
                }






