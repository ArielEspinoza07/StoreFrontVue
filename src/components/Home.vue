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
                <li class="nav-item">
                  <router-link to="/store/new" class="nav-link">New Store</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //import Stores from './Store/Stores'
  export default {
    name: 'home',
    data () {
      return {
      }
    },
    components:{
      //Stores
    }
  }
</script>
