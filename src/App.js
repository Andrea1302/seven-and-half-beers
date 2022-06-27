
// import { StatusBar } from '';

// components
import { SafeAreaView } from 'react-native';

import Lobby from './library/Lobby';
import Game from './library/Game';
import Registration from './library/Registration';
import Login from './library/Login';
import Home from './library/Home';





// import Login from './components/Login';


function App() {
  return (
    <SafeAreaView>
      {/* <Lobby navigationFrom="newlobby" /> */}
      <Login />
    </SafeAreaView>
  );
}

export default App;
