import React from "react"
// import { Link } from "gatsby"
// import Header from "../components/header"

export default () => (
    <React.Fragment>
        <div>
            {/* <div> Hello world!</div >
        <Link to='/contact/'>Contact</Link>
        <Header headerText='Hi, Im Dom' /> */}
            {/* <div class="preloader">
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div> */}

            <div id="wrapper" class="wrapper clearfix">
                <header id="navbar-spy" class="header header-topbar header-transparent header-fixed">
                    <div id="top-bar" class="top-bar">
                        <div class="container">
                            <div class="bottom-bar-border">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-6 top--contact hidden-xs">
                                        <ul class="list-inline mb-0 ">
                                            <li>
                                                <i class="lnr lnr-clock"></i><span>Mon - Fri  9.00 : 17.00</span>
                                            </li>
                                            <li>
                                                <i class="lnr lnr-phone-handset"></i> <span>(04) 491 570 110</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- .col-md-6 end --> */}
                                    <div class="col-xs-12 col-sm-6 col-md-6 top--info text-right text-center-xs">
                                        <span class="top--login"><i class="lnr lnr-exit"></i><a href="#">Login</a> / <a href="#">Register</a></span>
                                        <span class="top--social">
                                            <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
                                            <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                                            <a class="gplus" href="#"><i class="fa fa-google-plus"></i></a>
                                            <a class="instagram" href="#"><i class="fa fa-instagram"></i></a>
                                        </span>
                                    </div>
                                    {/* <!-- .col-md-6 end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav id="primary-menu" class="navbar navbar-fixed-top">
                        <div class="container">
                            <div class="">
                                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    <a class="logo" href="index-2.html">
                                        <img class="logo-light" src="http://demo.zytheme.com/hairy/assets/images/logo/logo-light.png" alt="Hairy Logo" />
                                        <img class="logo-dark" src="http://demo.zytheme.com/hairy/assets/images/logo/logo-light.png" alt="Hairy Logo" />
                                    </a>
                                </div>

                                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                                <div class="collapse navbar-collapse pull-right" id="navbar-collapse-1">
                                    <ul class="nav navbar-nav nav-pos-right nav-bordered-right snavbar-left">
                                        {/* <!-- Home Menu --> */}
                                        <li class="has-dropdown active">
                                            <a href="#" data-toggle="dropdown" class="dropdown-toggle menu-item">home</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="index-2.html">homepage 1</a></li>
                                                <li><a href="homepage-2.html">homepage 2</a></li>
                                                <li><a href="homepage-3.html">homepage 3</a></li>
                                                <li><a href="landing.html">landing</a></li>
                                            </ul>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- Pages Menu --> */}
                                        <li class="has-dropdown">
                                            <a href="#" data-toggle="dropdown" class="dropdown-toggle link-hover" data-hover="pages">pages</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="page-about-us.html">about us</a></li>
                                                <li><a href="page-book-online.html">book online</a></li>
                                                <li><a href="page-our-staff.html">our staff</a></li>
                                                <li><a href="page-services.html">our services</a></li>
                                                <li><a href="page-contact.html">contact us</a></li>
                                                <li><a href="page-404.html">404</a></li>
                                            </ul>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- Features Menu--> */}
                                        <li class="has-dropdown">
                                            <a href="#" data-toggle="dropdown" class="dropdown-toggle menu-item">elements</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="elements-buttons.html">buttons</a></li>
                                                <li><a href="elements-columns-grids.html">grid system</a></li>
                                                <li><a href="elements-typography.html">typography</a></li>
                                                <li><a href="elements-form.html">forms</a></li>
                                                <li><a href="elements-heading.html">heading</a></li>
                                            </ul>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- Gallery Menu--> */}
                                        <li class="has-dropdown">
                                            <a href="#" data-toggle="dropdown" class="dropdown-toggle menu-item">Gallery</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="gallery-3cols.html">gallery 3 columns</a></li>
                                                <li><a href="gallery-4cols.html">gallery 4 columns</a></li>
                                                <li><a href="gallery-masonry.html">gallery masonry</a></li>
                                                <li><a href="gallery-single-images.html">single images</a></li>
                                                <li><a href="gallery-single-slider.html">single slider</a></li>
                                            </ul>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- Blog Menu--> */}
                                        <li class="has-dropdown">
                                            <a href="#" data-toggle="dropdown" class="dropdown-toggle menu-item">Blog</a>
                                            <ul class="dropdown-menu">
                                                <li class="dropdown-submenu">
                                                    <a href="#" data-toggle="dropdown" class="dropdown-toggle">blog grid</a>
                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <a href="blog-grid.html">fullwidth</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-grid-sidebar-left.html">left sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-grid-sidebar-right.html">right sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown-submenu">
                                                    <a href="#" data-toggle="dropdown" class="dropdown-toggle">blog masonry</a>
                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <a href="blog-masonry.html">fullwidth</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-masonry-sidebar-left.html">left sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-masonry-sidebar-right.html">right sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown-submenu">
                                                    <a href="#" data-toggle="dropdown" class="dropdown-toggle">blog standard</a>
                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <a href="blog-standard-sidebar-left.html">left sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-standard-sidebar-right.html">right sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="blog-single.html">blog single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <!-- li end --> */}
                                        {/* <!-- shop Menu --> */}
                                        <li class="has-dropdown">
                                            <a href="#" data-toggle="dropdown" class="dropdown-toggle menu-item">shop</a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a href="shop-3columns.html">shop 3 columns</a>
                                                </li>
                                                <li>
                                                    <a href="shop-4columns.html">shop 4 columns</a>
                                                </li>
                                                <li>
                                                    <a href="shop-sidebar-left.html">shop products LS</a>
                                                </li>
                                                <li>
                                                    <a href="shop-sidebar-right.html">shop products RS</a>
                                                </li>
                                                <li>
                                                    <a href="shop-single.html">shop single</a>
                                                </li>
                                                <li>
                                                    <a href="shop-cart.html">shop cart</a>
                                                </li>
                                                <li>
                                                    <a href="shop-checkout.html">shop checkout</a>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* <!-- li end --> */}
                                    </ul>
                                    {/* <!-- Module Cart --> */}
                                    <div class="module module-cart pull-left">
                                        <div class="module-icon cart-icon">
                                            <i class="lnr lnr-store"></i>
                                            <span class="title">shop cart</span>
                                            <label class="module-label">2</label>
                                        </div>
                                        <div class="module-content module-box cart-box">
                                            <div class="cart-overview">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <a href="#">
                                                            <img class="img-responsive" src="http://demo.zytheme.com/hairy/assets/images/shop/thumb/1.jpg" alt="product" />
                                                        </a>
                                                        <div class="product-meta">
                                                            <h5 class="product-title"><a href="#">Gel Cream</a></h5>
                                                            <p class="product-price">1 × $7.50</p>
                                                        </div>
                                                        <a class="cart-cancel" href="#">cancel</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img class="img-responsive" src="http://demo.zytheme.com/hairy/assets/images/shop/thumb/2.jpg" alt="product" />
                                                        </a>
                                                        <div class="product-meta">
                                                            <h5 class="product-title"><a href="#">Hair Dryer</a></h5>
                                                            <p class="product-price">2 × $35.00</p>
                                                        </div>
                                                        <a class="cart-cancel" href="#">cancel</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img class="img-responsive" src="http://demo.zytheme.com/hairy/assets/images/shop/thumb/3.jpg" alt="product" />
                                                        </a>
                                                        <div class="product-meta">
                                                            <h5 class="product-title"><a href="#">Beard Razor</a></h5>
                                                            <p class="product-price">1 × $39.00</p>
                                                        </div>
                                                        <a class="cart-cancel" href="#">cancel</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cart-total">
                                                <div class="total-desc">
                                                    Subtotal:
            </div>
                                                <div class="total-price">
                                                    $100.50
            </div>
                                            </div>
                                            <div class="clearfix">
                                            </div>
                                            <div class="cart--control">
                                                <a class="btn btn--primary btn--bordered btn--rounded btn--block" href="#">View Cart & Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- .module-cart end --> */}
                                    {/* <!-- Module Search --> */}
                                    <div class="module module-search pull-left">
                                        <div class="module-icon search-icon">
                                            <i class="lnr lnr-magnifier"></i>
                                            <span class="title">search</span>
                                        </div>
                                        <div class="module-content module-fullscreen module--search-box">
                                            <div class="pos-vertical-center">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                                                            <form class="form-search">
                                                                <input type="text" class="form-control" placeholder="Search.." />
                                                                <button class="btn" type="button"><i class="lnr lnr-magnifier"></i></button>
                                                            </form>
                                                            {/* <!-- .form-search end --> */}
                                                        </div>
                                                        {/* <!-- .col-md-8 end --> */}
                                                    </div>
                                                    {/* <!-- .row end --> */}
                                                </div>
                                                {/* <!-- .container end --> */}
                                            </div>
                                            <a class="module-cancel" href="#"><i class="lnr lnr-cross"></i></a>
                                        </div>
                                    </div>
                                    {/* <!-- .module-search end --> */}
                                    {/* <!-- Module Cart --> */}
                                    <div class="module module-cart pull-left">
                                        <div class="module-icon">
                                            <a class="btn btn--white btn--bordered btn--rounded" href="#">Book Online</a>
                                        </div>
                                    </div>
                                    {/* <!-- .module-cart end --> */}
                                </div>
                                {/* <!-- /.navbar-collapse --> */}
                            </div>
                        </div>
                        {/* <!-- /.container-fluid --> */}
                    </nav>
                </header>

                {/* <!-- Slider #1============================================= --> */}
                <section id="slider" class="carousel slider slider-navs" data-slide="1" data-slide-rs="1" data-autoplay="false" data-nav="true" data-dots="true" data-space="0" data-loop="true" data-speed="800">

                    {/* <!-- Slide #1 --> */}
                    <div class="slide--item bg-overlay bg-overlay-dark">
                        <div class="bg-section">
                            <img src="http://demo.zytheme.com/hairy/assets/images/sliders/slide-bg/1.jpg" alt="background" />
                        </div>
                        <div class="pos-vertical-center">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 text--center">
                                        <div class="slide--headline">We Will Make You Stylish</div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 text--center">
                                        <div class="slide--bio">Preparing your money is a daunting challenge for today's investors and will give you a complete account of the system. </div>
                                        <div class="slide-action">
                                            <a class="btn btn--primary btn--rounded" href="#">Read More </a>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- .row end --> */}
                            </div>
                            {/* <!-- .container end --> */}
                        </div>
                    </div>
                    {/* <!-- .slide-item end --> */}

                    {/* <!-- Slide #2 --> */}
                    <div class="slide--item bg-overlay bg-overlay-dark">
                        <div class="bg-section">
                            <img src="http://demo.zytheme.com/hairy/assets/images/sliders/slide-bg/2.jpg" alt="background" />
                        </div>
                        <div class="pos-vertical-center">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 text--center">
                                        <div class="slide--headline">We make amazing haircuts</div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 text--center">
                                        <div class="slide--bio">Preparing your money is a daunting challenge for today's investors and will give you a complete account of the system.</div>
                                        <div class="slide-action">
                                            <a class="btn btn--secondary btn--white btn--rounded mr-10" href="#">Read More </a>
                                            <a class="btn btn--white btn--bordered btn--rounded" href="#">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .row end --> */}
                            </div>
                            {/* <!-- .container end --> */}
                        </div>
                    </div>
                    {/* <!-- .slide-item end --> */}

                    {/* <!-- Slide #3 --> */}
                    <div class="slide--item bg-overlay bg-overlay-dark">
                        <div class="bg-section">
                            <img src="http://demo.zytheme.com/hairy/assets/images/sliders/slide-bg/3.jpg" alt="background" />
                        </div>
                        <div class="pos-vertical-center">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 text--center">
                                        <div class="slide--headline">our clients trust us</div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 text--center">
                                        <div class="slide--bio">Preparing your money is a daunting challenge for today's investors and will give you a complete account of the system.</div>
                                        <div class="slide-action">
                                            <a class="btn btn--secondary btn--white btn--rounded mr-10" href="#">Read More </a>
                                            <a class="btn btn--white btn--bordered btn--rounded" href="#">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .row end --> */}
                            </div>
                            {/* <!-- .container end --> */}
                        </div>
                    </div>
                    {/* <!-- .slide-item end --> */}

                </section>
                {/* <!-- #slider end --> */}

                {/* <!-- Services #1============================================= --> */}
                <section id="service1" class="services services-2 text-center bg-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                                <div class="heading text--center mb-80">
                                    <h2 class="heading--title">What We Do?</h2>
                                    <p class="heading--desc">Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.</p>
                                    <div class="divider--line"></div>
                                </div>
                            </div>
                            {/* <!-- .col-md-6 end --> */}
                        </div>
                        {/* <!-- .row end --> */}
                        <div class="row">
                            {/* <!-- Service #1 --> */}
                            <div class="col-xs-12 col-sm-4 col-md-4">
                                <div class="service-panel">
                                    <div class="service--img">
                                        <img src="http://demo.zytheme.com/hairy/assets/images/services/4.png" alt="img" />
                                    </div>
                                    <h3>Haircut Styles</h3>
                                    <p>Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore fugiat nulla.</p>
                                </div>
                                {/* <!-- .container end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}

                            {/* <!-- Service #2 --> */}
                            <div class="col-xs-12 col-sm-4 col-md-4">
                                <div class="service-panel">
                                    <div class="service--img">
                                        <img src="http://demo.zytheme.com/hairy/assets/images/services/5.png" alt="img" />
                                    </div>
                                    <h3>Beard Trim</h3>
                                    <p>Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore fugiat nulla.</p>
                                </div>
                                {/* <!-- .container end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}

                            {/* <!-- Service #3 --> */}
                            <div class="col-xs-12 col-sm-4 col-md-4">
                                <div class="service-panel">
                                    <div class="service--img">
                                        <img src="http://demo.zytheme.com/hairy/assets/images/services/6.png" alt="img" />
                                    </div>
                                    <h3>Hot Shave</h3>
                                    <p>Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore fugiat nulla.</p>
                                </div>
                                {/* <!-- .container end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}
                        </div>
                        {/* <!-- .row end --> */}
                    </div>
                    {/* <!-- .container end --> */}
                </section>
                {/* <!-- #service1 end --> */}

                {/* <!-- working-time #1============================================= --> */}
                <section id="working-time" class="working-time text-center bg-overlay bg-overlay-dark bg-parallax">
                    <div class="bg-section">
                        <img src="http://demo.zytheme.com/hairy/assets/images/background/2.jpg" alt="Background" />
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                                <div class="heading text--center mb-80">
                                    <h2 class="heading--title text-white">Working Hours</h2>
                                    <p class="heading--desc text-white">Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.</p>
                                    <div class="divider--line"></div>
                                </div>
                            </div>
                            {/* <!-- .col-md-6 end --> */}
                        </div>
                        {/* <!-- .row end --> */}
                        <div class="row">
                            {/* <!-- Service #1 --> */}
                            <div class="col-xs-6 col-sm-4 col-md-2">
                                <div class="time-panel">
                                    <h3>sun</h3>
                                    <ul class="list-unstyled mb-0">
                                        <li>10.00 am</li>
                                        <li>to</li>
                                        <li>5.00 am</li>
                                    </ul>
                                </div>
                                {/* <!-- .time-panel end --> */}
                            </div>
                            {/* <!-- .col-md-2 end --> */}

                            {/* <!-- Service #2 --> */}
                            <div class="col-xs-6 col-sm-4 col-md-2">
                                <div class="time-panel">
                                    <h3>mon</h3>
                                    <ul class="list-unstyled mb-0">
                                        <li>9.00 am</li>
                                        <li>to</li>
                                        <li>4.30 am</li>
                                    </ul>
                                </div>
                                {/* <!-- .time-panel end --> */}
                            </div>
                            {/* <!-- .col-md-2 end --> */}

                            {/* <!-- Service #3 --> */}
                            <div class="col-xs-6 col-sm-4 col-md-2">
                                <div class="time-panel">
                                    <h3>tue</h3>
                                    <ul class="list-unstyled mb-0">
                                        <li>10.00 am</li>
                                        <li>to</li>
                                        <li>5.30 am</li>
                                    </ul>
                                </div>
                                {/* <!-- .time-panel end --> */}
                            </div>
                            {/* <!-- .col-md-2 end --> */}

                            {/* <!-- Service #4 --> */}
                            <div class="col-xs-6 col-sm-4 col-md-2">
                                <div class="time-panel">
                                    <h3>wed</h3>
                                    <ul class="list-unstyled mb-0">
                                        <li>9.30 am</li>
                                        <li>to</li>
                                        <li>4.00 am</li>
                                    </ul>
                                </div>
                                {/* <!-- .time-panel end --> */}
                            </div>
                            {/* <!-- .col-md-2 end --> */}

                            {/* <!-- Service #5 --> */}
                            <div class="col-xs-6 col-sm-4 col-md-2">
                                <div class="time-panel">
                                    <h3>thu</h3>
                                    <ul class="list-unstyled mb-0">
                                        <li>10.00 am</li>
                                        <li>to</li>
                                        <li>5.00 am</li>
                                    </ul>
                                </div>
                                {/* <!-- .time-panel end --> */}
                            </div>
                            {/* <!-- .col-md-2 end --> */}

                            {/* <!-- Service #6 --> */}
                            <div class="col-xs-6 col-sm-4 col-md-2">
                                <div class="time-panel">
                                    <h3>Fri</h3>
                                    <ul class="list-unstyled mb-0">
                                        <li>9.00 am</li>
                                        <li>to</li>
                                        <li>4.30 am</li>
                                    </ul>
                                </div>
                                {/* <!-- .time-panel end --> */}
                            </div>
                            {/* <!-- .col-md-2 end --> */}

                        </div>
                        {/* <!-- .row end --> */}
                    </div>
                    {/* <!-- .container end --> */}
                </section>
                {/* <!-- #service1 end --> */}

                {/* <!-- pricing #2============================================= --> */}
                <section id="pricing" class="pricing pricing-2 bg-white pb-80">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                                <div class="heading text--center mb-70">
                                    <h2 class="heading--title">Our Pricing</h2>
                                    <p class="heading--desc">Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.</p>
                                    <div class="divider--line"></div>
                                </div>
                            </div>
                            {/* <!-- .col-md-6 end --> */}
                        </div>
                        {/* <!-- .row end --> */}
                        <div class="row">
                            {/* <!-- Pricing #1 --> */}
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="pricing-panel">
                                    <div class="pricing--content">
                                        <h4 class="pricing--heading">Haircut</h4>
                                        <div class="pricing--divider"></div>
                                        <span class="price">$20.00</span>
                                    </div>
                                    <p class="pricing--desc">Our stylist consults & delivers you a precision haircut.</p>
                                </div>
                                {/* <!-- .panel end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}
                            {/* <!-- Pricing #2 --> */}
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="pricing-panel">
                                    <div class="pricing--content">
                                        <h4 class="pricing--heading">Moustache Trim</h4>
                                        <div class="pricing--divider"></div>
                                        <span class="price">$10.00</span>
                                    </div>
                                    <p class="pricing--desc">Select & Change your hair color for new experience.</p>
                                </div>
                                {/* <!-- .panel end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}
                            {/* <!-- Pricing #3 --> */}
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="pricing-panel">
                                    <div class="pricing--content">
                                        <h4 class="pricing--heading">Beard Trim</h4>
                                        <div class="pricing--divider"></div>
                                        <span class="price">$15.00</span>
                                    </div>
                                    <p class="pricing--desc">Keep your beard clean and sharp with an awesome style.</p>
                                </div>
                                {/* <!-- .panel end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}
                            {/* <!-- Pricing #4 --> */}
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="pricing-panel">
                                    <div class="pricing--content">
                                        <h4 class="pricing--heading">Hair Wash</h4>
                                        <div class="pricing--divider"></div>
                                        <span class="price">$6.00</span>
                                    </div>
                                    <p class="pricing--desc">Relax and have a hot towel for cleaning your face.</p>
                                </div>
                                {/* <!-- .panel end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}
                            {/* <!-- Pricing #5 --> */}
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="pricing-panel">
                                    <div class="pricing--content">
                                        <h4 class="pricing--heading">Hair Color</h4>
                                        <div class="pricing--divider"></div>
                                        <span class="price">$18.00</span>
                                    </div>
                                    <p class="pricing--desc">Select & Change your hair color for new experience.</p>
                                </div>
                                {/* <!-- .panel end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}
                            {/* <!-- Pricing #6 --> */}
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="pricing-panel">
                                    <div class="pricing--content">
                                        <h4 class="pricing--heading">Face Mask</h4>
                                        <div class="pricing--divider"></div>
                                        <span class="price">$12.00</span>
                                    </div>
                                    <p class="pricing--desc">Our stylist consults & delivers you a precision haircut.</p>
                                </div>
                                {/* <!-- .panel end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}
                            {/* <!-- Pricing #7 --> */}
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="pricing-panel">
                                    <div class="pricing--content">
                                        <h4 class="pricing--heading">Men’s Facial</h4>
                                        <div class="pricing--divider"></div>
                                        <span class="price">$25.00</span>
                                    </div>
                                    <p class="pricing--desc">Relax and have a hot towel for cleaning your face.</p>
                                </div>
                                {/* <!-- .panel end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}
                            {/* <!-- Pricing #8 --> */}
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="pricing-panel">
                                    <div class="pricing--content">
                                        <h4 class="pricing--heading">Line Up</h4>
                                        <div class="pricing--divider"></div>
                                        <span class="price">$13.00</span>
                                    </div>
                                    <p class="pricing--desc">Keep your beard clean and sharp with an awesome style.</p>
                                </div>
                                {/* <!-- .panel end --> */}
                            </div>
                        </div>
                        {/* <!-- .row end --> */}
                    </div>
                    {/* <!-- .container end --> */}
                </section>
                {/* <!-- #pricing1 end --> */}

                {/* <!-- Testimonial #2============================================= --> */}
                <section id="testimonial2" class="testimonial testimonial-1 bg-overlay bg-overlay-dark bg-parallax text-center">
                    <div class="bg-section">
                        <img src="http://demo.zytheme.com/hairy/assets/images/testimonial/bg-1.jpg" alt="Background" />
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                                <div class="text--center heading mb-70">
                                    <h2 class="heading--title color-white">Clients Say</h2>
                                    <p class="heading--desc mb-0 color-gray">Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.</p>
                                    <div class="divider--line divider--center"></div>
                                </div>
                            </div>
                            {/* <!-- .col-md-8 end --> */}
                        </div>
                        {/* <!-- .row end --> */}
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div id="testimonial-carousel" class="carousel carousel-dots carousel-white" data-slide="3" data-slide-rs="1" data-autoplay="false" data-nav="false" data-dots="true" data-space="30" data-loop="true" data-speed="800">
                                    {/* <!-- Testimonial #1 --> */}
                                    <div class="testimonial-panel">
                                        <div class="testimonial--meta">
                                            <div class="testimonial--meta-img">
                                                <img src="http://demo.zytheme.com/hairy/assets/images/testimonial/1.png" alt="Testimonial Author" />
                                            </div>
                                        </div>
                                        {/* <!-- .testimonial-meta end --> */}
                                        <div class="testimonial--body">
                                            <p>“Proin gravida nibh vel velit auctor aliquet aenean sollidin, lorem quis bibendum auctor nisi elit.”</p>
                                        </div>
                                        {/* <!-- .testimonial-body end --> */}
                                        <div class="testimonial--meta-content">
                                            <h4>Ryan Printz</h4>
                                        </div>
                                    </div>
                                    {/* <!-- .testimonial-panel end --> */}

                                    {/* <!-- Testimonial #2 --> */}
                                    <div class="testimonial-panel">
                                        <div class="testimonial--meta">
                                            <div class="testimonial--meta-img">
                                                <img src="http://demo.zytheme.com/hairy/assets/images/testimonial/2.png" alt="Testimonial Author" />
                                            </div>
                                        </div>
                                        {/* <!-- .testimonial-meta end --> */}
                                        <div class="testimonial--body">
                                            <p>“Proin gravida nibh vel velit auctor aliquet aenean sollidin, lorem quis bibendum auctor nisi elit.”</p>
                                        </div>
                                        {/* <!-- .testimonial-body end --> */}
                                        <div class="testimonial--meta-content">
                                            <h4>Mark Smith</h4>
                                        </div>
                                    </div>
                                    {/* <!-- .testimonial-panel end --> */}

                                    {/* <!-- Testimonial #3 --> */}
                                    <div class="testimonial-panel">
                                        <div class="testimonial--meta">
                                            <div class="testimonial--meta-img">
                                                <img src="http://demo.zytheme.com/hairy/assets/images/testimonial/3.png" alt="Testimonial Author" />
                                            </div>
                                        </div>
                                        {/* <!-- .testimonial-meta end --> */}
                                        <div class="testimonial--body">
                                            <p>“Proin gravida nibh vel velit auctor aliquet aenean sollidin, lorem quis bibendum auctor nisi elit.”</p>
                                        </div>
                                        {/* <!-- .testimonial-body end --> */}
                                        <div class="testimonial--meta-content">
                                            <h4>Steve Martin</h4>
                                        </div>
                                    </div>
                                    {/* <!-- .testimonial-panel end --> */}

                                    {/* <!-- Testimonial #4 --> */}
                                    <div class="testimonial-panel">
                                        <div class="testimonial--meta">
                                            <div class="testimonial--meta-img">
                                                <img src="http://demo.zytheme.com/hairy/assets/images/testimonial/2.png" alt="Testimonial Author" />
                                            </div>
                                        </div>
                                        {/* <!-- .testimonial-meta end --> */}
                                        <div class="testimonial--body">
                                            <p>“Proin gravida nibh vel velit auctor aliquet aenean sollidin, lorem quis bibendum auctor nisi elit.”</p>
                                        </div>
                                        {/* <!-- .testimonial-body end --> */}
                                        <div class="testimonial--meta-content">
                                            <h4>Smith Printz</h4>
                                        </div>
                                    </div>
                                    {/* <!-- .testimonial-panel end --> */}

                                </div>
                            </div>
                            {/* <!-- .col-md-12 end --> */}
                        </div>
                        {/* <!-- .row end --> */}
                    </div>
                    {/* <!-- .container end --> */}
                </section>
                {/* <!-- #testimonial2 end --> */}

                {/* <!-- Blog Grid============================================= --> */}
                <section id="blog" class="blog blog-grid pb-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                                <div class="heading text--center mb-70">
                                    <h2 class="heading--title">Our Blog Posts</h2>
                                    <p class="heading--desc">Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.</p>
                                    <div class="divider--line"></div>
                                </div>
                            </div>
                            {/* <!-- .col-md-6 end --> */}
                        </div>
                        {/* <!-- .row end --> */}
                        <div class="row">
                            {/* <!-- Blog Entry #1 --> */}
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="blog-entry">
                                    <div class="entry--img">
                                        <a href="#">
                                            <img src="http://demo.zytheme.com/hairy/assets/images/blog/grid/1.jpg" alt="entry image" />
                                        </a>
                                        <div class="entry--overlay">
                                            <a href="#"><i class="fa fa-chain"></i></a>
                                        </div>
                                    </div>
                                    <div class="entry--content">
                                        <div class="entry--meta">
                                            <span>Oct 20, 2017</span>
                                            <span><a href="#">barbers</a></span>
                                        </div>
                                        <div class="entry--title">
                                            <h4><a href="#">Foil shaver versus clippers & trimmers</a></h4>
                                        </div>
                                        <div class="entry--bio">
                                            Are you a dedicated razor shaver? dude who hasn't really thought about trying a different..
                        </div>
                                        <div class="entry--more">
                                            <a href="#">read more <i class="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .blog-entry end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}

                            {/* <!-- Blog Entry #2 --> */}
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="blog-entry">
                                    <div class="entry--img">
                                        <a href="#">
                                            <img src="http://demo.zytheme.com/hairy/assets/images/blog/grid/2.jpg" alt="entry image" />
                                        </a>
                                        <div class="entry--overlay">
                                            <a href="#"><i class="fa fa-chain"></i></a>
                                        </div>
                                    </div>
                                    <div class="entry--content">
                                        <div class="entry--meta">
                                            <span>Oct 15, 2017</span>
                                            <span><a href="#">Styles</a></span>
                                        </div>
                                        <div class="entry--title">
                                            <h4><a href="#">Men’s hairstyles for all face shapes</a></h4>
                                        </div>
                                        <div class="entry--bio">
                                            Most of the time, men don't know the haircuts that suit their face shape - but don't worry, we're here to..
                        </div>
                                        <div class="entry--more">
                                            <a href="#">read more <i class="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .blog-entry end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}

                            {/* <!-- Blog Entry #3 --> */}
                            <div class="col-xs-12 col-sm-12 col-md-4">
                                <div class="blog-entry">
                                    <div class="entry--img">
                                        <a href="#">
                                            <img src="http://demo.zytheme.com/hairy/assets/images/blog/grid/3.jpg" alt="entry image" />
                                        </a>
                                        <div class="entry--overlay">
                                            <a href="#"><i class="fa fa-chain"></i></a>
                                        </div>
                                    </div>
                                    <div class="entry--content">
                                        <div class="entry--meta">
                                            <span>Oct 25, 2017</span>
                                            <span><a href="#">Haircut</a></span>
                                        </div>
                                        <div class="entry--title">
                                            <h4><a href="#">Basic tips for styling men’s hair</a></h4>
                                        </div>
                                        <div class="entry--bio">
                                            The first tip is to choose a hairstyle that’s realistic for your lifestyle, hair type, and general image..
                        </div>
                                        <div class="entry--more">
                                            <a href="#">read more <i class="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .blog-entry end --> */}
                            </div>
                            {/* <!-- .col-md-4 end --> */}
                        </div>
                        {/* <!-- .row end --> */}
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 clearfix mt-20 text--center">
                                <a href="#" class="btn btn--secondary btn--bordered btn--rounded">View More</a>
                            </div>
                            {/* <!-- .col-md-12 end --> */}
                        </div>
                        {/* <!-- .row end --> */}
                    </div>
                    {/* <!-- .container end --> */}
                </section>
                {/* <!-- #blog end --> */}

                {/* <!-- Clients Carousel============================================= --> */}
                <section id="clients1" class="clients clients-carousel clients-carousel-1 bg-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="carousel carousel-dots" data-slide="5" data-slide-rs="2" data-autoplay="true" data-nav="false" data-dots="false" data-space="30" data-loop="true" data-speed="1000">
                                    {/* <!-- Client #1 --> */}
                                    <div class="client">
                                        <img class="center-block" src="http://demo.zytheme.com/hairy/assets/images/clients/1.png" alt="client" />
                                    </div>

                                    {/* <!-- Client #2 --> */}
                                    <div class="client">
                                        <img class="center-block" src="http://demo.zytheme.com/hairy/assets/images/clients/2.png" alt="client" />
                                    </div>

                                    {/* <!-- Client #3 --> */}
                                    <div class="client">
                                        <img class="center-block" src="http://demo.zytheme.com/hairy/assets/images/clients/3.png" alt="client" />
                                    </div>

                                    {/* <!-- Client #4 --> */}
                                    <div class="client">
                                        <img class="center-block" src="http://demo.zytheme.com/hairy/assets/images/clients/4.png" alt="client" />
                                    </div>

                                    {/* <!-- Client #5 --> */}
                                    <div class="client">
                                        <img class="center-block" src="http://demo.zytheme.com/hairy/assets/images/clients/5.png" alt="client" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- .col-md-12 end --> */}
                        </div>
                        {/* <!-- .row end --> */}
                    </div>
                    {/* <!-- .container end --> */}
                </section>
                {/* <!-- #clients1 end --> */}

                {/* <!-- Footer #5============================================= --> */}
                <footer id="footer" class="footer">
                    {/* <!-- Widget Section============================================= --> */}
                    <div class="footer-widget">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-4 footer--widget-about">
                                    <div class="footer--widget-content">
                                        <img class="mb-20" src="http://demo.zytheme.com/hairy/assets/images/logo/logo-light.png" alt="logo" />
                                        <p>Proin gravida nibh vel velit auctor aliquet anean lorem quis. bindum auctor, nisi elite conset ipsums sagtis id duis sed odio sit.</p>
                                        <div class="work--schedule clearfix">
                                            <ul class="list-unstyled">
                                                <li>Monday - Friday <span>9.00 : 17.00</span></li>
                                                <li>Saturday <span>9.00 : 15.00</span></li>
                                                <li>Sunday <span>9.00 : 13.00</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .col-md-4 end --> */}
                                <div class="col-xs-12 col-sm-6 col-md-4 footer--widget-recent">
                                    <div class="footer--widget-title">
                                        <h5>Latest Posts</h5>
                                    </div>
                                    <div class="footer--widget-content">
                                        <div class="entry">
                                            <div class="entry--img">
                                                <a href="#">
                                                    <img src="http://demo.zytheme.com/hairy/assets/images/blog/thumb/5.jpg" alt="entry" />
                                                </a>
                                            </div>
                                            <div class="entry--content">
                                                <div class="entry--title">
                                                    <a href="#">Essential barbering tips you need to know before you start</a>
                                                </div>
                                                <div class="entry--meta">
                                                    <span>Nov 09, 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- .entry end --> */}

                                        <div class="entry">
                                            <div class="entry--img">
                                                <a href="#">
                                                    <img src="http://demo.zytheme.com/hairy/assets/images/blog/thumb/4.jpg" alt="entry" />
                                                </a>
                                            </div>
                                            <div class="entry--content">
                                                <div class="entry--title">
                                                    <a href="#">What are the 360 waves? and how you can get them</a>
                                                </div>
                                                <div class="entry--meta">
                                                    <span>Oct 30, 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- .entry end --> */}

                                        <div class="entry">
                                            <div class="entry--img">
                                                <a href="#">
                                                    <img src="http://demo.zytheme.com/hairy/assets/images/blog/thumb/3.jpg" alt="entry" />
                                                </a>
                                            </div>
                                            <div class="entry--content">
                                                <div class="entry--title">
                                                    <a href="#">Discover what is the best haircut for your face shape?</a>
                                                </div>
                                                <div class="entry--meta">
                                                    <span>Oct 19, 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- .entry end --> */}
                                    </div>
                                </div>
                                {/* <!-- .col-md-4 end --> */}
                                <div class="col-xs-12 col-sm-6 col-md-4 footer--widget-contact">
                                    <div class="footer--widget-title">
                                        <h5>Get In Touch</h5>
                                    </div>
                                    <div class="footer--widget-content">
                                        <ul class="list-unstyled mb-0">
                                            <li><i class="fa fa-map-marker"></i> 1220 Petersham town, Wardll St New South Wales Australia PA 6550.</li>
                                            <li><i class="fa fa-phone"></i> (04) 491 570 110</li>
                                            <li><i class="fa fa-envelope-o"></i> contact@zytheme.com</li>
                                        </ul>
                                        <form class="form--newsletter">
                                            <input type="email" name="email" class="form-control" placeholder="Email address" />
                                            <button type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                                {/* <!-- .col-md-4 end --> */}
                            </div>
                        </div>
                        {/* <!-- .container end --> */}
                    </div>
                    {/* <!-- .footer-widget end --> */}
                    {/* <!-- Copyrights============================================= --> */}
                    <div class="footer--copyright">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-6">
                                    <span>&copy; 2017, All rights reserved.</span>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-6 text-right">
                                    <div class="social">
                                        <a class="share-twitter" href="#"><i class="fa fa-twitter"></i></a>
                                        <a class="share-facebook" href="#"><i class="fa fa-facebook"></i></a>
                                        <a class="share-linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                                        <a class="share-pinterest" href="#"><i class="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* <!-- .container end --> */}
                    </div>
                </footer>
            </div>
            {/* </div>       <!-- #wrapper end --> */}
        </div>

        <script src="assets/js/jquery-2.2.4.min.js"></script>
        <script src="assets/js/plugins.js"></script>
        <script src="assets/js/functions.js"></script>

    </React.Fragment>
)


