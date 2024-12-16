import { useState } from 'react'

import './App.css'
import TextField from '@mui/material/TextField';
import { Stack, Button  } from '@mui/material';


function App() {
  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [interest,setInterest] = useState(0)

  const [invalidAmount, setInValidAmount] = useState(false)
  const [invalidRate, setInValidRate] = useState(false)
  const [invalidYear, setInValidYear] = useState(false)
  
  const validRegex=/^(?!0)[0-9]*.?[0-9]+$/

  console.log(amount,rate,year);
  

  console.log();
  

  const validateInput=(e)=>{
    console.log(e);

    const {name,value}=e.target 

    console.log(name,value);

    if(name=='principle_amount'){
      setAmount(value)
      
    }
    else if(name=='ratee'){
      setRate(value)
    }
    else{
      setYear(value)
    }
console.log(validRegex.test(value));

    if(validRegex.test(value) || value==""){
      
      if(name=="principle_amount"){
        setInValidAmount(false)
      }
      else if(name=="ratee"){
        setInValidRate(false)

      }
      else{
        setInValidYear(false)
      }
    }
    else{
      if(name=="principle_amount"){
        setInValidAmount(true)
      }
      else if(name=="ratee"){
        setInValidRate(true)

      }
      else{
        setInValidYear(true)
      }
    }
    
  }
  const calculate=(e)=>{
    e.preventDefault()

    console.log("calculate simple interest");
        if(amount && rate && year){
         const Interest=(amount*rate*year)/100
          setInterest(Interest)
        }
        else{
          alert(" please enter the field completely")
        }
    
  }
  const reset=()=>{
    setAmount("")
    setRate("")
    setYear("")
    setInValidAmount(false)
    setInValidRate(false)
    setInValidYear(false)
    setInterest(0)
  }

  return (
    <>
    <div className='bg-dark d-flex align-items-center justify-content-center' style={{height:'100vh',width:'100vh'}}>
      <div className='bg-light rounded p-5' style={{width:'550px'}}>
        <h2>simple interset calculator</h2>
        <p>calculate your simple interset Easily</p>
        <div className='text-light bg-warning rounded d-flex flex-column align-items-center justiyfy-content-center'>
          <h1 style={{fontSize:'50px'}} >₹  {interest}</h1>
          
          <h3>Total Simple Interset</h3>
        </div>
        <div className=' d-flex flex-column'>

        <TextField onChange={validateInput} value={amount || "" }id="amnt"  name='principle_amount' label="Amount" className='w-100 mt-5'  variant="outlined" />
        {invalidAmount &&
          <p className='text-danger fw-bold mt-3'>Inavlid principle amount</p>}
        <TextField onChange={validateInput} value={rate || "" }  id="intrst" name='ratee' label="Rate" className='w-100 mt-5'variant="outlined" />
        {invalidRate &&
          <p className='text-danger fw-bold mt-3'>Inavlid  rate</p>}
        <TextField onChange={validateInput}  value={year || "" }  id="yr" name='year' label="Year" className='w-100 mt-5' variant="outlined" />
        {invalidYear &&
          <p className='text-danger fw-bold mt-3'>Inavlid year</p>}
        <Stack direction="row" spacing={2}>
<Button variant="contained" onClick={calculate} disabled={invalidAmount || invalidRate || invalidYear} style={{width:'180px',marginLeft:'40px',marginTop:'30px'}}>Calculate</Button>
<Button variant="outlined" onClick={reset} style={{width:'180px',marginLeft:'40px',marginTop:'30px',color:'black'}}>Reset</Button>
</Stack>

        </div>
        
      
       

      </div>
    </div>
     
      </>
  )
}

export default App
