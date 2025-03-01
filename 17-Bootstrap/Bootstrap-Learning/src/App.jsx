import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-color py-4 pt-lg-5">
    <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#">Prabhat Online Courses</a>
        <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                className="navbar-toggler"
                data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className=" nav-item">
                    <a aria-current="page" className="nav-link active" href="#">Home</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href="#about">About</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href="#online_services">Services</a>
                </li>
                <li className=" nav-item">
                    <a className=" nav-link" href="/contact.html">Contact</a>
                </li>


            </ul>

        </div>
    </div>
</nav>

{/* <!--hero section--> */}

<section className="bg-main bg-color hero-section">
    <div className="container">
        <div className="row mb-5 ">
            <div className="d-flex flex-column align-items-start justify-content-center col-xl-6 xol-lg-6 col-md-12 col-12 order-1 order-lg-0 text-md-start text-center">
                <h1 className=" text-capitalize fw-bolder text-white">
                    We Collect High Quality Leads
                </h1>
                <p className="mt-3 mb-5  para-width text-light-grey ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravi.
                </p>

                <div className="text-center w-100 text-md-start">
                    <button className="btn btn-primary px-5 py-2 " data-bs-offset="0,5" data-bs-placement="top"
                            data-bs-title="Get Best Services" data-bs-toggle="tooltip">Contact Us
                    </button>
                </div>

            </div>

            <div className="col-xl-6 xol-lg-6 col-md-12 col-12 order-0 order-lg-1 hero-image--section ">
                <div className="text-md-end text-center mb-5">

                   
                    <video autoplay className="hero-video--section" loop muted src="hero.mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

        </div>

    </div>
    <div className="custom-shape-divider-bottom-1684208460">
        <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path className="shape-fill"
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
    </div>
</section>


{/* <!--hero section end -->

<!--service section--> */}

<section className=" services-section">
    <div className="container text-center common-title fw-bold">
        <h2 className="common-heading">What We Will Do For <br/> Your Business</h2>
        <hr className="w-25 mx-auto "/>
    </div>

    <div className="container mt-5">
        <div className="row g-5 ">
            <div className="col-xxl-4 col-lg-4 col-12 ">
                <div className=" card-box rounded-2 p-5 text-center">
                    <img alt="GIF Image" className="img-fluid" src="link.gif" width="200px"/>

                    <h5 className="my-3 fw-normal "> Link Building</h5>
                    <p className="pe-3 mb-5">
                        Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse!
                    </p>
                    <div className="  d-flex justify-content-center align-items-center ">
                        <a className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                           href="/service.html">
                            <i className="fa-solid fa-arrow-right"> </i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-xxl-4 col-lg-4 col-12  ">
                <div className=" card-box rounded-2 p-5 text-center shadow">
                    <img alt="GIF Image" className="img-fluid" src="speaker.gif" width="200px"/>

                    <h5 className="my-3 fw-normal"> Content marketing </h5>
                    <p className="pe-3 mb-5">
                        Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse!
                    </p>
                    <div className="  d-flex justify-content-center align-items-center ">
                        <a className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                           href="/service.html">
                            <i className="fa-solid fa-arrow-right"> </i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-xxl-4 col-lg-4 col-12 ">
                <div className=" card-box rounded-2 p-5 text-center">
                    <img alt="GIF Image" className="img-fluid" src="seo.gif" width="200px"/>
                    <h5 className="my-3 fw-normal "> On Page SEO </h5>
                    <p className="pe-3 mb-5">
                        Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse!
                    </p>
                    <div className="  d-flex justify-content-center align-items-center ">
                        <a className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3"
                           href="/service.html">
                            <i className="fa-solid fa-arrow-right"> </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

{/* <!--service section--> */}

<section className="more-info-section bg-color">

    <section className="container ">
        <div className="row">
            <div className="col-xl-6 xol-lg-6 col-md-12 col-12 img-section">
                <figure>
                    <img alt="mobile chat" className="img-fluid" width="100px" src="phone.gif"/>
                </figure>
            </div>

            <div className="col-xl-6 xol-lg-6 col-md-12 col-12  d-flex flex-column justify-content-center align-items-start ">

                <h1 className="common-heading text-capitalize fw-bolder text-white">
                    Steps to Build a <br/> Successful Digital Product
                </h1>
                <p className="mt-3 mb-5 para-width text-light-grey">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravi.Risus commodo viverra maecenas accumsan lacus vel facilisis
                    orem ipsum dolor sit amet, consectetur adipiscing.
                </p>

                <button className="btn btn-primary px-5 py-2">Contact Us</button>
            </div>


        </div>
    </section>
