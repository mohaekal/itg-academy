import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from "shards-react";


    class Contentx extends React.Component {
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
            <Card small className="h-100">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Coming soon</h6>
            </CardHeader>
           </Card> 
   
          );
        }
      }



export default Contentx;
