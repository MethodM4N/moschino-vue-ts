<template>
  <header id="masthead" class="site-header">
    <div class="site-branding">
      <h1 class="site-title"><router-link to="/" rel="home">Moschino</router-link></h1>
      <h2 class="site-description">Minimalist Portfolio HTML Template</h2>
    </div>
    <nav id="site-navigation" class="main-navigation">
      <div class="menu-menu-1-container">
        <ul id="menu-menu-1" class="menu">
          <li><router-link class="router_link" to="/">Home</router-link></li>
          <li><router-link class="router_link" to="/about">About</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style>
.router_link.router-link-exact-active {
  color: #5e5e5ea3 !important;
  cursor: default;
}
</style>
