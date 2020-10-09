import React from 'react';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import '../styles/Contacts.css';

const Contacts = ({ contacts }) => (
  <div className="row">
    <div className="column column-small">
      <span>
        <PhoneOutlined rotate={90} />
        <a href={'tel:' + contacts.mobile}>{contacts.mobile}</a>
      </span>
      <span>
        <EnvironmentOutlined />
        {contacts.location}
      </span>
    </div>
    <div className="column column-large">
      <span>
        <MailOutlined />
        <a href={'mailto:' + contacts.mail}>{contacts.mail}</a>
      </span>
      <span>
        <GithubOutlined />
        <a href={contacts.githubLink}>{contacts.githubLink}</a>
      </span>
    </div>
  </div>
);

export default Contacts;
