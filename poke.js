const POKE_URL = `https://pokeapi.co/api/v2/pokemon/?limit=893`
let singlePokeURL =  `https://pokeapi.co/api/v2/pokemon/${1}`
// console.log(singlePokeURL)
pokeAmount = 893
let pokeDiv = document.querySelector('#poke_div')

//========================================================================================================================================



//BELOW IS FOR ALL POKEMON SEARCH, BUT IT ONLY GIVES ME THE NAMES, AND NOT EACH INDIVIDUAL CHARACTERISTICS

const allPokeJson = () => {
fetch(POKE_URL)
.then(response => {
    return response.json()
})
.then(data => {

    console.log(data)    
})
}
allPokeJson()


//========================================================================================================================================



//BELOW IS FOR A SINGLE POKEMON SEARCH, WHICH GIVES ME TONS OF INFO FROM THAT ONE POKEMON

const onePokeJson = () => {
    fetch(singlePokeURL)
    .then(response => {
        return response.json()
    })
    .then(data => {
    
        console.log(data) 
        const pokemon = {}
        pokemon.name = data.name
        console.log(pokemon) 
    })
    }
    onePokeJson()



 //========================================================================================================================================   



// THIS IS A FOR LOOP THAT CREATES THE 893 DIVS FOR EACH OF THE POKEMON

for (let i = 0; i <= pokeAmount; i++) {
    let pokeDiv = document.createElement('div')
    pokeDiv.classList.add('.poke_div')
    pokeDiv.addEventListener('click', function(event){
        pokeDiv.style.backgroundColor= green
    })
    document.body.appendChild(pokeDiv)
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
