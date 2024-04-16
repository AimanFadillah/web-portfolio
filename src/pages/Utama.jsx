import Navbar from "../components/Navbar";

export default function Utama () {
    return <Navbar>
        <div className="row">
            <div className="col-md-6">
                <div className="pt-4">
                    <div className="" style={{color:"#E6E6E6"}}>
                        <h1 className="DM m-0" style={{fontSize:"60px"}}>We Build</h1>
                        <h1 className="DM m-0" style={{fontSize:"60px"}}>A Premium</h1>
                        <h1 className="DM m-0" style={{fontSize:"60px"}}>Business</h1>
                    </div>
                    <div className="mt-4">
                        <div className="input-group border p-1" style={{width:"60%"}} > 
                            <input type="text" className="border-0 rounded-0 form-control" style={{background:"none"}} placeholder="aimanfadillah39@gmail.com" />
                            <button className="btn rounded-0 bg-secondary" type="button"><i className="text-dark bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="mt-4 d-flex">
                        <div className="">
                            <h1 className="DM" >07+</h1>
                            <div>Years of Expreriences</div>
                        </div>
                        <div className="ms-5">
                            <h1 className="DM" >135</h1>
                            <div>Project Completed</div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="col-md-6">
                <div className=""  >
                    <img src="/images/aiman.png" style={{marginTop:"-170px",zIndex:"999"}} alt="aiman" className="img-fluid"  />
                </div>
            </div>
        </div>
        <div className="position-absolute top-0 end-0 border-end-0" style={{marginTop:"180px",height:"300px",width:"50%",border:"15px solid green",borderColor:"#E7D557",zIndex:"-1"}} >
        </div>
    </Navbar>
}