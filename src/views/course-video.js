import React from "react";
import { Card, CardHeader, CardBody} from "shards-react";
    import { Link } from "react-router-dom";


    class CourseVideo extends React.Component {
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
            <Card small className="h-100 sm-100">
            {/* <CardHeader className="border-bottom">
              <h6 className="m-0">Latest Course</h6>
            </CardHeader> */}
            <CardBody className="p-0 pb-3">
            <div class="embed-responsive embed-responsive-16by9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/D8x75-hgdeM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div class="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt illum ipsam magniima mollitia officiis quia tempora!
                                    </div>       </CardBody>
               </Card> 
   
          );
        }
      }



export default CourseVideo;
