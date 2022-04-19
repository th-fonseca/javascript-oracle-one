// Processo para adicionar um paciente

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  // essa função evita o comportamento padrão de ao clicar no btn do form, a página recarregue.
  event.preventDefault();
  //  selecionando o formulário
  var formulario = document.querySelector("#form-adiciona");

  //  adicionando variáveis aos campos pertinentes. O '.nome' é o valor do campo 'name' no html do formulário. O "value" pago o valor dentro deste atributo. O mesmo raciocínio é feito com as outras variáveis.
  // Código foi refatorado, ver a função para entender
  var paciente = obtemPacienteDoFormulario(formulario);

  var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente);

  if(erros.length > 0){
    exibeMensagemErro(erros);

    return;
  }

  
  // Coloando o "tr" dentro do "tbody, ou seja, adicionando o pacienteTr dentro da tabela"
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  // Limpa os campos do formulário após clicar no btn add
  formulario.reset();
  var menssagensErro = document.querySelector(".mensagem-erro")
  menssagensErro.innerHTML = "";
});

// cria o objeto paciente a partir de dados do formulário
function obtemPacienteDoFormulario(formulario) {
  // criando um objeto (como se fosse uma array), com vários itens sobre o paciente
  var paciente = {
    nome: formulario.nome.value,
    peso: formulario.peso.value,
    altura: formulario.altura.value,
    gordura: formulario.gordura.value,
    imc: calculaImc(formulario.peso.value, formulario.altura.value),
  };
  return paciente;
}

// monta uma linha da tabela com base no objeto paciente
function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  var nomeTd = montaTd(paciente.nome, "info-nome");
  var pesoTd = montaTd(paciente.peso, "info-peso");
  var alturaTd = montaTd(paciente.altura, "info-altura");
  var gorduraTd = montaTd(paciente.gordura, "info-gordura");
  var imcTd = montaTd(paciente.imc, "info-imc");

  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  // Adicionando as tds ao seu elemento pai, que é uma "tr", no caso, pacienteTr
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente){
  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("Favor informar o nome");
  }

  if(!validaPeso(paciente.peso)){
    erros.push("O peso informado é inválido");
  }

  if(!validaAltura(paciente.altura)){
    erros.push("A altura informada é inválida!");
  }
  if(paciente.gordura.length == 0){
    erros.push("Favor informar a % de gordura");
  }
  if(paciente.peso.length == 0){
    erros.push("Favor informar o peso");
  }
  if(paciente.altura.length == 0){
    erros.push("Favor informar o peso")
  }

  return erros;
}

function exibeMensagemErro(erros){
var ul = document.querySelector(".mensagem-erro");
// limpa as msg de erro quando a função é chamada novamente
ul.innerHTML = "";
erros.forEach(function(erro){
var li = document.createElement("li");
li.textContent = erro;
ul.appendChild(li);
});
}


