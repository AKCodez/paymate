// PaymentButton.js

import React from 'react';

const PaymentButton = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

export default PaymentButton;
