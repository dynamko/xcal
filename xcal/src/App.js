import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import { useOutlet } from 'react-router-dom';



function App() {
  const outlet = useOutlet()
  return (
    <div>
    <Header/>
      {outlet ? outlet : <Main/>}
    <Footer/>
    </div>
  );
}

export default App;
