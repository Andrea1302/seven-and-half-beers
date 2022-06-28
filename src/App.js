
// import { StatusBar } from '';

// components
import { SafeAreaView, Text } from 'react-native';

import Lobby from './library/Lobby';
import Game from './library/Game';
import Registration from './library/Registration';
import Login from './library/Login';
import Home from './library/Home';

function App() {
 
  return (
    <SafeAreaView>
      <Lobby />
      {/* <Game callback={test}>
        <Text>ciaoooo</Text>
      </Game> */}
    </SafeAreaView>
  );
}

export default App;
