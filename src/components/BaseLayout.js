import React from 'react';
import {NavLink} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';


export default class Layout extends React.Component {
  render() {
    return (
        <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right />
          <NavLink exact to="/" style={{padding:'15px'}}>PollyBlog</NavLink>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/CreatePost" style={{padding:'15px'}}>Create Post</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/PostList" style={{padding:'15px'}}>Show All Posts</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
