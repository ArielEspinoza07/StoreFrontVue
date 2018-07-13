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
        store: {}
      }
    },
    mounted() {
      this.getStore();
    },
    methods: {
      getStore() {
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
        this.$axios.request(configAxios).then((response) => {
          if(response !== undefined){
            this.store = response.data.data.store;
          }
        });
      },
      showNotification(){
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
        const configAxios = {
          url: 'http://store-api.local/api/v1/services/stores/' + this.$route.params.id,
          method: 'delete',
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
        this.$axios.request(configAxios).then( (response) => {
          this.store = response.data.data.store;
          this.$router.push('/store');
        });
      }
    },
    components: {
      Articles
    }
  }
</script>
