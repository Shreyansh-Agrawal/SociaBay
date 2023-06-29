import React, { useRef } from "react";
import Navbar from "./components/Navbar";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import SendMessage from "./components/SendMessage";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col min-h-[90vh] bg-gray-100 shadow-xl border realtive`,
};

function App() {
  const [user] = useAuthState(auth);
  // console.log(user);
  const scroll = useRef();
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* Chat component */}
        {user ? <Chat /> : null}
      </section>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </div>
  );
}

export default App;
