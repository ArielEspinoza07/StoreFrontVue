<template>
  <div class="row py-2">
    <div class="col-12 ">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title text-center">Articles</h2>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card-deck">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12 py-2" v-for="article in articles" :key="article.id">
          <div class="card">
            <div class="card-header text-center">{{article.name}}</div>
            <div class="card-body">
              <h5 class="card-title">Price: ${{article.price}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Created at: {{article.created_at}}</h6>
              <div class="card-text">
                <div class="row">
                  <div class="col-12">
                    <p>Description: {{article.description}}
                    </p>
                  </div>
                  <div class="col-12">
                    <p>Total in shelf: {{article.total_in_shelf}}</p>
                  </div>
                  <div class="col-12">
                    <p>Total in vault: {{article.total_in_vault}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="row">
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
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'articles',
    data() {
      return {
        articles: []
      }
    },
    mounted() {
      this.getArticles();
    },
    methods: {
      getArticles() {
        const configAxios = {
          url: 'http://store-api.local/api/v1/services/stores/' + this.$route.params.id + '/articles',
          method: 'get',
          responseType: 'json',
          data: {},
          headers: {
            'Content-Type': 'application/json',
          },
          auth: {
            username: 'my_email',
            password: '12345'
          }
        };
        axios.request(configAxios).then((response) => {
          this.articles = response.data.store.articles;
        });
      }
    }
  }
</script>
