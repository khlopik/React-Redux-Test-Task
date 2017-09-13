/**
 * Created by Zerk on 18-Aug-17.
 */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootContainer from '@/containers/RootContainer';
import store from '@/store';

render(
    <AppContainer>
        <RootContainer store={store} />
    </AppContainer>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept('./containers/RootContainer', () => {
        const NewRoot = require('./containers/RootContainer').default;
        render(
            <AppContainer>
                <NewRoot store={store} />
            </AppContainer>,
            document.getElementById('root'),
        );
    });
}
