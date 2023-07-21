import {  Route, Routes } from "react-router-dom";
 
import Nav from "./Components/Nav"
import Home from "./Home"
import Footer from "./Components/Footer"
import NewsAndReviews from "./Components/NewsAndReviews";


function App() {
  return (
    <>
      <Nav/>
      
        <Routes>
          <Route  path="/" element ={<Home/>}/>
          <Route path="NewsAndReviews" element={<NewsAndReviews/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App