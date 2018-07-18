<template>
  <div class="row py-3">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-sm table-bordered table-striped ">
              <caption>List of Stores</caption>
              <thead class="thead-dark">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price </th>
                <th>Shelf </th>
                <th>Vault </th>
                <th>Created at</th>
                <th>Options</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="article in articles_props" :key="article.id">
                <td>{{article.name}}</td>
                <td>{{article.description}}</td>
                <td>${{article.price}}</td>
                <td>{{article.total_in_shelf}}</td>
                <td>{{article.total_in_vault}}</td>
                <td>{{article.created_at}}</td>
                <td>
                  <router-link :to="'/store/'+article.store_id+'/article/'+article.id" class="btn btn-outline-primary">Show</router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articles',
    props:{
      articles_props:{
        type:Array
      }
    },
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>
