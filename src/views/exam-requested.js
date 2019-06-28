import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
    NavItem,
    NavLink } from "shards-react";
    import { Link } from "react-router-dom";


    class ExamRequested extends React.Component {
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
              <h6 className="m-0">Requested Exam</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      Employee
                    </th>
                    <th scope="col" className="border-0">
                      Certification
                    </th>
                    <th scope="col" className="border-0">
                      Exam Date
                    </th>
              
                    <th scope="col" className="border-0">
                     Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ali</td>
                    <td>EX 200</td>
                    <td>12/07/2019</td>
                
                    <td>
                    <div className="blog-comments__actions"><div className="btn-group-sm btn-group"><button className="btn btn-white"><span className="text-success"><i className="material-icons">check</i></span> Approve</button>&nbsp;<button className="btn btn-white"><span className="text-danger"><i className="material-icons">clear</i></span> Reject</button></div></div>
                        
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Clark</td>
                    <td>RHCE</td>
                    <td>12/07/2019</td>
                   
                    <td>
                    <div className="blog-comments__actions"><div className="btn-group-sm btn-group"><button className="btn btn-white"><span className="text-success"><i className="material-icons">check</i></span> Approve</button>&nbsp;<button className="btn btn-white"><span className="text-danger"><i className="material-icons">clear</i></span> Reject</button></div></div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jerry</td>
                    <td>RHCSA</td>
                    <td>12/07/2019</td>
                  
                    <td>
                    <div className="blog-comments__actions"><div className="btn-group-sm btn-group"><button className="btn btn-white"><span className="text-success"><i className="material-icons">check</i></span> Approve</button>&nbsp;<button className="btn btn-white"><span className="text-danger"><i className="material-icons">clear</i></span> Reject</button></div></div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Colt</td>
                    <td>EX 200</td>
                    <td>12/07/2019</td>
                   
                    <td>
                    <div className="blog-comments__actions"><div className="btn-group-sm btn-group"><button className="btn btn-white"><span className="text-success"><i className="material-icons">check</i></span> Approve</button>&nbsp;<button className="btn btn-white"><span className="text-danger"><i className="material-icons">clear</i></span> Reject</button></div></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
                    </Card> 
   
          );
        }
      }



export default ExamRequested;
