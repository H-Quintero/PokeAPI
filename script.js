
 
window.onload = () => {

  const URL = 'https://pokeapi.co/api/v2/pokemon/1/'
  let divContainer = document.querySelector('#container')
    let printData = (data) => {
    let obj = {}
    let objTypes = {}
    objTypes.name = data.name
    objTypes.types = data.types.map(item => item.type.name).join('')
    obj.id = data.id
    obj.name = data.name.toUpperCase()
    obj.types = data.types.map(item => item.type.name).join('<br>')
    obj.ability = data.abilities.map(item => item.ability.name).join('<br>')
    obj.img = data.sprites.front_default
    let pokemonDiv = document.createElement('div')
    let innerTags = `<h2 class="nameContainer">${obj.id} ${obj.name}</h2>
                     <img src='${obj.img}' class="imgContainer">
                     <div class="text">
                      <div>
                        <h3 >Tipos:</h3>
                        <p class = "imgBack">${obj.types}</p>
                      </div>
                      <div>
                        <h3>Hablidades:</h3>
                        <p>${obj.ability}</p>
                      </div>
                      </div>`
    pokemonDiv.innerHTML = innerTags 
    pokemonDiv.classList.add('cards')
    divContainer.appendChild(pokemonDiv)
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

    // let fondosPokemon = () => {
    //   let arrayTipos = []
    //   for(let i = 1; i < 19; i++) {
    //     const URLTypes = `https://pokeapi.co/api/v2/type/${i}`
    //     arrayTipos.push(fetch(URLTypes).then(res => res.json()))
    // }
    //   Promise.all(arrayTipos).then((datos) => {
    //     let tipos = []
    //     for(let types of datos) {
    //       tipos.push(types.name)
    //     }
    //     console.log(tipos)
    //   })
    // }
    // fondosPokemon()
    let fondosImg = (data) => {
      let arrayTipos = []
      for(i = 0; i < data.length; i++) {
        
      }
    }
  }
  