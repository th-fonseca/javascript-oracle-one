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
  var alturaEhValida = validaAltura(altura);
  var pesoEhValido = validaPeso(peso);

  // condicionais
  if (!pesoEhValido) {
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;
  }

  if (!alturaEhValida) {
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
    // mudar a cor da linha p/ verelho casa tenha dado inválido. Note que a variável paciente é a linha em si.(É o tr, ou classe inteira, selecionados.). O estilo foi adicionado chamando uma class do css e utilziando o js pra inserir esssa classe na variável paciente
    paciente.classList.add("paciente-invalido");
  }
}

function validaPeso(peso){
  if (peso >= 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura < 3){
    return true;
  }
  else{
    return false;
  }
  }
  
function calculaImc(peso,altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  // mostrar só duas casas decimais
  return imc.toFixed(2);
}
