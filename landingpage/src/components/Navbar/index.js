import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  MobileIcon,
  MobileMenu,
  MobileLink,
  GitHubButton,
  ButtonContainer,
  NavItem,
} from "./NavbarStyledComponent";
import { FaBars } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useTheme } from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <Span>Logo comes here</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Support</NavLink>
          <NavLink href="#experience">Stores</NavLink>
        </NavItems>
        <NavItem>
          <NavLink href="#projects" style={{ color: "#29abaf" }}>
            Login
          </NavLink>{" "}
          |
          <NavLink style={{ color: "#29abaf" }} href="#education">
            Register
          </NavLink>
        </NavItem>
        <NavItem>
          <FaShoppingCart style={{ color: "white" }} />
        </NavItem>
        <ButtonContainer>
          <GitHubButton>
            <FaLocationDot
              style={{ margin: "0px 5px 0px 0px", color: "#29abaf" }}
            />
            Find your store{" "}
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                color: "white",
                width: "max-content",
              }}
            >
              Find your store{" "}
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
