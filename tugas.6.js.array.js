let listReg = []

function registered() {
    let user = document.getElementById("username").value
    let pass = document.getElementById("password").value
    let hidden = pass.replace(/./g,"*")

    if(user == "" && hidden == "") {
        alert("please insert username & password")
    } else if(user.length < 6 ) {
        alert("username must be at least 6 characters long!")
    } else if (hidden.length < 8) {
        alert("password must be at least 8 characters long!")
    } else {
        listReg.push(user, hidden)
    }

    let newData = ""

    for(i=0; i < listReg.length; i++) {
        newData = newData + "<li>" + listReg[i] + "</li>"
    }
    document.getElementById('listReg').innerHTML = newData
    document.getElementById('username').value = ""
    document.getElementById('password').value = ""
}
