import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" alt="logo" />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

