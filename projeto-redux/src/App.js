import { BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <>
      <Provider store={store}>
        <LoadInfo>
          <BrowserRouter>
            <Header />
            <Routes />
          </BrowserRouter>
        </LoadInfo>
      </Provider>
    </>
  );
}

export default App;