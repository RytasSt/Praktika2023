import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { TbBrandOpenai } from "react-icons/tb";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";

function Navigation() {
  const { getLoggedIn, isAdmin } = useContext(AuthContext);

  const logOut = async () => {
    await axios.get("http://localhost:3000/users/logout");
    getLoggedIn();
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <TbBrandOpenai size={50} />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="p-2" to="/">Home</Link>
            <Link className="p-2" to="/menu">Menu</Link>
            {/* <Link className="p-2" to="/create">Create Employee</Link>{" "} */}
          </Nav>
          <Button onClick={logOut}>
            Logout
          </Button>
          {isAdmin && (
              <>
                <Link
                  to="/addmenu/"
                  className="mb-2 w-25 mx-auto text-decoration-none"
                >
                  <Button className="w-25 mx-auto gradient-class">
                    Add Menu
                  </Button>
                </Link>
                <Link
                  to="/addmeals/"
                  className="mb-2 w-25 mx-auto text-decoration-none"
                >
                  <Button className="w-25 mx-auto gradient-class">
                    Add Meals
                  </Button>
                </Link>
              </>
            )}
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
