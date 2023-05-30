function Login(event) {
    alert("working")
    event.preventDefault();

    var userEmail = document.getElementById("Instauseremail").value;
    var userPassword = document.getElementById("Instauserpassword").value;

    var Ls = JSON.parse(localStorage.getItem("InstaUsers"));

    var InstacurrentUser;
    var flag = false;
    for(var i=0; i< Ls.length; i++){
        if(Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword ){
            flag = true;
            InstacurrentUser = Ls[i]
        }
    }
    if(flag == true) {
        localStorage.setItem("InstacurrentUser",JSON.stringify(InstacurrentUser))
        window.location.href = './InstaHome.html'
        alert("Login Successful")
    }else{
        alert("Credentials not matched")
    }
}