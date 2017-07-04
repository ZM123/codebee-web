import './HomePage.scss';

import * as React from 'react';

import Logo from '../Logo/Logo';
import HomeDescription from '../HomeDescription';

const HomePage = () => (
  <div className="HomePage">
    <Logo />
    <HomeDescription />
  </div>
);

export default HomePage;
