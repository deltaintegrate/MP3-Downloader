<template>
<form @submit.prevent="agregarcancion(cancion)" v-if="agregar">
  <h3 class="text-center">Agregar nueva cancion</h3>
  <input type="text" placeholder="Ingrese link youtube" class="form-control my-2" v-model="cancion.nombre">
  <button class="btn-sm btn-block btn-success" type="submit">Agregar</button>
</form>
</template>

<script>
export default {
      data() {
    return {
      canciones: [],
      cancion: {},
      agregar: true,
    };
  },
  methods:{
    agregarcancion(item){
      this.axios.post('cancion', item)
        .then(res => {
            // Agrega al inicio de nuestro array notas
            console.log(res.data);
            this.canciones.unshift(res.data);
            return this.canciones.unshift(res.data);
        })
        .catch( e => {
          console.log(e.response.data.error.errors.nombre.message);
        })
      this.canciones = {}
    },
  }
};
</script>