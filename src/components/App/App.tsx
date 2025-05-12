import css from "./App.module.css";
import CafeInfo from "../Cafeinfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

function App() {
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions />
        <VoteStats />
        <Notification />
      </div>
      ;
    </>
  );
}

export default App;
