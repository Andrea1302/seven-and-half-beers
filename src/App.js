
// import { StatusBar } from '';

// components
import { SafeAreaView, Text } from 'react-native';

import Lobby from './library/Lobby';
import Game from './library/Game';
import Registration from './library/Registration';
import Login from './library/Login';
import Home from './library/Home';





// import Login from './components/Login';


function App() {
  const test = (state)=>{
    console.log('state',state)
  }
  return (
    <SafeAreaView>
      {/* <Lobby navigationFrom="newlobby" /> */}
      <Game callback={test}>
        <Text>ciaoooo</Text>
      </Game>
    </SafeAreaView>
  );
}

export default App;
