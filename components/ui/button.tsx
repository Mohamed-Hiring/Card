// button.tsx

import React from 'react';

const Button: React.FC = ({ children, ...props }) => {
  return (
    <button {...props} className="btn">
      {children}
    </button>
  );
};

export default Button;
