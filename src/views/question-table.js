import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from "shards-react";


    class QuestionTable extends React.Component {
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
                    <Dropdown
              open={this.state.dropdown1}
              toggle={() => this.toggle("dropdown1")}
              addonType="append"
            >
              <DropdownToggle caret>Action</DropdownToggle>
              <DropdownMenu small right>
                <DropdownItem>Accept</DropdownItem>
                <DropdownItem>Decline</DropdownItem>
            
              </DropdownMenu>
            </Dropdown>
                        
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Clark</td>
                    <td>RHCE</td>
                    <td>12/07/2019</td>
                   
                    <td>
                    <Dropdown
              open={this.state.dropdown1}
              toggle={() => this.toggle("dropdown1")}
              addonType="append"
            >
              <DropdownToggle caret>Action</DropdownToggle>
              <DropdownMenu small right>
                <DropdownItem>Accept</DropdownItem>
                <DropdownItem>Decline</DropdownItem>
            
              </DropdownMenu>
            </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jerry</td>
                    <td>RHCSA</td>
                    <td>12/07/2019</td>
                  
                    <td>
                    <Dropdown
              open={this.state.dropdown1}
              toggle={() => this.toggle("dropdown1")}
              addonType="append"
            >
              <DropdownToggle caret>Action</DropdownToggle>
              <DropdownMenu small right>
                <DropdownItem>Accept</DropdownItem>
                <DropdownItem>Decline</DropdownItem>
            
              </DropdownMenu>
            </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Colt</td>
                    <td>EX 200</td>
                    <td>12/07/2019</td>
                   
                    <td>
                    <Dropdown
              open={this.state.dropdown1}
              toggle={() => this.toggle("dropdown1")}
              addonType="append"
            >
              <DropdownToggle caret>Action</DropdownToggle>
              <DropdownMenu small right>
                <DropdownItem>Accept</DropdownItem>
                <DropdownItem>Decline</DropdownItem>
            
              </DropdownMenu>
            </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
          </Card> 
          </div>
   
          );
        }
      }



export default QuestionTable;
