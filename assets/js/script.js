class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this.tipo = tipo;
    }

    getTipo() {
        return `El tipo de animal es un: ${this.tipo}`;
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this.nombreMascota = nombreMascota;
        this.enfermedad = enfermedad;
    }

    getNombre() {
        return this.nombreMascota;
    }

    setNombre(nuevoNombre) {
        this.nombreMascota = nuevoNombre;
    }


    getEnfermedad() {
        return this.enfermedad;
    }

    setEnfermedad(nuevaEnfermedad) {
        this.enfermedad = nuevaEnfermedad;
    }
}

function capturarDatosFormulario() {
    const propietario = document.getElementById('propietario').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const tipo = document.getElementById('tipo').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const enfermedad = document.getElementById('enfermedad').value;

    if (tipo == 'Perro') {
        const Perro = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        mostrarDatos(Perro);
    } else if (tipo == 'Gato') {
        const Gato = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        console.log(Gato)
        mostrarDatos(Gato);
    } else {
        const Conejo = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        mostrarDatos(Conejo);
    }

    // la manera ideal seria pero el requerimiento lo solicita de acuerdo al tipo de seleecion que indica la linea 47
    // const mascota = new Mascota(propietario, direccion, telefono, tipo, nombreMascota);
    // mostrarDatos(mascota);

}

function mostrarDatos(mascota) {
    // Selecciona el contenedor de resultados
    const resultado = document.getElementById('resultado');

    // Obtiene la información usando los métodos de la instancia de Mascota 
    const datosPropietario = mascota.datosPropietario();
    const tipo = mascota.getTipo();
    const nombreMascota = `mientras que el nombre de la mascota es: ${mascota.getNombre()}`;
    const infoEnfermedad = ` y la enfermedad es: ${mascota.enfermedad}`;


    // Crea elementos de lista para cada pieza de información
    resultado.innerHTML += `<ul><li>${datosPropietario}</li><li>${tipo}, ${nombreMascota} ${infoEnfermedad}</li></ul>`;

}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    capturarDatosFormulario();
});


function limpiar() {
    // Limpiar todos los campos del formulario
    document.getElementById('propietario').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('nombreMascota').value = '';
    document.getElementById('tipo').selectedIndex = 0; // Restablecer al primer <option> del <select>
    document.getElementById('enfermedad').value = '';

    // Vaciar el div de resultados
    document.getElementById('resultado').innerHTML = '';
}

// Agregar el evento de clic al botón "Limpiar"
document.getElementById('btnLimpiar').addEventListener('click', limpiar);