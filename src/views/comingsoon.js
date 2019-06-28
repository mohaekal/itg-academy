import React from "react";

import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";



const ComingSoon = ({}) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Dashboard" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
    
        <Col className="col-lg mb-4" >
    
<p>coming soon</p>
         
        </Col>

    </Row>

    <Row>
      {/* Users Overview */}
      <Col lg="8" md="12" sm="12" className="mb-4">
      <p>coming soon</p>
      </Col>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
      <p>coming soon</p>
      </Col>

      {/* New Draft */}
     
    </Row>
  </Container>
);




export default ComingSoon;
