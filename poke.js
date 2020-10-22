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
            // console.log(pokeID)
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
        // let singlePokeData = response.data
        // console.log(singlePokeData)   
        let pokeName = document.createElement('h3')
        pokeName.innerText = response.data.name.toUpperCase()
        // console.log(pokeName)
        
        selectSingleDiv.appendChild(singlePokemonDiv)
        let backButton = document.createElement('button1')
        backButton.setAttribute('id', 'button')
        let buttonText = document.createTextNode('BACK')
        let pokeID = document.createElement('h5')
        let weight = document.createElement('h4')
        let height = document.createElement('h4')
        let sprite = document.createElement('img')
        let shiny = document.createElement('img')
        pokeID.innerText="#" + response.data.id
        sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`
        shiny.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${response.data.id}.png`
        // backPic.src = 
        weight.innerText = 'Weight: ' + Math.round(response.data.weight /  4.5359237) + " lbs"
        height.innerText = 'Height: ' + Math.round(response.data.height / 0.254) + ' inches'
        singlePokemonDiv.appendChild(backButton)
        singlePokemonDiv.appendChild(pokeName)
        singlePokemonDiv.appendChild(sprite)
        singlePokemonDiv.appendChild(shiny)
        singlePokemonDiv.appendChild(pokeID)
        singlePokemonDiv.appendChild(weight)
        singlePokemonDiv.appendChild(height)
        backButton.appendChild(buttonText)

         backButton.addEventListener('click', () => {
            window.location.reload()
            })

     
        
    })

   .catch(error => console.log("ERROR: ", error))
}

//========================================================================================================================================

//make a search feature
//put more info in the singlePokeDiv
//learn how to pull from arrays
//clean up code
//style, style, style
document.addEventListener('DOMContentLoaded', allPokeJson)
