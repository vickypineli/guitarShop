import { useState } from 'react'
import Guitar from './components/guitar'
import Header from './components/header'
import {db } from './data/db'



function App() {
    

    const [data] = useState(db)
    const [cart, setCart] = useState([])


  return (
    <>
        <Header />

        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                {data.map(guitar => (
                    <Guitar 
                        key={guitar.id} 
                        guitar={guitar} 
                        setCart={setCart}

                    />
                ))}
            </div>
        


        </main>
     
    </>
  )
}

export default App
