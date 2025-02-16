import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container" style={{ backgroundColor: 'green' }}>
      <h1>Vêtements</h1>
      {children}
    </div>
  );
};

export default Layout;
