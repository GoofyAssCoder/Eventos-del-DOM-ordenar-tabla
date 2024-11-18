"use strict";

class Persona {
    #nombre;
    #apellido;
    #nacimiento;
    #sueldo;

    constructor(nombre, apellido, nacimiento, sueldo) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#nacimiento = nacimiento;
        this.#sueldo = sueldo;
    }

    getNombre() {
        return this.#nombre;
    }

    getApellido() {
        return this.#apellido;
    }

    getNacimiento() {
        return this.#nacimiento;
    }

    getSueldo() {
        return this.#sueldo;
    }

    toString() {
        return `<tr>
                    <td>${this.getNombre()}</td>
                    <td>${this.getApellido()}</td>
                    <td>${this.getNacimiento()}</td>
                    <td>${this.getSueldo()}</td>
                </tr>`;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, nacimiento, sueldo) {
        super(nombre, apellido, nacimiento, sueldo);
    }
}

let empleados = [
    new Empleado("Paco", "Fiestas", 1997, 33000),
    new Empleado("Chindas", "Vinto", 2001, 23000),
    new Empleado("Juan", "Cruz", 2007, 82000),
    new Empleado("Misty", "Pérez", 2005, 28000),
    new Empleado("Joan", "Laporta", 1960, -3000000),
    new Empleado("Sabrina", "Carpenter", 2000, 43000),
    new Empleado("Eulalio", "Fernández", 1978, 4000),
];

// Variables para controlar el estado de orden
let ordenAscendente = {
    nombre: true,
    apellido: true,
    nacimiento: true,
    sueldo: true,
};

// Función para mostrar los empleados en la tabla
function mostrarEmpleados() {
    const tabla = document.getElementById("lista-empleados");
    tabla.innerHTML = ""; // Limpiar la tabla
    empleados.forEach(empleado => {
        tabla.innerHTML += empleado.toString();
    });
}

// Función para ordenar empleados según la columna
function ordenarEmpleados(criterio) {
    const ascendente = ordenAscendente[criterio];

    empleados.sort((a, b) => {
        let resultado;
        if (criterio === "nombre") {
            resultado = a.getNombre().localeCompare(b.getNombre());
        } else if (criterio === "apellido") {
            resultado = a.getApellido().localeCompare(b.getApellido());
        } else if (criterio === "nacimiento") {
            resultado = a.getNacimiento() - b.getNacimiento();
        } else if (criterio === "sueldo") {
            resultado = a.getSueldo() - b.getSueldo();
        }

        // Invertir el resultado si el orden es descendente
        return ascendente ? resultado : -resultado;
    });

    // Cambiar el estado del orden
    ordenAscendente[criterio] = !ascendente;

    // Mostrar los empleados ordenados
    mostrarEmpleados();
}

// Añadir eventos de clic a los encabezados de la tabla
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("casilla-1").addEventListener("click", () => ordenarEmpleados("nombre"));
    document.getElementById("casilla-2").addEventListener("click", () => ordenarEmpleados("apellido"));
    document.getElementById("casilla-3").addEventListener("click", () => ordenarEmpleados("nacimiento"));
    document.getElementById("casilla-4").addEventListener("click", () => ordenarEmpleados("sueldo"));

    // Mostrar empleados al cargar la página
    mostrarEmpleados();
});

