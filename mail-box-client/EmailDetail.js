import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classes from './InboxPage.module.css';
import { useHistory} from 'react-router-dom';
import { useSelector } from "react-redux";
const EmailDetail = () => {
  const history = useHistory();
  const selectedMail = useSelector((state) => state.inbox.isSelected);
    

    return(
        <div className={classes.inbox}>
      <Container>
        <Row className={classes.header}>
          <Col xs={2}>
            <img src="Gmail-Logo.png" />
          </Col>
          <Col xs={6} className={classes.search}>
            <Form.Control
              type="text"
              placeholder="Find messages, documents, photos or people"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row >
            <Col xs={2} className={classes.leftside}>
                <Button variant="info">Compose</Button>
                <ul>
                    <li>Inbox</li>
                    <li>Unread</li>
                    <li>Drafts</li>
                    <li className={classes.active}>Sent</li>
                    <li>Archive</li>
                    <li>Spam</li>
                    <li>Deleted Items</li>
                </ul>
            </Col>
            <Col xs={10} className={classes.rightside}>
               <header>
                <ArrowBackIcon onClick={() => history.push('/sentbox')}/>
                {selectedMail.sub}
                <hr />
                
               </header>
               <div>
                    <AccountCircleIcon />
                    <span>{selectedMail.to}</span>
                    <p>{selectedMail.msg}</p>

               </div>
                
            </Col>
        </Row>
      </Container>
    </div>
    )
};

export default EmailDetail;