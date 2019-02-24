<template>
  <div class="app-footer">
      <div style="clear:both;height:6px;"></div>
  <!-- social icons -->
  <section class="social-icons">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <ul class="list-inline text-center" id="footer_layout1">
            
            <li><a href="#"><i class="fa fa-spotify"></i></a></li>
            <li><a href="#"><i class="fa fa-tumblr"></i></a></li>
            <li><a href="#"><i class="fa fa-share-alt"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-delicious"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa fa-dropbox"></i></a></li>
            <li><a href="#"><i class="fa fa-soundcloud"></i></a></li>
            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-github-alt"></i></a></li>
            <li><a href="#"><i class="fa fa-skype"></i></a></li>
            <li><a href="#"><i class="fa fa-stumbleupon"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div class="footer-top">
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
					<h2>About i-custom</h2>
					<div class="heading-border b-color-1"></div>
					<p>Recruit cooperation UI Cooperative development</p>
					<div>
						<a href="">Read More <i class="fa fa-angle-double-right"></i></a>
					</div>
					<strong>Newsletter</strong>
					<form class="navbar-for" role="email">
						<div class="form-group">
							<input type="text" class="form-control"
								placeholder="Email Address"> <span class="nav-search"><a
								href="#"><i class="fa fa-envelope"></i></a></span>
						</div>
					</form>
					<small>cobertura verterem congue saperet.</small>
				</div>
				<div class="col-sm-3">
					<h2>Contact us</h2>
					<div class="heading-border b-color-1"></div>
					<strong class="media-heading">Address</strong>
					<p></p>

					<strong class="media-heading">Phone & Fax</strong>
					<p>+4008888888</p>

					<strong class="media-heading">E-Mail Address</strong>
					<p>gwtjs@live.cn</p>
				</div>
			</div>
		</div>
	</div>

  <div class="footer-bottom">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 text-center">
					<p>
						Copyright
            {{current_date}}
						
						made by <a href="#">ICustom.com</a> & Disign by Shaifuddin. All
						Rights Reserved.
					</p>
					
					<ul class="list-inline center-block" id="footer_link2">
						<li><a href="#"><img src="../assets/images/card-2.png"></a></li>
						<li><a href="#"><img src="../assets/images/card-2.png"></a></li>
						<li><a href="#"><img src="../assets/images/card-3.png"></a></li>
						<li><a href="#"><img src="../assets/images/card-4.png"></a></li>
						<li><a href="#"><img src="../assets/images/card-5.png"></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'app-footer',
  data () {
    return {
      current_date:new Date().getFullYear()
    }
  },
  components: {
    //HelloWorld
  },
  created(){
    //
  }
}
</script>

<style>

</style>