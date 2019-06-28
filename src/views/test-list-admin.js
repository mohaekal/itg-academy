import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from "shards-react"; 
    import { Link } from "react-router-dom";
import pic1 from "../itg-academy/images/vuejs.png";

    class TestListAdmin extends React.Component {
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
                  <div class="container-fluid page__container">
                                    <div className="card-columns">

<div className="card card-sm">
    <div className="card-body media">
        <div className="media-left">
            <a href="" className="avatar avatar-lg avatar-4by3">
                <img src={pic1} alt="Card image cap" className="avatar-img rounded" />
            </a>
        </div>
        <div className="media-body">
            <h4 className="card-title mb-0"><a href="">Redhat Deploy Quiz</a></h4>
            <small className="text-muted">25 Completed</small>
        </div>
    </div>
    <div className="card-footer text-center">
       
        <a href="" className="btn btn-default btn-sm float-right"><Link className="alinkbl" to='/test-admin-edit'><i className="material-icons btn__icon--left">edit</i> Edit</Link> </a>
        <div className="clearfix"></div>
    </div>
</div>

<div className="card card-sm">
    <div className="card-body media">
        <div className="media-left">
            <a href="" className="avatar avatar-lg avatar-4by3">
                <img src={pic1} alt="Card image cap" className="avatar-img rounded" />
            </a>
        </div>
        <div className="media-body">
            <h4 className="card-title mb-0"><a href="">Redhat Deploy Quiz</a></h4>
            <small className="text-muted">25 Completed</small>
        </div>
    </div>
    <div className="card-footer text-center">
       
        <a href="admin-test-edit.html" className="btn btn-default btn-sm float-right"><Link className="alinkbl" to='/test-admin-edit'><i className="material-icons btn__icon--left">edit</i> Edit</Link> </a>
        <div className="clearfix"></div>
    </div>
</div>

<div className="card card-sm">
    <div className="card-body media">
        <div className="media-left">
            <a href="" className="avatar avatar-lg avatar-4by3">
                <img src={pic1} className="avatar-img rounded" />
            </a>
        </div>
        <div className="media-body">
            <h4 className="card-title mb-0"><a href="">GitHub Basic Setup</a></h4>
            <small className="text-muted">410 Completed</small>
        </div>
    </div>
    <div className="card-footer text-center">
       
        <a href="admin-test-edit.html" className="btn btn-default btn-sm float-right"><Link className="alinkbl" to='/test-admin-edit'><i className="material-icons btn__icon--left">edit</i> Edit</Link> </a>
        <div className="clearfix"></div>
    </div>
</div>

<div className="card card-sm">
    <div className="card-body media">
        <div className="media-left">
            <a href="" className="avatar avatar-lg avatar-4by3">
                <img src={pic1} className="avatar-img rounded" />
            </a>
        </div>
        <div className="media-body">
            <h4 className="card-title mb-0"><a href="">Gulp Front-End</a></h4>
            <small className="text-muted">50 Completed</small>
        </div>
    </div>
    <div className="card-footer text-center">
       
        <a href="admin-test-edit.html" className="btn btn-default btn-sm float-right"><Link className="alinkbl" to='/test-admin-edit'><i className="material-icons btn__icon--left">edit</i> Edit</Link> </a>
        <div className="clearfix"></div>
    </div>
</div>

</div>

 
</div>
</div>

          );
        }
      }



export default TestListAdmin;
