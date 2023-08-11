const inputPass = document.getElementById("inputPass")
const inputPassConfirm = document.getElementById("inputPassConfirm")
const form = document.getElementById("form")
const contentTable = document.getElementById("contentTable")
let usersList = getUsers()
let countId = usersList[usersList.length - 1].id
let list = ''

usersList.map(user => {
    list += `<tr>
     <td>${user.name}</td>
     <td>${user.nickname}</td>
     <td>${user.age}</td>
     <td>${user.role}</td>
     <td><input class="checkbox" type="checkbox" ${user.status === 'Ativo' ? 'checked' : ''} disabled></input></td>
     </tr>`
})

contentTable.innerHTML = list

function saveUser() {
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

    let list = ''

    usersList.map(user => {
        list += `<tr>
     <td>${user.name}</td>
     <td>${user.nickname}</td>
     <td>${user.age}</td>
     <td>${user.role}</td>
     <td><input class="checkbox" type="checkbox" ${user.status === 'Ativo' ? 'checked' : ''} disabled></input></td>
     </tr>`
    })

    contentTable.innerHTML = list

    event.preventDefault()


}

function verifyRole() {
    let role = document.getElementById("role")
    let roleValue = role.value
    let pass = document.getElementById("pass").value
    let passConfirm = document.getElementById("passConfirm").value


    if (roleValue == "Admin") {
        form.style.height = "430px"
        inputPass.style.visibility = 'visible'
        inputPassConfirm.style.visibility = 'visible'
    } else {
        form.style.height = "400px"
        inputPass.style.visibility = 'hidden'
        inputPassConfirm.style.visibility = 'hidden'
    }

    pass.setAttribute('required')
    passConfirm.setAttribute('required')
}

function verifyPass() {

    let pass = document.getElementById("pass").value
    let passConfirm = document.getElementById("passConfirm").value
    const error = document.getElementById("errorPass")

    if (pass != passConfirm) {
        error.style.visibility = 'visible'
        return false;
    }
    error.style.visibility = 'hidden'
    return true;

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
            status: "Ativo"
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
            status: "Ativo"
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

function validate(){
    let name = document.getElementById("name")
    let age = document.getElementById("age")

    if (name.value === ""){
        name.style.borderColor= "red"
    }
    if (age.value === ""){
        age.style.borderColor= "red"
        return false
    }

    return true

}