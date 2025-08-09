import './Header.css'
export default function Header () {
    return (
        <div className=' blok  h-100 mt-20' >
          <div className=' flex gap-30  border-b-2 border-b-lime-400 pb-10'>
            <h1 className='text-7xl text-[#313743] font-bold'>ПОСМОТРИ НА МИР.
                <br />
                ОН КУДА УДИВИТЕЛЬНЕЕ
                <br />
                ЧЕМ СНЫ
            </h1>
            <img className='w-50 h-50 animate-spin [animation-duration:5s]' src="/public/assets/earth_2072299.png" alt="" />
          </div>
          <div className='flex justify-between text-xl pt-5'>
            <h1 className='text-[#313743] text-2xl font-bold'>Рэй Брэдберри</h1>
            <p className='text-[#313743]'>американский писатель</p>
            <p className='text-[#313743]'>1980</p>
            <img style={{width:'8%'}} src="/public/assets/blockquote (1).png" alt="" />
          </div>
        </div>
    )
}