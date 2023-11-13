import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Card from './components/Card'
import data from './data/data'
// import img1 from './images/wedding-photography 1.png'
// import img2 from './images/image 12.png'
// import img3 from './images/mountain-bike 1.png'
// import img4 from './images/image 29.png'


function App() {
      const cardData = data.map(items => {
        
        return <Card 
          key = {items.id}
          items = {items}
        />
      })

  return (
    <>
    <div>
        <Navbar/>
        <Hero/>
        <section className='card-list'>
            {cardData}
        </section>
    </div>
    </>
  
  )
}

export default App
