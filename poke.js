let id = 0
const POKE_URL = `https://pokeapi.co/api/v2/pokemon/?limit=893`
let SINGLE_POKE_URL =  `https://pokeapi.co/api/v2/pokemon/`
let allPokeDiv =  document.getElementById('pokeDiv')
let firstPage = document.querySelector('.index')
let selectSingleDiv = document.querySelector('#singlePokeDiv')
//========================================================================================================================================



//BELOW IS FOR ALL POKEMON SEARCH, BUT IT ONLY GIVES ME THE NAMES, AND NOT EACH INDIVIDUAL CHARACTERISTICS

const allPokeJson = (pokeUrl) => {
    console.log(pokeUrl)
    axios.get(pokeUrl)
    .then(response => {
        console.log(response.data.results)

        //result is going to be 1 big array with length 893
       
        let pokeArray = response.data.results
        console.log(response.data)
        let searchButton = document.getElementById('submitButton')
        const search = document.getElementById('search')
        let searchName = ""
        // let id=pokeArray[i]+1
        search.addEventListener('keyup', (e)=> {
            searchName = e.target.value
        })
        searchButton.addEventListener('click', (e) => {
            e.preventDefault()
            // console.log(searchWord)
            // let pokeCharacters = []
            allPokeDiv.style.display="none"
            search.style.display="none"
            searchButton.style.display="none"
            onePokeJson(SINGLE_POKE_URL + searchName)

        })
        
        for(let i=0; i < pokeArray.length; i++){
            // let test = response.data.results[i]
            // console.log(test)
            // let justName = pokeArray[i].name
            // console.log(justName)
            let aboutLink = document.getElementById('link')
            let link = document.createElement('a')
            link.href = './pokemon.html'
            let pokeDiv= document.createElement("div")
            pokeDiv.setAttribute('id', 'div1')
            let pokeName = document.createElement('h2')
            pokeName.setAttribute('id', 'pokeName')
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
                this.search.remove()
                this.link.remove()
                this.submitButton.remove()
                
                onePokeJson(SINGLE_POKE_URL+id)
                //now that the data is removed on a div click, we need to display the pokemon that we clicked's info
                // selectSingleDiv.appendChild(onePokeJson())
                })
            }
    })
        .catch(error => console.log("ERROR: ", error))
}





//========================================================================================================================================



//BELOW IS FOR A SINGLE POKEMON SEARCH, WHICH GIVES ME TONS OF INFO FROM THAT ONE POKEMON

const onePokeJson = (pokeUrl) => {
    axios.get(pokeUrl)
    .then(response => {
        // console.log(response)
        let singlePokemonDiv= document.createElement("div")
        let singlePokeData = response.data
        console.log(singlePokeData)   
        let pokeName = document.createElement('h3')
        pokeName.innerText = response.data.name.toUpperCase()
        // console.log(pokeName)
        
        selectSingleDiv.appendChild(singlePokemonDiv)
        let backButton = document.createElement('button1')
        backButton.setAttribute('id', 'button')
        let buttonText = document.createTextNode('BACK')
        let pokeID = document.createElement('p')
        pokeID.setAttribute('id', "pokeID")
        let weight = document.createElement('p')
        let height = document.createElement('p')
        weight.setAttribute('id', "weight")
        weight.setAttribute('class', "infoDiv")
        height.setAttribute('id', "height")
        height.setAttribute('class', "infoDiv")
        let sprite = document.createElement('img')
        let shiny = document.createElement('img')
        let ability = document.createElement('p')
        ability.setAttribute('id', "ability")
        ability.setAttribute('class', "infoDiv")
        pokeID.innerText="#" + response.data.id
        sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`
        shiny.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${response.data.id}.png`
        weight.innerText = 'Weight: ' + Math.round(response.data.weight /  4.5359237) + " lbs"
        height.innerText = 'Height: ' + Math.round(response.data.height / 0.254) + ' inches'
        
        let abilityDiv = document.createElement("div")

        let abilities = response.data.abilities
        let abilityTitle =document.createElement("p")
        abilityTitle.innerText="ABILITIES:"
        abilityTitle.setAttribute('id', "abilityTitle")
        abilityTitle.setAttribute('class', "abilityDiv")
        for (let i = 0; i < abilities.length; i++) {
            let ability = document.createElement('p')
            ability.setAttribute('id', "ability")
            ability.setAttribute('class', "abilityDiv")
            ability.innerText= abilities[i].ability.name
            abilityDiv.appendChild(ability)
            console.log(abilities[i])  
        }
        
        
        
        singlePokemonDiv.appendChild(backButton)
        singlePokemonDiv.appendChild(pokeName)
        singlePokemonDiv.appendChild(sprite)
        singlePokemonDiv.appendChild(shiny)
        singlePokemonDiv.appendChild(pokeID)
        singlePokemonDiv.appendChild(weight)
        singlePokemonDiv.appendChild(height)
        singlePokemonDiv.appendChild(abilityTitle)
        singlePokemonDiv.appendChild(abilityDiv)
        backButton.appendChild(buttonText)

         backButton.addEventListener('click', () => {
            window.location.reload()
            })

     
        
    })

   .catch(error => console.log("ERROR: ", error))
}

//========================================================================================================================================
document.addEventListener('DOMContentLoaded', () => {
    allPokeJson(POKE_URL)
})
