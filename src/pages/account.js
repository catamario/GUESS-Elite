import Header from '../components/header.js';
import Footer from '../components/footer.js';
import registerimg from '../SURSE/imagini-use/register.jpg';

function Account()
{
    return(
<>
<Header />
<div className='w-full h-[539px] relative flex items-center justify-center'>
<div className='relative flex md:w-[800px] md:h-[400px] max-[768px]:h-[300px] w-[400px] rounded-xl drop-shadow-3xl'>
        <div className='relative flex flex-col h-full w-1/2 bg-gray-300 items-center'>
        <h1 className='font-bold text-center mt-5 text-5xl font-italianno'>Login</h1>
            <div className=' relative flex flex-col w-3/4 h-52 mt-2 md:mt-10'>
            <form>
                <input type='email' placeholder='&#9993; Enter your email' className='bg-gray-200 w-full h-10 mb-3 drop-shadow-3xl rounded border-[#844E19] border-b-2 text-sm md:text-base' required />
                <input type='password' placeholder='&#128274; Enter your password' className='bg-gray-200 w-full h-10 drop-shadow-3xl rounded border-[#844E19] border-b-2 text-sm md:text-base' required />
                <a href='' className='text-sm md:text-base'>Ai uitat parola?</a>
                <input type='submit' value="LOGIN" className='bg-[#844E19] h-[50px] rounded text-center font-bold w-full mt-2 md:mt-10 '/>
            </form>
            <p className='text-center mt-2 text-xs md:text-base cursor-default'>Inca nu ti-ai facut cont? <br /> <a href='' className='font-bold'>Fa-ti acum.</a></p>
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

export default Account;