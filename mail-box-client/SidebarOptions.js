import classes from './SidebarOptions.module.css';

const SidebarOptions = ({title, number}) => {
    return(
        <div className={classes.sidebarList}>
            <h6>{title}</h6>
            <p>{number}</p>
        </div>
    )
};

export default SidebarOptions;