</section>



<section className="common-section business-section" id="online_services">
    <div className="container text-center fw-bold common-title">
        <h2 className="common-heading">Generating New Customers Via <br/>Online Mode</h2>
        <hr className="w-25 mx-auto "/>
    </div>

    <div className="container">
        <div className="row g-5">
            <div className="col-xl-6 col-md-12 ">
                <div className="d-flex  px-3 py-5 shadow ">
                    <img alt="GIF Image" className=" d-md-block d-none  img-fluid mx-3" src="phone.gif"
                         width="150px"/>

                    <div className="row ">
                        <p className="mb-3 fw-bolder">Social Media Advertising </p>
                        <p> Reach a wider audience by creating engaging ads on platforms like Facebook, Instagram and
                            LinkedIn. Target specific demographics to connect with potential customers interested in
                            your services. </p>
                    </div>
                </div>
            </div>
            

            <div className="col-xl-6 col-md-12 ">
                <div className="d-flex  px-3 py-5 shadow ">
                    <img alt="GIF Image" className=" d-md-block d-none  img-fluid mx-3" src="music.png"
                         width="150px"/>

                    <div className="row ">
                        <p className="mb-3 fw-bolder">Influencer Marketing </p>
                        <p>Partner with influential individuals or bloggers in your industry to tap into their audience.
                            Through sponsored posts or endorsements, you can generate interest and attract new customers
                            to your online channels. </p>
                    </div>
                </div>
            </div>

            <div className="col-xl-6 col-md-12 ">
                <div className="d-flex  px-3 py-5 shadow ">
                    <img alt="GIF Image" className=" d-md-block d-none  img-fluid mx-3" src="music.png"
                         width="150px"/>

                    <div className="row ">
                        <p className="mb-3 fw-bolder">Content Marketing </p>
                        <p>Publish valuable and optimized content on your website's blog. Attract organic traffic,
                            position your brand as an authority, and encourage visitors to engage and make a
                            purchase. </p>
                    </div>
                </div>
            </div>

            <div className="col-xl-6 col-md-12 ">
                <div className="d-flex  px-3 py-5 shadow ">
                    <img alt="GIF Image" className=" d-md-block d-none  img-fluid mx-3" src="phone.gif"
                         width="150px"/>

                    <div className="row ">
                        <p className="mb-3 fw-bolder">Referral Programs</p>
                        <p>Implement a customer referral program. Incentivize existing customers to refer others with
                            rewards like discounts or loyalty points. Word-of-mouth marketing helps acquire new
                            customers.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>


