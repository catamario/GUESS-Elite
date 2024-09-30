import Header from '../components/header.js';
import Footer from '../components/footer.js';
import registerimg from '../SURSE/imagini-use/register.jpg';
import React, { useEffect } from 'react';

function Register()
{
    useEffect(() => {
        const form = document.getElementById("registerform");

        const handleSubmit = (event) => {
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmpassword").value;
            const errorMessage = document.getElementById("errorMessage");

            if (password !== confirmPassword) {
                event.preventDefault(); // Previi trimiterea formularului
                errorMessage.textContent = "Parolele nu sunt identice!";
            } else {
                errorMessage.textContent = ""; // Dacă parolele coincid, nu afișezi mesajul de eroare
            }
        };

        form.addEventListener("submit", handleSubmit);

        // Curățăm listener-ul la demontarea componentei
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
    }, []);

    return(
<>
<Header />
<div id="errorMessage" className="font-bold text-red-700 absolute top-[170px] left-1/2 translate-x-[-50%] bg-red-950 rounded"></div>
<div className='w-full h-[539px] relative flex items-center justify-center'>
<div className='relative flex md:w-[800px] md:h-[400px] max-[768px]:h-[300px] w-[400px] rounded-xl drop-shadow-3xl'>
        <div className='relative flex flex-col h-full w-1/2 bg-gray-300 items-center'>
        <h1 className='font-bold text-center mt-5 text-5xl font-italianno'>Register</h1>
            <div className=' relative flex flex-col w-3/4 h-52 mt-2 md:mt-10'>
            <form action='/register' method='POST' id='registerform'>
                <input type='email' name='email' placeholder='&#9993; Enter your email' className='bg-gray-200 w-full h-10 mb-3 drop-shadow-3xl rounded border-[#844E19] border-b-2 text-sm md:text-base' required />
                <input type='password' name='password' placeholder='&#128274; Enter your password' className='bg-gray-200 w-full h-10 mb-3 drop-shadow-3xl rounded border-[#844E19] border-b-2 text-sm md:text-base' id='password' required />
                <input type='submit' value="LOGIN" className='bg-[#844E19] md:h-[50px] max-[640px]:h-[25px] rounded text-center font-bold w-full mt-2 md:mt-10 '/>
            </form>
            <p className='text-center mt-2 text-xs md:text-base cursor-default'>Ai deja cont? <br /> <a href='/login' className='font-bold'>Intra acum.</a></p>
            </div>

        </div>

        <div className='relative h-full w-1/2 bg-gray-500'>
        <img src={registerimg} className="w-full h-full" />
        </div>
</div>
</div>
<Footer />
</>
    );
}

export default Register;