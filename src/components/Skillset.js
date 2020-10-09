import React from 'react';
import Stars from './Starts';

const sectionStyle = {
  flexDirection: 'column',
  fontSize: '0.9em',
};

const Skillset = ({ skills }) => (
  <section style={sectionStyle} className="flexBox">
    {Object.keys(skills).map((skill) => {
      return (
        <div>
          <span className="float-left">{skill}</span>
          <div className="float-right">
            <Stars count={skills[skill]} />
          </div>
        </div>
      );
    })}
  </section>
);

export default Skillset;
