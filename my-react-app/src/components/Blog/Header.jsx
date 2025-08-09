

import './Header.css';
// import Nav from './Nav.jsx';
export default function Header() {
    return (
        <div className='absolute top-0 left-0 bottom-0 h-scree  '>
            <div className='h-100 '>
                <img className='object-cover h-screen   brightness-120' src="/assets/Снимок экрана_19-7-2025_22558_www.bing.com.jpeg" alt="" />
                <div className='  px-4 py-2 text-7xl absolute top-40 text-white left-3'>
                    <h1 className=''>Путешествие
                    <br />
                    начинается <em>здесь</em>
                    </h1> 

                </div>
                <img className="absolute top-180 right-170 w-30 animate-up-down " src="/public/assets/arrow.png" alt="" />
                 
               
            </div>
                
        </div>
    )
}