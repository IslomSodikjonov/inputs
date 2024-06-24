let inputs = document.querySelectorAll('input')

inputs.forEach(inp => {

    inp.onchange = () => {
        let id = inp.getAttribute('id')

        if (id == 'name') {
            if (inp.value[0] === inp.value[0].toUpperCase() && inp.value.length >= 4) {
                inp.style.border = "1px solid green"
            } else {
                inp.style.border = "1px solid red"
            }
        } else if (id == 'email') {
            if (inp.value.endsWith('@gmail.com')) {
                inp.style.border = "1px solid green"
            } else {
                inp.style.border = "1px solid red"
            }
        } else if (id == 'password') {
            if (inp.value.length >= 8) {
                inp.style.border = "1px solid green"
            } else {
                inp.style.border = "1px solid red"
            }
        } else if (id == 'number') {
            if (inp.value.startsWith('998')  && inp.value.length >= 9) {
                inp.style.border = "1px solid green"
            } else {
                inp.style.border = "1px solid red"
            }
        }    
    }
})