
// init Navbar Component 
const Navbar = () => {
    return (

        <>

        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="data-navbar-on-scroll">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center fw-bold fs-2" href="#"><img className="d-inline-block me-3" src="/assets/img/icons/stmary-logo.png" width="100" height="100" alt="" /></a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
                        <li className="nav-item"><a className="nav-link fw-bold active" aria-current="page" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#vision">Vision Statement</a></li>
                        <li className="nav-item"><a className="nav-link" href="#mission">Mission Statement</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Location</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Careers</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contacts</a></li>

                    </ul>
                </div>
            </div>
        </nav>
           
        </>

    )
}




// export Navbar component 
export default Navbar