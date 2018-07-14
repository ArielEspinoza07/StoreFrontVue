<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <input type="text" name="search" v-model="article.name" class="form-control" placeholder="Search"
                       v-on:keyup="searchArticles()">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-3" >
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <nav >
                <ul class="pagination justify-content-center">
                  <li :class="( ( (pagination.current_page - 1) == 0 ) ) ? 'page-item disabled ' : 'page-item'" >
                    <a class="page-link" href="#" tabindex="-1"
                       v-on:click="searchPageArticles((pagination.current_page - 1))">Previous</a>
                  </li>
                  <li v-for="page in pagination.total_pages" :key="page" :class="( pagination.current_page === page ) ? 'page-item active' : 'page-item'">
                    <a class="page-link" v-on:click="searchPageArticles(page)" href="#">{{page}}</a>
                  </li>
                  <li :class="( ( (pagination.current_page + 1) > pagination.last_page ) ) ? 'page-item disabled ' : 'page-item'">
                    <a class="page-link" href="#"
                       v-on:click="searchPageArticles((pagination.current_page + 1))">Next</a>
                  </li>
                </ul>
              </nav>
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
      <div class="row py-3" >
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <nav >
                <ul class="pagination justify-content-center">
                  <li :class="( ( (pagination.current_page - 1) == 0 ) ) ? 'page-item disabled ' : 'page-item'" >
                    <a class="page-link" href="#" tabindex="-1"
                       v-on:click="searchPageArticles((pagination.current_page - 1))">Previous</a>
                  </li>
                  <li v-for="page in pagination.total_pages" :key="page" :class="( pagination.current_page === page ) ? 'page-item active' : 'page-item'">
                    <a class="page-link" v-on:click="searchPageArticles(page)" href="#">{{page}}</a>
                  </li>
                  <li :class="( ( (pagination.current_page + 1) > pagination.last_page ) ) ? 'page-item disabled ' : 'page-item'">
                    <a class="page-link" href="#"
                       v-on:click="searchPageArticles((pagination.current_page + 1))">Next</a>
                  </li>
                </ul>
              </nav>
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
    data() {
      return {
        article: {
          limit: 6,
          order: 'created_at',
          by: 'desc'
        },
        articles: [],
        pagination: {}
      }
    },
    mounted() {
      this.getArticles();
    },
    methods: {
      getArticles() {
        this.$articleService.getArticles(this.article)
          .then(response => {
            this.articles = response.data.data.articles;
            this.pagination = response.data.data.pagination;
          });
      },
      searchArticles() {
        this.$articleService.getArticles(this.article)
          .then(response => {
            this.articles = response.data.data.articles;
            this.pagination = response.data.data.pagination;
          });
      },
      searchPageArticles(page) {
        this.article.page = page;
        this.$articleService.getArticles(this.article)
          .then(response => {
            this.articles = response.data.data.articles;
            this.pagination = response.data.data.pagination;
          });
      },
    },
    components:{
    }
  }
</script>
