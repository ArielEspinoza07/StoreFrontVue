<template>
  <div class="row">
    <div class="col-12">
      <div class="row ">
        <div class="col-12 ">
          <div class="card">
            <div class="card-header text-center">{{store.name}}</div>
            <div class="card-body">
              <h5 class="card-title">Address: {{store.address}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Created at: {{store.created_at}}</h6>
              <p class="card-text"></p>
            </div>
            <div class="card-footer">

            </div>
          </div>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-12 ">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title text-center">Article</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <ul class="nav">
                <li class="nav-item">
                  <router-link :to="'/store/'+this.$route.params.id" class="nav-link">Articles</router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="'/store/'+this.$route.params.storeId+'/article/new'" class="nav-link">New Article</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-12">
          <div class="card">
            <div class="card-header text-center">Edit Article</div>
            <div class="card-body">
              <h5 class="card-title  text-center"></h5>
              <div class="card-text">
                <form-partial v-bind:article_prop="article"></form-partial>
              </div>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                  <button class="btn btn-outline-success" v-on:click="putArticle">Submit</button>
                </div>
                <div class="">
                  <router-link :to="'/store/'+article.store_id+'/article/'+article.id" class="btn btn-outline-secondary">
                    Back
                  </router-link>
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

  import formPartial from './partial/form'

  export default {
    name: 'show-store',
    data() {
      return {
        store: {},
        article:{}
      }
    },
    mounted() {
      this.getStore();
      this.getArticle();
    },
    methods: {
      getStore() {
        const configAxios = {
          url: 'http://store-api.local/api/v1/services/stores/' + this.$route.params.storeId,
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
        this.$axios.request(configAxios).then((response) => {
          this.store = response.data.data.store;
        });
      },
      getArticle() {
        const configAxios = {
          url: 'http://store-api.local/api/v1/services/articles/' + this.$route.params.id,
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
        this.$axios.request(configAxios).then((response) => {
          this.article = response.data.data.article;
        });
      },
      putArticle() {
        const configAxios = {
          url: 'http://store-api.local/api/v1/services/articles/'+this.$route.params.id,
          method: 'put',
          responseType: 'json',
          data: this.article,
          headers: {
            'Content-Type': 'application/json',
          },
          auth: {
            username: 'my_email',
            password: '12345'
          }
        };
        this.$axios.request(configAxios).then((response) => {
          this.article = response.data.data.article;
          this.$router.push('/store/' + this.article.store_id);
          swal('Success','Article updated successfully','success');
        });
        //this.store = {};
      }
    },
    components: {
      formPartial
    }
  }
</script>
