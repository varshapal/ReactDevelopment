import ProfilePage from "./ProfilePage";
import { useHistory} from 'react-router-dom';


const Home = () => {
    const history = useHistory();
    const updateProfile = () => {
        console.log('hi');
        history.push('/profile_page');
    }
    return(
        <div>
        <h1>Welcome to Expense Tracker</h1>
        <p>Your profile is incomplete<button onClick={updateProfile}>Complete Now</button></p><hr />

        </div>
    )
};

export default Home;