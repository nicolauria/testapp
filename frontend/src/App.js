import './App.css';

function App() {
  return (
    <div className="App">
      <div className="preloader">
        <div className="preloader-body">
          <div className="cssload-bell">
            <div className="cssload-circle">
              <div className="cssload-inner"></div>
            </div>
            <div className="cssload-circle">
              <div className="cssload-inner"></div>
            </div>
            <div className="cssload-circle">
              <div className="cssload-inner"></div>
            </div>
            <div className="cssload-circle">
              <div className="cssload-inner"></div>
            </div>
            <div className="cssload-circle">
              <div className="cssload-inner"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="page">
      <header className="section page-header header-creative-wrap context-dark">
        <div className="rd-navbar-wrap">
          <nav className="rd-navbar rd-navbar-creative rd-navbar-logo-mobile" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="100px" data-xl-stick-up-offset="112px" data-xxl-stick-up-offset="132px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
            <div className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1" data-rd-navbar-toggle=".rd-navbar-collapse"><span></span></div>
            <div className="rd-navbar-aside-outer">
              <div className="rd-navbar-aside">
                <div className="rd-navbar-collapse">
                  <ul className="contacts-classic">
                    <li><span className="contacts-classic-title">Follow me</span></li>
                    <li>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a className="icon mdi mdi-facebook" href="#"></a></li>
                        <li className="list-inline-item"><a className="icon mdi mdi-twitter" href="#"></a></li>
                        <li className="list-inline-item"><a className="icon mdi mdi-instagram" href="#"></a></li>
                        <li className="list-inline-item"><a className="icon mdi mdi-youtube-play" href="#"></a></li>
                      </ul>
                    </li>
                  </ul><a className="rd-navbar-basket rd-navbar-basket-mobile fl-bigmug-line-shopping202" href="cart-page.html"><span>2</span></a>
                </div>
                <div className="rd-navbar-panel">
                  <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                  <div className="rd-navbar-brand"><a className="brand" href="index.html"><img className="brand-logo-dark" src="images/logo-default-220x20.png" alt="" width="220" height="20" srcset="images/logo-default-439x39.png 2x"/><img className="brand-logo-light" src="images/logo-inverse-298x27.png" alt="" width="298" height="27" srcset="images/logo-inverse-595x53.png 2x"/></a>
                  </div>
                </div>
                <div className="rd-navbar-aside-element">
                  <div className="rd-navbar-search rd-navbar-search-2">
                    <button className="rd-navbar-search-toggle rd-navbar-fixed-element-2" data-rd-navbar-toggle=".rd-navbar-search"><span></span></button>
                    <form className="rd-search" action="search-results.html" data-search-live="rd-search-results-live" method="GET">
                      <div className="form-wrap">
                        <label className="form-label" for="rd-navbar-search-form-input">Search...</label>
                        <input className="rd-navbar-search-form-input form-input" id="rd-navbar-search-form-input" type="text" name="s" autocomplete="off"/>
                        <div className="rd-search-results-live" id="rd-search-results-live"></div>
                        <button className="rd-search-form-submit fl-bigmug-line-search74" type="submit"></button>
                      </div>
                    </form>
                  </div>
                  <div className="rd-navbar-basket-wrap">
                    <button className="rd-navbar-basket fl-bigmug-line-shopping202" data-rd-navbar-toggle=".cart-inline"><span>2</span></button>
                    <div className="cart-inline">
                      <div className="cart-inline-header">
                        <h5 className="cart-inline-title">In cart:<span> 2</span> Products</h5>
                        <h6 className="cart-inline-title">Total price:<span> $41</span></h6>
                      </div>
                      <div className="cart-inline-body">
                        <div className="cart-inline-item">
                          <div className="unit unit-spacing-sm align-items-center">
                            <div className="unit-left"><a className="cart-inline-figure" href="single-product.html"><img src="images/product-mini-2-106x104.jpg" alt="" width="106" height="104"/></a></div>
                            <div className="unit-body">
                              <h6 className="cart-inline-name"><a href="single-product.html">Stay Wild T-Shirt</a></h6>
                              <div>
                                <div className="group-xs group-middle">
                                  <div className="table-cart-stepper">
                                    <input className="form-input" type="number" data-zeros="true" value="1" min="1" max="1000"/>
                                  </div>
                                  <h6 className="cart-inline-title">$18.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cart-inline-item">
                          <div className="unit unit-spacing-sm align-items-center">
                            <div className="unit-left"><a className="cart-inline-figure" href="single-product.html"><img src="images/product-mini-1-106x104.jpg" alt="" width="106" height="104"/></a></div>
                            <div className="unit-body">
                              <h6 className="cart-inline-name"><a href="single-product.html">Bandico Baseball Hat</a></h6>
                              <div>
                                <div className="group-xs group-middle">
                                  <div className="table-cart-stepper">
                                    <input className="form-input" type="number" data-zeros="true" value="1" min="1" max="1000"/>
                                  </div>
                                  <h6 className="cart-inline-title">$23.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart-inline-footer">
                        <div className="group-sm"><a className="button button-default-outline-2 button-zakaria" href="cart-page.html">Go to cart</a><a className="button button-primary button-zakaria" href="checkout.html">Checkout</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                <div className="rd-navbar-nav-wrap">
                  <ul className="rd-navbar-nav">
                    <li className="rd-nav-item active"><a className="rd-nav-link" href="index.html">Home</a>
                    </li>
                    <li className="rd-nav-item"><a className="rd-nav-link" href="#">Pages</a>
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="bio.html">Bio</a></li>
                        <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="events.html">Events</a></li>
                      </ul>
                    </li>
                    <li className="rd-nav-item"><a className="rd-nav-link" href="grid-blog.html">Blog</a>
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="blog-post.html">Blog Post</a></li>
                      </ul>
                    </li>
                    <li className="rd-nav-item"><a className="rd-nav-link" href="discography.html">Gallery</a>
                    </li>
                    <li className="rd-nav-item"><a className="rd-nav-link" href="#">Elements</a>
                      <ul className="rd-menu rd-navbar-megamenu">
                        <li className="rd-megamenu-item">
                          <div className="rd-megamenu-title"><span className="rd-megamenu-icon"></span><span className="rd-megamenu-text">Elements</span></div>
                          <ul className="rd-megamenu-list rd-megamenu-list-2">
                            <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="typography.html">Typography</a></li>
                            <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="icon-lists.html">Icon lists</a></li>
                            <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="progress-bars.html">Progress bars</a></li>
                            <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="calls-to-action.html">Calls to action</a></li>
                            <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="buttons.html">Buttons</a></li>
                            <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="counters.html">Counters</a></li>
                          </ul>
                        </li>
                        <li className="rd-megamenu-item">
                          <div className="rd-megamenu-title"><span className="rd-megamenu-icon"></span><span className="rd-megamenu-text">Additional pages</span></div>
                          <ul className="rd-megamenu-list">
                            <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="404-page.html">404 Page</a></li>
                            <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="coming-soon.html">Coming Soon</a></li>
                            <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="contacts.html">Contacts</a></li>
                            <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="privacy-policy.html">Privacy Policy</a></li>
                          </ul>
                        </li>
                        <li className="rd-megamenu-item rd-megamenu-banner">
                          <div className="rd-megamenu-title"><span className="rd-megamenu-text">Buy Recent Releases & Merch</span></div><a className="banner-classic" href="grid-shop.html"><img src="images/banner-1-300x202.jpg" alt="" width="300" height="202"/></a>
                        </li>
                      </ul>
                    </li>
                    <li className="rd-nav-item"><a className="rd-nav-link" href="grid-shop.html">Shop</a>
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="single-product.html">Single Product</a></li>
                        <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="cart-page.html">Cart Page</a></li>
                        <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="checkout.html">Checkout</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="section parallax-container section-custom-1" data-parallax-img="images/bg-image-1.jpg">
        <div className="parallax-content context-dark text-center">
          <div className="section-md">
            <div className="container">
              <div className="box-info-renee-decor"></div>
              <div className="box-info-renee-subtitle wow fadeInLeft">New Album in stores!</div>
              <h1 className="box-info-renee-title wow fadeScale">Bandico</h1><a className="link-classic link-classic-md box-info-renee-link wow fadeInUp" href="#">Buy now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-xxl bg-default">
        <div className="container">
          <div className="row row-30 justify-content-center justify-content-md-between align-items-center">
            <div className="col-sm-7 col-md-4 col-lg-5 col-xl-7">
              <div className="slick-slider-2">
                <div className="slick-slider child-carousel" id="child-carousel-4" data-items="1" data-arrows="true" data-arrows-className=".custom-arrows" data-for="#carousel-parent-4">
                  <div className="item"><img className="rounded-circle" src="images/home-1-333x333.jpg" alt="" width="333" height="333"/>
                  </div>
                  <div className="item"><img className="rounded-circle" src="images/home-2-333x333.jpg" alt="" width="333" height="333"/>
                  </div>
                </div>
                <div className="custom-arrows"></div>
              </div>
            </div>
            <div className="col-md-7 col-lg-6 col-xl-5">
              <div className="slick-slider carousel-parent" id="carousel-parent-4" data-items="1" data-autoplay="true" data-slide-effect="true" data-child="#child-carousel-4" data-for="#child-carousel-4">
                <div className="item">
                  <article className="product-beth">
                    <div className="product-beth-badge">2020</div>
                    <h2 className="product-beth-title"><a href="single-product.html">Bandico Square</a></h2>
                    <div className="player-list">
                      <div className="jp-player-init">
                        <div className="jp-jplayer"></div>
                        <div className="jp-audio jp-audio-0" role="application" aria-label="media player">
                          <ul className="jp-player-list">
                            <li className="jp-player-list-item" data-jp-title="1. Time To Shine" data-jp-artist="" data-jp-mp3="audio/sound-1.mp3"></li>
                          </ul>
                          <div className="jp-interface">
                            <div className="jp-button jp-controls">
                              <button className="jp-btn jp-play" role="button" tabindex="0">play</button>
                            </div>
                            <div className="jp-playlist">
                              <ul>
                                <li> </li>
                              </ul>
                            </div>
                            <div className="jp-time-rail">
                              <div className="jp-progress">
                                <div className="jp-seek-bar">
                                  <div className="jp-play-bar"></div>
                                </div>
                                <div className="jp-time-wrapper">
                                  <div className="jp-duration"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="jp-no-solution"><span>Update Required</span>           To play the media you will need to either update your browser to a recent version or update your<a href="http://get.adobe.com/flashplayer/" target="_blank"> Flash plugin</a>.</div>
                        </div>
                      </div>
                      <div className="jp-player-init">
                        <div className="jp-jplayer"></div>
                        <div className="jp-audio jp-audio-1" role="application" aria-label="media player">
                          <ul className="jp-player-list">
                            <li className="jp-player-list-item" data-jp-title="2. Create Your Future (feat. Jane K)" data-jp-artist="" data-jp-mp3="audio/sound-2.mp3"></li>
                          </ul>
                          <div className="jp-interface">
                            <div className="jp-button jp-controls">
                              <button className="jp-btn jp-play" role="button" tabindex="0">play</button>
                            </div>
                            <div className="jp-playlist">
                              <ul>
                                <li> </li>
                              </ul>
                            </div>
                            <div className="jp-time-rail">
                              <div className="jp-progress">
                                <div className="jp-seek-bar">
                                  <div className="jp-play-bar"></div>
                                </div>
                                <div className="jp-time-wrapper">
                                  <div className="jp-duration"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="jp-no-solution"><span>Update Required</span>           To play the media you will need to either update your browser to a recent version or update your<a href="http://get.adobe.com/flashplayer/" target="_blank"> Flash plugin</a>.</div>
                        </div>
                      </div>
                      <div className="jp-player-init">
                        <div className="jp-jplayer"></div>
                        <div className="jp-audio jp-audio-2" role="application" aria-label="media player">
                          <ul className="jp-player-list">
                            <li className="jp-player-list-item" data-jp-title="3. This City Never Sleeps" data-jp-artist="" data-jp-mp3="audio/sound-1.mp3"></li>
                          </ul>
                          <div className="jp-interface">
                            <div className="jp-button jp-controls">
                              <button className="jp-btn jp-play" role="button" tabindex="0">play</button>
                            </div>
                            <div className="jp-playlist">
                              <ul>
                                <li> </li>
                              </ul>
                            </div>
                            <div className="jp-time-rail">
                              <div className="jp-progress">
                                <div className="jp-seek-bar">
                                  <div className="jp-play-bar"></div>
                                </div>
                                <div className="jp-time-wrapper">
                                  <div className="jp-duration"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="jp-no-solution"><span>Update Required</span>           To play the media you will need to either update your browser to a recent version or update your<a href="http://get.adobe.com/flashplayer/" target="_blank"> Flash plugin</a>.</div>
                        </div>
                      </div>
                      <div className="jp-player-init">
                        <div className="jp-jplayer"></div>
                        <div className="jp-audio jp-audio-3" role="application" aria-label="media player">
                          <ul className="jp-player-list">
                            <li className="jp-player-list-item" data-jp-title="4. A Call From Bandico Square " data-jp-artist="" data-jp-mp3="audio/sound-3.mp3"></li>
                          </ul>
                          <div className="jp-interface">
                            <div className="jp-button jp-controls">
                              <button className="jp-btn jp-play" role="button" tabindex="0">play</button>
                            </div>
                            <div className="jp-playlist">
                              <ul>
                                <li> </li>
                              </ul>
                            </div>
                            <div className="jp-time-rail">
                              <div className="jp-progress">
                                <div className="jp-seek-bar">
                                  <div className="jp-play-bar"></div>
                                </div>
                                <div className="jp-time-wrapper">
                                  <div className="jp-duration"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="jp-no-solution"><span>Update Required</span>           To play the media you will need to either update your browser to a recent version or update your<a href="http://get.adobe.com/flashplayer/" target="_blank"> Flash plugin</a>.</div>
                        </div>
                      </div>
                    </div>
                    <div className="group-md group-middle"><a className="button button-gray-800 button-zakaria" href="#">Buy on itunes</a><a className="button button-default-outline button-zakaria" href="#">Buy on amazon</a></div>
                  </article>
                </div>
                <div className="item">
                  <article className="product-beth">
                    <div className="product-beth-badge">2020</div>
                    <h2 className="product-beth-title"><a href="single-product.html">Just a Beginning</a></h2>
                    <div className="player-list">
                      <div className="jp-player-init">
                        <div className="jp-jplayer"></div>
                        <div className="jp-audio jp-audio-4" role="application" aria-label="media player">
                          <ul className="jp-player-list"> 
                            <li className="jp-player-list-item" data-jp-title="1. Better Than Nothing" data-jp-artist="" data-jp-mp3="audio/sound-3.mp3"></li>
                          </ul>
                          <div className="jp-interface">
                            <div className="jp-button jp-controls">
                              <button className="jp-btn jp-play" role="button" tabindex="0">play</button>
                            </div>
                            <div className="jp-playlist">
                              <ul>
                                <li> </li>
                              </ul>
                            </div>
                            <div className="jp-time-rail">
                              <div className="jp-progress">
                                <div className="jp-seek-bar">
                                  <div className="jp-play-bar"></div>
                                </div>
                                <div className="jp-time-wrapper">
                                  <div className="jp-duration"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="jp-no-solution"><span>Update Required</span>           To play the media you will need to either update your browser to a recent version or update your<a href="http://get.adobe.com/flashplayer/" target="_blank"> Flash plugin</a>.</div>
                        </div>
                      </div>
                      <div className="jp-player-init">
                        <div className="jp-jplayer"></div>
                        <div className="jp-audio jp-audio-5" role="application" aria-label="media player">
                          <ul className="jp-player-list">
                            <li className="jp-player-list-item" data-jp-title="2. Totally Unmatched" data-jp-artist="" data-jp-mp3="audio/sound-2.mp3"></li>
                          </ul>
                          <div className="jp-interface">
                            <div className="jp-button jp-controls">
                              <button className="jp-btn jp-play" role="button" tabindex="0">play</button>
                            </div>
                            <div className="jp-playlist">
                              <ul>
                                <li> </li>
                              </ul>
                            </div>
                            <div className="jp-time-rail">
                              <div className="jp-progress">
                                <div className="jp-seek-bar">
                                  <div className="jp-play-bar"></div>
                                </div>
                                <div className="jp-time-wrapper">
                                  <div className="jp-duration"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="jp-no-solution"><span>Update Required</span>           To play the media you will need to either update your browser to a recent version or update your<a href="http://get.adobe.com/flashplayer/" target="_blank"> Flash plugin</a>.</div>
                        </div>
                      </div>
                      <div className="jp-player-init">
                        <div className="jp-jplayer"></div>
                        <div className="jp-audio jp-audio-6" role="application" aria-label="media player">
                          <ul className="jp-player-list">
                            <li className="jp-player-list-item" data-jp-title="3. Welcome To My World (feat. Dangerous Joe)" data-jp-artist="" data-jp-mp3="audio/sound-1.mp3"></li>
                          </ul>
                          <div className="jp-interface">
                            <div className="jp-button jp-controls">
                              <button className="jp-btn jp-play" role="button" tabindex="0">play</button>
                            </div>
                            <div className="jp-playlist">
                              <ul>
                                <li> </li>
                              </ul>
                            </div>
                            <div className="jp-time-rail">
                              <div className="jp-progress">
                                <div className="jp-seek-bar">
                                  <div className="jp-play-bar"></div>
                                </div>
                                <div className="jp-time-wrapper">
                                  <div className="jp-duration"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="jp-no-solution"><span>Update Required</span>           To play the media you will need to either update your browser to a recent version or update your<a href="http://get.adobe.com/flashplayer/" target="_blank"> Flash plugin</a>.</div>
                        </div>
                      </div>
                      <div className="jp-player-init">
                        <div className="jp-jplayer"></div>
                        <div className="jp-audio jp-audio-7" role="application" aria-label="media player">
                          <ul className="jp-player-list">
                            <li className="jp-player-list-item" data-jp-title="4. Never Settle (feat. Mega Squad)" data-jp-artist="" data-jp-mp3="audio/sound-1.mp3"></li>
                          </ul>
                          <div className="jp-interface">
                            <div className="jp-button jp-controls">
                              <button className="jp-btn jp-play" role="button" tabindex="0">play</button>
                            </div>
                            <div className="jp-playlist">
                              <ul>
                                <li> </li>
                              </ul>
                            </div>
                            <div className="jp-time-rail">
                              <div className="jp-progress">
                                <div className="jp-seek-bar">
                                  <div className="jp-play-bar"></div>
                                </div>
                                <div className="jp-time-wrapper">
                                  <div className="jp-duration"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="jp-no-solution"><span>Update Required</span>           To play the media you will need to either update your browser to a recent version or update your<a href="http://get.adobe.com/flashplayer/" target="_blank"> Flash plugin</a>.</div>
                        </div>
                      </div>
                    </div>
                    <div className="group-md group-middle"><a className="button button-gray-800 button-zakaria" href="#">Buy on itunes</a><a className="button button-default-outline button-zakaria" href="#">Buy on amazon</a></div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-xxl text-left context-dark bg-gray-13 bg-image bg-image-4" style={{backgroundImage: "url(images/bg-about-1.jpg)"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 col-lg-6 box-about">
              <h2 className="title-style-9 wow fadeInRight">A few Words <span>About </span> Bandico
              </h2>
              <p className="wow fadeInRight" data-wow-delay=".1s">Daniel Bandico, better known by his stage name Bandico, is a 27 y.o. singer and rapper, born and raised in Los Angeles.</p>
              <p className="wow fadeInRight" data-wow-delay=".2s">He broke into music scene with his first mixtape M.A.D, released in June 2015. Since then, he has been building his career as R&B performer with numerous releases.</p><img src="images/signature-2-230x78.png" alt="" width="230" height="78"/>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-xxl bg-gray-1">
        <div className="container">
          <h2 className="wow fadeScale">Discography</h2>
          <div className="row row-30">
            <div className="col-sm-6 col-lg-4">
              <article className="thumbnail-classic">
                <div className="thumbnail-classic-figure"><img src="images/home-1-370x315.jpg" alt="" width="370" height="315"/>
                </div>
                <div className="thumbnail-classic-caption">
                  <div>
                    <h5 className="thumbnail-classic-title"><a href="#">Basixx EP</a></h5>
                    <div className="thumbnail-classic-price">2020</div>
                    <div className="thumbnail-classic-button-wrap">
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-google-play"></span></a></div>
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-apple"></span></a></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4">
              <article className="thumbnail-classic">
                <div className="thumbnail-classic-figure"><img src="images/home-2-370x315.jpg" alt="" width="370" height="315"/>
                </div>
                <div className="thumbnail-classic-caption">
                  <div>
                    <h5 className="thumbnail-classic-title"><a href="#">Bandico Square</a></h5>
                    <div className="thumbnail-classic-price">2020</div>
                    <div className="thumbnail-classic-button-wrap">
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-google-play"></span></a></div>
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-apple"></span></a></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4">
              <article className="thumbnail-classic">
                <div className="thumbnail-classic-figure"><img src="images/home-3-370x315.jpg" alt="" width="370" height="315"/>
                </div>
                <div className="thumbnail-classic-caption">
                  <div>
                    <h5 className="thumbnail-classic-title"><a href="#">just a Beginning</a></h5>
                    <div className="thumbnail-classic-price">2018</div>
                    <div className="thumbnail-classic-button-wrap">
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-google-play"></span></a></div>
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-apple"></span></a></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4">
              <article className="thumbnail-classic">
                <div className="thumbnail-classic-figure"><img src="images/home-4-370x315.jpg" alt="" width="370" height="315"/>
                </div>
                <div className="thumbnail-classic-caption">
                  <div>
                    <h5 className="thumbnail-classic-title"><a href="#">sounds of the Streets</a></h5>
                    <div className="thumbnail-classic-price">2017</div>
                    <div className="thumbnail-classic-button-wrap">
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-google-play"></span></a></div>
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-apple"></span></a></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4">
              <article className="thumbnail-classic">
                <div className="thumbnail-classic-figure"><img src="images/home-5-370x315.jpg" alt="" width="370" height="315"/>
                </div>
                <div className="thumbnail-classic-caption">
                  <div>
                    <h5 className="thumbnail-classic-title"><a href="#">Stay Wild</a></h5>
                    <div className="thumbnail-classic-price">2016</div>
                    <div className="thumbnail-classic-button-wrap">
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-google-play"></span></a></div>
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-apple"></span></a></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4">
              <article className="thumbnail-classic">
                <div className="thumbnail-classic-figure"><img src="images/home-6-370x315.jpg" alt="" width="370" height="315"/>
                </div>
                <div className="thumbnail-classic-caption">
                  <div>
                    <h5 className="thumbnail-classic-title"><a href="#">M.A.D</a></h5>
                    <div className="thumbnail-classic-price">2015</div>
                    <div className="thumbnail-classic-button-wrap">
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-google-play"></span></a></div>
                      <div className="thumbnail-classic-button"><a className="button button-white" href="#"><span className="mdi mdi-apple"></span></a></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-xxl text-sm-left bg-image-5 context-dark section-relative">
        <div className="container">
          <div className="row row-30 justify-content-center justify-content-sm-end">
            <div className="col-12 d-sm-none"><img src="images/image-1-1010x608.jpg" alt="" width="1010" height="608"/>
            </div>
            <div className="col-sm-6 col-md-5">
              <article className="box-info-beryl">
                <h2 className="box-info-beryl-title wow fadeInRight">upcoming event</h2>
                <div className="heading-2 text-primary box-info-beryl-time wow fadeInRight" data-wow-delay=".1s">
                  <time datetime="2020-05-05">jun 17</time>
                </div>
                <p className="box-info-beryl-text wow fadeInRight" data-wow-delay=".2s">Join the presentation of Bandico’s latest release at Omegaforce Club in Los Angeles. Buy tickets now to listen to new & famous hits by Bandico performed live.</p><a className="button button-white button-zakaria wow fadeInUp" href="#">buy tickets</a>
              </article>
            </div>
          </div>
        </div>
        <div className="bg-image bg-image-7"></div>
        <div className="bg-image-6"></div>
      </section>

      <section className="section section-xxl bg-default">
        <div className="container">
          <h2 className="wow fadeScale">Tour Gallery</h2>
          <div className="isotope-wrap">
            <div className="row row-30 isotope isotope-custom-1" data-lightgallery="group">
              <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
                <article className="thumbnail-classic">
                  <div className="thumbnail-classic-figure"><img src="images/masonry-gallery-1-270x250.jpg" alt="" width="270" height="250"/>
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="#">Balaton Sound 2020</a></h5>
                      <div className="thumbnail-classic-price">September 2020</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button"><a className="button button-white fl-bigmug-line-search74" href="images/masonry-gallery-1-1200x800-original.jpg" data-lightgallery="item"><img src="images/masonry-gallery-1-270x250.jpg" alt="" width="270" height="250"/></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 2">
                <article className="thumbnail-classic">
                  <div className="thumbnail-classic-figure"><img src="images/masonry-gallery-2-270x530.jpg" alt="" width="270" height="530"/>
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="#">Wireless Festival</a></h5>
                      <div className="thumbnail-classic-price">March 2020</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button"><a className="button button-white fl-bigmug-line-search74" href="images/masonry-gallery-2-1200x800-original.jpg" data-lightgallery="item"><img src="images/masonry-gallery-2-270x530.jpg" alt="" width="270" height="530"/></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
                <article className="thumbnail-classic">
                  <div className="thumbnail-classic-figure"><img src="images/masonry-gallery-3-270x250.jpg" alt="" width="270" height="250"/>
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="#">urban Dance Festival</a></h5>
                      <div className="thumbnail-classic-price">may 2020</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button"><a className="button button-white fl-bigmug-line-search74" href="images/masonry-gallery-3-1200x800-original.jpg" data-lightgallery="item"><img src="images/masonry-gallery-3-270x250.jpg" alt="" width="270" height="250"/></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 2">
                <article className="thumbnail-classic">
                  <div className="thumbnail-classic-figure"><img src="images/masonry-gallery-4-270x250.jpg" alt="" width="270" height="250"/>
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="#">Bandico Square tour</a></h5>
                      <div className="thumbnail-classic-price">may 2020</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button"><a className="button button-white fl-bigmug-line-search74" href="images/masonry-gallery-4-1200x800-original.jpg" data-lightgallery="item"><img src="images/masonry-gallery-4-270x250.jpg" alt="" width="270" height="250"/></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
                <article className="thumbnail-classic">
                  <div className="thumbnail-classic-figure"><img src="images/masonry-gallery-5-270x250.jpg" alt="" width="270" height="250"/>
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="#">Resistance Festival</a></h5>
                      <div className="thumbnail-classic-price">January 2020</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button"><a className="button button-white fl-bigmug-line-search74" href="images/masonry-gallery-5-1200x800-original.jpg" data-lightgallery="item"><img src="images/masonry-gallery-5-270x250.jpg" alt="" width="270" height="250"/></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-6 isotope-item" data-filter="Type 2">
                <article className="thumbnail-classic">
                  <div className="thumbnail-classic-figure"><img src="images/masonry-gallery-6-570x530.jpg" alt="" width="570" height="530"/>
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="#">Shake the city (world tour)</a></h5>
                      <div className="thumbnail-classic-price">March-April 2020</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button"><a className="button button-white fl-bigmug-line-search74" href="images/grid-fullwidth-gallery-2-1200x800-original.jpg" data-lightgallery="item"><img src="images/masonry-gallery-6-570x530.jpg" alt="" width="570" height="530"/></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-8 col-xl-6 isotope-item" data-filter="Type 1">
                <article className="thumbnail-classic">
                  <div className="thumbnail-classic-figure"><img src="images/masonry-gallery-7-570x250.jpg" alt="" width="570" height="250"/>
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="#">No Limits (European tour)</a></h5>
                      <div className="thumbnail-classic-price">February 2020</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button"><a className="button button-white fl-bigmug-line-search74" href="images/masonry-gallery-7-1200x800-original.jpg" data-lightgallery="item"><img src="images/masonry-gallery-7-570x250.jpg" alt="" width="570" height="250"/></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-xxl bg-dark context-dark">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="swiper-container swiper-slider swiper-slider-custom swiper-slider-5 swiper-scrollbar-1" data-autoplay="5000" data-margin="40" data-slides="auto" data-direction="vertical" data-simulate-touch="true" data-mousewheel="true">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <article className="event-classic">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch"><a className="event-classic-figure" href="#"><img className="event-classic-image" src="images/event-1-385x392.jpg" alt="" width="385" height="392"/></a></div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time className="event-classic-time" datetime="2020-08-11"><span className="event-classic-date">11</span><span className="event-classic-month">Aug</span><span className="event-classic-hours">Sunday</span></time>
                          </div>
                          <div className="unit-body">
                            <h3 className="event-classic-title"><a href="#">Bandico at Equinox Club</a></h3>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price"><span className="icon fa fa-ticket"></span><span>Pre-sale: 08.00 AM, May 15</span></li>
                              <li className="event-classic-location"><span className="icon fa fa-location-arrow"></span><a href="#">Seattle, WA</a></li>
                            </ul>
                            <p className="event-classic-text">Join the stunning performance of Bandico’s latest hits at Equinox Club in Seattle next Sunday with special guests - Dangerous Joe and Jane K. </p><a className="link-classic event-classic-link" href="#">buy tickets</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article className="event-classic">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch"><a className="event-classic-figure" href="#"><img className="event-classic-image" src="images/event-2-385x392.jpg" alt="" width="385" height="392"/></a></div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time className="event-classic-time" datetime="2020-08-18"><span className="event-classic-date">05</span><span className="event-classic-month">jul</span><span className="event-classic-hours">Friday</span></time>
                          </div>
                          <div className="unit-body">
                            <h3 className="event-classic-title"><a href="#">Echelon Festival</a></h3>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price"><span className="icon fa fa-ticket"></span><span>Pre-sale: 11.00 AM, April 11</span></li>
                              <li className="event-classic-location"><span className="icon fa fa-location-arrow"></span><a href="#">Paris, France</a></li>
                            </ul>
                            <p className="event-classic-text">Meet Bandico at Echelon Festival’s Urban Stage this July. Buy your ticket now to hear his latest hits at one of the biggest European music events.</p><a className="link-classic event-classic-link" href="#">buy tickets</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article className="event-classic">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch"><a className="event-classic-figure" href="#"><img className="event-classic-image" src="images/event-3-385x392.jpg" alt="" width="385" height="392"/></a></div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time className="event-classic-time" datetime="2020-08-15"><span className="event-classic-date">23</span><span className="event-classic-month">jun</span><span className="event-classic-hours">Sunday</span></time>
                          </div>
                          <div className="unit-body">
                            <h3 className="event-classic-title"><a href="#">Basixx tour</a></h3>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price"><span className="icon fa fa-ticket"></span><span>Pre-sale: 01.00 PM, March 12</span></li>
                              <li className="event-classic-location"><span className="icon fa fa-location-arrow"></span><a href="#">Las Vegas, NV</a></li>
                            </ul>
                            <p className="event-classic-text">Bandico, the rising talent of American R&amp;B, is going on tour this summer in support of his latest release “Basixx EP” with a unique live show.</p><a className="link-classic event-classic-link" href="#">buy tickets</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article className="event-classic">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch"><a className="event-classic-figure" href="#"><img className="event-classic-image" src="images/event-1-385x392.jpg" alt="" width="385" height="392"/></a></div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time className="event-classic-time" datetime="2020-08-11"><span className="event-classic-date">11</span><span className="event-classic-month">Aug</span><span className="event-classic-hours">Sunday</span></time>
                          </div>
                          <div className="unit-body">
                            <h3 className="event-classic-title"><a href="#">Bandico at Equinox Club</a></h3>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price"><span className="icon fa fa-ticket"></span><span>Pre-sale: 08.00 AM, May 15</span></li>
                              <li className="event-classic-location"><span className="icon fa fa-location-arrow"></span><a href="#">Seattle, WA</a></li>
                            </ul>
                            <p className="event-classic-text">Join the stunning performance of Bandico’s latest hits at Equinox Club in Seattle next Sunday with special guests - Dangerous Joe and Jane K. </p><a className="link-classic event-classic-link" href="#">buy tickets</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article className="event-classic">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch"><a className="event-classic-figure" href="#"><img className="event-classic-image" src="images/event-2-385x392.jpg" alt="" width="385" height="392"/></a></div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time className="event-classic-time" datetime="2020-08-18"><span className="event-classic-date">05</span><span className="event-classic-month">jul</span><span className="event-classic-hours">Friday</span></time>
                          </div>
                          <div className="unit-body">
                            <h3 className="event-classic-title"><a href="#">Echelon Festival</a></h3>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price"><span className="icon fa fa-ticket"></span><span>Pre-sale: 11.00 AM, April 11</span></li>
                              <li className="event-classic-location"><span className="icon fa fa-location-arrow"></span><a href="#">Paris, France</a></li>
                            </ul>
                            <p className="event-classic-text">Meet Bandico at Echelon Festival’s Urban Stage this July. Buy your ticket now to hear his latest hits at one of the biggest European music events.</p><a className="link-classic event-classic-link" href="#">buy tickets</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article className="event-classic">
                  <div className="unit unit-spacing-0 flex-column flex-sm-row align-items-sm-center">
                    <div className="unit-left align-self-stretch"><a className="event-classic-figure" href="#"><img className="event-classic-image" src="images/event-3-385x392.jpg" alt="" width="385" height="392"/></a></div>
                    <div className="unit-body flex-grow-1">
                      <div className="event-classic-body">
                        <div className="unit unit-spacing-sm flex-column flex-md-row-reverse justify-content-md-between">
                          <div className="unit-left">
                            <time className="event-classic-time" datetime="2020-08-15"><span className="event-classic-date">23</span><span className="event-classic-month">jun</span><span className="event-classic-hours">Sunday</span></time>
                          </div>
                          <div className="unit-body">
                            <h3 className="event-classic-title"><a href="#">Basixx tour</a></h3>
                            <ul className="event-classic-panel">
                              <li className="event-classic-price"><span className="icon fa fa-ticket"></span><span>Pre-sale: 01.00 PM, March 12</span></li>
                              <li className="event-classic-location"><span className="icon fa fa-location-arrow"></span><a href="#">Las Vegas, NV</a></li>
                            </ul>
                            <p className="event-classic-text">Bandico, the rising talent of American R&amp;B, is going on tour this summer in support of his latest release “Basixx EP” with a unique live show.</p><a className="link-classic event-classic-link" href="#">buy tickets</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide swiper-slide-last"></div>
            </div>
            <div className="swiper-scrollbar"></div>
          </div>
          <div className="row">
            <div className="col-12"><a className="button button-gray-144" href="events.html">View All Events</a></div>
          </div>
        </div>
      </section>

      <section className="section section-xxl bg-default">
        <div className="container">
          <div className="form-style-1">
            <h2 className="title-style-10 wow fadeScale">Join Our <span>News</span>letter</h2>
            <form className="rd-form rd-mailform rd-form-text-center" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
              <div className="form-wrap wow fadeInUp">
                <input className="form-input" id="subscribe-form-1-email" type="email" name="email" data-constraints="@Email @Required" />
                <label className="form-label" for="subscribe-form-1-email">Enter Your E-mail</label>
              </div>
              <div className="form-button wow fadeInUp" data-wow-delay=".1s">
                <button className="button button-gray-800 button-zakaria" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section section-xxl bg-default">
        <div className="container">
          <div className="row no-gutters" data-lightgallery="group">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box-info-rose">
                <h3 className="box-info-rose-title">Become a fan</h3>
                <div className="unit flex-column flex-md-row unit-spacing-sm">
                  <div className="unit-left"><span className="box-info-rose-icon fa-instagram"></span></div>
                  <div className="unit-body">
                    <h2 className="box-info-rose-number">1.2M</h2>
                    <div className="box-info-rose-author">Followers</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3"><a className="thumbnail-minimal" href="images/grid-gallery-1-1200x800-original.jpg" data-lightgallery="item"><img src="images/grid-gallery-1-290x219.jpg" alt="" width="290" height="219"/></a></div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3"><a className="thumbnail-minimal" href="images/grid-gallery-2-2-1200x800-original.jpg" data-lightgallery="item"><img src="images/grid-gallery-2-290x219.jpg" alt="" width="290" height="219"/></a></div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3"><a className="thumbnail-minimal" href="images/grid-gallery-3-3-1200x800-original.jpg" data-lightgallery="item"><img src="images/grid-gallery-3-290x219.jpg" alt="" width="290" height="219"/></a></div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3"><a className="thumbnail-minimal" href="images/grid-gallery-4-1200x800-original.jpg" data-lightgallery="item"><img src="images/grid-gallery-4-290x219.jpg" alt="" width="290" height="219"/></a></div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3"><a className="thumbnail-minimal" href="images/grid-gallery-5-1200x800-original.jpg" data-lightgallery="item"><img src="images/grid-gallery-5-290x219.jpg" alt="" width="290" height="219"/></a></div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3"><a className="thumbnail-minimal" href="images/grid-gallery-6-1200x800-original.jpg" data-lightgallery="item"><img src="images/grid-gallery-6-290x219.jpg" alt="" width="290" height="219"/></a></div>
            <div className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center">
              <div className="box-info-rose-2">
                <h6 className="box-info-rose-text">instagram</h6><a className="link-classic link-primary" href="#">+ join now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-xxl bg-gray-1">
        <div className="container">
          <h2 className="wow fadeScale">Exclusive Merch</h2>
          <div className="row row-lg row-30 row-lg-50">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <article className="product wow fadeInRight">
                <div className="product-body">
                  <div className="product-figure"><img src="images/index-1-270x260.jpg" alt="" width="270" height="260"/>
                  </div>
                  <h5 className="product-title"><a href="single-product.html">Stay Wild men’s T-Shirt</a></h5>
                  <div className="product-price-wrap">
                    <div className="product-price">$18.00</div>
                  </div>
                </div>
                <div className="product-button-wrap">
                  <div className="product-button"><a className="button button-gray-14 button-zakaria fl-bigmug-line-search74" href="single-product.html"></a></div>
                  <div className="product-button"><a className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202" href="cart-page.html"></a></div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <article className="product wow fadeInRight" data-wow-delay=".1s">
                <div className="product-body">
                  <div className="product-figure"><img src="images/index-2-270x260.jpg" alt="" width="270" height="260"/>
                  </div>
                  <h5 className="product-title"><a href="single-product.html">Bandico Baseball Hat</a></h5>
                  <div className="product-price-wrap">
                    <div className="product-price">$23.00</div>
                  </div>
                </div>
                <div className="product-button-wrap">
                  <div className="product-button"><a className="button button-gray-14 button-zakaria fl-bigmug-line-search74" href="single-product.html"></a></div>
                  <div className="product-button"><a className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202" href="cart-page.html"></a></div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <article className="product wow fadeInRight" data-wow-delay=".2s">
                <div className="product-body">
                  <div className="product-figure"><img src="images/index-3-270x260.jpg" alt="" width="270" height="260"/>
                  </div>
                  <h5 className="product-title"><a href="single-product.html">Stay wild ladies T-Shirt</a></h5>
                  <div className="product-price-wrap">
                    <div className="product-price">$20.00</div>
                  </div>
                </div>
                <div className="product-button-wrap">
                  <div className="product-button"><a className="button button-gray-14 button-zakaria fl-bigmug-line-search74" href="single-product.html"></a></div>
                  <div className="product-button"><a className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202" href="cart-page.html"></a></div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <article className="product wow fadeInRight" data-wow-delay=".3s">
                <div className="product-body">
                  <div className="product-figure"><img src="images/index-4-270x260.jpg" alt="" width="270" height="260"/>
                  </div>
                  <h5 className="product-title"><a href="single-product.html">M.A.D Classic T-Shirt</a></h5>
                  <div className="product-price-wrap">
                    <div className="product-price">$16.00</div>
                  </div>
                </div>
                <div className="product-button-wrap">
                  <div className="product-button"><a className="button button-gray-14 button-zakaria fl-bigmug-line-search74" href="single-product.html"></a></div>
                  <div className="product-button"><a className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202" href="cart-page.html"></a></div>
                </div>
              </article>
            </div>
            <div className="col-12"><a className="link-classic link-primary wow fadeInUp" href="grid-shop.html">visit the shop</a></div>
          </div>
        </div>
      </section>

      <footer className="section footer-creative footer-creative-2">
        <div className="footer-classic-body section-xl context-dark">
          <div className="container">
            <div className="row row-40 row-md-50 justify-content-sm-between">
              <div className="col-lg-5 wow fadeInRight">
                <div className="inset-xl-right-55">
                  <h4 className="footer-creative-title">About us</h4>
                  <p>Bandico is a young and talented R&amp;B singer and rapper, hailing from Los Angeles, CA. His unique style is a blend of underground hip-hop and modern R&amp;B that has already brought him a huge success and national recognition.</p>
                  <div className="group-sm group-middle"><a className="button button-shadow-2 button-gray-800 button-zakaria" href="grid-fullwidth-gallery.html">View albums</a><a className="button button-shadow-2 button-white button-zakaria" href="grid-blog.html">View events</a></div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 wow fadeInRight" data-wow-delay=".1s">
                <h4 className="footer-creative-title">Contacts</h4>
                <ul className="contacts-holly">
                  <li>
                    <div className="contacts-holly-title">Phone</div>
                    <div className="contacts-holly-text"><a href="tel:#">+1 (844) 123 456 78</a></div>
                  </li>
                  <li>
                    <div className="contacts-holly-title">Address</div>
                    <div className="contacts-holly-text"><a href="#">523 Sylvan Ave, 5th Floor<br/>Mountain View, CA 94041 USA</a></div>
                  </li>
                  <li>
                    <div className="contacts-holly-title">E-mail</div>
                    <div className="contacts-holly-text"><a href="mailto:#">info@demolink.org</a></div>
                  </li>
                </ul>
              </div>
              <div className="col-sm-5 col-lg-2 wow fadeInRight" data-wow-delay=".2s">
                <h4 className="footer-creative-title">Menu</h4>
                <ul className="footer-creative-list">
                  <li><a href="bio.html">About Bandico</a></li>
                  <li><a href="discography.html">Discography</a></li>
                  <li><a href="discography.html">Gallery</a></li>
                  <li><a href="events.html">Events</a></li>
                  <li><a href="contacts.html">Contacts</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-creative-panel">
          <div className="container">
            <div className="row row-10 align-items-center justify-content-sm-between">
              <div className="col-sm-auto">
                <p className="rights"><span>&copy;&nbsp; </span><span className="copyright-year"></span><span>&nbsp;</span><span>Bandico</span><span>.&nbsp; All rights reserved.</span><span>&nbsp;</span><a href="privacy-policy.html">Privacy Policy</a>.</p>
              </div>
              <div className="col-sm-auto">
                <ul className="list-inline list-social list-inline-sm">
                  <li><a className="icon mdi mdi-facebook" href="#"></a></li>
                  <li><a className="icon mdi mdi-twitter" href="#"></a></li>
                  <li><a className="icon mdi mdi-instagram" href="#"></a></li>
                  <li><a className="icon mdi mdi-google-plus" href="#"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default App;
