import './App.css';
import Video from "./components/Video";
import {useEffect} from "react";

function App() {


  return (
    <div className="app">
      <div className="app__videos">
        <Video url="https://www.youtube-nocookie.com/embed/UfGMj10wOzg?controls=0" likes={100} shares={3324} messages={3432} channel="THIS IS SOMETHING NEW" description="O nice, lets get it started" song="99 problems in react, but aint one!" />
        <Video url="https://www.youtube.com/embed/l-_JUQIFEec" likes={100} shares={3324} messages={3432} channel="THIS IS SOMETHING NEW" description="O nice, lets get it started" song="99 problems in react, but aint one!"  />
        <Video url="https://www.youtube-nocookie.com/embed/UfGMj10wOzg?controls=0" likes={100} shares={3324} messages={3432} channel="THIS IS SOMETHING NEW" description="O nice, lets get it started" song="99 problems in react, but aint one!" />
        <Video url="https://www.youtube.com/embed/l-_JUQIFEec" likes={100} shares={3324} messages={3432} channel="THIS IS SOMETHING NEW" description="O nice, lets get it started" song="99 problems in react, but aint one!" />
        <Video url="https://www.youtube-nocookie.com/embed/UfGMj10wOzg?controls=0" likes={100} shares={3324} messages={3432} channel="THIS IS SOMETHING NEW" description="O nice, lets get it started" song="99 problems in react, but aint one!" />
      </div>
    </div>
  );
}

export default App;
