<template>
  <h1>Pagina Consultar</h1>
  <Estudiante :txt-buton="buton" />
</template>

<script>
import Estudiante from "../components/Estudiante.vue"
export default {
  created() {
    console.log(this.$route)
    console.log(this.$route.params.id)
    console.log(this.$route.query.edad)
    console.log(this.$route.query.promedio)

  },

  components: {
    Estudiante
  },
  data() {
    return {
      buton: "Consultar"
    }
  }



}
</script>

<style></style>