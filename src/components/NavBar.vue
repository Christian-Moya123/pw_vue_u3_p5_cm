<template>
    <div>
        <router-link to="/guardar">Guardar</router-link>
        <router-link to="/eliminar">Eliminar</router-link>
        <router-link to="/consultar">Buscar</router-link>
        <router-link to="/actualizar">Actualizar</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
div a {
    color: #2c3e50;
    margin: 0px 10px;
    font-weight: 10px;
    border: solid;
    padding: 10px 10px;
    border-radius: 10px;
    background: aqua;
}

.router-link-exact-active {
    background: blueviolet;
}
</style>