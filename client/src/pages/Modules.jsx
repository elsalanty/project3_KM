/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";

//import Grid from "react-bootstrap";

//import ChartistGraph from "react-chartist";
import { Row, Col, Button, Grid } from "react-bootstrap";

import { Card } from "../../../client/src/components/Card/Card";
//import { StatsCard } from "components/StatsCard/StatsCard.jsx";
//import { Tasks } from "components/Tasks/Tasks.jsx";

import { moduleText } from "../../../client/src/variables/Variables";

class Modules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //quizQuestions: quizQuestions,
      displayModule: false
    };
  }

  openModule(id) {
    console.log(id);
    this.setState({
      displayModule: true
    });
  }

  render() {
    var module = null;
    if (this.state.displayModule === true) {
      module = (
        <div>
          <h2>Biology</h2>
          {moduleText.map(data => {
            return (
              <div>
                <h4> {data} </h4>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <h1>My Course Page</h1>
            <Col md={4}>
              <Card
                title="Biology"
                id="biology"
                content={
                  <Button
                    id="biology"
                    variant="warning"
                    onClick={e => this.openModule(e.target.id)}
                  >
                    Start Module
                  </Button>
                }
              ></Card>
            </Col>
          </Row>
          {module}
        </Grid>
      </div>
    );
  }
}

export default Modules;
