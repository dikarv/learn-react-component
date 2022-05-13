import React, { Component } from "react";
import{ Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap"

class NavbarComponent extends Component {
  render() {
    //mencari
    return (
      //menangkap hasilnya

      //ini merupakan Fragment
      <>
        <Navbar bg="light" expand="lg" opacity={"0%"}>
          <Container fluid>
            <Navbar.Brand href="#">Otaku Desuka?</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Anime List</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">OnGoing Anime</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Bacht Anime
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Next Season
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Wacth
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>{" "}
      </>
    );
  }
}

export default NavbarComponent;
//Navbar component bisa di import
