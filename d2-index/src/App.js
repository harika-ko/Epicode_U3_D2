import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './Components/MyNav';
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Welcome bgColor="darkGrey" />
      <MyFooter />
    </>
  );
}

export default App;
