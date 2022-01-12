import React, { Component } from "react";
import AllBuckets from "./AllBuckets";

import { Navbar,Container,Nav,Button } from 'react-bootstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGroupedData: false,
    };
    this.toggleShowGroupData = this.toggleShowGroupData.bind(this);
  }

  toggleShowGroupData() {
    this.setState({ showGroupedData: !this.state.showGroupedData });
  }
  componentDidMount() {
    document.body.style.zoom = "100%";
  }
  handleZoomIn() {
    document.body.style.zoom = `${parseInt(document.body.style.zoom) + 10}%`;
  }
  handleZoomOut() {
    document.body.style.zoom = `${parseInt(document.body.style.zoom) - 10}%`;
  }

  render() {
    return (
        <div className="container-fluid">
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand style={{ color: "black" }} className="header">Idea Management Tool</Navbar.Brand>
              <Nav></Nav>
              <Nav >
                <Button
                    style={{ backgroundColor: "black", border:"none" }}
                    onClick={this.toggleShowGroupData}
                >
                  Group Highlights
                </Button>

                <Nav.Link >
                  <Button color="link" className="zoomout" onClick={this.handleZoomOut} style={{backgroundColor:"transparent",border:"none" }}>
                    <span className="fa fa-search-minus fa-lg"></span>
                  </Button>
                </Nav.Link>

                <Nav.Link >
                  <Button color="link" className="zoomin" onClick={this.handleZoomIn} style={{backgroundColor:"transparent",border:"none" }} >
                    <span className="fa fa-search-plus fa-lg"></span>
                  </Button>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <AllBuckets showGroupedData={this.state.showGroupedData} />
        </div>


    );
  }
}

export default Main;
