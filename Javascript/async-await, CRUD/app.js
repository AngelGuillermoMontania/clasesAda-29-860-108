async function hacerAlgo () {

    //Forma nueva: Async, await. Siempre try catch en async/await
    try {
        let result = await fetch('https://rickandmortyapi.com/api/character')
        let data = await result.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }


    //Forma anterior:  .then() y .catch()
    fetch('https://rickandmortyapi.com/api/character')
        .then(result => result.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))
}