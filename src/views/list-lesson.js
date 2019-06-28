import React from "react";
import { Card, CardHeader, CardBody} from "shards-react";
    import { Link } from "react-router-dom";


    class ListLesson extends React.Component {
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
            <ul class="card list-group list-group-fit">
            <li class="list-group-item">
                <div class="media">
                    <div class="media-left">
                        <div class="text-muted">1.</div>
                    </div>
                    <div class="media-body">
                        <a href="#">Installation</a>
                    </div>
                    <div class="media-right">
                        <small class="text-muted-light">2:03</small>
                    </div>
                </div>
            </li>
            <li class="list-group-item active">
                <div class="media">
                    <div class="media-left">
                        2.
                    </div>
                    <div class="media-body">
                        <a class="text-white" href="#">The Redhat architectural pattern</a>
                    </div>
                    <div class="media-right">
                        <small>25:01</small>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="media">
                    <div class="media-left">
                        <div class="text-muted">3.</div>
                    </div>
                    <div class="media-body">
                        <a href="#">Database Models</a>
                    </div>
                    <div class="media-right">
                        <small class="text-muted-light">12:10</small>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="media">
                    <div class="media-left">
                        <div class="text-muted">4.</div>
                    </div>
                    <div class="media-body">
                        <a href="#">Database Access</a>
                    </div>
                    <div class="media-right">
                        <small class="text-muted-light">1:25</small>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="media">
                    <div class="media-left">
                        <div class="text-muted">5.</div>
                    </div>
                    <div class="media-body">
                        <a href="#">Eloquent Basics</a>
                    </div>
                    <div class="media-right">
                        <small class="text-muted-light">22:30</small>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="media">
                    <div class="media-left">
                        <div class="text-muted">6.</div>
                    </div>
                    <div class="media-body">
                        <a href="#">Take Quiz</a>
                    </div>
                    <div class="media-right">
                        <small class="text-muted-light">10:00</small>
                    </div>
                </div>
            </li>
        </ul>
   
          );
        }
      }



export default ListLesson;
