import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../firebase'

const style = {
  wrapper: `flex justify-center`,
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100 rounded-full`,
};

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    // <div className={style.wrapper}>
    //     <GoogleButton onClick={googleSignIn}/>
    // </div>
    <button onClick={googleSignIn} className={style.button}>
      Sign in with Google
    </button>
  )
}

export default SignIn