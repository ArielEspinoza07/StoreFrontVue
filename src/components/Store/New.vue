<template>
  <div class="row ">
    <div class="col-12">
      <div class="row ">
        <div class="col-12">
          <div class="card">
            <div class="card-header text-center">New Store</div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <div class="card-text">
                <form-partial v-bind:store_prop="store" ></form-partial>
              </div>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-12">
                  <button class="btn btn-outline-success" v-on:click="postStore">Submit</button>
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
    name: 'new-store',
    data() {
      return {
        store: {
          name:'',
          address:''
        }
      }
    },
    methods: {
      postStore() {
        this.$storeService.postStore(this.store)
          .then(response => {
            this.store = {};
            this.$router.push('/store');
            swal('Success','Store created successfully','success');
          });

      }
    },
    components:{
      formPartial
    }
  }
</script>
