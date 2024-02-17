import EmailBody from './EmailBody';
import classes from './EmailList.module.css';
import EmailListSetting from './EmailListSetting';

const EmailList = () => {
    return(
        <div>
            <EmailListSetting />
            <EmailBody />
        </div>
        
    )
};

export default EmailList;