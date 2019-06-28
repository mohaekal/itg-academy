import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from "shards-react";
    import pic1 from "../itg-academy/images/vuejs.png";


    class TestAdminEditPage extends React.Component {
        constructor(props) {
            super(props);
        
            this.toggle = this.toggle.bind(this);
        
            this.state = {
              dropdown1: false,
              dropdown2: false
            };
          }
        
          toggle(which) {
            const newState = { ...this.state };
            newState[which] = !this.state[which];
            this.setState(newState);
          }
      
        render() {
          return (
              <div>
            <Card small className="h-100">
       
            <CardBody className="">
             
            <form action="#">
                                    <div className="form-group row">
                                        <label for="quiz_title" className="col-sm-3 col-form-label form-label">Test Title:</label>
                                        <div className="col-sm-9">
                                            <input id="quiz_title" type="text" className="form-control" placeholder="Title" value="Redhat Introduction" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="course_title" className="col-sm-3 col-form-label form-label">Course Track:</label>
                                        <div className="col-sm-9 col-md-4">
                                            <select id="course_title" className="custom-select form-control">
                                                <option value="#">Database</option>
                                                <option value="#">Software Development</option>
                                                <option value="#" selected>Redhat</option>
                                                <option value="#">CSS / LESS</option>
                                                <option value="#">Design / Concept</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label for="quiz_image" className="col-sm-3 col-form-label form-label">Quiz Image:</label>
                                        <div className="col-sm-9 col-md-4">
                                            <p><img src={pic1} alt="" width="150" className="rounded" /></p>
                                            <div className="custom-file">
                                                <input type="file" id="quiz_image" className="custom-file-input" />
                                                <label for="quiz_image" className="custom-file-label">Choose file</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="cmn-toggle" className="col-sm-3 col-form-label form-label">Timeframe</label>
                                        <div className="col-sm-9">
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox-toggle">
                                                    <input id="cmn-toggle" type="checkbox" aria-checked="false" className="custom-control-input" role="switch" />
                                                    <label className="custom-control-label" for="cmn-toggle"><span className="sr-only">Timeframe</span></label>
                                                </div>
                                            </div>
                                            <div className="form-inline">
                                                <div className="form-group mr-2">
                                                    <input type="number" className="form-control text-center" value="4" style={{width:'50px'}} />
                                                </div>
                                                <div className="form-group">
                                                    <select className="custom-select">
                                                        <option value="hour" selected>Hours</option>
                                                        <option value="minutes">Minutes</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="col-sm-9 offset-sm-3">
                                            <button type="submit" className="btn btn-success">Save</button>
                                        </div>
                                    </div>
                                </form>         

            </CardBody>
           
          </Card> 
   

  

</div>

          );
        }
      }



export default TestAdminEditPage;
