function $(elem) {
    return document.querySelector(elem)
}

const $name = $('#name')
const $status = $('#status')
const $species = $('#species')
const $gender = $('#gender')
const $urlImage = $('#urlImage')
const $form = $('#form')

window.addEventListener('load', function () {


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
            await fetch('http://localhost:3000/characters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            console.log(data)
            window.location.href = 'index.html'
        } catch (error) {
            console.log(error)
        }
    })

})
