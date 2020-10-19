# Pokedex

## Tyler Klafke
<br>
<br>

## Description

### My project would be a Pokedex, where when you open a the page, there would be a picture of a pokedex, a search bar, and a dropdown window with all of the pokemon there. I am even thinking that when you open the page, there will be a grid of all of the pokemon's sprites, and when you click on your desired Pokemon, it will tell you all of the moves, what level they learn the moves, abilites, what game they're in, etc. 

<br>

### How I would get started is by first making sure that I can access the database correctly. I would link up my HTML, CSS, and Javascript and start writing functions to see what information I can pull from the API. Then I would start making a grid to get all of the Pokemon in order of their numbers. Once that was all functional, I'd set up an event listener and when I click the divs, it will open up specific information per Pokemon. 

<br>
<br>

## User Story

- As a user, I want to see all of the pokemon so I can choose which one I want to select.
- as a user, I want to search for a specific Pokemon name or number and find my desired Pokemon. 
- As a user, when I click on the desired pokemon, I want to be able to see all of the information listed in a window.

<br>
<br>

## Credits
- https://www.pokemon.com/us/pokedex/
- DATADEX APP
- https://pokedex.org/


<br>
<br>

## Trello Link
- https://trello.com/b/YxCoXgz5/pokedex

<br>
<br>

## API Link and Example
https://pokeapi.co/

```
{
abilities: [
{
ability: {
name: "limber",
url: "https://pokeapi.co/api/v2/ability/7/"
},
is_hidden: false,
slot: 1
},
{
ability: {
name: "imposter",
url: "https://pokeapi.co/api/v2/ability/150/"
},
is_hidden: true,
slot: 3
}
],
base_experience: 101,
forms: [
{
name: "ditto",
url: "https://pokeapi.co/api/v2/pokemon-form/132/"
}
],
game_indices: [
{
game_index: 76,
version: {
name: "red",
url: "https://pokeapi.co/api/v2/version/1/"
}
},
{
game_index: 76,
version: {
name: "blue",
url: "https://pokeapi.co/api/v2/version/2/"
}
},
{
game_index: 76,
version: {
name: "yellow",
url: "https://pokeapi.co/api/v2/version/3/"
}
},
{
game_index: 132,
version: {
name: "gold",
url: "https://pokeapi.co/api/v2/version/4/"
}
},
{
game_index: 132,
version: {
name: "silver",
url: "https://pokeapi.co/api/v2/version/5/"
}
},
{
game_index: 132,
version: {
name: "crystal",
url: "https://pokeapi.co/api/v2/version/6/"
}
},
{
game_index: 132,
version: {
name: "ruby",
url: "https://pokeapi.co/api/v2/version/7/"
}
},
{
game_index: 132,
version: {
name: "sapphire",
url: "https://pokeapi.co/api/v2/version/8/"
}
},
{
game_index: 132,
version: {
name: "emerald",
url: "https://pokeapi.co/api/v2/version/9/"
}
},
{
game_index: 132,
version: {
name: "firered",
url: "https://pokeapi.co/api/v2/version/10/"
}
},
{
game_index: 132,
version: {
name: "leafgreen",
url: "https://pokeapi.co/api/v2/version/11/"
}
```