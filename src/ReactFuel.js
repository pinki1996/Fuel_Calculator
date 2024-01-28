import React, { useState } from "react";

export const ReactFuel = () => {
  const [bar, setbar] = useState(false);
  const [fuelValues, setFuelValues] = React.useState({
    uplift: 0,
    sp_gravity: 0,
    dp_fuel: 0,
    br_opening: 0,
  });

  const [calculatedFuelValues, setCalculatedFuelValues] = React.useState({
    uplift: 0,
    sp_gravity: 0,
    dp_fuel: 0,
    br_opening: 0,
  });

  const handleValueChange = function (event) {
    event.preventDefault();

    // console.log(event.target.name, event.target.value);
    setFuelValues(function (existingValues) {
      return { ...existingValues, [event.target.name]: event.target.value };
    });
  };

  const calculateFuelValues = function (e) {
    e.preventDefault();

    setCalculatedFuelValues(fuelValues);
  };
  const lowerFuel = calculatedFuelValues.dp_fuel / 2;
  const higherFuel = (calculatedFuelValues.dp_fuel / 2 - 5500) * 2;
  const higherFuelBar = (calculatedFuelValues.dp_fuel / 2 - 6000) * 2;

  //Logic to calculate LH & RH tank Value

  const calUplift =
    calculatedFuelValues.uplift * calculatedFuelValues.sp_gravity;
  console.log(calUplift);

  const LHuplift = Math.ceil(calUplift / 10) * 10;
  const depUplift = (LHuplift - higherFuel) / 2;
  const LastUplist = LHuplift / 2;
  // console.log(LastUplist)

  const RHuplift = Math.floor(calUplift / 10) * 10;
  const depRHUplift = !bar
    ? (RHuplift - higherFuelBar) / 2
    : (RHuplift - higherFuel) / 2;
  const LastRHUplist = RHuplift / 2;
  console.log(LastRHUplist);

  let Clossing =
    Number(calculatedFuelValues.uplift) +
    Number(calculatedFuelValues.br_opening);
  // console.log(Clossing);

  const totalCTR = !bar
    ? lowerFuel > 5500
      ? higherFuelBar
      : 0
    : lowerFuel > 5500
    ? higherFuel
    : 0;
  console.log(totalCTR);
  const totalLh =
    lowerFuel > 5500
      ? (LastUplist / 2) % 10 === 0
        ? depUplift
        : depRHUplift
      : LastUplist % 10 === 0
      ? LastUplist
      : LastRHUplist;

  const upliftTotal = !bar
    ? lowerFuel > 5500
      ? 6000
      : lowerFuel
    : lowerFuel > 5500
    ? 5500
    : lowerFuel;

  console.log(upliftTotal);
  return (
    <div className="bg">
      <h1>A320/21 FUEL CALCULATION</h1>
      <h3>WITHOUT ARRIVAL FUEL</h3>
      <div className="wing_tank">
        <div>
          <h4>WING TANK LIMIT</h4>
        </div>
        <div className="form-check form-switch row gy-2 gx-3 align-items-center col-auto">
          <label
            className=" form-check-label check"
            for="flexSwitchCheckChecked"
          >
            5500 KGS
          </label>
          <input
            className="form-check-input check form-control"
            type="checkbox"
            role="switch"
            id="autoSizingInput"
            onClick={() => setbar(!bar)}
          />
        </div>
      </div>

      <div>
        <form className="form row gy-2 gx-3 align-items-center">
          <div class="col-auto">
            <label for="autoSizingInput">UPLIFT(LTS):</label>
            <input
              type="number"
              class="form-control"
              id="autoSizingInput"
              name="uplift"
              onChange={handleValueChange}
            />
          </div>

          <div class="col-auto">
            <label for="autoSizingInput">SPECIFIC GRAVITY: </label>
            <input
              type="number"
              min={0}
              max={1}
              step={0.001}
              class="form-control"
              id="autoSizingInput"
              name="sp_gravity"
              onChange={handleValueChange}
            />
          </div>

          <div class="col-auto">
            <label for="autoSizingInput">BOWSER OPENING: </label>
            <input
              class="form-control"
              name="br_opening"
              id="autoSizingInput"
              type="number"
              onChange={handleValueChange}
            />
          </div>

          <div class="col-auto">
            <label for="autoSizingInput">DEPARTURE FUEL(KG): </label>
            <input
              class="form-control"
              id="autoSizingInput"
              type="number"
              name="dp_fuel"
              onChange={handleValueChange}
            />
          </div>

          <div>
            <button
              type="submit"
              onClick={calculateFuelValues}
              class="btn btn-primary"
            >
              CALCULATE
            </button>
          </div>
        </form>
      </div>

      <div class="table-responsive">
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
              <td id="lhArrival">{upliftTotal - totalLh}</td>

              <td id="lhUplift">{totalLh}</td>
              <td id="lh">{upliftTotal}</td>
            </tr>

            <tr>
              <th scope="row">CTR</th>
              <td>0</td>
              <td id="ctrUplift"> {totalCTR}</td>
              <td id="ctcFueldep">{totalCTR}</td>
            </tr>

            <tr>
              <th scope="row">RH</th>
              <td id="rhArrival">{upliftTotal - totalLh}</td>
              <td id="rhUplift">{totalLh}</td>
              <td id="rh">{upliftTotal}</td>
            </tr>

            <tr>
              <th scope="row">TOTAL</th>
              <td id="totalArrival">{(upliftTotal - totalLh) * 2}</td>
              <td id="totalUplift">{totalCTR + totalLh + totalLh}</td>
              <td id="total">{calculatedFuelValues.dp_fuel}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="broswer form row gy-2 gx-3 align-items-center ">
        <div className="col-auto">
          <label for="autoSizingInput">BOWSER CLOSING</label>
          <input
            type="number"
            class="form-control"
            id="autoSizingInput"
            value={Clossing}
          />
        </div>

        <div className="col-auto">
          <label for="autoSizingInput">UTC TIME:-</label>
          <a class="form-control">{new Date().toUTCString()}</a>
        </div>
      </div>
    </div>
  );
};
