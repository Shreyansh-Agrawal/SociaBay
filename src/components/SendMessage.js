import React, { useState } from "react";
import {auth, db} from '../firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { IoSend } from "react-icons/io5";

const style = {
  form: `h-14 w-full max-w-[728px] bg-gray-100 shadow-xl border border-t-0 flex text-xl absolute bottom-0 position: sticky`,
  input: `w-full text-xl p-5 bg-gray-900 text-white outline-none border-none rounded-full m-1 ml-2`,
  button: `w-[20%] flex text-white justify-center items-center bg-green-500 hover:bg-green-600 rounded-full m-1 mr-2`,
};

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if(input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text:input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message..."
      />
      <button className={style.button} type="submit">
        <IoSend />
      </button>
    </form>
  );
};

export default SendMessage;
