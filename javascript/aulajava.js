const primeiroNome = "Bernardo ";

const nomeDoMeio = "Bruno ";

const sobrenome = "Pereira Lopes";



function GeraNomeCompleto(nome1, nome2, nome3){

  const nomeCompleto = nome1 + nome2 + nome3;

  return nomeCompleto;

}



var teste = GeraNomeCompleto(primeiroNome,nomeDoMeio, sobrenome)

console.log(teste);



console.log( GeraNomeCompleto(primeiroNome,nomeDoMeio, sobrenome) );

