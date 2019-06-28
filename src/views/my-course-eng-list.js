import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from "shards-react";
import pic1 from "../itg-academy/images/vuejs.png";

    class MyCourseEngList extends React.Component {
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
                                <div className="card-header">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="student-student-take-course.html">
                                                <img src={pic1} alt="Card image cap" width="100" className="rounded" />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="card-title m-0"><a href="student-take-course.html">Learn VueJs the easy way!</a></h4>
                                            <small className="text-muted">Lessons: 3 of 7</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress rounded-0">
                                    <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{width: '1%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="card-footer bg-white">
                                    <a href="course.html" className="btn btn-primary btn-sm">Continue <i className="material-icons btn__icon--right">play_circle_outline</i></a>
                                </div>
                            </div>

                            <div className="card card-sm">
                                <div className="card-header">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="student-student-take-course.html">
                                                <img src={pic1} alt="Card image cap" width="100" className="rounded" />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="card-title m-0"><a href="student-take-course.html">Learn VueJs the easy way!</a></h4>
                                            <small className="text-muted">Lessons: 3 of 7</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress rounded-0">
                                    <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{width: '60%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="card-footer bg-white">
                                    <a href="course.html" className="btn btn-primary btn-sm">Continue <i className="material-icons btn__icon--right">play_circle_outline</i></a>
                                </div>
                            </div>

                            <div className="card card-sm">
                                <div className="card-header">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="student-student-take-course.html">
                                                <img src={pic1} alt="Card image cap" width="100" className="rounded" />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="card-title m-0"><a href="student-take-course.html">Learn VueJs the easy way!</a></h4>
                                            <small className="text-muted">Lessons: 3 of 7</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress rounded-0">
                                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="card-footer bg-white ">
                                    <a href="course.html" className="btn btn-success btn-sm">Completed <i className="material-icons btn__icon--right">check</i></a>
                                    <a href="course.html" className="btn btn-white btn-sm">Restart <i className="material-icons btn__icon--right">replay</i> </a>
                                </div>
                            </div>

                            <div className="card card-sm">
                                <div className="card-header">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="student-student-take-course.html">
                                                <img src={pic1} alt="Card image cap" width="100" className="rounded" />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="card-title m-0"><a href="student-take-course.html">Learn VueJs the easy way!</a></h4>
                                            <small className="text-muted">Lessons: 3 of 7</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress rounded-0">
                                    <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{width: '30%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="card-footer bg-white">
                                    <a href="course.html" className="btn btn-primary btn-sm">Continue <i className="material-icons btn__icon--right">play_circle_outline</i></a>
                                </div>
                            </div>

</div>

 
</div>
</div>

          );
        }
      }



export default MyCourseEngList;
