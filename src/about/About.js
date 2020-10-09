import React from 'react';
import './About.css';
import Header from './Header';

const about = {
  header: {
    name: 'C. Kishore Kumar',
    role: 'Font-end developer | 2014 - present',
    contacts: {
      mobile: '+91 9952084535',
      mail: 'kishore13ask@gmail.com',
      location: 'Chennai, India',
      githubLink: 'https://github.com/DonBrowny',
    },
    skills: {
      'JS/TS, Angular 2+': 4,
      'C#, ASP.Net': 3,
      'SQL Server, Oracle': 2,
      'HTML, CSS': 2,
    },
  },
  projects: [
    {
      organization: 'Scientific Games Corporation',
      role: 'Web Developer',
      from: 'Nov 2017',
      to: 'Current Date',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      achievements: [],
    },
    {
      organization: 'Scientific Games Corporation',
      role: 'Web Developer',
      from: 'Nov 2017',
      to: 'Current Date',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      achievements: [],
    },
    {
      organization: 'Scientific Games Corporation',
      role: 'Web Developer',
      from: 'Nov 2017',
      to: 'Current Date',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      achievements: [],
    },
  ],
};

function About() {
  return (
    <div className="page">
      <Header content={about.header} />
    </div>
  );
}

export default About;
