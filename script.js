window.onload = () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon/1/'
  let divContainer = document.querySelector('#container')
    let printData = (data) => {
    let obj = {}
    obj.id = data.id
    obj.name = data.name.toUpperCase()
    obj.types = data.types.map(item => item.type.name).join('<br> - ')
    obj.ability = data.abilities.map(item => item.ability.name).join('<br>')
    obj.img = data.sprites.front_default
    let pokemonDiv = document.createElement('div')
    let innerTags = `<h2 class="nameContainer">${obj.id} ${obj.name}</h2>
                     <img src='${obj.img}' class="imgContainer">
                     <div class="text">
                      <div>
                        <h3 class="">Tipos:</h3>
                        <p> - ${obj.types}</p>
                      </div>
                      <div>
                        <h3>Hablidades:</h3>
                        <p>${obj.ability}</p>
                      </div>
                     </div>`
    pokemonDiv.innerHTML = innerTags 
    pokemonDiv.classList.add('cards')
   divContainer.appendChild(pokemonDiv)

    // let idP = document.createElement('p')
    // idP.innerText = obj.id
    // pokemonDiv.appendChild(idP)
    // let h2Name = document.createElement('h2')
    // h2Name.innerText = obj.name
    // pokemonDiv.appendChild(h2Name)
    // let h3Types = document.createElement('h3')
    // h3Types.innerText = obj.types
    // pokemonDiv.appendChild(h3Types)
    // let imgPkemon = document.createElement('img')
    // imgPkemon.src = obj.img
    // pokemonDiv.appendChild(imgPkemon)
    // divContainer.appendChild(pokemonDiv)

  }
let getPokemons = () => {
  let arrayPromesas = []
  for(let i = 1; i < 151; i++) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${i}`
    arrayPromesas.push(fetch(URL).then(res => res.json()))
  }
  Promise.all(arrayPromesas).then((datos) => {
    console.log(datos)
    for(let pkm of datos) {
      printData(pkm)
    }
  }).catch((error) => {
    console.log('ALgo ha salido mal!', error)
  })
}
getPokemons()

}
