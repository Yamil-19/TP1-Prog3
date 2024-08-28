//EJERCICIO 2


//PUNTO 1
const obtenerProductos = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
            console.log('Errooor')
        } else {
            const data = await response.json();
            console.log('*******************************Productos*******************************')
            console.log(data)
        }
    } catch (error) {
        console.log(`El error es: ${error}`)
    }
}
obtenerProductos()

//PUNTO 2
async function obtenerProductosLimitados() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5')
        if (!response.ok) {
            console.log('Errooor')
        } else {
            const data = await response.json();
            console.log('*******************************Mostrar Productos Limitados*******************************')
            console.log(data)
        }
    } catch (error) {
        console.log(`El error es: ${error}`)
    }
}

obtenerProductosLimitados()

//PUNTO 3
const agregarProducto = async (productoNuevo) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            body: JSON.stringify(productoNuevo)
        })
        if (!response.ok) {
            console.log('Errooor')
        } else {
            const data = await response.json()
            console.log('*******************************Agregar producto nuevo*******************************')
            console.log(data)
        }
    } catch (error) {
        console.log(`El error es: ${error}`)
    }
}

const productoNuevo = {
    titulo: 'celular',
    precio: 290000,
    descripcion: 'Xiami Redmi 10C',
    imagen: 'https://i.pravatar.cc',
    categoria: 'electronico'
}
agregarProducto(productoNuevo)

//PUNTO 4
const producto = async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!response.ok) {
            console.log('Errooor')
        } else {
            const data = await response.json()
            console.log('*******************************Mostrar producto*******************************')
            console.log(data)
        }
    } catch (error) {
        console.log(`El error es: ${error}`)
    }
}
producto(3)

//PUNTO 5
const eliminarProducto = async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            console.log('Erroor')
        } else {
            const data = await response.json()
            console.log('*******************************Eliminar Producto*******************************')
            console.log(data)
        }
    } catch (error) {
        console.log(`Error en: ${error}`)
    }
    
}
eliminarProducto(5)