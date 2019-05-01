import * as React from 'react';
// import { connect } from 'react-redux';
import { Count } from './store/count';
import { ActionCreator, PayloadActionCreator } from './action';

export interface AppProps {
  count: Count;
  increment: ActionCreator;
  decrementBy: PayloadActionCreator<Count>;
}

const App: React.SFC<AppProps> = ({ count }) => <div>Count: {count}</div>;

// export default connect((state: State) => ({ count: selectCount(state) }), {
//   increment: createIncrementAction,
//   decrementBy: createDecrementAction,
// })(App);

export default App;
