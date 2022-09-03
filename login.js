document.getElementById('submit').addEventListener('click', ()=>{
    let email = document.getElementById('email')
    let passowrd = document.getElementById('password')
    let username = localStorage.getItem('username')
    console.log(email.value)
    console.log(passowrd.value)
    let pass = localStorage.getItem('password')
    console.log(username)
    console.log(pass)
    if(email.value == username){
        if(pass == passowrd.value){
            window.location.replace('main.html')
            windows.alert("Successfully logged in")
        }
        else{
            windows.alert("Password entered is incorrect")
            window.location.reload()
            
        }
    }
    else{
        windows.alert("Login Credentials were Incorrect")
        window.location.reload()
    }

})