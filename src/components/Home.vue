<template>
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
          {{article.store.name}}
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
        articles:[]
      }
    },
    mounted() {
      this.getArticles();
    },
    methods: {
      getArticles(){
        const configAxios = {
          url:'http://store-api.local/api/v1/services/articles',
          method:'get',
          responseType:'json',
          data:{},
          headers:{
            'Content-Type':'application/json',
          },
          auth:{
            username: 'my_email',
            password: '12345'
          }
        };
        this.$axios.request(configAxios).then( (response) => {
          this.articles = response.data.data.articles;
        });
      }
    },
    components:{
    }
  }
</script>
