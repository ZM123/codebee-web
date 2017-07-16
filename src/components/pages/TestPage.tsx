import './TestPage.scss';

import * as React from 'react';

import Logo from '../Logo/Logo';
import Buttons from '../ui/examples/Buttons';
import IconButtons from '../ui/examples/IconButtons';
import Panel from '../ui/Panel';

const TestPage = () => (
  <div className="TestPage">
    <Panel><Logo /></Panel>
    <Panel><Buttons /></Panel>
    <Panel><IconButtons /></Panel>
  </div>
);

export default TestPage;
