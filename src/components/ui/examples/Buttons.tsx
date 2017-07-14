import './Buttons.scss';

import * as React from 'react';

import Button from '../Button';

export default function() {
  return (
    <div className="Buttons">
      <Button default>Default</Button>
      <Button default outline>Default Outline</Button>
      <Button primary>Primary</Button>
      <Button raised>Raised</Button>
      <Button primary raised>Primary Raised</Button>
      <Button disabled>Disabled</Button>
      <Button raised disabled>Raised Disabled</Button>
      <Button primary disabled>Primary Disabled</Button>
      <Button primary raised disabled>Primary Raised Disabled</Button>
    </div>
  );
}
