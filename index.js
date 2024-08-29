const fs = require('fs')
//EJERCICIO 1

const url = 'https://thronesapi.com/api/v2/Characters'

//PUNTO 1
const personajeNedStark = async () => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.log('Errooor')
        } else {
            const data = await response.json()
            const nedStark = data.find(element => element.id === 6);
            console.log('*******************************Ned Stark*******************************')
            console.log(nedStark)
        }
    } catch (error) {
        console.log(`El error es: ${error}`)
    }
}

personajeNedStark();

//PUNTO 2 Y 3

const obtenerPersonajes = async () => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            return console.log('Erroor')
        } else {
            const data = await response.json()
            
            fs.writeFileSync('personajes.json', JSON.stringify(data, null, 2));
   
            console.log('*******************************Family House Stark*******************************')
            familyHouseStark();
            console.log('*******************************Characters + Nuevo Personaje*******************************')
            nuevoPersonaje();
            console.log('*******************************Eliminar > 25*******************************')
            eliminarMayor();
        }

    } catch (error) {
        console.log(`El error es ${error}`)
    }   
}
obtenerPersonajes()

//PUNTO 4-A

function familyHouseStark() {
    const personajesJson = JSON.parse(fs.readFileSync('personajes.json', 'utf-8'))
    const HouseStark = personajesJson.filter(element => element.family === 'House Stark');
    console.log(HouseStark)
}

//PUNTO 4-B

const Astrid = {
    id: '',
    firstName: 'Astrid',
    lastName: 'Hofferson',
    fullName: 'Astrid Hofferson',
    title: 'Warrior',
    family: 'House Stark',
}


let persJson;

function agregarPersonaje(objeto) {
    persJson = JSON.parse(fs.readFileSync('personajes.json', 'utf-8'))
    for (personaje of persJson) {
        if (personaje.json === objeto.firstName) {
            return 
        }
    }
    objeto.id = persJson.length
    persJson.push(objeto)
}

function nuevoPersonaje() {
    agregarPersonaje(Astrid)

    fs.writeFileSync('personajes.json', JSON.stringify(persJson, null, 2))
    console.log(fs.readFileSync('personajes.json', 'utf-8'))
}

//PUNTO 4-C

function eliminarMayor() {
    const pers = JSON.parse(fs.readFileSync('personajes.json', 'utf-8'))
    const mayor25 = pers.filter(element => element.id < 26)
    fs.writeFileSync('personajes.json', JSON.stringify(mayor25, null, 2))
    console.log(fs.readFileSync('personajes.json', 'utf-8'))
}
