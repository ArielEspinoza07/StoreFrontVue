<template>
  <div class="row ">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <ul class="nav">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/store" class="nav-link" >Stores</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-12">
          <div class="card">
            <div class="card-header text-center">New Store</div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <div class="card-text">
                <form>
                  <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" class="form-control" placeholder="K-Mart" v-model="store.name">
                  </div>
                  <div class="form-group">
                    <label for="">Address</label>
                    <input type="text" class="form-control" placeholder="123 street of avenue 456" v-model="store.address">
                  </div>
                </form>
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
  import axios from 'axios';

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
        axios.request(configAxios).then((response) => {
          this.stores = response.data.stores;
        });
        this.store = {};
      }
    }
  }
</script>
