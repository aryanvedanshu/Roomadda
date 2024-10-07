import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#373a36', color: '#e6e2dd', padding: '1rem', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Room Adda. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
