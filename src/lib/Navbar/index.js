import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleNavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #00a7f8;
  color: white;
  margin-bottom: 12pt;
  @media only screen and (max-width: 600px) {
    display: block;
    width: 100%;
    text-align: center;
  };
`;

const StyleNavbarSection = styled.div`
  width: 50%;
  @media only screen and (max-width: 600px) {
    display: block;
    width: 100%;
    text-align: center;
  };
`;

const StyleNavLeft = styled(StyleNavbarSection)`
  margin-left: 12pt;
  h3 {
    a {
      color: white;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0;
    h3 {
      margin-top: 0;
      padding-top: 12pt;
    }
  };
`;

const StyleNavRight = styled(StyleNavbarSection)`
  text-align: right;
  a {
    padding: 6pt 12pt;
    margin-right: 6pt; 
    color: white;
  }
  a:last-child {
    margin-right: 12pt;
  }
  a:hover {
    background-color: white;
    color: #00a7f8;
    transition all 0.6s linear;
  }
  @media only screen and (max-width: 600px) {
    padding: 8pt 0;
    a:last-child {
      margin-right: 0;
    }
  };
`;

const NavbarContainer = (props) => (
  <StyleNavbarContainer>
    <StyleNavLeft>{ props.left }</StyleNavLeft>
    <StyleNavRight>{ props.right }</StyleNavRight>
  </StyleNavbarContainer>
);

const NavLeft = ({ title }) => (
  <React.Fragment>
    <h3>{title}</h3>
  </React.Fragment>
);

const handleShowLinks = (link, index) => {
  switch(link.type){
    case 'icon':
      return (<a key={index}
        href={link.href}
        target={link.target || '_blank'}>
        <i className={link.icon}></i>
      </a>);
    case 'route':
      return (<Link key={index} to={link.url}>{link.name}</Link>);
    default:
      return ;
  }
}

const NavRight = ({ links }) => (
  <React.Fragment>
    {
      links.map((link, index) => (
        link ? handleShowLinks(link, index) : ''
      ))
    }
  </React.Fragment>
);

const Navbar = ({title, links}) => {
  return (
    <NavbarContainer 
      left={
        <NavLeft title={title} />
      }
      right={
        <NavRight links={links} />
      }
    />
  )
}

export { Navbar };
