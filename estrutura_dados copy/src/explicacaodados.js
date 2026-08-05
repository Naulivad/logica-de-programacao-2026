import leia from "readline-sync"

var users = [];

for (var i = 0; i < 3 ; i ++){
var nome = leia.question("DIGITE SEU NOME: ")
var email = leia.question("DIGITE SEU EMAIL: ")
var idade = leia.questionInt("DIGITE SUA IDADE: ")

users.push({
  nome,
  idade,
  email
});

}

users.forEach(usuario => {
  mostraruser(usuario)
}) 

export function mostraruser(usuario){
  var { nome, email, idade } = usuario
  console.log(" OLA " + nome + " VOCE TEM " + idade + " ANOS, E SEU EMAIL É " + email)
}

//!!!!!! usuario[2].email = email da segunda lista !!!!!!!

// var user = {
//   nome: "lauan",
//   email: "lulugaymepleis@gmail.com",
//   senha: "12345678", 
//   hello: () => console.log("HELLOWWWWWW")
// }

// console.log(user)
// console.log(user.nome)
// user.hello()
// user.nome = luan