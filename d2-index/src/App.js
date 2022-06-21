import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './Components/MyNav';
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import LastestRelease, { LastestRelease1 } from "./Components/LatestRelease";
import { LastestRelease2 } from "./Components/LatestRelease";
import { LastestRelease3 } from "./Components/LatestRelease";
import { LastestRelease4 } from "./Components/LatestRelease";



function App() {
  return (
    <>
      <MyNav />
      <Welcome bgColor="darkGrey" />
      <LastestRelease />
      <LastestRelease1 />
      <LastestRelease2 />
      <LastestRelease3 />
      <LastestRelease4 />
      <MyFooter />
    </>
  );
}

export default App;
