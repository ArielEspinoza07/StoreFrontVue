<template>
  <form>
    <div class="form-group">
      <label for="">Name</label>
      <input type="text" class="form-control" v-model="store_prop.name">
    </div>
    <div class="form-group">
      <label for="">Address</label>
      <input type="text" class="form-control" v-model="store_prop.address">
    </div>
  </form>
</template>

<script>
  export default {
    name: 'form-store',
    props:{
      store_prop:{}
    },
    data() {
      return {
      }
    },
    mounted(){

    },
    created(){

    },
    methods: {

    }
  }
</script>
