import { useContext, useRef } from "react";
import AuthContext from "../store/auth-context";


const ProfilePage = () => {
    const nameInputRef = useRef();
    const photoUrlRef = useRef();
    const authCtx = useContext(AuthContext);
    console.log(authCtx);
    const updateHandler = (e) => {
        e.preventDefault();


        const enteredName = nameInputRef.current.value;
        const enteredPhotoUrl = photoUrlRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBL0Dxkr3qq-HpRREjZfDFI5--szzAAycs', {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
                displayName: enteredName,
                photoUrl: enteredPhotoUrl,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if(res.ok)  {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = 'authentication failed';
                    if(data && data.error && data.error.message) {
                        errorMessage=data.error.meaasge;
                    }
                    throw new Error(errorMessage);
                })
            }
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            alert(err.message);
        })

    };

    return(
        <form onSubmit={updateHandler}>
            <button>Cancel</button>
            <label>
                Full Name:
                <input type="text" ref={nameInputRef}/>
            </label>
            <label>
                Profile Photo URL
                <input type="text" ref={photoUrlRef}/>
            </label>
            <button>update</button>
        </form>
    )
};

export default ProfilePage;