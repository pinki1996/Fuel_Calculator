import React from 'react'
import { Link, BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { ReactFuel } from './ReactFuel'
import { FuelCal } from './FuelCal'
import { OilCal } from './OilCal'
export const Routing = () => {
  return (
    <div>
         <Routes>
                <Route path='/' element={<FuelCal />}></Route>
                <Route path="/fuelCalculator" element={<ReactFuel />}></Route>
                <Route path="/oilCalculator" element={<OilCal />}></Route>
            </Routes>
    </div>
  )
}
