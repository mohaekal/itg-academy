import React from "react";
import { Card, CardHeader, CardBody} from "shards-react";
import { Link } from "react-router-dom";


    class CourseListDashboard extends React.Component {
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
              <h6 className="m-0">Latest Course</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      Course
                    </th>

              
                    <th scope="col" className="border-0">
                     Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
          
                    <td>Fundamental of Linux</td>
                    <td>
                    <div className="blog-comments__actions"><div className="btn-group-sm btn-group"><button className="btn btn-white"><span className="text-success"><i className="material-icons">edit&nbsp;</i></span> <Link className="alinkbl" to='/add-course-admin'> Edit </Link></button></div></div>
                        
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
         
                    <td>Fundamental of Linux</td>
                    <td>
                    <div className="blog-comments__actions"><div className="btn-group-sm btn-group"><button className="btn btn-white"><span className="text-success"><i className="material-icons">edit&nbsp;</i></span><Link className="alinkbl" to='/add-course-admin'> Edit </Link></button></div></div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Fundamental of Linux</td>
                  
                    <td>
                    <div className="blog-comments__actions"><div className="btn-group-sm btn-group"><button className="btn btn-white"><span className="text-success"><i className="material-icons">edit&nbsp;</i></span><Link className="alinkbl" to="/add-course-admin"> Edit </Link></button></div></div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                  
                    <td>Fundamental of Linux</td>
                    <td>
                    <div className="blog-comments__actions"><div className="btn-group-sm btn-group"><button className="btn btn-white"><span className="text-success"><i className="material-icons">edit&nbsp;</i></span><Link className="alinkbl" to="/add-course-admin"> Edit </Link></button></div></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
               </Card> 
   
          );
        }
      }



export default CourseListDashboard;
