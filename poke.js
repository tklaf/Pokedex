let id = 0
const POKE_URL = `https://pokeapi.co/api/v2/pokemon/?limit=893`
let singlePokeURL =  `https://pokeapi.co/api/v2/pokemon/`
let allPokeDiv = document.getElementById('pokeDiv')
let firstPage = document.querySelector('.index')
let selectSingleDiv = document.querySelector('#singlePokeDiv')
//========================================================================================================================================



//BELOW IS FOR ALL POKEMON SEARCH, BUT IT ONLY GIVES ME THE NAMES, AND NOT EACH INDIVIDUAL CHARACTERISTICS

const allPokeJson = () => {
    axios.get(POKE_URL)
    .then(response => {
        console.log(response.data.results)
        //result is going to be 1 big array with length 893
        let pokeArray = response.data.results
        for(let i=0; i < pokeArray.length; i++){
            let link = document.createElement('a')
            link.href = './pokemon.html'
            let pokeDiv= document.createElement("div")
            pokeDiv.setAttribute('id', 'div1')
            let pokeName = document.createElement('h2')
            let sprite = document.createElement('img')
            let pokeID = i+1
            console.log(pokeID)
            pokeName.innerText ="#" + pokeID + "\xa0\xa0\xa0\xa0" + pokeArray[i].name.toUpperCase()
            sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
            link.appendChild(pokeName)
            pokeDiv.appendChild(link)
            pokeDiv.appendChild(sprite)
            allPokeDiv.appendChild(pokeDiv)
            pokeDiv.addEventListener('click', (e) => {
                e.preventDefault()
                console.log(id)
                id = i+1
                
                //we need to remove the pokediv above so that we can display new data
                this.pokeDiv.remove()
                onePokeJson(id)
                //now that the data is removed on a div click, we need to display the pokemon that we clicked's info
                selectSingleDiv.appendChild(onePokeJson())
                })
            }
        })
        .catch(error => console.log("ERROR: ", error))
    }




//========================================================================================================================================



//BELOW IS FOR A SINGLE POKEMON SEARCH, WHICH GIVES ME TONS OF INFO FROM THAT ONE POKEMON

const onePokeJson = (id) => {
    console.log(id)
    axios.get(singlePokeURL + id)
    .then(response => {
        // console.log(response)
        let singlePokemonDiv= document.createElement("div")
        let singlePokeData = response.data
        console.log(singlePokeData)   
        let pokeName = document.createElement('h3')
        pokeName.innerText = response.data.name.toUpperCase()
        // console.log(pokeName)
        
        selectSingleDiv.appendChild(singlePokemonDiv)
        let pokeID = document.createElement('h5')
        let weight = document.createElement('h4')
        let height = document.createElement('h4')
        let sprite = document.createElement('img')
        let shiny = document.createElement('img')
        pokeID.innerText="#" + response.data.id
        sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`
        shiny.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${response.data.id}.png`
        weight.innerText = 'Weight: ' + Math.round(response.data.weight /  4.5359237) + " lbs"
        height.innerText = 'Height: ' + Math.round(response.data.height / 0.254) + ' inches'
        singlePokemonDiv.appendChild(pokeName)
        singlePokemonDiv.appendChild(sprite)
        singlePokemonDiv.appendChild(shiny)
        singlePokemonDiv.appendChild(pokeID)
        singlePokemonDiv.appendChild(weight)
        singlePokemonDiv.appendChild(height)
        
    })

   .catch(error => console.log("ERROR: ", error))
}

//========================================================================================================================================

//I NEED TO FIGURE OUT HOW TO UNSTACK THE DIVS IN CSS
//I NEED TO FIGURE OUT HOW TO PULL THE NAME AND OTHER INFO OUT OF THE API




//pull all of their IDs from the same api
//take their names and id numbers and push them all to a list of divs through looping
//pull their sprites from the API as well and put their sprites in the div. 
//organize the divs through flexbox. (wrapping?)
//add an event listener to each div, to where when I click on a div, the background will disappear.
//
document.addEventListener('DOMContentLoaded', allPokeJson)
