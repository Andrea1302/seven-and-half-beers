
// import { StatusBar } from '';

// components
import { SafeAreaView } from 'react-native';

import Lobby from './library/Lobby';
import Game from './library/Game';
import Leaderboard from './library/Leaderboard';

// import Login from './components/Login';


function App() {
  return (
    <SafeAreaView>
      {/* <Lobby navigationFrom="newlobby" /> */}
      <Leaderboard />
    </SafeAreaView>
  );
}

export default App;
