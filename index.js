let btn = document.getElementById("btn");

btn.addEventListener("click",() => {
   adicionarNaLista(); 
});

function adicionarNaLista() {
    let div = document.createElement("div");
    div.setAttribute("class", "card")

    let texto = document.createElement("p");// appendChild (texto)
    let botao_importate = document.createElement("button"); // appendChild ( botao_importate )
    botao_importate.addEventListener("click", () => {
       if(div.style.backgroundColor == "green"){
           div.style.backgroundColor = "white";
       }else{
           div.style.backgroundColor = "green";
       }

   });

    let botao_excluir = document.createElement("button");
    botao_excluir.addEventListener("click", ( )=> {
        div.remove();
    });

    let input = document.getElementById("input").value;
    


    texto.innerHTML = input;
    botao_importate.innerHTML= "normal";
    botao_excluir.innerHTML = "excluir";


    div.appendChild(texto);
    div.appendChild(botao_importate);
    div.appendChild(botao_excluir);


    let body = document.querySelector("body");
    body.appendChild(div);

}