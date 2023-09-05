const inputPass = document.getElementById("inputPass")
const inputPassConfirm = document.getElementById("inputPassConfirm")
const form = document.getElementById("form")
const contentTable = document.getElementById("contentTable")
let inputName = document.getElementById("name")
let inputNickname = document.getElementById("nickname")
let inputAge = document.getElementById("age")

let usersList = getUsers()
let countId = usersList[usersList.length - 1].id

createComponent(usersList)

function saveUser() {

    if (!verify()){
        return
    }

    if (!verifyPass()){
        return
    }

    let name = document.getElementById("name").value
    let nickname = document.getElementById("nickname").value
    let age = document.getElementById("age").value
    let role = document.getElementById("role").value
    let status = document.getElementById("status").value

    countId = (countId + 1)

    let newUsers = {
        id: countId,
        name: name,
        nickname: nickname,
        age: age,
        role: role,
        status: status
    }

    usersList.unshift(newUsers)

    createComponent(usersList)

    reset()

}

function createComponent(users){
    let list = ''

    users.map(user => {
        list += `<tr class="lines">
        <td>${user.name}</td>
        <td>${user.nickname}</td>
        <td>${user.age}</td>
        <td>${user.role}</td>
        <td><div class="switch"><input class="checkbox" type="checkbox" ${user.status === 'Ativo' ? 'checked' : ''}></input><span class="background"</span></div></td>
        </tr>`
    })

    contentTable.innerHTML = list
}

function verifyPass() {
    let pass = document.getElementById("pass").value
    let passConfirm = document.getElementById("passConfirm").value

    const error = document.getElementById("errorPass")

    if (pass != passConfirm) {
        error.style.visibility = 'visible'
        return false;
    } else {
        error.style.visibility = 'hidden'
        return true;
    }
}

function verify() {
    let name = document.getElementById("name").value
    let nickname = document.getElementById("nickname").value
    let age = document.getElementById("age").value

    switch (name) {
        case "":
            inputName.style.borderColor = 'red';
            return false
    }
    switch (nickname) {
        case "":
            inputNickname.style.borderColor = 'red';
            return false
    }
    switch (age) {
        case "":
            inputAge.style.borderColor = 'red';
            return false
    }

    return true
}

function reset(){
    inputName.value = ""
    inputNickname.value = ""
    inputAge.value = ""
}



function verifyRole() {
    let role = document.getElementById("role")
    let roleValue = role.value
    let pass = document.getElementById("pass")
    let passConfirm = document.getElementById("passConfirm")


    if (roleValue == "Admin") {
        // form.style.height = "430px"
        inputPass.style.visibility = 'visible'
        inputPassConfirm.style.visibility = 'visible'
        pass.setAttribute('required', 'true')
        passConfirm.setAttribute('required', 'true')
    } else {
        // form.style.height = "400px"
        inputPass.style.visibility = 'hidden'
        inputPassConfirm.style.visibility = 'hidden'
        pass.removeAttribute('required')
        passConfirm.removeAttribute('required')
    }


}


function filter() {
    let filter = document.getElementById("filter").value

    if (filter == "Ativo") {

        console.log(filter)

        let usersActive = usersList.filter(status => status.status == "Ativo")

        contentTable.innerHTML = ""
        list = ""

        usersActive.forEach(user => {
            list += `<tr class="lines">
         <td>${user.name}</td>
         <td>${user.nickname}</td>
         <td>${user.age}</td>
         <td>${user.role}</td>
         <td><div class="switch"><input class="checkbox" type="checkbox" ${user.status === 'Ativo' ? 'checked' : ''}></input><span class="background"</span></div></td>
         </tr>`
        })

        contentTable.innerHTML = list

    } else if (filter == "Inativo") {

        console.log(filter)

        let usersInactive = usersList.filter(status => status.status == "Inativo")

        contentTable.innerHTML = ""
        list = ""

        usersInactive.forEach(user => {
            list += `<tr class="lines">
            <td>${user.name}</td>
            <td>${user.nickname}</td>
            <td>${user.age}</td>
            <td>${user.role}</td>
            <td><div class="switch"><input class="checkbox" type="checkbox" ${user.status === 'Ativo' ? 'checked' : ''}></input><span class="background"</span></div></td>
            </tr>`
        })

        contentTable.innerHTML = list

    } else if (filter == "Todos") {

        console.log(filter)

        contentTable.innerHTML = ""
        list = ""

        usersList.forEach(user => {
            list += `<tr class="lines">
            <td>${user.name}</td>
            <td>${user.nickname}</td>
            <td>${user.age}</td>
            <td>${user.role}</td>
            <td><div class="switch"><input class="checkbox" type="checkbox" ${user.status === 'Ativo' ? 'checked' : ''}></input><span class="background"</span></div></td>
            </tr>`
        })

        contentTable.innerHTML = list

    }

}

function getUsers() {
    let users = [
        {
            id: 1,
            name: "Alisson",
            nickname: "Alishow",
            age: 21,
            role: "Estagiario",
            status: "Inativo"
        },
        {
            id: 2,
            name: "Alexandre",
            nickname: "Xandeco",
            age: 22,
            role: "Suporte",
            status: "Ativo"
        },
        {
            id: 3,
            name: "Marlon",
            nickname: "Marlene",
            age: 20,
            role: "Suporte",
            status: "Ativo"
        },
        {
            id: 4,
            name: "Gisele",
            nickname: "Gica",
            age: 25,
            role: "Suporte",
            status: "Inativo"
        },
        {
            id: 5,
            name: "Carla",
            nickname: "Gerentona",
            age: 30,
            role: "Admin",
            status: "Ativo"
        },
        {
            id: 6,
            name: "Debora",
            nickname: "Deboreca",
            age: 25,
            role: "Suporte",
            status: "Ativo"
        },
        {
            id: 7,
            name: "Henrique",
            nickname: "Henrique",
            age: 25,
            role: "Suporte",
            status: "Ativo"
        },
        {
            id: 8,
            name: "Larissa",
            nickname: "Larissa",
            age: 25,
            role: "Suporte",
            status: "Inativo"
        },
        {
            id: 9,
            name: "Nicolas",
            nickname: "Nic",
            age: 25,
            role: "Admin",
            status: "Ativo"
        },
        {
            id: 10,
            name: "William",
            nickname: "William",
            age: 30,
            role: "Admin",
            status: "Ativo"
        }
    ]
    return users
}

function getRoles() {
    let roles = [
        {
            id: 1,
            description: "Admin",
            status: "Ativo"
        },
        {
            id: 2,
            description: "Suporte",
            status: "Ativo"
        },
        {
            id: 3,
            description: "Estagiário",
            status: "Ativo"
        }
    ]
    return roles
}
