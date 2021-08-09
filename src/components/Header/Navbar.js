import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../../assets/Discouter_Logo.jpeg";
import { SocialMediaIconsReact } from "social-media-icons-react";
import styles from "./Navbar.module.css";
import { LinkContainer } from "react-router-bootstrap";
import PageButton from "../UI/PageButton";

const NavBar = (props) => {
  return (
    <Navbar
      collapseOnSelect
      bg="light"
      variant="light"
      expand="lg"
      sticky="top"
    >
      <Container className={styles.Navbar}>
        <LinkContainer to="/Home">
          <Navbar.Brand>
            <img
              src={logo}
              width="50"
              height="60"
              className="d-inline-block align-top"
              alt="Discouter logo"
              href="/Home"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Menu"
              id="responsive-nav-dropdown"
              className={styles.discouterDropdown}
            >
              <LinkContainer to="/Home">
                <NavDropdown.Item>Home</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/UsersPage">
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Businesses">
                <NavDropdown.Item>Businesses</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/HowItWorksUsers">
                <NavDropdown.Item>How It Works</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/FAQ">
                <NavDropdown.Item>FAQ's</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Contact">
                <NavDropdown.Item>Contact Us</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <div className="mx-1 my-1">
              <SocialMediaIconsReact
                className={styles.SocialIcons}
                borderColor="rgb(36, 34, 34)"
                icon="instagram"
                iconColor="rgb(36, 34, 34)"
                backgroundColor="#f8f9fa"
                size="40"
                url="https://www.instagram.com/discouterapp"
              />
            </div>

            <div className="mx-1 my-1">
              <SocialMediaIconsReact
                className={styles.SocialIcons}
                borderColor="rgb(36, 34, 34)"
                icon="facebook"
                iconColor="rgb(36, 34, 34)"
                backgroundColor="#f8f9fa"
                size="40"
                url="https://www.facebook.com/discouterapp"
              />
            </div>
            <div className="mx-1 my-1">
              <SocialMediaIconsReact
                className={styles.SocialIcons}
                borderColor="rgb(36, 34, 34)"
                icon="mail"
                iconColor="rgb(36, 34, 34)"
                backgroundColor="#f8f9fa"
                size="40"
                url="/Contact"
              />
            </div>
            <div className="ms-2 mt-1 align-self-center">
              <LinkContainer to="/UsersPage">
                <PageButton className={styles.HeaderButton}>
                  Download The App!
                </PageButton>
              </LinkContainer>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
