import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from "shards-react";
import redHat from "../itg-academy/images/redhatcert.png";

    class MyExamList extends React.Component {
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
                  <div className="container-fluid page__container">
                                    <div className="card-columns">


                                    <div className="card card-sm">
                                    <div class="card-body media">
                                    <div class="media-left">
                                        <a href="instructor-review-quiz.html" class="avatar avatar-lg avatar-4by3">
                                            <img src={redHat} alt="Card image cap" class="avatar-img rounded" />
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="card-title mb-0"><a href="instructor-review-quiz.html">Redhat Certification</a></h4>
                                        <small class="text-muted">25 Question</small>
                                    </div>
                                </div>
                                <div class="card-footer text-center">
         
                                    <span class="badge badge-pill badge-success float-right">Aproved</span>
                                    <div class="clearfix"></div>
                                </div>
                            </div>

                            <div class="card card-sm">
                                <div class="card-body media">
                                    <div class="media-left">
                                        <a href="instructor-review-quiz.html" class="avatar avatar-lg avatar-4by3">
                                            <img src={redHat} alt="Card image cap" class="avatar-img rounded" />
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="card-title mb-0"><a href="instructor-review-quiz.html">Gulp Front-End Boilerplate</a></h4>
                                        <small class="text-muted">50 Completed</small>
                                    </div>
                                </div>
                                <div class="card-footer text-center">
             
                                    <span class="badge badge-pill badge-primary float-right">Pending</span>
                                   <div class="clearfix"></div>
                                </div>
                            </div>

                            <div class="card card-sm">
                                <div class="card-body media">
                                    <div class="media-left">
                                        <a href="instructor-review-quiz.html" class="avatar avatar-lg avatar-4by3">
                                            <img src={redHat} alt="Card image cap" class="avatar-img rounded" />
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="card-title mb-0"><a href="instructor-review-quiz.html">Gulp Front-End Boilerplate</a></h4>
                                        <small class="text-muted">50 Completed</small>
                                    </div>
                                </div>
                                <div class="card-footer text-center">
             
                                    <span class="badge badge-pill badge-primary float-right">Pending</span>
                                   <div class="clearfix"></div>
                                </div>
                            </div>

                            <div class="card card-sm">
                                <div class="card-body media">
                                    <div class="media-left">
                                        <a href="instructor-review-quiz.html" class="avatar avatar-lg avatar-4by3">
                                            <img src={redHat} alt="Card image cap" class="avatar-img rounded" />
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="card-title mb-0"><a href="instructor-review-quiz.html">Gulp Front-End Boilerplate</a></h4>
                                        <small class="text-muted">50 Completed</small>
                                    </div>
                                </div>
                                <div class="card-footer text-center">
                        
                                    <span class="badge badge-pill badge-warning float-right">Declined</span>
                                    <div class="clearfix"></div>
                                </div>
                            </div>

</div>

 
</div>
</div>

          );
        }
      }



export default MyExamList;
