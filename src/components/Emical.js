import React,{useState} from 'react';

export default function Emical(){
    const[amt,setAmt]=useState(0);
    const[ten,setTen]=useState(1);
    const[rate,setRate]=useState(0);
    const[emi,setEmi]=useState(0);
    const[int,setInt]=useState(0);
    const[total,setTotal] =useState(0);

    function loanYrs(e){
        let period = e.target.value;
        setTen(period);
    }
    function monthEmi(e){
      if(amt == false ){
        alert("Please enter loan amount")
       } else if(rate == false ){
        alert("Please enter interest rate")
       } 
       else {
        let interest = (amt*ten*rate)/100;
        setInt(interest);
        let total = interest+amt ;
        setTotal(total);
        let mEMI = (total / ten)/12
        setEmi(mEMI.toFixed(2));}
    } 
  return (
    <div className='main-div'>
      <center><h3>Loan EMI calculator</h3></center>
      <div className='wrapper'>
        <input type="text" required="required" onChange={(e)=>
        { if(e.target.value == false) {
          setAmt(0);
        } else
          setAmt(parseInt(e.target.value))}
        }/>
        <label>Enter Loan Amount</label>
      </div>
      <div className='tenurity'>
        <label>Select Tenurity in Years</label><br/>
        <select onChange={loanYrs}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>
      <div className='wrapper'>
        <input type="text" required="required" onChange={(e)=>{
          if(e.target.value == false){
            setRate(0);
          } else
          setRate(parseInt(e.target.value))}
          }/>
        <label>Enter Interest Rate in %</label>
      </div>
      <div>
        <center><button type="button" id="emi-btn" onClick={monthEmi}>calculate EMI</button></center><br/>
      </div>
      <div>
        <h3>Loan Amount : ₹ <span>{amt}</span></h3>
        <h3>Total Interest : ₹ <span>{int}</span></h3>
        <h3>Total Amount : ₹ <span>{total}</span></h3>
        <h3>Monthly EMI : ₹ <span>{emi}</span></h3>
      </div>
    </div>
  )
}
