<template>
    <div>
        <h1>Componente Estudiante</h1>
        <div class="ver">
            <div class="form-group">
                <label for="id">ID:</label>
                <input v-model="id" type="text" id="id" class="form-control" placeholder="ID" />
            </div>

            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input v-model="nombre" type="text" id="nombre" class="form-control" placeholder="Nombre" />
            </div>

            <div class="form-group">
                <label for="apellido">Apellido:</label>
                <input v-model="apellido" type="text" id="apellido" class="form-control" placeholder="Apellido" />
            </div>

            <div class="form-group">
                <label for="genero">Género:</label>
                <input v-model="genero" type="text" id="genero" class="form-control" placeholder="Género" />
            </div>

            <div class="form-group">
                <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                <input v-model="fechaNacimiento" type="date" id="fechaNacimiento" class="form-control" />
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input v-model="email" type="email" id="email" class="form-control" placeholder="Email" />
            </div>

            <div class="form-group">
                <label for="carrera">Carrera:</label>
                <input v-model="carrera" type="text" id="carrera" class="form-control" placeholder="Carrera" />
            </div>

            <div class="form-group">
                <label for="promedio">Promedio:</label>
                <input v-model="promedio" type="number" id="promedio" step="0.01" class="form-control"
                    placeholder="Promedio" />
            </div>

            <div class="form-group">
                <label for="direccion">Dirección:</label>
                <input v-model="direccion" type="text" id="direccion" class="form-control" placeholder="Dirección" />
            </div>

            <div class="form-group">
                <label for="telefono">Teléfono:</label>
                <input v-model="telefono" type="tel" id="telefono" class="form-control" placeholder="Teléfono" />
            </div>
        </div>

        <button @click="metodos" class="btn btn-primary">{{ txtButon }}</button>
    </div>
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

    props: {
        txtButon: {
            type: String,
            require: true
        },


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

        async eliminar() {
            await eliminarFachada(this.id);
        },

        async metodos() {
            if (this.txtButon === "Guardar") {
                await this.insertar();
            } else if (this.txtButon === "Actualizar") {
                await this.actualizar();
            } else if (this.txtButon === "Consultar") {
                await this.consultarPorId();
            }
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

.form-group {
    margin-bottom: 15px;
}

.ver {
    display: flex;
    flex-direction: column;
}
</style>