---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Yoann Saunier | Full Stack Web Developer
---
<header>
  <div class="sidebar-collapse">
    <nav class="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" color-on-scroll="400">
      <div class="container">
        <div class="navbar-translate">
          <div class="navbar-brand">
            <a class="btn btn-link" href="https://www.linkedin.com/in/yoann-saunier-536368151">
              <i class="fab fa-linkedin"></i>
            </a>
            <a class="btn btn-link" href="https://github.com/ynnsnr">
              <i class="fab fa-github"></i>
            </a>
            <!-- <a class="btn btn-link" href="https://www.facebook.com/djyoyo">
              <i class="fab fa-facebook"></i>
            </a> -->
            <a class="btn btn-link" href="https://twitter.com/yoann_saunier">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
          <button type="button" class="navbar-toggler" data-toggle="dropdown">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-item">
              <a href="#experience" class="smooth-scroll">Experience</a>
            </div>
            <div class="dropdown-item">
              <a href="#skills" class="smooth-scroll">Skills</a>
            </div>
            <div class="dropdown-item">
              <a href="#education" class="smooth-scroll">Education</a>
            </div>
            <div class="dropdown-item">
              <a href="#contact" class="smooth-scroll">Contact</a>
            </div>
          </div>
        </div>
        <div class="navbar-collapse justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link smooth-scroll" href="#experience">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link smooth-scroll" href="#skill">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link smooth-scroll" href="#education">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link smooth-scroll" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</header>


