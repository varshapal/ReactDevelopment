import { useState, useEffect } from 'react';
import classes from './InboxPage.module.css';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import EmailList from './EmailList';

const SentBox = () => {
    const [sentMailList, setSentMailList ] = useState([]);

    //get data
    const getData = async () => {
        try{
          const response = await fetch('https://react-http-9242d-default-rtdb.firebaseio.com/email.json');
        const data = await response.json();
          console.log("data", data);
        const loadData = [];
  
        for(const key in data) {
          loadData.push({
            id: key,
            to: data[key].to,
            sub: data[key].sub,
            msg: data[key].msg,
            time: data[key].time,
          })
        }
        console.log("load",loadData);
        setSentMailList(loadData);
        //dispatch(inboxActions.saveMailData(loadData))
        } catch(error) {
          console.log(error);
        }
        
      }
  
      useEffect(() => {
        getData();
      }, [])
  
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
              {sentMailList.map((email) => (
                  <EmailList key={email.id} id={email.id} to={email.to} sub={email.sub} msg={email.msg} time={email.time}/>
                ))}
                  
              </Col>
          </Row>
        </Container>
      </div>
    )
};

export default SentBox;