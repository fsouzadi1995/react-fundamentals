// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react';
import '../box-styles.css';

const Box = ({ size, style }) => {
  const sizeClass = size ? `box--${size}` : '';
  return (
    <div
      className={`box ${sizeClass}`}
      style={{ fontStyle: 'italic', ...style }}
    >
      {`${size} ${style.backgroundColor} box`}
    </div>
  );
};

function App() {
  return (
    <div>
      <Box size="small" style={{ backgroundColor: 'lightblue' }} />
      <Box size="medium" style={{ backgroundColor: 'pink' }} />
      <Box size="large" style={{ backgroundColor: 'orange' }} />
    </div>
  );
}

export default App;
