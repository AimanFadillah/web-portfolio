import { Link } from "react-router-dom"
import { useEffect } from "react";

export default function Navbar ({children}) {

    useEffect(() => {
        document.body.removeAttribute("style");
    },[]);

    return <>
    <nav className="navbar navbar-expand-md py-3">
        <div className="container">
            <a className="navbar-brand fs-2 DM" href="#">Aiman</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fs-2" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <ul className="p-3 navbar-nav me-auto d-flex justify-content-center gap-2" style={{ width:"100%" }}>
                    <NavLink text={"Home"} to={"/"}/>
                    <NavLink text={"About Us"} to={"/"}/>
                    <NavLink text={"Portfolio"} to={"/"}/>
                    <NavLink text={"Services"} to={"/"}/>
                </ul>
            </div>
            <button className="btn btn-light rounded-5 p-2 px-4" >Contact</button>
        </div>
    </nav>
    <div className="container">
        {children}
    </div>
    </>
}

function NavLink ({active,text,to}){
    return <li className={`nav-item ${active ? "bg-primary rounded fw-bold" : ""}`} >
        <Link className={`nav-link px-4 `} style={{color:"#D7D7D7"}} to={to}>{text}</Link>
    </li>
}