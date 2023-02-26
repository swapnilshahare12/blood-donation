let username = document.getElementById('username');
let email = document.getElementById('email')
let number = document.getElementById('number');
let btn = document.getElementById('submitBtn');
btn.addEventListener('click', () => {
    let userNamePattern =
      /^(?=[a-zA-Z]*[0-9])(?=[a-zA-Z0-9]*[a-z])(?=[a-zA-Z0-9]*[A-Z])[a-zA-Z][a-zA-Z0-9]*[0-9][a-zA-Z0-9]*$/;
    let userNameResult = username.value.match(userNamePattern);
    if (userNameResult) {
        console.log('correct');
    } else {
        alert('username should contain both lowercase letters and At least one number'); 
    }
    if (email.value !== '') {
        let emailPattern = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let emailResult = email.value.match(emailPattern);
        if (emailResult) {
          console.log('valid');
        } else {
          alert('enter valid email');
        }
    }
    if (number.value !== '') {
        let numberPattern = /^(?=.*(\d).*\1)\d{10}$/;
        let numberResult = number.value.match(numberPattern);
        if (numberResult) {
            console.log('valid');
        } else {
            alert('Enter valid mobile number')
        }

        if (number.value.length > 10) {
            alert("number can't be more than 10 digit")
        }
    }
})

    
