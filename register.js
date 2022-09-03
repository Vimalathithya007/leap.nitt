document.getElementById('submit').addEventListener('click', ()=>{
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    localStorage.setItem('username', email.value)
    localStorage.setItem('password', password.value)
    localStorage.setItem('name',Name.value)
    localStorage.setItem('phno',phno.value)
    localStorage.setItem('rollno',rollno.value)
    console.log(password.value)
    console.log(email.value)
    
    window.location.replace('index.html')
})