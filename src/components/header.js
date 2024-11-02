import search from '../SURSE/search.png';
import account from '../SURSE/account.png'
import cart from '../SURSE/cart.png'
import menu from '../SURSE/menu.png'
import { useEffect } from 'react';
import { useState } from 'react';
import PRODUCTS from '../produse/products.js';



function Header() {

  const [isCartVisible, setIsCartVisible] = useState(false); // Starea pentru vizibilitatea coșului
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [delayLista, setdelayLista] = useState(false);

  const deschideCART = (e) => {
    e.preventDefault();
    setIsCartVisible(!isCartVisible); // Schimbă starea vizibilității
    setdelayLista(!delayLista);
  };

  const inchideCART = (e) => {
    e.preventDefault();
    setIsCartVisible(false); // Setează starea vizibilității la false
    setdelayLista(false);
  };

  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
    useEffect(() => {
      setProducts(JSON.parse(localStorage.getItem("products")));
    })

    const eliminaProdus = (productId) => {
      const respectiv = products.find(product => product.id === productId);
      if(respectiv)
      {
       respectiv.inCart = false;
      }
      localStorage.setItem("products", JSON.stringify(products));
      setProducts(JSON.parse(localStorage.getItem("products")));
    }
     /* const products = JSON.parse(localStorage.getItem("products")) || [];
      const eliminaProdus = (productId) => {
        const respectiv = products.find(product => product.id === productId);
        if(respectiv)
        {
         respectiv.inCart = false;
        }
        localStorage.setItem("products", JSON.stringify(products));
      }*/
    

    useEffect(() => { 
      if (products.some(product => product.inCart === true))
      {
        setIsProductInCart(true);
      }
      else
      {
        setIsProductInCart(false);
      }
      console.log(products);
      console.log(isProductInCart)})

    useEffect(() => {


      let meniu = document.getElementById('butonmeniu');
      let mini = document.getElementById('minimenu');
      let navigatie = document.getElementById('tabs');
      meniu.addEventListener('click', () => {
        if(window.innerWidth <= 640 && mini.classList.contains('hidden'))
           {mini.classList.remove('hidden');
             mini.classList.add('flex');
            navigatie.classList.remove('max-[640px]:hidden');
            navigatie.classList.add('max-[640px]:flex');}
        else  
        {mini.classList.remove('flex');
           mini.classList.add('hidden');
           navigatie.classList.remove('max-[640px]:flex');
           navigatie.classList.add('max-[640px]:hidden');}


           window.addEventListener('resize', () => 
            {
              if (window.innerWidth > 640) {
                // Ascunde meniul automat când fereastra este mai mare de 640px
                mini.classList.remove('flex');
                mini.classList.add('hidden');
                navigatie.classList.remove('max-[640px]:flex');
                navigatie.classList.add('max-[640px]:hidden');
              }
            });
      });


      return () => {
        meniu.addEventListener('click', () => {
          if(window.innerWidth <= 640 && mini.classList.contains('hidden')) 
            {mini.classList.remove('hidden');
               mini.classList.add('flex');}
          else  
          {mini.classList.remove('flex');
             mini.classList.add('hidden');}
        })
      };
    })





    return (
      <>
      <header className="w-full h-[130px] fixed flex z-40 bg-white drop-shadow-3xl">
      <div className="logo w-[600px] h-full flex items-center sm:justify-center sm:ml-0 ml-[10px] cursor-default">
        <a href="/acasa"><h1 className="font-italianno sm:text-[3.5vw] text-[36px]">GUESS Elite</h1></a>
      </div>
  
      <div className="bg-white hidden fixed top-[130px] w-full h-[60px] shadow-inner z-30" id="minimenu"></div>

      <div id="tabs" className="taburi min-[640px]:flex max-[640px]:hidden items-center w-full text-[#535353]        max-[639px]:absolute max-[639px]:w-full max-[639px]:text-center max-[639px]:justify-between       max-[640px]:top-[150px]        max-[640px]:pl-10 max-[640px]:pr-10 z-40">
        <a href="/acasa" className="min-[640px]:ml-[5vw] xl:text-[32px] min-[640px]:text-[22px] text-[18px] cursor-pointer hover:scale-110 transition xl:ml-[150px]">Acasa</a>
        <a href="/produs" className="ml-[5vw] xl:text-[32px] min-[640px]:text-[22px] text-[18px] cursor-pointer hover:scale-110 transition xl:ml-[150px]">Produse</a>
        <a href="/politica" className="ml-[5vw] xl:text-[32px] min-[640px]:text-[22px] text-[18px] cursor-pointer hover:scale-110 transition xl:ml-[150px]">Politica</a>
        <a href="/contact" className="ml-[5vw] xl:text-[32px] min-[640px]:text-[22px] text-[18px] cursor-pointer hover:scale-110 transition xl:ml-[150px]">Contact</a>
      </div>
  
      <div className="icons w-[250px] h-full ml-auto flex items-center justify-center">
      <a href="">
          <img 
            src={search} 
            alt="Search" 
            className="md:w-[25px] w-[15px] md:h-[25px] h-[15px] mr-2.5 hover:scale-125 "  
          />
        </a>
        <a href="/account">
          <img 
            src={account} 
            alt="Account" 
            className="md:w-[25px] w-[15px] md:h-[25px] h-[15px] mr-2.5 hover:scale-125" 
          />
        </a>
        <a href="" className='flex-col items-center justify-center'>
        <div id='checkcart' className={`bg-green-500 opacity-50 absolute w-[5px] h-[5px] rounded-full ${ isProductInCart ? 'visible' : 'hidden'}`}></div>
          <img 
            onClick={deschideCART}
            src={cart} 
            alt="Cart" 
            className="md:w-[25px] w-[15px] md:h-[25px] h-[15px] hover:scale-125" 
          />
        </a>
        
          <img 
            src={menu} 
            alt="Menu" 
            className="h-[50px] w-[50px] sm:hidden"
            id="butonmeniu"
          />
        
      </div>
    </header>
    <div className="spatiuocupatheader relative w-full h-[130px] z-0"></div>



    {/* CART CART CART CART CART CART CART CART */}
    <div id='shopping_cart' className={`fixed flex flex-col bg-white h-[calc(100vh-130px)] w-1/2 z-40 right-0 ${isCartVisible ? 'visible' : 'invisible'}`}>
      <div className='h-5/6 flex flex-col relative'>
        <div className='texturi relative bg-transparent h-fit w-full pl-9 pt-3'>
          <h1 onClick={inchideCART} className=" absolute right-2 top-0 font-italianno lg:text-[3.5vw] text-[36px] text-black drop-shadow-3xl cursor-pointer z-50">&times;</h1>
          <h1 className="font-italianno lg:text-[3.5vw] text-[36px] text-black drop-shadow-3xl cursor-default">Cosul meu</h1>
          <h1 className="font-italianno lg:text-[2vw] text-[36px] text-black drop-shadow-3xl cursor-default">{products.filter(product => product.inCart).length} items</h1>
       </div>


          <div className={`obiecte relative bg-gray-200 z-40 w-full flex-grow flex flex-col lg:flex-row lg:justify-center items-center p-6 overflow-y-scroll overflow-x-hidden ${delayLista ? 'visible' : 'hidden'}`}>
          {products.filter(product => product.inCart).map((product) =>
                (
                <div key={product.id} className="bg-white relative drop-shadow-3xl h-[200px] min-[1518px]:h-[150px] w-[250px] flex flex-col items-center justify-center hover:scale-105 ease-in-out duration-300 m-6">
                    <img src={product.productImage} alt={product.productName} className="w-auto h-[100px]" />
                    <h2 className="text-md font-bold cursor-pointer">{product.productName}</h2>
                    <p className="text-gray-700 absolute right-0 bottom-0">{product.price} LEI</p>
                    <button onClick={() => eliminaProdus(product.id)}><h1 className='absolute top-0 right-2 text-2xl'>&times;</h1></button>
                </div>))}
          </div>
        </div>


        <div className='checkout relative flex h-1/6 w-full bg-white'>
                <div className=' TOTAL h-full w-1/2 relative flex items-center justify-center '>
                <h1 className='font-bold md:text-2xl text-sm font-serif'>{products.filter(product => product.inCart).reduce((total, product) => total + product.price, 0)} LEI</h1>
                </div>
                <div className=' CONTINUA h-full w-1/2 h-1/2 relative flex items-center justify-center'>
                <button><div className=' relative flex h-[50px] w-fit pl-2 pr-2 w-1/2 bg-gray-300 rounded drop-shadow-3xl items-center justify-center border-1 border-gray-400'>
                        <a href='/checkout'><h1 className='font-bold md:text-2xl text-sm font-serif'>CONTINUA</h1></a>
                    </div></button>
                </div>
        </div>
        
    </div>
    </>
    );
  }

  export default Header;
