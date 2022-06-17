const firstName = document.getElementById("Firstname")
const lastName = document.getElementById("Lastname")
const password = document.getElementById("Password")
const email = document.getElementById("Email")
const form = document.getElementById("form")

function error(input, message){
    const formField = input.parentElement
    formField.classList.remove("success")
    formField.classList.add("error")

    error_message = formField.querySelector("small")
    error_message.innerHTML = `<em>${message}</em>`
     email.placeholder = `email@example/com`
    email.classList.add("error_color")
}

function success(input){
    const formField = input.parentElement
    formField.classList.remove("error")
    formField.classList.add("success")

    error_message = formField.querySelector("small")
    error_message.textContent = " "
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        success(input);
    } else {
        error(input, 'looks like this is not an email');
    }
}

function checkRequired(inputArr){
    let isRequired = false
    inputArr.forEach((input)=>{
        if(input.value.trim() === ""){
            error(input, `${input.id} cannot be empty`)
            isRequired = true
        }else{
            success(input)
        }
    })
    return isRequired;
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let is_email_valid = checkEmail(email)
    let is_valid = checkRequired([firstName, lastName, password])
    if(is_valid && is_email_valid){

    }
})