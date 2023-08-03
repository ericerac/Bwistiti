<template>
    <nav class="blend">
      
    <ul>
      <li> <nuxt-link to="/">Home</nuxt-link> </li>
      <li><nuxt-link to="/">Actualité</nuxt-link></li>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/login">Login</nuxt-link></li>
      <li><a href="#">Nice staff</a></li>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style  scoped>

/* nuxt-link{
  margin:0;
  padding:0;
} */
nav {
  width: 80%;
  margin: 0 auto;
  background: #fff;
  background:transparent;
  padding: 20px 0;
  /* box-shadow: 0px 5px 0px #dedede; */
}

/* By Dominik Biedebach @domobch */
nav ul {
  list-style: none;
  text-align: center;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #4d4d4d;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0 10px;
}
nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all .5s;
}
nav ul li a:hover {
  color: #555;
}
nav.blend ul li a {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
}
nav.blend ul li a:hover {
  color: #fff;
}
nav.blend ul li a:before{
  position: absolute;
  width: 0px;
  height: 100%;
  top: 0;
  bottom: 0;
  background: #D35400;
  transition: all .5s;
  margin: auto;
  content: '.';
  color: transparent;
  z-index: -1;
  opacity: 0.75;
}
nav.blend ul li a:after {
  position: absolute;
  width: 0px;
  height: 100%;
  top: 0;
  bottom: 0;
  background: #D35400;
  transition: all .5s;
  margin: auto;
  content: '.';
  color: transparent;
  z-index: -1;
  opacity: 0.75;
}
nav.blend ul li a:before {
  left: 0;
}
nav.blend ul li a:after {
  right: 0;
}

nav.blend ul li a:hover:after,
nav.blend ul li a:hover:before {
  width: 100%;
}


</style>