{/* <!--testimonial section --> */}
<section className="common-section mb-5 pt-5 bg-color">
    <div className="container text-center common-title  ">
        <h2 className="common-heading text-white">What Client Say<br/>About Us</h2>
        <hr className="w-25 mx-auto"/>
    </div>


    <div className="container">
        <div className="carousel slide" data-bs-ride="true" id="carouselExampleIndicators">
            <div className="carousel-indicators">
                <button aria-current="true" aria-label="Slide 1" className="active" data-bs-slide-to="0"
                        data-bs-target="#carouselExampleIndicators" type="button"></button>
                <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators"
                        type="button"></button>
                <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators"
                        type="button"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row g-4">
                        <div className="col-xxl-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card  p-3" style="width: 18rem; ">
                                    <img alt="..."
                                         className="card-img-top"
                                         src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                    <div className="card-body text-center">
                                        <p className="card-title  mb-3 ">Angelina Thapa</p>
                                        <p className="card-text ">Some quick example text to build on the card title and
                                            make
                                            up
                                            the bulk of the card's content.</p>
                                        <div className=" mt-3 d-flex justify-content-center">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card  p-3" style="width: 18rem;">
                                    <img alt="..."
                                         className="card-img-top"
                                         src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                    <div className="card-body text-center">
                                        <p className="card-title  mb-3">Angelina Thapa</p>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card's content.</p>
                                        <div className=" mt-3 d-flex justify-content-center">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card  p-3" style="width: 18rem;">
                                    <img alt="..."
                                         className="card-img-top"
                                         src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                    <div className="card-body text-center">
                                        <p className="card-title  mb-3">Angelina Thapa</p>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card's content.</p>
                                        <div className=" mt-3 d-flex justify-content-center">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <div className="row g-4">
                        <div className="col-xxl-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card  p-3" style="width: 18rem;">
                                    <img alt="..."
                                         className="card-img-top"
                                         src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                    <div className="card-body text-center">
                                        <p className="card-title  mb-3">Angelina Thapa</p>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card's content.</p>
                                        <div className=" mt-3 d-flex justify-content-center">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card  p-3" style="width: 18rem;">
                                    <img alt="..."
                                         className="card-img-top"
                                         src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                    <div className="card-body text-center">
                                        <p className="card-title  mb-3">Angelina Thapa</p>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card's content.</p>
                                        <div className=" mt-3 d-flex justify-content-center">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card  p-3" style="width: 18rem;">
                                    <img alt="..."
                                         className="card-img-top"
                                         src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                    <div className="card-body text-center">
                                        <p className="card-title  mb-3">Angelina Thapa</p>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card's content.</p>
                                        <div className=" mt-3 d-flex justify-content-center">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row g-4">
                        <div className="col-xxl-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card  p-3" style="width: 18rem;">
                                    <img alt="..."
                                         className="card-img-top"
                                         src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                    <div className="card-body text-center">
                                        <p className="card-title  mb-3">Angelina Thapa</p>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card's content.</p>
                                        <div className=" mt-3 d-flex justify-content-center">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card  p-3" style="width: 18rem;">
                                    <img alt="..."
                                         className="card-img-top"
                                         src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                    <div className="card-body text-center">
                                        <p className="card-title  mb-3">Angelina Thapa</p>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card's content.</p>
                                        <div className="d-flex justify-content-center">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card  p-3" style="width: 18rem;">
                                    <img alt="..."
                                         className="card-img-top"
                                         src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                    <div className="card-body text-center">
                                        <p className="card-title  mb-3">Angelina Thapa</p>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up
                                            the bulk of the card's content.</p>
                                        <div className="d-flex justify-content-center">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators"
                    type="button">
                <span aria-hidden="true" className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators"
                    type="button">
                <span aria-hidden="true" className="carousel-control-next-icon"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>


</section>


{/* <!--testimonail section ends-->

<!--Pricing section --> */}
<section className="common-section blog-section">
    <div className="common-heading container text-center common-title  ">
        <h2 className="common-heading">Tips and Tricks From <br/>Our Exparts</h2>
        <hr className="w-25 mx-auto"/>
    </div>

    <div className="container my-5">
        <div className="row g-5  ">
            <div className="col-xl-3 col-md-6 col-12 ">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card" style="width: 18rem;">
                        <img alt="..."
                             className="card-img-top" src="music.png"/>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <p className="small text-grey "><i className="fa-solid fa-book-open-reader"></i> : 5000 </p>
                                <p className="small text-grey "> March 3, 2020 </p>
                            </div>
                            <h5 className="card-title mt-3">Web Development</h5>

                            <p className="card-text mt-2 mb-3">Some quick example text to build on the card title and make
                                up the bulk of
                                the card's content.</p>
                            <a className="px-4 py-2 btn btn-dark" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 col-12 ">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card" style="width: 18rem;">
                        <img alt="..."
                             className="card-img-top" src="music.png"/>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <p className="small text-grey "><i className="fa-solid fa-book-open-reader"></i> : 5000 </p>
                                <p className="small text-grey "> March 3, 2020 </p>
                            </div>
                            <h5 className=" mt-3 card-title">Freelancing</h5>
                            <p className="card-text mt-2 mb-3">Some quick example text to build on the card title and make
                                up the bulk of
                                the card's content.</p>
                            <a className="px-4 py-2 btn btn-dark" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 col-12 ">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card" style="width: 18rem;">
                        <img alt="..."
                             className="card-img-top" src="music.png"/>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <p className="small text-grey "><i className="fa-solid fa-book-open-reader"></i> : 5000 </p>
                                <p className="small text-grey "> March 3, 2020 </p>
                            </div>
                            <h5 className=" mt-3 card-title">Graphic Designer</h5>
                            <p className="card-text mt-2 mb-3">Some quick example text to build on the card title and make
                                up the bulk of
                                the card's content.</p>
                            <a className="px-4 py-2 btn btn-dark " href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 ">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card" style="width: 18rem;">
                        <img alt="..."
                             className="card-img-top" src="music.png"/>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">

                                <p className="small text-grey "><i className="fa-solid fa-book-open-reader"></i> : 5000 </p>
                                <p className="small text-grey "> March 3, 2020 </p>
                            </div>
                            <h5 className=" mt-3 card-title">Wordpress Developer</h5>
                            <p className="card-text mt-2 mb-3">Some quick example text to build on the card title and make
                                up the bulk of
                                the card's content.</p>
                            <a className="px-4 py-2 btn btn-dark" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</section>

