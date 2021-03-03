<template>
<form @submit.prevent="agregarcancion(cancion)" v-if="agregar">
  <h3 class="text-center">Agregar nueva cancion</h3>
  <input type="text" placeholder="Ingrese link youtube" class="form-control my-2" v-model="cancion.nombre">
  <button class="btn-sm btn-block btn-success" type="submit" @click="showmessage()">Agregar</button>
  <div v-if="this.message">SE HA DESCARGADO SU CANCION</div>
</form>
</template>

<script>
export default {
      data() {
    return {
      canciones: [],
      cancion: {},
      message:false,
      agregar: true,
    };
  },
  methods:{
    agregarcancion(item){
      this.axios.post('cancion', item)
        .then(res => {
            // Agrega al inicio de nuestro array notas
            // this.canciones
            console.log(this.canciones);
            return res.nombre;
        })
        .catch( e => {
          console.log(e);
        })
      this.canciones = {}
    },

    showmessage(){
      this.message = true
      setTimeout(()=>{this.message = false },3000)
    }
  }
};
</script>