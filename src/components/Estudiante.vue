<template>
    <h1>
        Componente Estudiante
    </h1>
    <input v-model="id" type="text" />
    <button @click="consultarPorId">Consultar</button>
    <input v-model="nombre" type="text" />

    <input v-model="apellido" type="text"/>
    <button @click="insertar">Insertar</button>
</template>

<script>
import { consultarEstudainteFachada, insertarFachada } from "../helpers/clienteEstudiante"

export default {
    data() {
        return {
            id: null,
            nombre: null,
            apellido:null,
        }
    },

    methods: {
        async consultarPorId() {
            const data = await consultarEstudainteFachada(this.id)
            console.log("desde componente");
            console.log(data)
            this.nombre = data.nombre;
        },

        async insertar() {

           
            const estuBody = {
                nombre: "asad",
                apellido: this.apellido,
                genero: "M",
                fechaNacimietno: null
            };

        
            const data = await insertarFachada(estuBody);
            console.log(data)
        }

    }
}
</script>

<style></style>