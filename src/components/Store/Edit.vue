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
        this.$storeService.getStore(this.$route.params.id)
          .then(response => {
            this.store = response.data.data.store;
          });
      },
      putStore() {
        this.$storeService.putStore(this.$route.params.id,this.store)
          .then(response => {
            this.store = response.data.data.store;
            this.$router.push('/store/'+this.$route.params.id);
            swal('Success','Store updated successfully','success');
          });
      }
    },
    components:{
      formPartial
    }
  }
</script>
