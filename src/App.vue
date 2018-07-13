<template>
  <div id="app">
    <div class="row py-2">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center">Store App</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-2">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
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
    <div class="row py-2">
      <div class="col-12">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
}
</style>
