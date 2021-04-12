import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Data from './components/Data';
import Header from './components/layout/Header';

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Data />
        </Provider>
    );
}

export default App;
