import './IconButtons.scss';

import * as React from 'react';

import { MaterialIconButton } from '../IconButton';

export default function() {
  return (
    <div className="IconButtons">
      <MaterialIconButton icon="close" />
      <MaterialIconButton primary icon="close" />
      <MaterialIconButton raised icon="close" />
      <MaterialIconButton primary raised icon="close" />
      <MaterialIconButton disabled icon="close" />
      <MaterialIconButton raised disabled icon="close" />
      <MaterialIconButton primary disabled icon="close" />
      <MaterialIconButton primary raised disabled icon="close" />
    </div>
  );
}
