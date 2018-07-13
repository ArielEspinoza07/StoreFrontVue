<template>
  <div class="row ">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <div class="card-deck">
            <div class="col-lg-4 col-md-6 col-sm-12 col-12 py-2" v-for="store in stores" :key="store.id">
              <div class="card"   >
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
                        <router-link :to="'/store/'+store.id" class="btn btn-outline-success">Show Store</router-link>
                      </div>
                    </div>
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
    name: 'stores',
    data() {
      return {
        stores: []
      }
    },
    mounted() {
      this.getStores();
    },
    methods: {
      getStores(){
        const configAxios = {
          url:'http://store-api.local/api/v1/services/stores',
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
          this.stores = response.data.data.stores;
        });
      }
    }
  }
</script>
