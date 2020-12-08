

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xmlhttp.responseText);
        var data = JSON.parse(this.response);

        let loginBtn = document.querySelector("#login-btn");
        loginBtn.addEventListener("click", myFunction);

        function myFunction() {
            document.querySelector(".error-login").innerHTML = "";
            document.querySelector(".error-password").innerHTML = "";
            document.querySelector(".error-username").innerHTML = "";
            document.querySelector(".error-empty").innerHTML = "";
            for (i = 0; i < data.length; i++) {

                if(username.value === data[i].username && password.value === data[i].password){
                    return document.querySelector(".error-login").innerHTML = "Login Succesfull";
                } else if (username.value === "" && password.value === "") {
                    return document.querySelector(".error-empty").innerHTML = "Please Fill The Below Field"; 
                } else if(username.value === "") {
                    return document.querySelector(".error-username").innerHTML = "Please Fill USERNAME";
                } else if (password.value === "") {
                    return document.querySelector(".error-password").innerHTML = "Please Fill PASSWORD";
                }  else if(username.value === data[i].username && password.value !== data[i].password) {
                    return document.querySelector(".error-password").innerHTML = "Wrong Password";
                } 
            }
            password.value = '';
        }

    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
