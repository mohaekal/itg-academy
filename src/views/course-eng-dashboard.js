import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
    NavItem,
    NavLink } from "shards-react";
    import { Link } from "react-router-dom";
    import pic1 from "../itg-academy/images/vuejs.png";


    class CourseEngDash extends React.Component {
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
              <h6 className="m-0">My Course</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
               
            <div>
            <ul className="list-group list-group-fit mb-0" style={{zIndex: 'initial'}}>

<li className="list-group-item"  style={{zIndex: 'initial'}}>
    <div className="d-flex align-items-center">
        <a href="test-result.html" className="avatar avatar-4by3 avatar-sm mr-3">
            <img src={pic1} alt="course" className="avatar-img rounded" />
        </a>
        <div className="flex">
            <a href="test-result.html" className="text-body"><strong>Learn Redhat Fundamentals</strong></a>
            <div className="d-flex align-items-center">
                <div className="progress" style={{width: '100%'}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <small className="text-muted ml-2">25%</small>
            </div>
        </div>
        
    </div>
</li>

<li className="list-group-item"  style={{zIndex: 'initial'}}>
    <div className="d-flex align-items-center">
        <a href="test-result.html" className="avatar avatar-4by3 avatar-sm mr-3">
            <img src={pic1} alt="course" className="avatar-img rounded" />
        </a>
        <div className="flex">
            <a href="test-result.html" className="text-body"><strong>Angular in Steps</strong></a>
            <div className="d-flex align-items-center">
                <div className="progress" style={{width: '100%'}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '100%' }}></div>
                </div>
                <small className="text-muted ml-2">100%</small>
            </div>
        </div>
       
    </div>
</li>

<li className="list-group-item"  style={{zIndex: 'initial'}}>
    <div className="d-flex align-items-center">
        <a href="test-result.html" className="avatar avatar-4by3 avatar-sm mr-3">
            <img src={pic1} alt="course" className="avatar-img rounded" />
        </a>
        <div className="flex">
            <a href="test-result.html" className="text-body"><strong>Bootstrap Foundations</strong></a>
            <div className="d-flex align-items-center">
                <div className="progress" style={{width: '100%'}}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '80%'}}></div>
                </div>
                <small className="text-muted ml-2">80%</small>
            </div>
        </div>

    </div>
</li>

</ul>
                                    </div>  



                                     </CardBody>
     </Card> 
   

                                


          );
        }
      }



export default CourseEngDash;
