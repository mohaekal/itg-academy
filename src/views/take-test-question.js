import React from "react";
import { Card, CardHeader, CardBody} from "shards-react";
    import { Link } from "react-router-dom";


    class TakeTestQuestion extends React.Component {
      constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
        
      
        render() {
          return (
            <Card small className="h-100 sm-100">
            <CardHeader className="border-bottom">
            <div className="media align-items-center">
                                    <div className="media-left">
                                        <h4 className="mb-0"><strong>#9</strong></h4>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="card-title">
                                            Github command to deploy comits?
                                        </h4>
                                    </div>
                                </div>
            </CardHeader>
            <CardBody className="">
           
            <div className="form-group ">
                                    <div className="custom-controls-stacked">
                                        <div className="custom-control custom-radio">
                                            <input id="radioStacked1" name="radio-stacked" type="radio" className="custom-control-input" />
                                            <label for="radioStacked1" className="custom-control-label">Toggle this custom radio</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="radioStacked2" name="radio-stacked" type="radio" className="custom-control-input" />
                                            <label for="radioStacked2" className="custom-control-label">Or toggle this other custom radio</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="radioStacked3" name="radio-stacked" type="radio" className="custom-control-input" />
                                            <label for="radioStacked3" className="custom-control-label">Or toggle this other custom radio</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="radioStacked4" name="radio-stacked" type="radio" className="custom-control-input" />
                                            <label for="radioStacked4" className="custom-control-label">Or toggle this other custom radio</label>
                                        </div>
                                    </div>
                                    </div>
                                   

                                       </CardBody>
                                       <div class="card-footer">
                                <a href="#" class="btn btn-white">Skip</a>
                                <a href="#" class="btn btn-success float-right">Submit <i class="material-icons btn__icon--right">send</i></a>
                            </div>
               </Card> 
   
          );
        }
      }



export default TakeTestQuestion;
