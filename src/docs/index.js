import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// lib components
import { Button } from '../lib/Button';

const Contents = styled.div`
  padding: 16pt 32pt;
  margin: 0 auto;
`;

const ComponentTitle = styled.div`
  padding: 16pt 10pt;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  div {
    padding: 12pt;
  }

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const TopNavbar = styled.div`
  width: 100%;
  background-color: #00a7f8;
  display: flex;
  align-items: center;
  color: white;

  & > div {
    width: 50%;
    h3 {
      margin: 0;
      padding: 12pt 8pt;
    }
  }

  & > .nav-links {
    text-align: right;
    & > a {
      color: white;
      padding-right: 12pt;
    }
  }
`;

const navbarTitle = `DMJS Components - Demo(s)`;

export const Navbar = () => (
  <TopNavbar>
    <div className="nav-title">
      <h3>{navbarTitle}</h3>
    </div>
    <div className="nav-links">
      <a href="https://github.com/DamengRandom" target="_blank">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </TopNavbar>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Contents>
        <ComponentTitle>
          <h4>-- Button(s) --</h4>
        </ComponentTitle>
        <Section>
          <Button type="text" text="Primary Button" />
          <Button type="text" text="Secondary Button" pattern="secondary" />
          <Button type="text" text="Danger Button" pattern="danger" />
        </Section>
      </Contents>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
