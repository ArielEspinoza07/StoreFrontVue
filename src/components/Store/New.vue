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
        const configAxios = {
          url: 'http://store-api.local/api/v1/services/stores',
          method: 'post',
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
        this.$axios.request(configAxios).then((response) => {
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
