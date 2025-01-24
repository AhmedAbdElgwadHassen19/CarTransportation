import imag from "../../public/photo_2025-01-21_11-15-45.jpg"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" >
  <div className="container">
  <Link to={"/"} className="Link navbar-brand" href="#"><img className="imag-logo " src={imag} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  mt-3" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link to={"/"} className="text-decoration-none"><a className="nav-link" aria-current="page" href="#">الرئيسية</a></Link>
        </li>
        <li className="nav-item">
          <Link to={"/abut"} className="text-decoration-none"><a className="nav-link " href="#"> خدماتنا</a></Link>
        </li>
        <li className="nav-item">
        <Link to={"/about-us"} className="text-decoration-none"><a className="nav-link " href="#">من نحن</a></Link>
        </li>
        <li className="nav-item">
        <Link to={"/count-us"} className="text-decoration-none"><a className="nav-link " href="#">تواصل معنا</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar