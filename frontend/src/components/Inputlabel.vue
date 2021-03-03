<template>
    <div>
    <div class="Input">
        <h1>Bienvenido a MP3Downloader</h1>
    </div>
    <div id="app-5">
        <p>{{ message }}</p>
        <input v-model="message"/>
        <button @click="Sendurl">enviar</button>
    </div>
    </div>
</template>
<script>
export default {
  data() {
   return {message : "ingresa url cancion"}
  },
  methods: {
    Sendurl() {
      this.message = this.message.split('').reverse().join('')
      console.log(this.message);
    }
  }
 
}
</script>
<style lang="">
    
</style>