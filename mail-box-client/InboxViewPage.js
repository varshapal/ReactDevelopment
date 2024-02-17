import { Form } from "react-bootstrap";
import classes from "./InboxVewPage.module.css";
import PageviewIcon from "@mui/icons-material/Pageview";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const InboxViewPage = () => {
  return (
    <section>
      <header className={classes.inbox}>
        <div>
            <img src="Gmail-Logo.png" />
        </div>
        <div className={classes.search}>
            <Form.Control type="text"/>
            <ExpandMoreIcon />
        </div>
      </header>
      <div></div>
    </section>
  );
};

export default InboxViewPage;
