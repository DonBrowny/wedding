import React from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const Stars = ({ count }) => {
  const filled = count;
  const notFilled = 5 - count;
  return (
    <>
      {Array(filled)
        .fill()
        .map(() => (
          <StarFilled />
        ))}
      {Array(notFilled)
        .fill()
        .map(() => (
          <StarOutlined />
        ))}
    </>
  );
};

export default Stars;
