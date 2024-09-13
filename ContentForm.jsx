import 'Bootstrap/dist/css/Bootstrap.min.css'
import 'Bootstrap/dist/js/Bootstrap.min.js'

function ContentForm()
{
  return (
    <>
       <div className="container text-center form-div">
            <div className="row">
                <div className="col-6 my-cont-div shadow-lg p-3 rounded">
                   <div>
                    <h1>Add Todo !</h1>
                    <br />
                    <input className="form-control form-control-sm" type="text" placeholder="Enter Tasks to do.." aria-label=".form-control-sm example" /><br />
                    <input className="form-control form-control-sm" type="date"  aria-label=".form-control-sm example" /><br />
                    <button type="button" className="btn btn-success form-control-sm mybtnSucc">Add</button>
                    </div>
                </div>
                <div className="col-6">
                      <div className="my-cont-div shadow-lg p-3 rounded azure"></div>
                </div>
                
            </div>
              
        </div>
        
    </>
  );
}

export default ContentForm