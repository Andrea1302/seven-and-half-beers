
// import { StatusBar } from '';

// components
import { SafeAreaView, Text } from 'react-native';

import Lobby from './library/Lobby';
import Game from './library/Game';
import Registration from './library/Registration';
import Login from './library/Login';
import Home from './library/Home';
import Leaderboard from './library/Leaderboard';

function App() {
 
  return (
    <SafeAreaView>
      <Game />
      {/* <Game callback={test}>
        <Text>ciaoooo</Text>
      </Game> */}
    </SafeAreaView>
  );
}

export default App;
