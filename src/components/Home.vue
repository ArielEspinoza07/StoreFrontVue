<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
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
      <div class="row">
        <div class="col-12">
          <div class="card-deck">
            <div class="col-lg-4 col-md-6 col-sm-12 col-12 py-2" v-for="article in articles" :key="article.id">
              <div class="card">
                <div class="card-header text-center">{{article.name}}</div>
                <div class="card-body">
                  <div class="card-text">
                    <div class="row">
                      <div class="col-12">
                        <p>Description: {{article.description}}
                        </p>
                      </div>
                      <div class="col-12">
                        <p>Price: ${{article.price}}</p>
                      </div>
                      <div class="col-12">
                        <p>Available: {{article.total_in_vault}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="row">
                    <div class="col-12">{{article.store.name}}</div>
                    <div class="col-12">{{article.store.address}}</div>
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

  export default {
    name: 'home',
    data () {
      return {
        articles:[],
        article : {}
      }
    },
    mounted() {
      this.getArticles();
    },
    methods: {
      getArticles(){
        this.$articleService.getArticles()
          .then( response => {
          this.articles = response.data.data.articles;
        });
      },
      searchArticles(){
        this.$articleService.searchArticles(this.article)
          .then( response => {
            this.articles = response.data.data.articles;
          });
      }
    },
    components:{
    }
  }
</script>
