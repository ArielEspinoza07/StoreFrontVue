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
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <ul class="nav">
                <li class="nav-item">
                  <router-link :to="'/store/'+store.id" class="nav-link">Articles</router-link>
                </li>
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
              <h2 class="card-title text-center">Article</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-12">
          <div class="card">
            <div class="card-header text-center">{{article.name}}</div>
            <div class="card-body">
              <h5 class="card-title  text-center"></h5>
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
                <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                  <router-link :to="'/store/'+store.id+'/article/edit/'+article.id" class="btn btn-outline-success">Edit
                  </router-link>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                  <button class="btn btn-outline-danger" v-on:click="showNotification(article)">Delete</button>
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
    name: 'show-article',
    data() {
      return {
        store: {},
        article: {}
      }
    },
    mounted() {
      this.getArticle();
    },
    methods: {
      getArticle() {
        this.$articleService.getArticle(this.$route.params.id)
          .then(response => {
            if(response !== undefined){
              this.article = response.data.data.article;
              this.store = this.article.store;
            }
          });
      },
      showNotification(article) {
        swal('Are you sure?', "You really wanted to delete this article?", {
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
                this.deleteArticle(article);
                swal('Success', 'Article deleted successfully', 'success');
                break;

              default:
                swal("Article not deleted!");
            }
          });
      },
      deleteArticle(article) {
        this.$articleService.deleteArticle(article.id)
          .then(response => {
          this.store = response.data.data.store;
          this.$router.push('/store/' + this.$route.params.storeId);
        });
      }
    },
    components: {}
  }
</script>

<style>

</style>
