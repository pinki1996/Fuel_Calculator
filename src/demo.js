import React from 'react';
import './style.css';

export default function App() {
  const [fuelValues, setFuelValues] = React.useState({
    uplift: 0,
    sp_gravity: 0,
    dp_fuel: 0,
  });

  const [calculatedFuelValues, setCalculatedFuelValues] = React.useState({
    uplift: 0,
    sp_gravity: 0,
    dp_fuel: 0,
  });

  const handleValueChange = function (event) {
    // console.log(event.target.name, event.target.value);
    setFuelValues(function (existingValues) {
      return { ...existingValues, [event.target.name]: event.target.value };
    });
  };

  const calculateFuelValues = function () {
    setCalculatedFuelValues(fuelValues);
  };

  return (
    <div>
      <div>
        <label htmlFor="">Uplift</label>
        <input type="number" name="uplift" onChange={handleValueChange} />
      </div>
      <div>
        <label htmlFor="">Specific Gravity</label>
        <input type="number" name="sp_gravity" onChange={handleValueChange} />
      </div>
      <div>
        <label htmlFor="">Departure Fuel</label>
        <input type="number" name="dp_fuel" onChange={handleValueChange} />
      </div>
      <div>
        <button onClick={calculateFuelValues}>Calculate</button>
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>Uplift</th>
            <th>Specific Gravity</th>
            <th>Dep. Fuel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{calculatedFuelValues.uplift}</td>
            <td>{calculatedFuelValues.sp_gravity}</td>
            <td>{calculatedFuelValues.dp_fuel}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
