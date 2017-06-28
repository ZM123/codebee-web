import './Logo.scss';

import * as React from 'react';

import LogoImage from './Logo.svg';

export default function Logo(props: {}) {
  return (
    <div className="Logo">
      <img className="Logo-image" src={LogoImage} />
      <h1 className="Logo-text"><span>code</span><span>bee</span></h1>
    </div>
  );
}