{/* <!--    pricing section end --> */}


{/* <!--contact section--> */}
<section className="common-section bg-color contact-section text-white">
    <div className="custom-shape-divider-top-1684211116">
        <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path className="shape-fill"
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
    </div>

    <div className="container text-center fw-bold common-title ">
        <h2 className="common-heading text-white ">Contact Us</h2>
        <hr className="w-25 mx-auto"/>
    </div>

    <div className="container ">
        <div className="form-section  mx-auto">
            <form action="https://api.web3forms.com/submit" method="POST">
                <div className="mb-3">
                    <input type="hidden" name="access_key" value="59e6c500-4a70-45fd-a079-582b28d26455"/>
                    <div className="row">
                        <div className="col">
                            <label className="form-label" for="first-name">First name</label>
                            <input className="form-control" id="first-name" placeholder="First name"
                                   aria-label="First name" type="text" required/>
                        </div>
                        <div className="col">
                            <label for="last-name" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="last-name" placeholder="Last name"
                                   aria-label="Last name" required/>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" required
                           placeholder="Enter your email" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" required
                              placeholder="Enter your message " rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <input type="hidden" name="access_key" value="59e6c500-4a70-45fd-a079-582b28d26455"/>
            </form>
        </div>
    </div>

</section>


{/* <!--contact section end -->


<!--footer section--> */}

<footer className="main-footer-section">
    <div className="contact-details">
        <div className="container px-5">
            <div className="row g-0">
                <div className="col-lg-4 ">
                    <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                        <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                            <img src="phone.gif" alt="GIF Image" className="img-fluid"/>
                        </div>
                        <p className="text-white">(+00) 1234 5678</p>
                    </div>
                </div>

                <div className="col-lg-4 ">
                    <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                        <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                            {/* <!--                            <i className="fa-solid fa-phone"></i>--> */}
                            <img src="seo.gif" alt="GIF Image" className="img-fluid"/>
                        </div>
                        <p className="text-white">(+00) 1234 5678</p>
                    </div>
                </div>

                <div className="col-lg-4 ">
                    <div className="contact-div p-5 d-flex flex-column justify-content-center align-items-center">
                        <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                            <img src="map.gif" alt="GIF Image" className="img-fluid"/>
                        </div>
                        <p className="text-white">(+00) 1234 5678</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-section py-5 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="footer-links">
                            <h4 className="text-white mt-5 mb-3">About</h4>
                            <ul className="text-light-grey list-unstyled d-flex flex-column gap-2">
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="footer-links">
                            <h4 className="text-white mt-5 mb-3">About</h4>
                            <ul className="text-light-grey list-unstyled d-flex flex-column gap-2">
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="footer-links">
                            <h4 className="text-white mt-5 mb-3">About</h4>
                            <ul className="text-light-grey list-unstyled d-flex flex-column gap-2">
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>
                                <li>Our Story</li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="footer-links">
                            <h4 className="mt-5 mb-3 text-white">Subscribe</h4>
                            <div className="input-group mb-3 w-75">
                                <input type="text" className="form-control" placeholder="Recipient's username"
                                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <span className="input-group-text btn btn-primary" id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
            <hr className="container mx-auto"/>

            <div className="row">
                <div className="col-lg-8 col-12 ">
                    Copyright ©2023 All rights reserved. | This template is made with by <span className="bg-theme"> Prabhat pandey</span>
                </div>
                <div className="col-md-4 col-12  ">
                    <div className="d-flex justify-content-center justify-content-lg-end gap-5 mt-lg-0 mt-3">
                        <a href="https://www.instagram.com/thapatechnical/" target="_blank">
                            <div className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </a>
                        <div className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                        <div className="icon-span d-flex justify-content-center align-items-center rounded-circle mb-3">
{/* <!--                            <i className="fa-brands fa-whatsapp"></i>--> */}
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>


    </div>
  )
}

export default App