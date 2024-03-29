import { useState } from 'react'
import Guitar from './components/guitar'
import Header from './components/header'
import {db } from './data/db'



function App() {
    const [data] = useState(db)
    const [cart, setCart] = useState([])

    const addToCart(item) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExists >= 0 ) { // existe en el carrito
          if(cart[itemExists].quantity >= MAX_ITEMS) return
          const updatedCart = [...cart]
          updatedCart[itemExists].quantity++
          setCart(updatedCart)
        } else {
          item.quantity = 1
          setCart([...cart, item])
        }
      }
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
