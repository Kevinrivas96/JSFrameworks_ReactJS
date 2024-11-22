import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary w-100" expand="lg">
        <Container fluid data-bs-theme="dark">
          <Navbar.Brand href="#home">
            <img
              src="/src/assets/react.svg"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <FaSearch 
                color="white"
              />
            </Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;