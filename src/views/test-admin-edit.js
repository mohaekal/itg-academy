import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import ExamRequested from "./../views/exam-requested";
import UsersByDevice from "./../components/blog/UsersByDevice";
import TestAdminEditPage from "./test-admin-edit-page";
import QuestionTable from "./question-table";





const TestAdminEdit = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4 .page__container">
      
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
        
      <PageTitle title="Add Test"  className="text-sm-left mb-3" />
      <div className="d-flex flex-column flex-sm-row flex-wrap  align-items-start button-right">

<a href="" className="btn btn-success" data-toggle="modal" data-target="#modalRegisterForm2">Add Question</a>
</div>
    </Row>

    {/* Small Stats Blocks */}
    

    <Row>
        
      {/* Users Overview */}
      <Col lg="12" md="12" sm="12" className="mb-4">

        <TestAdminEditPage />
        <QuestionTable />
      
        
      </Col>

      {/* Users by Device */}
      {/* <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col> */}

      {/* New Draft */}
     
    </Row>
  </Container>
);

export default TestAdminEdit;
