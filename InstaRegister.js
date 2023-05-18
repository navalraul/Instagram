function Register(event) {
    alert("working")
    event.preventDefault();

    var Name = document.getElementById("Instausername").value;
    // console.log(Name);
    var Email = document.getElementById("Instauseremail").value;
    // console.log(Email);
    var Password = document.getElementById("Instauserpassword").value;
    // console.log(Password);
    var Confirmpassword = document.getElementById("Instauserconfirmpassword").value;
    // console.log(Confirmpassword);


    if(Name && Email && Password && Confirmpassword) {
        if(Password.length >=8 && Confirmpassword.length >=8){
            if(Password == Confirmpassword){

                var Ls = JSON.parse(localStorage.getItem("InstaUsers")) || []
                var flag = false;
                for (var i=0; i< Ls.length; i++){
                    if(Ls[i].userEmail == Email){
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {userName: Name,userEmail:Email, userPassword: Password, userConfirmpassword: Confirmpassword}
                    Ls.push(userdata)
                    localStorage.setItem("InstaUsers",JSON.stringify(Ls))
                    alert("Registration Successful");
                    window.location.href = `./InstaLogin.html`;
                    document.getElementById("Instausername").value =""
                    document.getElementById("Instauseremail").value =""
                    document.getElementById("Instauserpassword").value =""
                    document.getElementById("Instauserconfirmpassword").value =""
                }
            }else{
                ("Password not matched")
                alert("Password not matched");
            }
        }else{
            ("Password should alteast 8 character")
            alert("Password should alteast 8 character");
        }
    }else{
        ("All fields are mandatory")
        alert("All fields are mandatory")
    }
}