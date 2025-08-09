
 import Gallery from '../components/Gallery/Gallery'
export default function Pages2 () {
    return (
        <>
           <div className="  ">
             <div className="border absolute left-0 top-0 bg-[#313743] w-full h-100  content-center">
               
                <h1 className="text-center text-8xl">ТУР
                    <br />
                    ЧАРЫН-КОЛЬСАЙ
                </h1>

                
             </div>
                <Gallery/>
             <div className="mt-10 ">
                    <p className="text-[#313743] text-xl">
                        В этом туре вы не только насладитесь потрясающими природными пейзажами, но и получите уникальную возможность узнать историю этих мест и погрузиться в атмосферу местной природы. Все участники тура будут сопровождаться опытными гидами, которые расскажут вам интересные факты о каждом объекте. Удобный транспорт, комфортные условия и внимательное обслуживание сделают ваше путешествие максимально приятным и безопасным.
                    </p>
                </div>
                <div className="mt-10">
                    <h1 className="text-[#313743] text-center text-4xl">МАРШРУТ</h1>
                </div>
                <div className='text-[#313743] mt-10 text-xl flex justify-between'>
                    <p>АЛМАТЫ  →</p>
                    <p>ЧАРЫНСКИЙ КОНЬОН →</p>
                    <p>ОЗЕРО КАЙЫНДЫ →</p>
                    <p>КОЛЬСАЙСКИЕ ОЗЕРА →</p>
                    <p>АЛМАТЫ</p>
                </div>

                <div className='p-5 border-2 rounded-2xl flex gap-50 text-xl text-[#313743] justify-center mt-30'>
                    <div className='block'>
                       <div className='  border-b-2 p-5 flex justify-center items-center gap-2 '>
                         <img className='w-10' src="/public/icons/location-pin.png" alt="" />
                         <p>Начало маршрута-город Алматы</p>
                       </div>
                       <div className=' flex  p-5 justify-center items-center gap-2'>
                         <img className='w-10' src="/public/icons/terrain.png" alt="" />
                         <p>Хайкинг в программе на 5-6 часов</p>
                       </div>
                    </div>
                    <div>
                        <div className='  border-b-2 p-5  flex justify-center items-center gap-2'>
                            <img className='w-10' src="/public/icons/clock.png" alt="" />
                            <p>Продолжительность тура:2 дня</p>
                        </div> 
                        <div className=' p-5 flex  items-center gap-2'>
                            <img className='w-10' src="/public/icons/dumbbell_8636968.png" alt="" />
                            <p>Сложность-средняя</p>
                        </div>
                    </div>

                    
                </div>

                
               
           </div>
        </>
    )
}