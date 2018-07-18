<template>
  <div class="row ">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <input type="text" name="search" v-model="store.name" class="form-control" placeholder="Search" v-on:keyup="searchStores()">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-sm table-bordered table-striped ">
                  <caption>List of Stores</caption>
                  <thead class="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Created at</th>
                    <th>Options</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="store in stores" :key="store.id">
                    <td>{{store.name}}</td>
                    <td>{{store.address}}</td>
                    <td>{{store.created_at}}</td>
                    <td>
                      <router-link :to="'/store/'+store.id" class="btn btn-outline-primary">Show</router-link>
                    </td>
                  </tr>
                  </tbody>
                </table>
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
                       v-on:click="searchPageStores((pagination.current_page - 1))">Previous</a>
                  </li>
                  <li v-for="page in pagination.total_pages" :key="page" :class="( pagination.current_page === page ) ? 'page-item active' : 'page-item'">
                    <a class="page-link" v-on:click="searchPageStores(page)" href="#">{{page}}</a>
                  </li>
                  <li :class="( ( (pagination.current_page + 1) > pagination.last_page ) ) ? 'page-item disabled ' : 'page-item'">
                    <a class="page-link" href="#"
                       v-on:click="searchPageStores((pagination.current_page + 1))">Next</a>
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
    name: 'stores',
    data() {
      return {
        store: {
          limit: 6,
          order: 'created_at',
          by: 'desc'
        },
        stores: [],
        pagination: {}
      }
    },
    mounted() {
      this.getStores();
    },
    methods: {
      getStores(){
        this.$storeService.getStores(this.store)
          .then(response => {
            this.stores = response.data.data.stores;
            this.pagination = response.data.data.pagination;
          });
      },
      searchStores() {
        this.$storeService.getStores(this.store)
          .then(response => {
            this.stores = response.data.data.stores;
            this.pagination = response.data.data.pagination;
          });
      },
      searchPageStores(page) {
        this.store.page = page;
        this.$storeService.getStores(this.store)
          .then(response => {
            this.stores = response.data.data.stores;
            this.pagination = response.data.data.pagination;
          });
      },
    }
  }
</script>
