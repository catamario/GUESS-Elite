import React, { useEffect, useState } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

function Checkout(){

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
    useEffect(() => {
      setProducts(JSON.parse(localStorage.getItem("products")));
    }, [])

    const eliminaProdus = (productId) => {
        const respectiv = products.find(product => product.id === productId);
        if(respectiv)
        {
         respectiv.inCart = false;
        }
        localStorage.setItem("products", JSON.stringify(products));
        setProducts(JSON.parse(localStorage.getItem("products")));
      }

    return(
        <>
        <Header />
            
            <div className='w-full h-[839px] relative flex items-center justify-center pl-10 pr-10 '>
                
                <div className='h-[90%] w-full relative bg-white '>


                    <div className='bg-white h-fit w-full'>
                        <h1 className="font-italianno relative sm:text-[3.5vw] text-[36px]">Cosul tau de cumparaturi</h1>
                        <div className='bg-[#D9D9D9] flex relative h-[40px] w-full text-center justify-center items-center'><h2 className='text-black font-italianno text-2xl font-bold right-2 absolute'>Multumim ca folosesti serviciile noastre!</h2></div>
                    </div>

                    <div className='bg-white flex flex-col h-fit w-full'>
                        <div className='bg-transparent flex flex-col relative h-[300px] w-full mt-5 border-2 border-[#D9D9D9] shadow-2xl drop-shadow-3xl'>
                            <h1 className='text-black text-3xl'>Ai {products.filter(product => product.inCart).length} produse in cos</h1>

                                {/* aici mapping la produse*/}
                                <div className='obiecte relative bg-transparent w-full h-full flex-grow flex flex-col lg:flex-row lg:overflow-y-hidden pb-10 lg:gap-40 lg:justify-center items-center overflow-y-scroll'>
                                    {products.filter(product => product.inCart).map((product) => {
                                        return (
                                            <div key={product.id} className="bg-white relative drop-shadow-3xl h-[150px] w-[315px] flex flex-col items-center justify-center hover:scale-105 ease-in-out duration-300 m-6">
                                                <img src={product.productImage} alt={product.productName} className="w-auto h-[100px]" />
                                                <h2 className="text-md font-bold cursor-pointer">{product.productName}</h2>
                                                <p className="text-gray-700 text-sm absolute right-0 bottom-0">{product.price} LEI</p>
                                                <button onClick={() => eliminaProdus(product.id)}><h1 className='absolute top-0 right-2 text-2xl'>&times;</h1></button>
                                            </div>)
                                    })}
                                </div>
                                {/* aici mapping la produse*/}

                            <div className='bg-[#D9D9D9] flex absolute bottom-0 h-[40px] w-full text-center justify-center items-center'><h2 className='text-black font-italianno text-2xl font-bold right-2 absolute'>Total: {products.filter(product => product.inCart).reduce((total, product) => total+product.price, 0)}</h2></div>
                        </div>

                

                    {/*div nou pentru flex-row*/}
                        <div className='flex flex-row items-center w-full h-fit'>
                            <div className='bg-transparent flex xl:flex-row flex-col relative h-fit xl:h-[250px] w-1/2 mt-5 border-2 border-[#D9D9D9] shadow-2xl drop-shadow-3xl xl:pb-0 pb-6'>
                                <form id="checkoutForm" className='flex flex-col p-5 gap-5 w-full xl:w-1/2'>
                                    <h2>Adresa :</h2><input type='text' className='w-full rounded' required></input>
                                    <h2>Telefon :</h2><input type='number' className='w-full rounded' required></input>
                                </form>

                                <div className='items-center justify-center flex text-center w-full xl:w-1/2'>
                                    <div className='bg-[#F2A8A8] w-fit h-fit p-2 sm:p-4 rounded-3xl'>
                                        <h2 className='font-bold md:text-2xl'>Metoda de plata:</h2>
                                        <input type='checkbox' className='rounded-full' checked></input><label>Ramburs</label>
                                    </div>
                                </div>
                            </div>

                            <div className='w-1/2 flex items-center justify-center'>
                                <button form="checkoutForm" type='submit' className='hover:scale-105 ease-in-out duration-500'>
                                    <div className='bg-[#D9D9D9] w-fit h-fit p-2 md:p-6 rounded-3xl shadow-2xl drop-shadow-3xl border-2'>
                                        <h2 className='font-bold md:text-2xl'>Finalizeaza comanda</h2>
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>

        <Footer />
        </>
    );
}

export default Checkout;