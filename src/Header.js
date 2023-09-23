import React from 'react'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <div className="nav nav-tabs " id="nav-tab" role="tablist">
        <NavLink className="nav-link" to="/" >Home</NavLink>
        <NavLink className="nav-link " to="/fuelCalculator">Fuel</NavLink>
        <NavLink className="nav-link"  to="/oilCalculator">Oil</NavLink>
        
    </div>
  )
}
