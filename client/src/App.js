import logo from './logo.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import LocationImage from './Components/LocationImage/LocationImage'
import ImageHeader from './Components/ImageHeader/ImageHeader'
import Modal from './Components/Modal/Modal'
import TeamContainer from './Components/TeamContainer/TeamContainer'
import WorkRow from './Components/WorkRow/WorkRow'
import Container from './Components/Container/Container'
import PricingRow from './Components/PricingRow/PricingRow'
import ContactContainer from './Components/ContactContainer/ContactContainer'
import Footer from './Components/Footer/Footer'

function App () {
  return (
    <div id='myPage'>
      <NavBar />
      <ImageHeader />
      <Modal />
      <TeamContainer />
      <WorkRow />
      <Container />
      <PricingRow />
      <ContactContainer />
      <LocationImage />
      <Footer />
    </div>
  )
}

export default App
