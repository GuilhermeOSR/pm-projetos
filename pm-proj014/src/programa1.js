/*******************************************************************************
	Tarefa 1: (USE SWITCH CASE) 
		Crie uma função chamada calcularFrete que recebe a sigla do estado como 
		parâmetro e retorne o valor do frete. O frete deve ser calculado de acordo 
		com a seguinte tabela de preços:
			MG     -> 12,50
			SP     -> 23,90
			RJ     -> 18,20
			Outros -> 35,90
*******************************************************************************/
       function calcularFrete(estado){
           switch(estado) {
               case "MG":
                   return 12.50;
               case "SP":
                   return 23.90;
               case "RJ":
                   return 18.20;
               default: 
                  return 35.90;
         }              
     };

       



/*******************************************************************************
	Tarefa 2: (USE SWITCH CASE)
		Crie um função chamada nomeMes, que recebe um número referente ao mês e 
		retorna o nome do mês equivalente. 1 para Janeiro, 2 para Fevereiro, 3 para 
		março e assim por diante, até 12 para dezembro. Deve retornar a mensagem
		"Mês inválido" caso seja usado algum número que não esteja entre 1 e 12.
*******************************************************************************/


          function nomeMes(mes) {
              switch(mes) {
                  case 1:
                      return "janeiro";
                  case 2:
                      return "fevereiro";
                  case 3:
                      return "março";
                  case 4: 
                      return "abril";
                  case 5:
                      return "maio";
                  case 6: 
                      return "junho";
                  case 7:
                      return "julho";
                  case 8: 
                      return "agosto";
                  case 9: 
                      return "setembro";
                  case 10: 
                      return "outubro";
                  case 11: 
                      return "novembro";
                  case 12:
                      return "dezembro";
                  default:
                      return "Mês inválido";
              }
               
          }


/*******************************************************************************
	Tarefa 3: (USE SWITCH CASE) 
		Crie uma função chamada tabelaPeriodica que recebe como parâmetro a sigla
		de um elemento químico e retorne o nome desse elemento. Para exemplificar, 
		passando a sigla Zn, vai retornar zinco e Pt vai retornar platina.
		Use essa referência para abranger todos os elementos:
		https://pt.wikipedia.org/wiki/Tabela_peri%C3%B3dica#Estrutura_da_tabela_peri%C3%B3dica		
*******************************************************************************/

                 function tabelaPeriodica(sigl) {
                       switch(sigl) {
                           case "Zn":
                               return "zinco";
                           case "Pt":
                               return "platina";
                           case "Sn":
                               return "estanho";
                           case "Br":
                               return "bromo";
                           default:
                               return "Nothing";
                                                     
                       } 
                 }











