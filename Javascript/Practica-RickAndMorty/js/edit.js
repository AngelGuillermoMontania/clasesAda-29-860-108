function $(elem) {
    return document.querySelector(elem)
}

window.addEventListener('load', async function () {

    const urlParams = new URLSearchParams(window.location.search);
    const myParamId = urlParams.get('id');

    const $name = $('#name')
    const $status = $('#status')
    const $species = $('#species')
    const $gender = $('#gender')
    const $urlImage = $('#urlImage')
    const $form = $('#form')
    const $btnCreate = $('#btn-create')

    try {
        let result = await fetch(`http://localhost:3000/characters/${myParamId}`)
        let data = await result.json()
        $name.value = data.name
        $status.value = data.status
        $gender.value = data.gender
        $urlImage.value = data.image
        $species.value = data.species
    } catch (error) {
        console.log(error)
    }
    
    

    $form.addEventListener('submit', async function (event) {

        event.preventDefault();

        const data = {
            name: $name.value,
            status: $status.value,
            species: $species.value,
            gender: $gender.value,
            image: $urlImage.value
        }

        try {
            await fetch(`http://localhost:3000/characters/${myParamId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            window.location.href = 'index.html'
        } catch (error) {
            console.log(error)
        }


    })

})
