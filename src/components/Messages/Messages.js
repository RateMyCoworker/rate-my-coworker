import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

// import Conversation from './Conversation';
// import axios from 'axios';

const Messages = (props) => {
  console.log(props)
  const classes = useStyles();
  const [user, setUser] = useState({})
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setUser(props.user)
    
  }, [props.user])


  return (
    <Container className={classes.mainContainer}>
      {messages.map((e, i) => (
        <Link to={`/conversation/${e.room_id}`} key={i}>
        <Container className={classes.conversationListItemContainer}>
          <Avatar />
          <Container>
            <Typography variant='h6'>Name</Typography>
            <Typography variant='body2'>You: Last Message</Typography>
          </Container>
        </Container>
      </Link>
      ))}
    </Container>
  )

}

const mapStateToProps = reduxState => {
  const { user } = reduxState.userReducer;

  return {
    user
  }
}


export default connect(mapStateToProps)(Messages);

const useStyles = makeStyles({
  mainContainer: {
    minHeight: '90vh',
    
    padding: 0
  },
  conversationListItemContainer: {
    width: '100%',
    height: '7vh',

    display: 'flex',
    alignItems: 'center',

    color: 'black'
  },
})