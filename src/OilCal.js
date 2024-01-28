import React, { useState } from 'react'

export const OilCal = () => {

    const [input, setInput] = React.useState({
        presentmin:"",
        lastmin:"", 
        presentHour:"",
        lastHour:"", 
        oiluplift:""
      
    })
    const [result, setResult] = React.useState({})
    const [min, setMin] = React.useState({})
    const [rate, setRate] = React.useState({})

    const handleValueChange=(e)=>
    {
        setInput({...input,[e.target.name]: e.target.value})
    }

    function handleCalculation(e)
    {

      
       const{presentHour, lastHour, presentmin, lastmin, oiluplift} = input

       const presentTime = +presentHour + presentmin 
       const lastTime = +lastHour + lastmin 
       let hourDifference = parseInt(presentTime/100 - lastTime/100 - 1)
      
       let minutesDifference =parseInt(presentTime % 100 + (60 - lastTime % 100))

       if (minutesDifference >= 60)
       {
        hourDifference++;
        minutesDifference = minutesDifference - 60
        console.log(hourDifference, minutesDifference)
       }
       console.log(hourDifference.toString(), minutesDifference.toString())

      
     
    

       setResult(Number(hourDifference.toString()))
       setMin(Number(minutesDifference.toString()))
       setRate(Number(oiluplift)/Number(result))
       

    }
  return (
    <div>
        <h1>OIL COSUMPTION</h1>
        
        <div class="table-responsive">
            <table class="table ">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">HOURS</th>
                <th scope="col">MINUTES</th>
                </tr>
            </thead>
            <tbody >
                <tr>
                <th scope="row ">PRESENT SERVICING</th>
                <td><input  name='presentHour' onChange={handleValueChange} value={input.presentHour} type='number'/></td>
                <td><input  name='presentmin' onChange={handleValueChange} value={input.presentmin} type='number'/></td>
                </tr>

                <tr>
                <th scope="row ">LAST SERVICING</th>
                <td><input  name='lastHour' onChange={handleValueChange} value={input.lastHour} type='number'/></td>
                <td><input  name='lastmin' onChange={handleValueChange} value={input.lastmin} type='number'/></td>
                </tr>

                <tr>
                <th scope="row">OIL UPLIFT(QTS)</th>
                <td><input  name='oiluplift'onChange={handleValueChange} value={input.oiluplift} type='number'/></td>
                
                </tr>
               
            </tbody>
        </table>
       
        </div><br></br>

        <div class="table-responsive">
        <table class="table ">
            
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">VALUE</th>
                </tr>
            </thead>
            <tbody>
               
                <tr>
                    <th scope="row">DIFFERENCE</th>
                    <td><input name='differenceHour' onChange={handleValueChange} value={result} type='number'/></td>
                    <td><input name='differencemin' onChange={handleValueChange} value={min} type='number'/></td>
                </tr>

                <tr>
                    <th scope="row">COSUMPTION RATE</th>
                <   td><input  name="rate" onChange={handleValueChange} value={rate} type='number'/></td>
                </tr>
            </tbody>
        </table>

        <button type='submit' onClick={handleCalculation} class="btn btn-primary">CALCULATE</button>
        </div>
    </div>
  )
}
