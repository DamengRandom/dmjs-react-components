import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// lib components
import { Button } from '../lib/Button';
import { Navbar } from '../lib/Navbar';

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
  button {
    margin: 6pt 8pt;
  }

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const title = "DMJS React Components";
const links = [
  { type: 'icon', target: '_blank', href: 'https://github.com/DamengRandom', icon: 'fab fa-github' },
];

const App = () => {
  return (
    <div>
      <Navbar title={title} links={links} />
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
