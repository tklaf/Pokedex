const POKE_URL = `https://pokeapi.co/api/v2/pokemon/?limit=893`
let singlePokeURL =  `https://pokeapi.co/api/v2/pokemon/`
// console.log(singlePokeURL)
pokeAmount = 893
let allPokeDiv = document.querySelector('.poke_div')

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
            let pokeName = document.createElement('h2')
            let sprite = document.createElement('img')
            pokeName.innerText = pokeArray[i].name
            sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
            link.appendChild(pokeName)
            pokeDiv.appendChild(link)
            pokeDiv.appendChild(sprite)
            allPokeDiv.appendChild(pokeDiv)
            link.addEventListener('click', () => onePokeJson(singlePokeURL + `${pokeArray[i].name}`))

           
            
        }
    })
    .catch(error => console.log("ERROR: ", error))
}



//========================================================================================================================================



//BELOW IS FOR A SINGLE POKEMON SEARCH, WHICH GIVES ME TONS OF INFO FROM THAT ONE POKEMON

const onePokeJson = (url) => {
    axios.get(url)
    .then(response => {
        console.log(response.data)
    })
   .catch(error => console.log("ERROR: ", error))
}



 //========================================================================================================================================   



// THIS IS A FOR LOOP THAT CREATES THE 893 DIVS FOR EACH OF THE POKEMON

// for (let i = 0; i <= pokeAmount; i++) {
//     let pokeDiv = document.createElement('div')
//     pokeDiv.classList.add('.poke_div')
//     })
//     document.body.appendChild(pokeDiv)
// }


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