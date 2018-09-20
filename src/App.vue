<template>
  <div id="app">
    <header>
      <b-navbar toggleable="md" type="dark" variant="info" class="screen">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/"><img class="logo-img" src="./assets/img/logo_hitap.jpg" alt="BV"></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/company">Company Overview</b-nav-item>
            <b-nav-item to="/services">Services</b-nav-item>
            <b-nav-item to="/projects">Projects</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>

          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

    </header>
    
    <router-view/>
  </div>
</template>

<style scoped >
* {
  box-sizing: border-box;
}
body {
  color: #0e5984 !important;
}
.selector-for-some-widget {
  box-sizing: content-box;
}
.screen {
  position: relative;
}
.screen::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  left: 0;
  top: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.24),
    rgba(0, 0, 0, 0.3),
    rgb(240, 240, 240)
  );
}
nav {
  height: calc(99vh - 80vh);
  background-image: url('./assets/img/water_drop_background.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
}
.logo-img {
  height: 60px;
  opacity: 0.8;
}
.navbar-dark .navbar-nav .nav-link {
  color: #ffffff !important;
}
.navbar-dark .navbar-nav .nav-link.active {
  color: #0158a7 !important;
}
@media screen and (max-width: 767px) {
  .navbar-collapse {
    background: linear-gradient(
      rgb(237, 237, 237),
      rgba(138, 168, 167, 0.66),
      rgb(178, 200, 209)
    );
    padding: 20px;
  }
}
</style>
