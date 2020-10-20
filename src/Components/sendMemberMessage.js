import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { TextField, Button, CircularProgress} from '@material-ui/core';


const smsMessage = 
  `Thanks for visiting us. Hope you had a great day. Visit us again. COVID is real. Stay safe!`


const SMS = () => {

  const [message, setMessage] = useState(smsMessage);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);


  const sendMessage = () => {
    const body = {
      message: message,
      phone_number: phone
    }
    console.log('b::', body)
    setLoading(true)
    axios.post(`http://localhost:8000/api/sms/send`, body)
    .then(data => {
      console.log('ssss::', data)
      setMessage(smsMessage)
      setPhone("")
      setLoading(false)
    })
    .catch(err => {
      setLoading(false)
      console.log('hee', err)
    })
   
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const handlePhoneMessage = (e) => {
    setPhone(e.target.value)
  }
 
    
    return (
      <div>
       
        <div style={{ marginTop: 10 }} >
          <h1> Send Text Message </h1>

          <h3> Member's Phone Number </h3>
          
          <TextField 
            value={phone}
            label="Phone Number"
            variant="outlined"
            onChange={handlePhoneMessage} 
          />

          <div className="searches">

            <h3> Message </h3>

            <TextField 
              rows={3} 
              value={message} 
              multiline
              variant="outlined"
              onChange={handleMessage} 
              disabled
            />
          </div>

          <div className='searches'>
            <Button 
              onClick={sendMessage}
              variant="contained" 
              color="primary"
              data-testid="button"> 
              Send Text 
            </Button>
          </div>
          {loading && <CircularProgress color="secondary" /> }

        </div>
      </div>
    );
  
}

export default SMS;