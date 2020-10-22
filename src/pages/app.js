import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"

const Default = () => {
  return <h1>client side default</h1>
}
const Profile = () => {
  return <h1>client side profile</h1>
}

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Profile path="/profile" />
        <Default path="/" />
      </Router>
    </Layout>
  )
}

export default App
