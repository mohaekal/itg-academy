import React from "react";
import { Card, CardHeader, CardBody, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from "shards-react";


    class Pagination extends React.Component {
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
             
<ul class="pagination justify-content-center pagination-sm">
<li class=" disabled">
    <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true" class="material-icons">chevron_left</span>
        <span>Prev</span>
    </a>
</li>
<li class="active">
    <a class="page-link" href="#" aria-label="1">
        <span>1</span>
    </a>
</li>
<li class="">
    <a class="page-link" href="#" aria-label="1">
        <span>2</span>
    </a>
</li>
<li class="">
    <a class="page-link" href="#" aria-label="Next">
        <span>Next</span>
        <span aria-hidden="true" class="material-icons">chevron_right</span>
    </a>
</li>
</ul>

          );
        }
      }



export default Pagination;


