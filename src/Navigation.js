import React from 'react'
import { Link, BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import { Header } from './Header'
import { Routing } from './Routing'

export const Navigation = () => {
  return (
    <div>
         
            <BrowserRouter>
                <Header />
                <Routing />
            </BrowserRouter>
       
    </div>
  )
}
