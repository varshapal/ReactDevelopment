import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import classes from './EmailList.module.css';

const EmailListSetting = () => {
    return(
        <div className={classes.emailList}>
            <div>
                <CheckBoxOutlineBlankIcon />
                <RefreshIcon />
                <MoreVertIcon />
                
            </div>
            <div>
                
            </div>
        </div>
    )
};

export default EmailListSetting;