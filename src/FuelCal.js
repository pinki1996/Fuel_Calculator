import React from 'react'
import { useState } from 'react'

export const FuelCal = () => {

    const [departure, setdeparture] = React.useState("")
    const [specificGravity, setSpecificGravity] = React.useState("")
    const [uplift, setUplift] = React.useState("")

    const fuel = departure/2
    const lhrh = 5500
    const calCTR = (fuel - lhrh)*2
    console.log((fuel - lhrh)*2)
    
        const calUplift = (uplift*specificGravity)
        // console.log(calUplift)


        
   
        const LHuplift = Math.ceil((calUplift)/10)*10
        const depUplift = (LHuplift - calCTR)/2
        const LastUplist = (LHuplift)/2
        console.log(LastUplist)
     

        const RHuplift = Math.floor((calUplift)/10)*10
        const depRHUplift = (RHuplift - calCTR)/2
        const LastRHUplist = (RHuplift)/2
        console.log(LastRHUplist)
 
        
    function calculate(e)
    {
        e.preventDefault();
        // alert(`The name you entered was: ${departure} ${specificGravity} ${uplift}`);
       

    }

  return (
    <div>
    <h1>A320/21 FUEL CALCULATION</h1>
    <h3>WITHOUT ARRIVAL FUEL</h3>   
    <div className='wing_tank'>
        <div>
            <h2>WING TANK LIMIT</h2>
        </div>
        <div className="form-check form-switch">
            <label className="form-check-label check" for="flexSwitchCheckChecked">5500 KGS</label>
            <input className="form-check-input check" type="checkbox" role="switch" id="flexSwitchCheckChecked" />            
        </div>
    </div>

    <div>
        <form className='form'>
            <label>UPLIFT(LTS):</label>
            <input type='number' id='uplift' value={uplift} onChange={(e)=>setUplift(e.target.value)}/>

            <label>SPECIFIC GRAVITY: </label>
            <input type='number' id='specificGravity' min="0" 
        max="1" step="0.01" value={specificGravity} onChange={(e)=>setSpecificGravity(e.target.value)}/>

            <label>BROWSER OPENING: </label>
            <input type='number'/>

            <label>DEPARTURE FUEL(KG):  </label>
            <input id="departureFuelKG" type='number' name="departure" value={departure} onChange={(e)=>setdeparture(e.target.value)}/>
            <button onClick={calculate} type="submit" class="btn btn-primary">CALCULATE</button>
        </form>
    </div>


    <div>
        <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col">TANK</th>
            <th scope="col">ARRIVAL</th>
            <th scope="col">UPLIFT</th>
            <th scope="col">DEPARTURE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">LH</th>
            <td id='lhArrival'>{
                  (fuel > lhrh) ? (5500 -  ((((LastUplist/2)%10 === 0 ) ? depUplift : depRHUplift))) :
                   (fuel - (((LastUplist%10 === 0 ) ? LastUplist : LastRHUplist)))
               }</td>
          
            <td id='lhUplift'>
            {
                (fuel > lhrh) ?  ((((LastUplist/2)%10 === 0 ) ? depUplift : depRHUplift)) : 
                (((LastUplist%10 === 0 ) ? LastUplist : LastRHUplist))

            }</td>
            <td id="lh">{ (fuel > lhrh) ?  5500 : (fuel) }</td>
            </tr>
            <tr>
            <th scope="row">CTR</th>
            <td>0</td>
                <td id='ctrUplift'>{(fuel > lhrh) ?  calCTR : 0}</td>
            <td id='ctcFueldep'>{ (fuel > lhrh) ?  calCTR : 0 }</td>

            </tr>
            <tr>
            <th scope="row">ACT</th>
            <td className="act">0</td>
            <td className="act">0</td>
            <td className="act">0</td>
            </tr>

            <tr>
            <th scope="row">RH</th>
            <td id='rhArrival'>{
                (fuel > lhrh) ? (5500 -  ((((LastUplist/2)%10 === 0 ) ? depUplift : depRHUplift))) :
                (fuel - (((LastUplist%10 === 0 ) ? LastUplist : LastRHUplist)))
                }</td>
            <td id='rhUplift'>{

                (fuel > lhrh) ?  ((((LastUplist/2)%10 === 0 ) ? depUplift : depRHUplift)) : 
                ((((LastUplist%10 === 0 ) ? LastUplist : LastRHUplist)))
            }
              
            </td>
            <td id="rh">{ (fuel > lhrh) ?  5500 : (fuel) }</td>
            </tr>

            <tr>
            <th scope="row">TOTAL</th>
            <td id='totalArrival'>
                {
                    ((fuel > lhrh) ? (5500 - ((((LastUplist/2)%10 === 0 ) ? depUplift : depRHUplift))) :
                    (fuel - (((LastUplist%10 === 0 ) ? LastUplist : LastRHUplist))))*2
                }
            </td>
            <td id='totalUplift'>{((LastUplist%10 === 0 ) ? LHuplift : RHuplift)}</td>
            <td id='total'>{departure}</td>
            </tr>
        </tbody>
        </table>
    </div>

    <div className='browser'>
        <label>BROWSER CLOSSING</label>
        <input type='number' value={uplift}/>

        <label>UTC TIME:-</label>
        <a id="utc">{new Date().toUTCString()}</a>

        
    </div>
    </div>
  )
}
