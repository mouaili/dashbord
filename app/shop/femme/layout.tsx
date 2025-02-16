import React from 'react';

const FemmeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container" style={{ backgroundColor: 'lightBlue' }}>
      <h1>Section : FEMMES </h1>
      <p>Afficher les articles pour femmes</p>
      {children}
    </div>
  );
};

export default FemmeLayout;
