import React from 'react';
import { Avatar } from 'antd';
import Contacts from './Contacts';
import Skillset from './Skillset';

const section = {
  width: '55%',
  padding: '0 4px',
  display: 'flex',
  flexDirection: 'column',
};

const title = {
  fontSize: '1.9em',
};

const position = {
  fontSize: '1.2em',
};

const Header = ({ content }) => (
  <div className="card">
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} size={100}>
      KK
    </Avatar>
    <section style={section}>
      <span style={title}>{content.name}</span>
      <span style={position}>{content.role}</span>
      <Contacts contacts={content.contacts} />
    </section>
    <Skillset skills={content.skills} />
  </div>
);

export default Header;
