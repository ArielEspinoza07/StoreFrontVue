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
              <div class="row">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <router-link :to="'/store/edit/'+store.id" class="btn btn-outline-success">Edit</router-link>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button class="btn btn-outline-danger" v-on:click="showNotification()">Delete</button>
                  </div>
                </div>
              </div>
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
                  <router-link :to="'/store/'+store.id+'/article/new'" class="nav-link">New Article</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-12 ">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title text-center">Articles</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <input type="text" name="search" v-model="article.name" class="form-control" placeholder="Search" v-on:keyup="searchArticles()">
              </div>
            </div>
          </div>
        </div>
      </div>
      <articles v-bind:articles_props="store.articles"></articles>
    </div>
  </div>
</template>

<script>

  import Articles from '../Article/Index';

  export default {
    name: 'show-store',
    data() {
      return {
        store: {},
        article: {}
      }
    },
    mounted() {
      this.getStore();
    },
    methods: {
      getStore() {
        this.$storeService.getStore(this.$route.params.id)
          .then(response => {
            this.store = response.data.data.store;
          });
      },
      searchArticles() {
        this.$articleService.searchArticles(this.article)
          .then(response => {
            this.store.articles = response.data.data.articles;
          });
      },
      showNotification() {
        swal('Are you sure?', "You really wanted to delete this store?", {
          buttons: {
            cancel: "No!",
            delete: {
              text: "Yes, deleted it!",
              value: "delete",
            },
          },
        })
          .then((value) => {
            switch (value) {
              case "delete":
                this.deleteStore();
                swal('Success', 'Store deleted successfully', 'success');
                break;

              default:
                swal("Store not deleted!");
            }
          });
      },
      deleteStore() {
        this.$storeService.deleteStore(this.$route.params.id)
          .then(response => {
            this.store = response.data.data.store;
            this.$router.push('/store');
          });
      }
    }
    ,
    components: {
      Articles
    }
  }
</script>
