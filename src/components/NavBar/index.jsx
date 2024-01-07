import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  { useAuth } from '../../session/AuthContext';
import { NavDropdown, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth';
import { useLocation, NavLink } from 'react-router-dom';
const  NavBarComponent = ({user, logout}) => {
  const isAuthenticated = useAuth();
  const loc = useLocation();
  useEffect(() => {
    setActiveKey(loc?.pathname);
  }, [loc?.pathname]);
  const [activeKey, setActiveKey] = useState(loc?.pathname);
const handleLogout = () => {
  logout();
}
const navLinks = [
  { path: '/about-us', label: 'About Us' },
  { path: '/products', label: 'Products' },
];
const loginLink = [
  {
    path: '/login', label: 'Login here'
  }
]
const renderNavLink = (item) => {
  return (
    <li className={`nav-item-link ${activeKey === item.path ? 'active' : ''}`}>
      <NavLink to={item.path} key={item.path}>
        {item.label}
      </NavLink></li>
  );
};
  return (
    <Navbar sticky='top' collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="/">
        <img src='../../assets/images/logo.png' height={48} width={48}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          {isAuthenticated.isAuthenticated && (
            <>
            {navLinks.map((item) => renderNavLink(item))}
            <NavDropdown title={`Logged In As ${user && user.user_name}`} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
      </NavDropdown>
            </>
          ) }
          {
            !isAuthenticated.isAuthenticated && (
              <>
              {
                loginLink.map((item) => renderNavLink(item))
              }</>
                      )
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})
const mapStateToProps = state => ({
  user: state.auth.user_data,
})
export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);