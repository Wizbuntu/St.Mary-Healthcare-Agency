


// init Home Component
const Home = () => {
  return (
   <>
    {/* Header Section */}
     <section className="py-4">
        <div className="container position-relative">
            <div className="row align-items-center">
                <div className="col-md-5 col-lg-6 order-md-1 pt-8"><img className="img-fluid" src="/assets/img/illustrations/header-svg.svg" alt="" /></div>
                <div className="col-md-7 col-lg-6 text-center text-md-start pt-5 pt-md-9">
                    <h1 className="mb-4 display-3 fw-bold">Holistic Health Care <br/>At Home
                    </h1>
                    <p className="mt-3 mb-4 fs-1">We Provide medical, nursing and physical healthcare services at the comfort of your home.</p><a className="btn btn-lg btn-primary rounded-pill hover-top" href="#" role="button">Get Started</a>
                </div>
            </div>
        </div>
    </section>



    {/* About Section */}
    <section className="py-6 py-lg-8" id="vision">
            <div className="bg-holder" style={{backgroundImage:"url(/assets/img/illustrations/dot.png)",backgroundPosition:"right bottom", backgroundSize:"auto", marginTop:"50px"}}>
            </div>


            <div className="container">
                <div className="row g-xl-0 align-items-center">
                    <div className="col-md-6"><img className="img-fluid mb-5 mb-md-0" src="/assets/img/gallery/holistic1.jpg" width="480" alt="" /></div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="fw-bold lh-base">Our Vision</h2>
                        <hr className="text-dark mx-auto mx-md-0" style={{height:"2px", width: "50px"}} />
                        <p className="pt-3">Our vision is to give holistic care and support to our client in the comfort of their home</p>
                        <div className="py-3">
                            <a href="#about" className="btn btn-lg btn-outline-primary rounded-pill">Learn more </a>
                        </div>
                    </div>
                </div>
            </div>
          
    </section>


    <section className="py-6 py-lg-8" id="mission">
            <div className="bg-holder" style={{backgroundImage:"url(/assets/img/illustrations/dot.png)",backgroundPosition:"right bottom", backgroundSize:"auto", marginTop:"50px"}}>
            </div>


            <div className="container">
                <div className="row g-xl-0 align-items-center">
                   
                    <div className="col-md-6 text-center text-md-start" style={{paddingRight: "30px"}}>
                        <h2 className="fw-bold lh-base">Our Mission</h2>
                        <hr className="text-dark mx-auto mx-md-0" style={{height:"2px", width: "50px"}} />
                        <p className="pt-3">Our mission is to provide our clients with their medical, nursing and physical cares in their homes so as to enable out clients enjoy the company of families, friends, and preferred environment while recieving adequate
                        health care and assistance with activities of daily living.
                        </p>
                        <p className="pt-3">
                          Due to the recent pandemic, it is paramont that the sick and the elderly should be cared for in their homes to reduce exposure to disease causing organisms
                        </p>

                        <p className="pt-3">
                         Our dedicated and experienced doctors, nurse practitioners, nurses and nurse aides, therapists and chaplains are available to care for our clients with love, respect and fear of God.
                        </p>
                        <div className="py-3">
                            <a href="#about" className="btn btn-lg btn-outline-primary rounded-pill">Learn more </a>
                        </div>
                    </div>
                    <div className="col-md-6"><img className="img-fluid mb-5 mb-md-0" src="/assets/img/gallery/holistic3.jpg" width="480" alt="" /></div>
                </div>
            </div>
          
    </section>

   </>
  )
}




// export Home component 
export default Home