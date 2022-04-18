// selecionando o 1º paciente
// o código dps foi refatorado para selecionar todos os pacientes
var pacientes = document.querySelectorAll(".paciente");

// Procurando informações relevantes e armazenando em vars para cada paciente usando o loop
for (let i = 0; i < pacientes.length; i++) {
  // cuidado com nome da variável "paciente" dentro da função e etc, fazer testes p ver se funciona
  var paciente = pacientes[i];
  var tdAltura = paciente.querySelector(".info-altura");
  var tdPeso = paciente.querySelector(".info-peso");
  var tdImc = paciente.querySelector(".info-imc");

  // definindo peso e altura com base no conteudo do texto
  var altura = tdAltura.textContent;
  var peso = tdPeso.textContent;

  // variáveis lógicas pra validar ou não o calc do imc
  var alturaEhValida = true;
  var pesoEhValido = true;

  // condicionais
  if (peso <= 0 || peso > 1000) {
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;
  }

  if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    // mostrar só duas casas decimais
    tdImc.textContent = imc.toFixed(2);
  } else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
    // mudar a cor da linha p/ verelho casa tenha dado inválido. Note que a variável paciente é a linha em si.(É o tr, ou classe inteira, selecionados.). O estilo foi adicionado chamando uma class do css e utilziando o js pra inserir esssa classe na variável paciente
    paciente.classList.add("paciente-invalido");
  }
}

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

