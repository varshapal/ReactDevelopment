import ProfilePage from "./ProfilePage";
import { useHistory} from 'react-router-dom';
import AuthContext from "../store/auth-context";
import { useContext } from "react";


const Home = () => {
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const updateProfile = () => {
        history.push('/profile_page');
    }
        const verifyEmailHandler = async () => {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBL0Dxkr3qq-HpRREjZfDFI5--szzAAycs', {
                method: 'POST',
                body: JSON.stringify({
                    requestType: 'VERIFY_EMAIL',
                    idToken: `${authCtx.token}`
                }),
                headers: {
                    'Content-Type': 'application/json',
                    //'X-Firebase-Locale': "hi"
                }
            })
            const data = await response.json();
            console.log(data);
}

const logoutHandler = () => {
    console.log('hi');
    authCtx.logout();
    history.push('/signup');
}
        
    
    return(
        <div>
         <button onClick={logoutHandler}>Logout</button>   
        <h1>Welcome to Expense Tracker</h1>
        <p>Your profile is incomplete<button onClick={updateProfile}>Complete Now</button></p><hr />
        <button onClick={verifyEmailHandler}>Verify Email Id</button>

        </div>
    )
};

export default Home;