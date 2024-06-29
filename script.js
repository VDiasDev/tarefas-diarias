let i = 0;

function adiciona_tarefa() {
    i += 1;

    let tarefa = document.getElementById("lista");
    tarefa.innerHTML = tarefa.innerHTML + `<div class="tarefa" id="tarefa${i}">
            <h4 class="tarefa__indice" id="tarefa__indice">${i}</h4>
            <div class="container-com-texto" id="container-com-texto${i}">
                <h4 class="tarefa__texto" id="tarefa__texto${i}"></h4>              
            </div>
            <div class="botoes">
                <button onclick="edita(${i})" class="botao-editar botoes__default">
                    <img src="img/icone-editar.png" alt="icone de editar" class="icones_botoes">
                </button>
                <button onclick="marca(${i})" class="botao-marcar botoes__default">
                    <img src="img/icone-certo.png" alt="icone de certo" class="icones_botoes">
                </button>
            </div>
        </div>`;

}
function edita(b) {

    var texto = document.getElementById(`tarefa__texto${b}`);
    var escrito = document.getElementById(`texto${b}`);
    var container = document.getElementById(`container-com-texto${b}`);

    if (texto) {
        var textoEscrito = texto.innerText;
        container.removeChild(texto);
        container.innerHTML = container.innerHTML + `<textarea id="texto${b}" class="texto" name="texto" rows="4" cols="50"></textarea>`;
        var inputEscrever = document.getElementById(`texto${b}`);
        inputEscrever.value = textoEscrito;
    }
    if (escrito) {

        var textoEscrito = document.getElementById(`texto${b}`).value;
        container.removeChild(escrito);
        container.innerHTML = container.innerHTML + `<h4 class="tarefa__texto" id="tarefa__texto${b}">${textoEscrito}</h4>`;

        var inputEscrever = document.getElementById(`tarefa__texto${b}`);
        inputEscrever.value = textoEscrito;
        
    }
}
function marca(b) {
    var elemento = document.getElementById(`tarefa${b}`);

    if (elemento.style.backgroundColor != "lightgreen")
    {
        elemento.style.backgroundColor = "lightgreen";
    } else if (elemento.style.backgroundColor == "lightgreen")
    {
        elemento.style.backgroundColor = "#FFEC9E";
    }
}

