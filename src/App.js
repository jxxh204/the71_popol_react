import './App.css';
import MediaQuery from 'react-responsive';


import Header from './Components/Top/Header.jsx';
import MobileHeader from './Components/Top/Mobile_header.jsx';
import Body from './Components/Body/Body.jsx';



function App() {
  return (
    <div className="App">
      
      <MediaQuery minWidth={490}>
        <Header />
      </MediaQuery>

      <MediaQuery maxWidth={490}>
        <MobileHeader />
      </MediaQuery>
      
      <Body />
    </div>
  );
}

export default App;
