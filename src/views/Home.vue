<template>
  <div class="home">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="rgb(240, 240, 240)"
                :interval="4000"
                img-width=""
                img-height=""
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide class="img-cover1">
              <img slot="img" class="d-block img-fluid w-100 img1" 
                  src="../assets/img/pic7-1.jpg" alt="image slot">
            </b-carousel-slide>

      <b-carousel-slide class="img-cover2">
              <img slot="img" class="d-block img-fluid w-100 img2" 
                  src="../assets/img/pic7-4.jpg" alt="image slot">
            </b-carousel-slide>

      <b-carousel-slide class="img-cover3">
              <img slot="img" class="d-block img-fluid w-100 img3" 
                  src="../assets/img/pic7-5.jpg" alt="image slot">
            </b-carousel-slide>

      <b-carousel-slide class="img-cover3">
        <img slot="img" class="d-block img-fluid w-100 img4" 
             src="../assets/img/pic7-6.jpg" alt="image slot">
      </b-carousel-slide>

 

    </b-carousel>
    <div class="about-container">
      <p class="about-hitap">
        <span> HiTap complete solution for faucet producers whising to emerge to the electric edge</span>
      Proven design of complete shower faucet incorporating:  The Hitap thermostatic cartridge,  
      Manual ceramic volume control, Integrated touch display, 5 year lasting battery.
      </p>
    </div>
    <div class="container marketing">

        <!-- Three columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-4">
            <img class="rounded-circle Electric-img" src="../assets/img/hitapcartridge150.jpg" alt="Generic placeholder image" width="140" height="140">
            <h2>Electric Cartridge</h2>
            <p>
              An innovative proportioning valve mechanism and efficient drive unit implemented in a high flow, low power consuming, electric operated thermostatic cartridge. 
            </p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img class="rounded-circle news-img" src="../assets/img/logo_hitap.jpg" alt="Generic placeholder image" width="140" height="140">
            <h2>News</h2>
            <p>
              HiTap leads the smart home water technology. View this presentation demonstrating the ultimate smart home water thermostat.
              Patents granted in China, Japan, Australia and Israel. Patents pending Worldwide.
            </p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img class="rounded-circle news-img" src="../assets/img/pic7-1.jpg" alt="Generic placeholder image" width="140" height="140">
            <h2>Faucet Design</h2>
            <p>New exciting design of a wall mounted bath/shower faucet with the hitap cartridge inside.
            </p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->


        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style="width: 500px; height: 500px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165f637050b%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165f637050b%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165f637050d%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165f637050d%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 500px; height: 500px;">
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165f637050e%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165f637050e%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 500px; height: 500px;">
          </div>
        </div>

        <hr class="featurette-divider">

        <!-- /END THE FEATURETTES -->

      </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
<style scoped >
.home {
  color: #0e5984 !important;
}
.w-100 {
  height: 300px;
  margin: 0 auto;
}
.img-cover1 {
  background: #ededed;
}
.img-cover2 {
  background: #e3e2de;
}
.img-cover3 {
  background: #f0f0f0;
}

.img1 {
  width: 433px !important;
}
.img2 {
  width: 374px !important;
}
.img3 {
  width: 260px !important;
}
.img4 {
  width: 300px !important;
}
.about-container {
  width: 100%;
  margin: 0 0 20px 0;
  background: linear-gradient(
    rgb(237, 237, 237),
    rgba(138, 168, 167, 0.66),
    rgb(178, 200, 209)
  );
}
.about-hitap {
  margin: 0 auto;
  text-align: center;
  width: 80%;
}
.about-hitap > span {
  font-weight: bold;
}
.rounded-circle {
  border-radius: 0% !important;
}
.Electric-img {
  height: 100px;
  width: 100px;
}
.news-img {
  height: 100px;
}
</style>
