import React from "react";
import { Card, CardHeader, CardBody} from "shards-react";
import picAuthor1 from "../itg-academy/images/nicolas.jpg";
    import { Link } from "react-router-dom";


    class CourseAuthor extends React.Component {
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
            <div class="media align-items-center">
                                            <div class="media-left">
                                                <img src={picAuthor1} alt="About Adrian" width="50" class="rounded-circle" />
                                            </div>
                                            <div class="media-body">
                                                <h4 class="card-title"><a href="instructor-profile.html">Lionel Messi</a></h4>
                                                <p class="card-subtitle">Instructor</p>
                                            </div>
                                            </div>
            </CardHeader>
            <CardBody className="">
            <p>Having over 12 years exp. Adrian is one of the lead UI designers in the industry Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, aut.</p>
                                        <a href="#" class="btn btn-light"><i class="fab fa-facebook"></i></a>
                                        <a href="#" class="btn btn-light"><i class="fab fa-twitter"></i></a>
                                        <a href="#" class="btn btn-light"><i class="fab fa-github"></i></a>
                                       
                                       
                                          </CardBody>
               </Card> 
   
          );
        }
      }



export default CourseAuthor;
