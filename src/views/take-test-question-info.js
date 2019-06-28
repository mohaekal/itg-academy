import React from "react";
import { Card, CardHeader, CardBody,CardGroup} from "shards-react";
    import { Link } from "react-router-dom";


    class TakeTestQuestionInfo extends React.Component {
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
            <CardGroup >
            <Card small className="">
            {/* <CardHeader className="border-bottom">
            
            </CardHeader> */}
            <CardBody className="text-center">
            <h4 class="mb-0"><strong>25</strong></h4>
                                    <small class="text-muted-light">TOTAL</small>
            </CardBody>
               </Card> 
              
               <Card small className="">
            {/* <CardHeader className="border-bottom">
            
            </CardHeader> */}
            <CardBody className="text-center">
            <h4 class="text-success mb-0"><strong>3</strong></h4>
                                    <small class="text-muted-light">CORECT</small>
            </CardBody>
               </Card> 
              
               <Card small className="">
            {/* <CardHeader className="border-bottom">
            
            </CardHeader> */}
            <CardBody className="text-center">
            <h4 class="text-danger mb-0"><strong>5</strong></h4>
                                    <small class="text-muted-light">WRONG</small>
            </CardBody>
               </Card> 
              
               <Card small className="">
            {/* <CardHeader className="border-bottom">
            
            </CardHeader> */}
            <CardBody className="text-center">
            <h4 class="text-primary mb-0"><strong>17</strong></h4>
                                    <small class="text-muted-light">LEFT</small>
            </CardBody>
               </Card> 

               </CardGroup>
   
          );
        }
      }



export default TakeTestQuestionInfo;
