import { Container, Row, Col, Form, Button } from "react-bootstrap";
import classes from "./InboxPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { inboxActions } from "../store/inbox-slice";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import EmailList from "./EmailList";
import { useHistory } from "react-router-dom";

const InboxPage = () => {
  const mailId = useSelector((state) => state.auth.email);

  const history = useHistory();
  const dispatch = useDispatch();
  const isComposemail = useSelector((state) => state.inbox.isComposemail);
  const emails = useSelector((state) => state.inbox.emails);
  const unreadmessage = emails.length;

  const [emailList, setEmailList] = useState([]);

  const composeMailHandler = () => {
    dispatch(inboxActions.openComposeMail());
  };

  //getData

  const getData = async () => {
    try {
      const response = await fetch("https://react-http-9242d-default-rtdb.firebaseio.com/email.json");
      const data = await response.json();

      const loadData = [];

      for (const key in data) {
        if (data[key].to === mailId) {
          loadData.push({
            id: key,
            to: data[key].to,
            sub: data[key].sub,
            msg: data[key].msg,
            time: data[key].time,
          });
        }
      }
      //console.log("load", loadData);

      setEmailList(loadData);
      dispatch(inboxActions.saveMailData(loadData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 5000);
    
  }, []);

  

  const openInbox = () => {
    history.push("/inbox");
    console.log('hello');
  };

  const openSentBox = () => {
    history.push("/sentbox");
  };

  return (
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
        <Row>
          <Col xs={2} className={classes.leftside}>
            <Button variant="info" onClick={composeMailHandler}>
              Compose
            </Button>
            
            <div className={classes.leftoptions}>
              <div className={classes.active}>
                <div><Link to="/inbox">Inbox</Link></div>
                <div><spam>{unreadmessage}</spam></div>
              </div>
              <div><Link>Unread</Link></div>
              <div><Link>Draft</Link></div>
              <div><Link to="/sentbox">Sent</Link></div>
              <div><Link>Archive</Link></div>
              <div><Link>Spam</Link></div>
              <div><Link>Deleted Item</Link></div>
            </div>
          </Col>
          <Col xs={10} className={classes.rightside}>
            {emailList.map((email) => (
              <EmailList
                key={email.id}
                id={email.id}
                to={email.to}
                sub={email.sub}
                msg={email.msg}
                time={email.time}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InboxPage;
