import React from 'react'
import Hero from './components/Hero'
import GrowTogether from './components/GrowTogether'
import FlowingConversations from './components/FlowingConversations'
import YourUsers from './components/YourUsers'
import Footer from './components/Footer'
import ReadyToBuild from './components/ReadyToBuild'

const App = () => {
  return (
    <div>
      <Hero/>
      <GrowTogether/>
      <FlowingConversations/>
      <YourUsers/>
      <ReadyToBuild/>
      <Footer/>
    </div>
  )
}

export default App