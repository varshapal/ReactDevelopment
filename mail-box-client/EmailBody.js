import classes from './EmailList.module.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const EmailBody =  () => {
    const emails = useSelector((state) => state.composemail.emails);
    //console.log("e",emails);

    const getData = async() => {
        const response = await fetch('https://react-http-9242d-default-rtdb.firebaseio.com/email.json');
        const data = await response.json();
        console.log(data);
    }
    

    useEffect(() => {
        getData();
    }, [])

    return(
        <div className={classes.emailbody}>
            <div className={classes.emailbodyleft} >
            <CheckBoxOutlineBlankIcon />
            <StarBorderIcon />
            <h6>{emails.to}</h6>
            </div>
            <div className={classes.emailbodymiddle}>
                <p><b>subject</b>{emails.sub}</p>
            </div>
            <div className={classes.emailbodyright}>
                <p>{emails.time}</p>
            </div>
        </div>
    )
};

export default EmailBody;