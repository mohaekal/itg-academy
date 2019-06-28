import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from "shards-react";
    import pic1 from "../itg-academy/images/vuejs.png";


    class AddCourseAdminForm extends React.Component {
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
            <Card small className="h-100">
            <CardHeader className="border-bottom">
            <h6 className="m-0">Basic Information</h6>
          </CardHeader>
            <CardBody className="">
             
        

                                        <div className="form-group">
                                            <label className="form-label" for="title">Title</label>
                                            <input type="text" id="title" className="form-control" placeholder="Write a title" value="" />
                                        </div>

                                        <div className="form-group mb-0">
                                            <label className="form-label">Description</label>
                                            <textarea type="textarea" id="title" className="form-control" placeholder="Write a title" value="" />
                                        </div>

                            
                       
            </CardBody>
           
          </Card> 
   

  

</div>

          );
        }
      }



export default AddCourseAdminForm;
