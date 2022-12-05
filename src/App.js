import React, { useEffect, useState } from 'react';
import {Container, Spinner} from 'react-bootstrap'
import Temperature from './components/Temperature';
import Valuta from './components/Valuta';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({})

  useEffect(()=>{
    fetch('https://www.cbr-xml-daily.ru/latest.js')
    .then(res=>res.json())
    .then(res=>{
      res.rates['RUB'] = 1;
      setData(res.rates);
      setLoading(false)
    })
    
  }, [])

  if(loading){
    return <div className='d-flex justify-content-center align-items-center' style={{height: window.innerHeight}}><Spinner style={{width: 100, height:100}} animation="grow" /></div>
  }

  return (
    <div>
      <Container className='mt-5'>
        <Temperature className="m-5" />
        <Valuta className="m-5" data={data}/>
      </Container>
    </div>
  );
}

export default App;
