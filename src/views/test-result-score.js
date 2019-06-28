import React from "react";
import { Card, CardHeader, CardBody} from "shards-react";
    import { Link } from "react-router-dom";


    class TestResultScore extends React.Component {
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
            <h4 class="card-title">Redhat Deploy Test</h4>
            </CardHeader>
            <CardBody className="p-0 pb-3">
          
            <div className="card-body media align-items-center">
                                <div className="media-body">
                                    <h4 className="mb-0">5.8</h4>
                                    <span className="text-muted-light">Good</span>
                                </div>
                                <div className="media-right">
                                    <a href="student-take-quiz.html" className="btn btn-primary">Restart <i className="material-icons btn__icon--right">refresh</i></a>
                                </div>
                            </div>
               </CardBody>
               </Card> 
   
          );
        }
      }



export default TestResultScore;
