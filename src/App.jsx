import { useEffect, useState } from 'react'
import Guitar from './components/guitar'
import Header from './components/header'
import {db } from './data/db'

function App() {
    const [data] = useState(db)
    const [cart, setCart] = useState([])    
    useEffect(() => {
        // console.log(setCart)
        console.log(cart)
    }, [cart])
    // console.log(data)
console.log(cart)
    const MAX_ITEMS = 5
    // La función addToCart agrega un artículo al carrito de compras. Primero, verifica si el artículo ya está en el carrito. Si está, aumenta la cantidad. Si no está, agrega el artículo al carrito con una cantidad de 1.
    function addToCart(item) {
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

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }
  return (
    <>
        <Header 
            cart={cart}
            removeFromCart={removeFromCart}
        />

        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                {data.map((guitar) => (
                    <Guitar 
                        key={guitar.id} 
                        guitar={guitar} 
                        cart={cart}
                        setCart={setCart}
                        addToCart={addToCart}

                    />
                ))}
            </div>
        


        </main>
     
    </>
  )
}

export default App
