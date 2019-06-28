import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from "shards-react";
    import pic1 from "../itg-academy/images/vuejs.png";
    import  $ from  "jquery"

    class CourseList extends React.Component {

        constructor(props) {
            super(props);
        
            this.state = {
              visible: false
            };
        
            this.toggleUserActions = this.toggleUserActions.bind(this);
          }
        
          toggleUserActions() {
            this.setState({
              visible: !this.state.visible
            });
          }
        
         
      
        render() {
          return (
              <div>
            <Card small className="h-100">
       
            <CardBody className="">
             
            <div className="d-flex flex-column flex-sm-row">
                                            <a href="" className="avatar avatar-lg avatar-4by3 mb-3 w-xs-plus-down-100 mr-sm-3">
                                                <img src={pic1} alt="Card image cap" className="avatar-img rounded" />
                                            </a>
                                            <div className="flex" style={{minWidth:'200px'}}>
                                                <h4 className="card-title mb-1"><a href="">Operating Systems</a></h4>
                                                <p className="text-black-70">Letâ€™s start with a quick tour of Vueâ€™s data binding features.</p>
                                                <div className="d-flex align-items-end">
                                                    <div className="d-flex flex flex-column mr-3">
                                                        <div className="d-flex align-items-center py-1 border-bottom">
                                                            <small className="text-black-50">34 COURSE</small>
                                                        </div>
                                                        <div className="d-flex align-items-center py-1">
                                                            <small className="text-muted mr-2">Redhat</small>
                                                            <small className="text-muted mr-2">Windows</small>
                                                            <small className="text-muted">Debian</small>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <a href="" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#modalRegisterForm">Course Lists</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                    

            </CardBody>
            <div className="card__options dropdown right-0 pr-2">
                                        <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                                            <i className="material-icons">more_vert</i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="" data-toggle="modal" data-target="#modalRegisterForm2">Edit track</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item text-danger" href="#">Delete course</a>
                                        </div>
                                    </div>
          </Card> 
   

   <Card small className="h-100">
       
   <CardBody className="">
    
   <div className="d-flex flex-column flex-sm-row">
                                   <a href="" className="avatar avatar-lg avatar-4by3 mb-3 w-xs-plus-down-100 mr-sm-3">
                                       <img src={pic1}  alt="Card image cap" className="avatar-img rounded" />
                                   </a>
                                   <div className="flex" style={{minWidth:'200px'}}>
                                       <h4 className="card-title mb-1"><a href="">Operating Systems</a></h4>
                                       <p className="text-black-70">Letâ€™s start with a quick tour of Vueâ€™s data binding features.</p>
                                       <div className="d-flex align-items-end">
                                           <div className="d-flex flex flex-column mr-3">
                                               <div className="d-flex align-items-center py-1 border-bottom">
                                                   <small className="text-black-50">34 COURSE</small>
                                               </div>
                                               <div className="d-flex align-items-center py-1">
                                                   <small className="text-muted mr-2">Redhat</small>
                                                   <small className="text-muted mr-2">Windows</small>
                                                   <small className="text-muted">Debian</small>
                                               </div>
                                           </div>
                                           <div className="text-center">
                                               <a href="" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#modalRegisterForm">Course Lists</a>
                                           </div>
                                       </div>
                                   </div>
                               </div>

           

   </CardBody>
   <div className="card__options dropdown right-0 pr-2">
                               <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                                   <i className="material-icons">more_vert</i>
                               </a>
                               <div className="dropdown-menu dropdown-menu-right">
                                   <a className="dropdown-item" href="" data-toggle="modal" data-target="#modalRegisterForm2">Edit track</a>
                                   <div className="dropdown-divider"></div>
                                   <a className="dropdown-item text-danger" href="#">Delete course</a>
                               </div>
                           </div>
 </Card> 

</div>

          );
        }
      }



export default CourseList;
