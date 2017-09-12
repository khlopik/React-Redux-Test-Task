/**
 * Created by Zerk on 18-Aug-17.
 */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import createHistory from 'history/createBrowserHistory';
import throttle from 'lodash/throttle';
import RootContainer from '@/containers/RootContainer';
import configureStore from '@/store';


// const history = createHistory();
// const persistedState = loadState();
const store = configureStore();

store.subscribe(throttle(() => {
    saveState({
        backlog: store.getState().backlog,
        board: store.getState().board,
        sprints: store.getState().sprints,
        retro: store.getState().retro,
    });
}), 1000);

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
