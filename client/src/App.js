import React from 'react'
import Connect from './Connect'
import ImgMediaCard from './Component/Furniture'
import Nav from './Nav'
import Section from './Section'
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaControlCard from './About-us/aboutus'
import LatestBlog from './LatestBlog'

const App = () => {
  return (
    <>
    <Nav />
    <Section />
    <MediaControlCard/>
    <LatestBlog/>
    <ImgMediaCard/>
    <Connect />
    </>
  )
}

export default App
