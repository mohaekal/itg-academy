import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import ExamRequested from "./../views/exam-requested";
import UsersByDevice from "./../components/blog/UsersByDevice";
import TestAdminEditPage from "./test-admin-edit-page";
import AddCourseAdminForm from "./add-course-admin-form";




const AddCourseAdmin = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4 .page__container">
      
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
        
      <PageTitle title="Add Courses"  className="text-sm-left mb-3" />
      <div className="d-flex flex-column flex-sm-row flex-wrap  align-items-start button-right">

       <a href="" className="btn btn-success" data-toggle="modal" data-target="#modalRegisterForm2">Submit</a>
   </div>
    </Row>

    {/* Small Stats Blocks */}
    

    <Row>
        
      {/* Users Overview */}
      <Col lg="8" md="8" sm="12" className="mb-4">

        <AddCourseAdminForm/>

        
      </Col>

      <Col lg="4" md="4" sm="12" className="mb-4">

      <div className="card">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/j01lOh3DzOU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className="card-body">
                                        <input type="text" className="form-control" placeholder="Write Youtube url" value="" />
                                    </div>
                                </div>

        
      </Col>

      {/* Users by Device */}
      {/* <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col> */}

      {/* New Draft */}
     
    </Row>
  </Container>
);

export default AddCourseAdmin;
