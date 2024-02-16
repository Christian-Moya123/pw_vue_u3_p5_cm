<template>
    <h1>
        Componente Estudiante
    </h1>
    <div class="ver">
        <input v-model="id" type="text" placeholder="id"/>
        <button @click="consultarPorId">Consultar</button>
        <label for="nombre">Nombre:</label>
        <input v-model="nombre" type="text" id="nombre" class="form-control" placeholder="Nombre" />

        <label for="apellido">Apellido:</label>
        <input v-model="apellido" type="text" id="apellido" class="form-control" placeholder="Apellido" />

        <label for="genero">Género:</label>
        <input v-model="genero" type="text" id="genero" class="form-control" placeholder="Género" />

        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input v-model="fechaNacimiento" type="date" id="fechaNacimiento" class="form-control" />

        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" class="form-control" placeholder="Email" />

        <label for="carrera">Carrera:</label>
        <input v-model="carrera" type="text" id="carrera" class="form-control" placeholder="Carrera" />

        <label for="promedio">Promedio:</label>
        <input v-model="promedio" type="number" id="promedio" step="0.01" class="form-control" placeholder="Promedio" />

        <label for="direccion">Dirección:</label>
        <input v-model="direccion" type="text" id="direccion" class="form-control" placeholder="Dirección" />

        <label for="telefono">Teléfono:</label>
        <input v-model="telefono" type="tel" id="telefono" class="form-control" placeholder="Teléfono" />

    </div>


        <button @click="actualizar">Actualizar</button>
        <button @click="eliminar">Eliminar</button>

    
</template>

<script>
import { consultarEstudainteFachada, insertarFachada, actualizarFachadaEstudiante, eliminarFachada } from "../helpers/clienteEstudiante"

export default {
    data() {
        return {
            id: null,
            nombre: null,
            apellido: null,
            genero: null,
            fechaNacimiento: null,
            email: null,
            carrera: null,
            promedio: null,
            direccion: null,
            telefono: null
        }
    },

    methods: {
        async consultarPorId() {
            const data = await consultarEstudainteFachada(this.id)
            console.log("desde componente");
            console.log(data)
            this.nombre = data.nombre;
            this.apellido = data.apellido;
            this.genero = data.genero;
            this.fechaNacimiento = data.fechaNacimiento;
            this.email = data.email;
            this.carrera = data.carrera;
            this.promedio = data.promedio;
            this.direccion = data.direccion;
            this.telefono = data.telefono;
        },

        async insertar() {


            const estuBody = {
                nombre: this.nombre,
                apellido: this.apellido,
                genero: this.genero,
                fechaNacimiento: this.fechaNacimiento,
                email: this.email,
                carrera: this.carrera,
                promedio: this.promedio,
                direccion: this.direccion,
                telefono: this.telefono
            };


            const data = await insertarFachada(estuBody);
            console.log(data)
        },

        async actualizar() {
            const body = {
                nombre: this.nombre,
                apellido: this.apellido,
                genero: this.genero,
                fechaNacimiento: this.fechaNacimiento,
                email: this.email,
                carrera: this.carrera,
                promedio: this.promedio,
                direccion: this.direccion,
                telefono: this.telefono
            };

            await actualizarFachadaEstudiante(this.id, body);
        },

        async eliminar(){
            await eliminarFachada(this.id);
        }

    }
}
</script>
<style scoped>
.ver {
    margin-bottom: 20px;
}

.insertar {
    margin-top: 20px;
}

.label {
    font-weight: bold;
}



button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}
</style>