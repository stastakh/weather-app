import './App.scss';

import Login from './login/Login';
import Header from './header/Header';
import Background from './common/background/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Login />
    </div>
  );
}

export default App;
