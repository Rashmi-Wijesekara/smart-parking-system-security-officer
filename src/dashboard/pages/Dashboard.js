import React from 'react'

import Navbar from "../../shared/components/Navbar"

const Dashboard = () => {
  return (
	  <div className="flex flex-row">
      <Navbar />
      <div className="bg-background flex-grow">
        <div className="w-fit m-auto">
          dashboard
        </div>
      </div>
    </div>
  )
}

export default Dashboard