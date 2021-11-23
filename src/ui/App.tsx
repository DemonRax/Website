import React from 'react';

import { ClickAway } from './recipes/ClickAway';
import { Carousel } from './recipes/Carousel';

export const App: React.VFC = () => (
    <div className={'App'}>
        <div className={'header'}>ReactJS recipes</div>
        <ClickAway />
        <Carousel />
    </div>
);
