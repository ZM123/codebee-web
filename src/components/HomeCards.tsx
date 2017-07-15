import './HomeCards.scss';

import * as React from 'react';
import * as classnames from 'classnames';
import { omit } from 'lodash';

import { MaterialIcon } from './ui/Icon';

interface HomeCardProps extends React.HTMLAttributes<any> {
  title: string;
  icon: string;
  children: string;
};

const HomeCard = (props: HomeCardProps) => {
  const other = omit(props, 'className', 'title', 'icon', 'children');
  const cssClass = classnames('HomeCard', props.className);
  return (
    <div className={cssClass} {...other}>
      <h2 className="HomeCard-title">{props.title}</h2>
      <div className="HomeCard-icon">
        <MaterialIcon icon={props.icon} iconSize="Huge" />
      </div>
      <span className="HomeCard-text">{props.children}</span>
    </div>
  );
};

const HomeCards = () => {
  return (
    <div className="HomeCards">
      <HomeCard
        title="What is it?"
        icon="description"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida magna felis, nec consectetur nulla pharetra in.
        Pellentesque vehicula mollis vehicula. Morbi sollicitudin eros nec sem volutpat, id ultrices nunc eleifend.
        Aenean a nibh semper erat tincidunt consequat.
      </HomeCard>
      <HomeCard
        title="Getting started"
        icon="lightbulb_outline"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida magna felis, nec consectetur nulla pharetra in.
        Pellentesque vehicula mollis vehicula. Morbi sollicitudin eros nec sem volutpat, id ultrices nunc eleifend.
        Aenean a nibh semper erat tincidunt consequat.
      </HomeCard>
      <HomeCard
        title="Try it out!"
        icon="code"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida magna felis, nec consectetur nulla pharetra in.
        Pellentesque vehicula mollis vehicula. Morbi sollicitudin eros nec sem volutpat, id ultrices nunc eleifend.
        Aenean a nibh semper erat tincidunt consequat.
      </HomeCard>
    </div>
  );
};

export default HomeCards;
