import React from "react";
import { Card, CardHeader, CardBody} from "shards-react";
    import { Link } from "react-router-dom";


    class CourseRate extends React.Component {
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
              <h6 className="m-0">Rattings</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
            <div class="card-body">
                                        <div class="rating">
                                            <i class="material-icons">star</i>
                                            <i class="material-icons">star</i>
                                            <i class="material-icons">star</i>
                                            <i class="material-icons">star</i>
                                            <i class="material-icons">star_border</i>
                                        </div>
                                        <small class="text-muted">20 ratings</small>
                                    </div>

                </CardBody>
               </Card> 
   
          );
        }
      }



export default CourseRate;
