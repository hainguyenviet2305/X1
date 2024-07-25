import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom'; // Import Link từ react-router-dom
import './Menu.scss';

const Menu = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  
  return (
    <Navbar expanded={expanded} expand="md" className="menu">
      <Navbar.Brand className="mr-auto"></Navbar.Brand>
      <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        onClick={() => setExpanded(expanded ? false : "expanded")}
        className="custom-toggler"
      >
        <div className="custom-toggler-text">Menu</div>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column menu-items">
          <Nav.Link 
            as={Link} // Sử dụng Link từ react-router-dom
            to="/blog" // Thay thế href bằng to
            className={`menu-link ${location.pathname === '/blog' ? 'active' : ''}`}
          >
            Blog
          </Nav.Link>
          <Nav.Link 
            as={Link} // Sử dụng Link từ react-router-dom
            to="/faq" // Thay thế href bằng to
            className={`menu-link ${location.pathname === '/faq' ? 'active' : ''}`}
          >
            FAQ
          </Nav.Link>
          <Nav.Link 
            as={Link} // Sử dụng Link từ react-router-dom
            to="/about" // Thay thế href bằng to
            className={`menu-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
