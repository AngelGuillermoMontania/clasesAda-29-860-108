/* function $(elem) {
    return document.querySelector(elem)
}
   
const $characters = $('[data-characters]')
let allCharacter

const response = fetch('https://rickandmortyapi.com/api/character')
    .then(data => data.json())
    .then(data => {
        allCharacter = data.results
        allCharacter.forEach(character => {
            $characters.innerHTML += `<div class='box'>
                <img src=${character.image} alt=${character.name} />
                <div class='character'>
                    <h3 class="name">${character.name}</h3>
                    <p class="specie">${character.species}</p>
                    <p class="status">${character.status}</p>
                    <p class='gender'>${character.gender}</p>
                    
                </div>
            </div>`
        });
    })
    .catch(error => console.log(error))

    //const Delete = (id) => {
    //fetch(`http://localhost:3000/characters/${id}`, {
    //        method: 'DELETE'
    //    })
    //    .then(data => window.location.href = 'index.html')
    //}

    //<button onclick="Delete(${character.id})" class="buttonDelete" >Delete</button>
    
 */








function $(elem) {
    return document.querySelector(elem)
}

window.addEventListener('load', async () => {
    
    const $characters = $('.characters')
    let allCharacter

    try {
        let response = await fetch('http://localhost:3000/characters')
        allCharacter = await response.json()
    } catch (error) {
        console.log(error)
    }

    console.log(allCharacter)
    allCharacter.forEach(character => {
        $characters.innerHTML += `<div class='box'>
            <img src=${character.image} alt=${character.name} />
            <div class='character'>
                <h3 class="name">${character.name}</h3>
                <p class="specie">${character.species}</p>
                <p class="status">${character.status}</p>
                <p class='gender'>${character.gender}</p>
                <div class="contain-buttons">
                    <button onclick="EditCharacter(${character.id})" class="buttonEdit" >Edit</button>
                    <button onclick="DeleteCharacter(${character.id})" class="buttonDelete" >Delete</button>
                </div>
            </div>
        </div>`
    });
            
})
        
const EditCharacter = (id) => {
    window.location.href = `edit.html?id=${id}`
}

const DeleteCharacter = async (id) => {
    try {
        await fetch(`http://localhost:3000/characters/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}