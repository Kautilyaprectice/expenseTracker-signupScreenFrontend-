const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function(event){
    event.preventDefault();

    const  name = document.getElementById('name').value;
    const  email = document.getElementById('email').value;
    const  password = document.getElementById('password').value;

    const registerUser = {
        name: name,
        email: email,
        password: password
    };

    if(name && email && password){
        axios.post("http://localhost:3000/user/signup", registerUser)
            .then((res) => {
                console.log(res);
                window.location.href = "../login/login.html";
            })
            .catch(err => console.log(err));
    }
    else{
        alert("Enter all details");
    }

});