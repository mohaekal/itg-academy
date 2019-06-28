import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
    NavItem,
    NavLink } from "shards-react";
    import { Link } from "react-router-dom";


    class TestResults extends React.Component {
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
            <Card small className="h-100">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Test Results</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
               
            <div>
                                    <ul className="list-group list-group-fit mb-0">

                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <a className="text-body" href="test-result.html"><strong>Title of quiz goes here?</strong></a><br />
                                                    <div className="d-flex align-items-center">
                                                        <small className="text-black-50 text-uppercase mr-2">Course</small>
                                                        <a href="test-result.html">Basics of HTML</a>
                                                    </div>
                                                </div>
                                                <div className="media-right text-center d-flex align-items-center">
                                                    <span className="text-black-50 mr-3">Good</span>
                                                    <h4 className="mb-0">5.8</h4>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <a className="text-body" href="test-result.html"><strong>Directives &amp; Routing</strong></a><br />
                                                    <div className="d-flex align-items-center">
                                                        <small className="text-black-50 text-uppercase mr-2">Course</small>
                                                        <a href="test-result.html">Angular in Steps</a>
                                                    </div>
                                                </div>
                                                <div className="media-right text-center d-flex align-items-center">
                                                    <span className="text-black-50 mr-3">Great</span>
                                                    <h4 className="mb-0 text-success">9.8</h4>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <a className="text-body" href="test-result.html"><strong>Responsive &amp; Retina</strong></a><br />
                                                    <div className="d-flex align-items-center">
                                                        <small className="text-black-50 text-uppercase mr-2">Course</small>
                                                        <a href="test-result.html">Bootstrap Foundations</a>
                                                    </div>
                                                </div>
                                                <div className="media-right text-center d-flex align-items-center">
                                                    <span className="text-black-50 mr-3">Failed</span>
                                                    <h4 className="mb-0 text-danger">2.8</h4>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                    </div>  



                                     </CardBody>
            <div className="border-top card-footer"><div className="row"><div className="text-center view-report col"><button type="submit" className="btn btn-white">View All</button></div></div></div>
          </Card> 
   

                                


          );
        }
      }



export default TestResults;
