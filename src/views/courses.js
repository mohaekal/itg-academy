import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col , Button, Modal, ModalBody, ModalHeader , ModalFooter } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import ExamRequested from "./../views/exam-requested";
import UsersByDevice from "./../components/blog/UsersByDevice";
import CourseList from "./course-list";


export default class BasicModalExample extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle1 = this.toggle.bind(this);
    
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
    
        <Modal open={open} toggle={this.toggle1}>
          <ModalHeader className="modal-title w-100 font-weight-bold"><h4 class="modal-title w-100 font-weight-bold">Course Track</h4></ModalHeader>
          <ModalBody>
          <div class="md-form mb-3">
                
                </div>
                <div class="md-form mb-3">
                      <div class="form-group">
                              <label class="form-label" for="flatpickrSample02">Track Name</label>
                              <input id="flatpickrSample02" type="text" class="form-control" />
                          </div>
                </div>
      
                <div class="md-form mb-3">
                  <div class="form-group">
                          <label class="form-label" for="flatpickrSample02">Description</label>
                          <input id="flatpickrSample02" type="text" class="form-control" />
                      </div>
            </div></ModalBody>  
            <ModalFooter>
            <a href="#" class="btn btn-primary">Request Now</a>
            </ModalFooter>
        </Modal>
        <Container fluid className="main-content-container px-4 .page__container">
      
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
          
        <PageTitle title="Courses"  className="text-sm-left mb-3" />
        <div className="d-flex flex-column flex-sm-row flex-wrap  align-items-start button-right">
  
         <a onClick={this.toggle1} className="btn btn-success alink" >Add course track</a>
     </div>
      </Row>
  
      {/* Small Stats Blocks */}
      
  
      <Row>
          
        {/* Users Overview */}
        <Col lg="12" md="12" sm="12" className="mb-4">
  
          <CourseList />
          
        </Col>
  
        {/* Users by Device */}
        {/* <Col lg="4" md="6" sm="12" className="mb-4">
          <UsersByDevice />
        </Col> */}
  
        {/* New Draft */}
       
      </Row>
    </Container>


      </ React.Fragment >




    );
  }
}








