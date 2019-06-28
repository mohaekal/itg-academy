import React from "react";
import { Card, CardHeader, CardBody} from "shards-react";
import picAuthor1 from "../itg-academy/images/nicolas.jpg";
    import { Link } from "react-router-dom";


    class CourseLevel extends React.Component {
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
            {/* <CardHeader className="border-bottom">
            <div class="media align-items-center">
                                            <div class="media-left">
                                                <img src={picAuthor1} alt="About Adrian" width="50" class="rounded-circle" />
                                            </div>
                                            <div class="media-body">
                                                <h4 class="card-title"><a href="instructor-profile.html">Lionel Messi</a></h4>
                                                <p class="card-subtitle">Instructor</p>
                                            </div>
                                            </div>
            </CardHeader> */}
            <CardBody className="">
            <ul class="list-group list-group-fit">
                                        <li class="list-group-item">
                                            <div class="media align-items-center">
                                                <div class="media-left">
                                                    <i class="material-icons text-muted-light">schedule</i>
                                                </div>
                                                <div class="media-body">
                                                    2 <small class="text-muted">hrs</small> &nbsp; 26 <small class="text-muted">min</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="media align-items-center">
                                                <div class="media-left">
                                                    <i class="material-icons text-muted-light">assessment</i>
                                                </div>
                                                <div class="media-body">Beginner</div>
                                            </div>
                                        </li>
                                    </ul>
                                       
                                       
                                          </CardBody>
               </Card> 
   
          );
        }
      }



export default CourseLevel;
