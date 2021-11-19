import React from 'react';

import { ClickAway } from './recipes/ClickAway';

export const App: React.VFC = () => (
    <div className={'App'}>
        <div className={'header'}>ReactJS recipes</div>
        <ClickAway />
    </div>
);
