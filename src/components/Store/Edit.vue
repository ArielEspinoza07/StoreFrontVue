<template>
  <div class="row ">
    <div class="col-12">
      <div class="row py-3">
        <div class="col-12">
          <div class="card">
            <div class="card-header text-center">Edit Store</div>
            <div class="card-body">
              <h5 class="card-title  text-center"></h5>
              <div class="card-text">
                <form-partial v-bind:store_prop="store"></form-partial>
              </div>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                  <button class="btn btn-outline-success" v-on:click="putStore">Submit</button>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                  <router-link :to="'/store/'+store.id" class="btn btn-outline-secondary">Back</router-link>
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
  import axios from 'axios';
  import formPartial from './partial/form'

  export default {
    name: 'edit-store',
    data() {
      return {
        store: {}
      }
    },
    mounted(){
      this.getStore();
    },
    methods: {
      getStore(){
        const configAxios = {
          url:'http://store-api.local/api/v1/services/stores/'+this.$route.params.id,
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
        axios.request(configAxios).then( (response) => {
          this.store = response.data.store;
        });
      },
      putStore() {
        const configAxios = {
          url: 'http://store-api.local/api/v1/services/stores/'+this.$route.params.id,
          method: 'put',
          responseType: 'json',
          data: this.store,
          headers: {
            'Content-Type': 'application/json',
          },
          auth: {
            username: 'my_email',
            password: '12345'
          }
        };
        axios.request(configAxios).then((response) => {
          this.stores = response.data.stores;
        });
        //this.store = {};
      }
    },
    components:{
      formPartial
    }
  }
</script>
