<template>
    <h1>Pagina Eliminar</h1>
    <input v-model="id" type="text" placeholder="id" />
    <button @click="eliminar">Eliminar</button>
</template>

<script>
import { eliminarFachada } from "../helpers/clienteEstudiante"

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

        async eliminar() {
            await eliminarFachada(this.id);
        }
    }

}
</script>

<style></style>