import { Button } from "react-bootstrap";
import classes from './Sidebar.module.css';
import SidebarOptions from "./SidebarOptions";
import { useDispatch } from "react-redux";
import { inboxActions } from "../store/inbox-slice";

const Sidebar = () => {
    const dispatch = useDispatch();

    const composemailHandler = () => {
        dispatch(inboxActions.openComposeMail());
    }
    return (
        <section className={classes.sidebar}>
            <div className="d-grid">
            <Button variant="info" onClick={composemailHandler}>Compose</Button>
            </div>
            <div>
            <SidebarOptions title="Inbox" number="10"/>
            <SidebarOptions title="Unread" number="10"/>
            <SidebarOptions title="Starred" number="10"/>
            <SidebarOptions title="Drafts" number="10"/>
            <SidebarOptions title="Sent" number="10"/>
            <SidebarOptions title="Archive" number="10"/>
            <SidebarOptions title="Spam" number="10"/>
            <SidebarOptions title="Deleted Items" number="10"/>
            <SidebarOptions title="Less"/>
            </div>

            



            
            

            

            
        </section>
    )
};

export default Sidebar;