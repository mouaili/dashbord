import React from 'react';

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <h1>Notre Boutique</h1>
      {children}
    </div>
  );
};

export default ShopLayout;
