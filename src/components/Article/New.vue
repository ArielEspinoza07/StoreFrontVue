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
                  <router-link :to="'/store/'+this.$route.params.id" class="nav-link">Articles</router-link>
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
            <div class="card-header text-center">New Article</div>
            <div class="card-body">
              <h5 class="card-title  text-center"></h5>
              <div class="card-text">
                <form-partial v-bind:article_prop="article"></form-partial>
              </div>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                  <button class="btn btn-outline-success" v-on:click="postArticle">Submit</button>
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
        article:{
          store_id:this.$route.params.id
        }
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
      postArticle() {
        this.$articleService.postArticle(this.article)
          .then(response => {
            this.article = {
              store_id:this.$route.params.id
            };
            this.$router.push('/store/' + this.article.store_id);
            swal('Success','Article created successfully','success');
          });
      }
    },
    components: {
      formPartial
    }
  }
</script>
