
import './App.css';
import ShoppingCart from './components/ShoppingCart'
import { useState } from 'react';
function App() {
  const [products] = useState([
      { "id": 1, "name": "T-Shirt", "price": 20,"image" :""},
  
      { "id": 2, "name": "Jeans", "price": 40,"image" :""},
    
      { "id": 3, "name": "Sneakers", "price": 60,"image" :""},
    
      { "id": 4, "name": "Hat", "price": 15,"image" :""},
    
      { "id": 5, "name": "Socks", "price": 5,"image" :""}
    
    ]);
  return (
    <div className="App">
      <ShoppingCart  ramadhan={products}/>

    </div>
  );
}

export default App;
