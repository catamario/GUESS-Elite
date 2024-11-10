import React, { useEffect, useState } from 'react';

import Header from "../components/header";
import Footer from "../components/footer";
import ceasul1 from '../SURSE/stockpoze/ceasul1.png';
import ceasul2 from '../SURSE/stockpoze/ceasul2.png';
import ceasul3 from '../SURSE/stockpoze/ceasul3.png';
import ceasul1argint from '../SURSE/stockpoze/ceasul1-argint.jpg';
import ceasul2argint from '../SURSE/stockpoze/ceasul2-argint.jpg';
import ceasul2fade from '../SURSE/stockpoze/ceasul1fade.png';
import ceasul1fade  from '../SURSE/stockpoze/ceasul2fade.png';

import PRODUCTS from '../produse/products.js';

function Produs() {

    const [img1, setImg1] = useState(ceasul1);
    const [img2, setImg2] = useState(ceasul2);

    const culoaregalbena = () => {
        setImg1(ceasul1);
        setImg2(ceasul2);
    };

    const culoareargint = () => {
        setImg1(ceasul1argint); 
        setImg2(ceasul2argint); 
    };

    const culoarefade = () => {
        setImg1(ceasul1fade); 
        setImg2(ceasul2fade); 
    };

    const schimbaculoare = () => {
        if(img1 === ceasul1)
        {
            setImg1(ceasul1argint); 
            setImg2(ceasul2argint); 
        }
        if(img1 === ceasul1argint)
        {
            setImg1(ceasul1fade);
            setImg2(ceasul2fade);
        }
        if(img1 === ceasul1fade)
        {
            setImg1(ceasul1);
            setImg2(ceasul2);
        }
    };


    const [products, setProducts] = useState(); 
    useEffect(() => {
        if (!localStorage.getItem("products")) {
            localStorage.setItem("products", JSON.stringify(PRODUCTS));
            setProducts(localStorage.setItem("products", JSON.stringify(PRODUCTS)));
        }
        else
        {
            setProducts(JSON.parse(localStorage.getItem("products")));
        }
    }, []);


const popup = document.getElementById('popup');



const [IsPopupVisible, setIsPopupVisible] = useState(false);
const [isPopupFadingIn, setIsPopupFadingIn] = useState(false);
    const buyNow = () => {
        let productKey = '';
        
       
        if (img1 === ceasul1) {
                    productKey = PRODUCTS[0];
                    products[0].inCart=true;
        } 
        else if (img1 === ceasul1argint) 
            {
                productKey = PRODUCTS[1];
                products[1].inCart=true;
            } 
        else if (img1 === ceasul1fade) 
            {
                productKey = PRODUCTS[2];
                products[2].inCart=true;
            }

        // Aici poți adăuga logica pentru a adăuga produsul în coș folosind productKey
        localStorage.setItem("products", JSON.stringify(products));    

        setIsPopupVisible(true); // Afișează popup-ul
        setTimeout(() => setIsPopupFadingIn(true), 100); // Activează efectul de opacitate

        // După 3 secunde, începe să dispară popup-ul
        setTimeout(() => {
            setIsPopupFadingIn(false); // Revine la opacitate 0
            setTimeout(() => setIsPopupVisible(false), 500); // Ascunde complet popup-ul după 0.5s
        }, 3000);

    };





    return (
        <>
            <Header />
            <div className="bg-[rgba(202,212,212,0.75)] flex  w-full h-fit pt-[100px] pb-[100px]">
                {/* Secțiunea imagini */}
                <div className="w-1/2 h-full items-end flex flex-col">
                    <img src={img1} alt="ceas" id="img1" className="min-[800px]:mr-[85px] max-[800px]:w-[200px] p-[10px]" height="250px" width="250px" />
                    <div className="flex max-[800px]:flex-col flex-row">
                        <img src={img2} alt="ceas2" id="img2" className="h-[300px] w-[200px] p-[10px] object-cover" />
                        <img src={ceasul3} alt="ceas3" className="h-[300px] w-[200px] object-cover p-[10px]" />
                    </div>
                </div>

                {/* Secțiunea descriere produs */}
                <div className="ml-[20px] w-[40vw] flex flex-col justify-center">
                    <h2 className="text-[48px] underline cursor-default">Ceas GUESS</h2>
                    <small className="font-bold text-gray-500 text-[32px]">349,99 RON</small>
                    <br /><br />
                    <small className="text-medium">Un ceas Guess este un accesoriu de modă elegant și sofisticat, renumit pentru designul său modern și atrăgător.</small>
                    <br /><h3 className="font-bold">Descriere</h3> <br />
                    <p>Acesta combină elemente de stil clasic cu tendințe contemporane, fiind adesea decorat cu detalii rafinate precum cristale și finisaje metalice de înaltă calitate.
                        Guess oferă o gamă variată de modele atât pentru bărbați, cât și pentru femei, fiecare ceas fiind proiectat să fie atât funcțional, cât și estetic plăcut.
                    </p>

                    <br /><h3 className="font-bold">TRANSPORT</h3> <br />
                    <p>Transport oriunde în ROMANIA!</p>

                    {/* Secțiunea butoane pentru culori */}
                    <div className="w-fit h-[50px] flex space-x-2">
                        <button
                            id="buton1"
                            onClick={culoaregalbena}
                            className="w-[25px] h-[25px] bg-yellow-400 border-none rounded-[5px] shadow-[4px_4px_10px_rgba(0,0,0,0.5)] cursor-pointer"
                        ></button>
                        <button
                            id="buton2"
                            onClick={culoareargint}
                            className="w-[25px] h-[25px] bg-gray-200 border-none rounded-[5px] shadow-[4px_4px_10px_rgba(0,0,0,0.5)] cursor-pointer"
                        ></button>
                        <button
                            id="buton4"
                            onClick={culoarefade}
                            className="w-[25px] h-[25px] bg-purple-500 border-none rounded-[5px] shadow-[4px_4px_10px_rgba(0,0,0,0.5)] cursor-pointer"
                        ></button>
                        <button
                            id="buton3"
                            onClick={schimbaculoare}
                            className="transform bg-gray-300 translate-y-[-5%] rounded-md h-fit w-fit  border-black border-[0.5px] drop-shadow-3xl pl-1 pr-1"
                        >
                            Schimba
                        </button>
                    </div>

                    {/* Butonul de cumpărare */}
                    <div className="mt-4 flex max-[800px]:flex-col w-fit h-fit">
                        <button onClick={buyNow} className="bg-[rgb(255,196,88)] text-[28px] font-[fantasy] rounded-[8px] px-[20px] py-[10px] shadow-[12px_12px_12px_black] border-[1.5px] cursor-pointer active:border-[wheat] active:scale-[1.05]">
                            BUY NOW
                        </button>
                        {IsPopupVisible && (<div id='popup' className={`bg-green-500 z-20 w-fit h-fit p-5 rounded-full opacity-0 relative flex text-center items-center font-bold justify-center min-[800px]:ml-5 max-[800px]:mt-5 transition-opacity duration-500 ${
                        isPopupFadingIn ? 'opacity-100' : 'opacity-0'
                    }`}>
                                <h1 className="font-serif text-[12px]">Produs adaugat cu succes in cosul de cumparaturi!</h1>
                            </div>)}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Produs;
