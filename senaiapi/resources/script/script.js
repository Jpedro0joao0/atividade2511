//requisição de dados usando o método get
async function load() {
    const REQUEST = await fetch ("https://www.onepieceapi.com/api/devil-fruits")
    return await REQUEST.json()
}

let dados = await load();
//chamando a tag body
let body = document.querySelector("body");

//como eu passo as informações do js para o html?
// console.log(dados[1].name)


dados.forEach((element,indice) => {
    console.log(element,indice)
    body.innerHTML += `
      <div class="card">
    <h1>${element.name.en}</h1>
    <img src="${element.image_url}">
        </div>
    `


});




