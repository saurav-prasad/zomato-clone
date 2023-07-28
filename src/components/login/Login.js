import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useLoginState } from './loginContext/LoginState';

function Login() {

    const [{ user }, dispatch] = useLoginState()

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const userDetail = result.user
            // The signed-in user info.
            // const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            dispatch({
                type: 'set_user',
                user: userDetail
            })
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });


}

export default Login