<div class="page-content">

  <div class="profile-page">
    <div class="wrapper">
      <div class="page-header page-header-small" filter-color="blue">
        <div class="page-header-image" data-parallax="true" style="background-image: url('assets/images/banner.jpg');"></div>
        <div class="container">
          <div class="content-center">
            <div class="cc-profile-image"><a href="#"><img src="assets/images/yoann.jpg" alt="Image"/></a></div>
            <div class="h2 title">Yoann Saunier</div>
            <p class="category text-white">Full Stack Web Developer</p>
            <a class="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Contact</a>
            <!-- <a class="btn btn-primary" href="#" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section" id="about">
    <div class="container">
      <div class="card" data-aos="fade-up" data-aos-offset="10">
        <div class="card-body">
          <div class="h4 mt-0 title">About</div>
          <p>I'm a Junior Full Stack Web Developer with a strong Front-End sensitivity and an entrepreneurial mindset. I used to work as a music composer / sound engineer and I'm deeply interested in blending creativity and technology. I've just finished attending <a href="https://www.lewagon.com" target="_blank">Le Wagon</a>, a 9-week intensive coding bootcamp and I'm ready to translate my skills to the web development world.</p>
          <p>You'd know me better by checking out my <a href="https://ynnsnr.github.io/music" target="_blank">music</a>.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="section" id="experience" style="padding: 60px 0 0 0">
    <div class="container">

      <div class="row">
        <div class="col-md-6 ml-auto mr-auto">
          <div class="h4 text-center mb-4 title"><i class="fas fa-suitcase"></i> Experience</div>
        </div>
      </div>

      <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div class="card-body">

          <div class="row">
            <div class="col-lg-4">
              <div class="h4 mt-0 title">Treep</div>
              <p><a href="http://treep.pw" target="_blank">Treep</a> is the final project I made with my team during <a href="https://www.lewagon.com" target="_blank">Le Wagon</a>. A visual decision system tool for travel agencies. By helping them create trips quickly and easily, and visualizing different possible itineraries, <a href="http://treep.pw" target="_blank">Treep</a> enhances both flexibility and communication with travelers.</p>
            </div>
            <div class="col-lg-8">
              <!-- <ul id="imageGallery">
                <li><a href="assets/images/treep-home.jpg"><img src="assets/images/treep-home.jpg"></a></li>
                <li><a href="assets/images/treep-index.jpg"><img src="assets/images/treep-index.jpg"></a></li>
                <li><a href="assets/images/treep-show.jpg"><img src="assets/images/treep-show.jpg"></a></li>
                <li><a href="assets/images/treep-preview.jpg"><img src="assets/images/treep-preview.jpg"></a></li>
              </ul> -->
              <div class="youtube-container">
                <div id="video"></div>
              </div>
            </div>
          </div>

          <hr>

          <div class="row">
            <div class="col-lg-4">
              <div class="h4 mt-0 title">Awesome Suits</div>
              <p><a href="http://awesome-suits.herokuapp.com" target="_blank">Awesome Suits</a> was created for a coding challenge at <a href="https://www.lewagon.com" target="_blank">Le Wagon</a>. A clone of AirBnB that operates a suits renting service between individuals.</p>
            </div>
            <div class="col-lg-8">
              <ul id="imageGallery">
                <li><a href="assets/images/awesome-suits-home.jpg"><img src="assets/images/awesome-suits-home.jpg"></a></li>
                <li><a href="assets/images/awesome-suits-index.jpg"><img src="assets/images/awesome-suits-index.jpg"></a></li>
                <li><a href="assets/images/awesome-suits-owner.jpg"><img src="assets/images/awesome-suits-owner.jpg"></a></li>
                <li><a href="assets/images/awesome-suits-rentings.jpg"><img src="assets/images/awesome-suits-rentings.jpg"></a></li>
              </ul>
            </div>
          </div>

          <hr>

          <div class="row">
            <div class="col-lg-4">
              <div class="h4 mt-0 title">Gmail Email Templates</div>
              <p><a href="https://github.com/ynnsnr/gmail-email-templates" target="_blank">Gmail Email Templates</a> is a chrome extension for managing personal email templates (snippets) directly into Gmail with just a couple of clicks.</p>
            </div>
            <div class="col-lg-8">
              <ul id="gifs">
                <li>
                  <a href="https://github.com/ynnsnr/gmail-email-templates" target="_blank">
                    <img src="assets/images/gif2.gif" width="250px">
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ynnsnr/gmail-email-templates" target="_blank">
                    <img src="assets/images/gif3.gif" width="250px">
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

  <div class="section" id="skill" style="padding: 55px 0 0 0">
    <div class="container">
      <div class="h4 text-center mb-4 title"><i class="fas fa-palette"></i> Skills</div>
      <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div class="card-body">

          <div class="row" id="skills">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-3" style="padding-bottom: 15px">
              <h6>Back-End</h6>
              <div class="skills-elements"><img src="assets/images/ruby.png">Ruby</div>
              <div class="skills-elements"><img src="assets/images/rails.png">Ruby on Rails</div>
              <div class="skills-elements"><img src="assets/images/middleman.png">Middleman</div>
              <div class="skills-elements"><img src="assets/images/jekyll.png">Jekyll</div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-3" style="padding-bottom: 15px">
              <h6>Front-End</h6>
              <div class="skills-elements"><img src="assets/images/html.png">HTML5</div>
              <div class="skills-elements"><img src="assets/images/css.png">CSS3 / SASS</div>
              <div class="skills-elements"><img src="assets/images/javascript.png">Javascript / ES6</div>
              <div class="skills-elements"><img src="assets/images/bootstrap.png">Bootstrap</div>
              <div class="skills-elements"><img src="assets/images/react.png">React</div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-3" style="padding-bottom: 15px">
              <h6>Database</h6>
              <div class="skills-elements"><img src="assets/images/postgresql.png">PostGreSQL</div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-3" style="padding-bottom: 15px">
              <h6>DevOps</h6>
              <div class="skills-elements"><img src="assets/images/git.png">Git</div>
              <div class="skills-elements"><img src="assets/images/github.svg">Github</div>
              <div class="skills-elements"><img src="assets/images/heroku.png">Heroku</div>
            </div>
          </div>
          <!-- <div class="text-center" style="opacity: 0.9;">
            <a href="https://www.codewars.com/users/ynnsnr" target="_blank">
              <img src="https://www.codewars.com/users/ynnsnr/badges/micro">
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <div class="section" id="education" style="padding: 55px">
    <div class="container cc-education">
      <div class="h4 text-center mb-4 title"><i class="fas fa-graduation-cap"></i> Education</div>

      <div class="card">
        <div class="row" style="margin: 0 !important">
          <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body cc-education-header">
              <p>Summer 2018</p>
              <div class="h5">FullStack Developer</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">Web Development</div>
              <p class="category">Le Wagon Paris (Batch # 177)</p>
              <p>9-week intensive coding bootcamp learning HTML, CSS, Boostrap, Javascript, jQuery, SQL, git, GitHub, Heroku, and Ruby on Rails. Designed, Implemented and Shipped to production a <a href="http://awesome-suits.herokuapp.com">clone of AirBnB</a> and a Rails prototype of <a href="http://treep.pw">Treep</a></p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="row" style="margin: 0 !important">
          <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body cc-education-header">
              <p>2010 - 2014</p>
              <div class="h5">Master’s degree</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">Formation Supérieure aux Métiers du Son</div>
              <p class="category">Conservatory of Paris</p>
              <p>The challenge of this original curriculum is to transmit to future professionals, high-level skills both musical and technical.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="row" style="margin: 0 !important">
          <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body cc-education-header">
              <p>2008 - 2010</p>
              <div class="h5">Bachelor’s Degree</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">Higher School Preparatory Classes: Ciné-Sup</div>
              <p class="category">Guist’hau high school, Nantes</p>
              <p>Two-year intensive program for national competitive exams of schools of Cinema and Audiovisual: Fémis, Louis Lumière, INSAS, CNSMDP, ENSATT...</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="section" id="contact" style="padding-top: 0">
    <div class="cc-contact-information">
      <div class="container">
        <div class="cc-contact">
          <div class="row">
            <div class="col-md-9">
              <div class="card mb-0" data-aos="zoom-in">
                <div class="h4 text-center title">Contact</div>
                <div class="card-body text-center" style="margin-bottom: -30px !important;">
                  <a href="mailto:yoann@saunier.me">yoann@saunier.me</a>
                  <div style="padding-top: 30px;">
                    <a class="cc-social btn btn-link" href="https://www.linkedin.com/in/yoann-saunier-536368151">
                      <i class="fab fa-linkedin fa-3x" aria-hidden="true"></i>
                    </a>
                    <a class="cc-social btn btn-link" href="https://github.com/ynnsnr">
                      <i class="fab fa-github fa-3x" aria-hidden="true"></i>
                    </a>
                    <!-- <a class="cc-social btn btn-link" href="https://www.facebook.com/djyoyo">
                      <i class="fab fa-facebook fa-3x" aria-hidden="true"></i>
                    </a> -->
                    <a class="cc-social btn btn-link" href="https://twitter.com/yoann_saunier">
                      <i class="fab fa-twitter fa-3x" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<script src="assets/js/application.min.js"></script>
