/*******************************************************************************
	Tarefa 1:
		Crie uma função chamada numerosAte20 que deve retornar todos os números
		de 0 a 20 devidamente separados por espaço.
		Exemplo: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
	
*******************************************************************************/

              function numerosAte20() {
                  let n = "";
                  let i = 0;
                   while(i <= 20) {
                       n = `${n} ${i}`;
                     i++;
                   }
                  return n;
             
              }


/*******************************************************************************
	Tarefa 2:
		Crie uma função chamada numerosImpares, que recebe um parâmetro chamado
		limite. Essa função deve retornar todos os números ímpares devidamente sepa-
		rados por espaço até o limite definido pelo valor passado no parâmetro.
		Exemplo: numerosImpares(9) deve retornar 1 3 5 7 9
*******************************************************************************/

                
                function numerosImpares(limite) {
                      let n = "";
                       for(let i = 0; i <= limite; i++) {
                           if(i % 2 !== 0) {
                               n = `${n} ${i}`;
                           }
                       }
                    return n;
                }


/*******************************************************************************
	Tarefa 3:
		Crie uma função chamada contagemRegressiva. Essa função vai retornar todos
		os números em ordem regressiva de 100 a 0, devidamente separados por espaço.
		Exemplo: 100 99 98 97 96 95 94 93 92 91 90 89 .. 7 6 5 4 3 2 1 0
*******************************************************************************/

                  function contagemRegressiva() {
                      let n = "";
                      let i= 100;
                      while(i >= 0) {
                          n = `${n} ${i}`;
                          i--;
                      } 
                      return n;
                  }
           
                



