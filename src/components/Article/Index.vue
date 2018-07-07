<template>
  <div class="row py-2">
    <div class="col-12">
      <div class="card-deck">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12 py-2" v-for="article in articles_props" :key="article.id">
          <div class="card">
            <div class="card-header text-center">{{article.name}}</div>
            <div class="card-body">
              <div class="card-text">
                <div class="row">
                  <div class="col-12">
                    <p>Description: {{article.description}}</p>
                  </div>
                  <div class="col-12">
                    <p>Price: ${{article.price}}</p>
                  </div>
                  <div class="col-12">
                    <p>Total in shelf: {{article.total_in_shelf}}</p>
                  </div>
                  <div class="col-12">
                    <p>Total in vault: {{article.total_in_vault}}</p>
                  </div>
                  <div class="col-12">
                    <p>Created at: {{article.created_at}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                  <router-link :to="'/store/article/edit/'+article.id" class="btn btn-outline-success">Edit
                  </router-link>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                  <a href="#" class="btn btn-outline-danger">Delete</a>
                </div>
              </div>
            </div>
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
