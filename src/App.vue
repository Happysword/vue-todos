<template>
  <div>
    <nav id="nav-bar">
      <router-link class="nav-route" to="/">TODO</router-link>
      <router-link class="nav-route" to="/done">DONE</router-link>
    </nav>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav-bar {
  background-color: black;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-route {
  display: flex;
  color: whitesmoke;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 150%;
  margin-left: 50px;
  margin-right: 50px;
}
.nav-route:hover {
  color: green;
}
</style>
