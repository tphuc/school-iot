import React from 'react'
import Button from '../../components/Button';
import { db } from '../../services/firebase'
import Input from '../../components/Input';
import { FiArrowRightCircle } from "react-icons/fi";
import { useHistory } from 'react-router-dom';


function SocketLoading() {

    const history = useHistory();


  // const [loading, setLoading] = React.useState(false)
  const [socketId, setSocketId] = React.useState('');
  const updateAction = (value) => {
    // console.log(value)
    db.ref('/1723').set({
        toggle: false
    });

  }

  const getSocket = async (socket) => {
    let res = await db.ref(`/${socket}`).get()

    if(!res.exists()){
      alert('No electric socket with id found!')
    }
    else{
        history.push(`/${socket}`)
    }
  }

  return (
    <div style={{display:"flex", height:"100vh", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

        <h2>Smart socket</h2>
        <div style={{ flexDirection: "row", justifyContent: "center" }}>
          <Input value={socketId} onChange={(e) => setSocketId(e.target.value)}  placeholder='socket id' />
        </div>
        <Button variant='primary' onClick={() => getSocket(socketId)}>
          <FiArrowRightCircle style={{width:30, height:30}}/>
        </Button>

    </div>
  );
}

export default SocketLoading;
