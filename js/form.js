// Processo para adicionar um paciente

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  // essa função evita o comportamento padrão de ao clicar no btn do form, a página recarregue.
  event.preventDefault();
//  selecionando o formulário
  var formulario = document.querySelector("#form-adiciona")
  //  adicionando variáveis aos campos pertinentes. O '.nome' é o valor do campo 'name' no html do formulário. O "value" pago o valor dentro deste atributo. O mesmo raciocínio é feito com as outras variáveis.
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

// Criando um novo paciente editando o HTML com as variáveis obtidas
var pacienteTr = document.createElement("tr");

var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;

// Adicionando as tds ao seu elemento pai, que é uma "tr", no caso, pacienteTr
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);


// Coloando o "tr" dentro do "tbody, ou seja, adicionando o pacienteTr dentro da tabela"
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
});
