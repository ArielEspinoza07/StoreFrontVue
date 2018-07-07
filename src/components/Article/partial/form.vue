<template>
  <form>
    <div class="form-group">
      <label for="">Name</label>
      <input type="text" class="form-control" v-model="article_prop.name">
    </div>
    <div class="form-group">
      <label for="">Description</label>
      <input type="text" class="form-control" v-model="article_prop.description">
    </div>
    <div class="form-group">
      <label for="">Price</label>
      <input type="text" class="form-control" v-model="article_prop.price">
    </div>
    <div class="form-group">
      <label for="">Total in shelf</label>
      <input type="number" class="form-control" v-model="article_prop.total_in_shelf">
    </div>
    <div class="form-group">
      <label for="">Total in vault</label>
      <input type="number" class="form-control" v-model="article_prop.total_in_vault">
    </div>
    <div class="form-group">
      <input type="hidden" class="form-control" v-model="article_prop.store_id">
    </div>
  </form>
</template>

<script>
  export default {
    name: 'form-article',
    props:{
      article_prop:{}
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
