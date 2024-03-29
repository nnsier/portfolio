import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';
import Colors from '../constants/Colors';

const NavLink = Styled(Link)`
  display: flex;
  text-decoration: none;
  align-self: flex-end;
  font-size: 2rem;
  
  &:hover{
    text-decoration: underline;
  }
  padding-right: 2rem;
`

const Header = Styled.header`
  max-width: 790px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 9vh;
  margin-bottom: 200px;
`

const Title = Styled.h1`
  display: flex;
  text-shadow: ${props => {
    const location = props.location.pathname;
    if (location === '/contact') {
      return `1px 1px 0 #998, 2px 2px 0 #998, 3px 3px 0 #998`;
    } else {
      return '1px 1px 0 #998, 2px 2px 0 #998, 3px 3px 0 #998';
    }
  }};
  transition: text-shadow 0.3s ease;
  font-family: 'Lato';
  &:hover {
    text-shadow: ${props => {
    const location = props.location.pathname;
    if (location === '/contact') {
      return `1px 1px 0 ${Colors.blue}, 2px 2px 0 ${Colors.blue}, 3px 3px 0 ${Colors.blue}`;
    } else {
      return '1px 1px 0 white, 2px 2px 0 white, 3px 3px 0 white';
    }
  }}}
  a {
    color: black;
    /* &:hover {
      color: white;
    } */
  }
`

export default props => (
  <Header location={props.location}>
    {console.log(props)}
    <Title location={props.location}>
      <Link
        to="/"
        style={{
          margin: '1rem',
          textDecoration: 'none',
          // color: 'black',
          fontSize: '4rem',
          padding: '0.5rem',
          borderRadius: '4px',
        }}
        activeStyle={{
          color: 'black',
        }}
      >
        {props.children}
      </Link>
    </Title>
    {/* <NavLink
      to="/contact"
      style={{
        color: `${Colors.primary}`
      }}
      activeStyle={{
        color: `${Colors.yellow}`
      }}
    >Contact</NavLink> */}
  </Header>
)


