console.log('Client side javascript file is loaded!')

const weather = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')
//message1.textContent = 'javascript'
weather.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location =search.value
    message1.textContent = 'loading'
    message2.textContent = ''
    //console.log(location)
    const url = '/weather?address=' +location
    fetch(url).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            message1.textContent = 'unable to find location'
        } else {
            message1.textContent = ''
            message2.textContent = data.location + '  ' + data.temperature
        }
    })
})
})