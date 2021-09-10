// Arquivo que contém o código da lista de tarefas a fazer.

// Variáveis para input na página
var tarefaInput = document.getElementById("tarefa");
var nomeInput = document.getElementById("responsavel");
var prazoInput = document.getElementById("prazo");
var adicionarBotao = document.getElementById("adicionar");

//  Variáveis para as duas listas
var aFazer = document.getElementById("a-fazer");
var feitas = document.getElementById("feitas");

// Função para criar elementos li das listas
// Recebe uma string com a tarefa a ser feita, retorna um elemento li
// Também recebe um boolean, se true, checkbox é criada marcada
var criarEl = function(stringTarefa, checkedBool){
    var listItem = document.createElement("li");
    var checkb = document.createElement("input");
    var label = document.createElement("label");
    var deletar = document.createElement("button");
    checkb.type = "checkbox";
    checkb.checked = checkedBool;

    label.innerText = stringTarefa;
    deletar.innerText = "x";
    deletar.className = "delete";
    listItem.appendChild(checkb);
    listItem.appendChild(label);
    listItem.appendChild(deletar);
    return(listItem);
}

// Função para adicionar uma tarefa à lista de tarefas a fazer.
var addTarefa = function(){
    console.log("Adicionando tarefa...");
    var stringT = tarefaInput.value + ", " + nomeInput.value + ", " + prazoInput.value + " ";
    var lis = criarEl(stringT, false);
    aFazer.appendChild(lis);
    binding(lis);
}

// Função para deletar um elemento da lista.
var deleteTarefa = function() {
    console.log("Deletando tarefa...");
    var li = this.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li); // Remove o li que é pai desse botão
}

// Chamada quando a tick box é marcada ou desmarcada.
// Dependendo do estado da checkbox, move ela entre Feita ou A fazer.
var moverTarefa = function(){
    console.log("Movendo tarefa...");
    var li = this.parentNode;
    var ul = li.parentNode;
    
    var labelV = li.querySelector("label"); // Seleciona a label antiga
    var checkboxV = li.querySelector("input"); // Seleciona o checkbox atual

    if (checkboxV.checked != true) {
        var newli = criarEl(labelV.innerText, false); // Novo elemento de lista
        aFazer.appendChild(newli);	// Envia o novo elemento para a categoria de tarefas feitas
    } else {
        var newli = criarEl(labelV.innerText, true); // Novo elemento de lista
        feitas.appendChild(newli);	
    }

    binding(newli);
    ul.removeChild(li); // Remove a tarefa original.
}

// Associa o clique do botão delete à função deletarTarefa, e o clique da tickBox à moverTarefa.
var binding = function(item){
    console.log("Realizando binding...");
    var botaoDelete = item.querySelector("button.delete");
    var checkBox = item.querySelector("input");
    botaoDelete.onclick = deleteTarefa;
    checkBox.onclick = moverTarefa;
}

adicionarBotao.addEventListener("click", addTarefa);