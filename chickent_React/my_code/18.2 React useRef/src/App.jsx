import Header from "./components/Header";
import Player from "./components/Player";
import TimeStopper from "./components/TimeStopper";

function App() {
  return (
    <>
    <Header/>
    <Player/>
      <div id="challenges">

        <TimeStopper title={"level 1 "} targetTime={1}/>
        <TimeStopper title={"level 2 "} targetTime={2}/>
        <TimeStopper title={"level 3 "} targetTime={3}/>
        <TimeStopper title={"level 4 "} targetTime={4}/>
      </div>
    </>
  );
}

export default App;
