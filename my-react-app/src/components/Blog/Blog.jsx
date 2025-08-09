import camp from '/assets/029f0070744c720ca6c110809abce4b7.mp4'
import { motion } from 'framer-motion';
import './Blog.css'
// import vniz from '../assets/free-icon-down-arrow-15864118.png'
export default function Blog() {
    return (
        <>
         <div className='mt-250   inset-shadow-sm/100 h-screen  content-center justify-between rounded-3xl  '>
           <div className=' m-0.5 h-full content-center overflow-x-auto'>
            <div className='inline-flex  space-x-10 '>

                <div className='  overflow-hidden relative rounded-2xl  w-100 h-150 group  shadow-xl/30 '>
                
                 <div className='h-full '>
                     <img className=' h-full w-full   ' src="/public/slide/Sharyn.jpeg" alt="" />
                  </div>
                <motion.div 
                initial={{ y: 100 }}
                  whileHover={{ y: -200}}
                   transition={{ duration: 0.5 }}
                className='border-t-2 rounded-3xl  p-5  h-full  backdrop-blur-xl absolute bottom-0 left-0 right-0 top-90 '>
                     <h1 className='text-3xl'>Тур Чарын-Кольсай</h1>
                    <p className='mt-5 '>Тур в Чарын каньон и Кольсай и Кайынды</p>
                    <p className='mt-10'> 
                        Отправьтесь в захватывающее путешествие 
                        по самым живописным местам Алматинской области. 
                        Вас ждёт величественный Чарынский каньон с его скальными 
                        образованиями, мистическое озеро Кайынды с затопленным лесом
                         и бирюзовые Кольсайские озера, окружённые хвойными лесами.
                    </p>

                    <button className='mt-10 border p-3 rounded hover:bg-[#63855cf3] '>Подробнее</button>
                </motion.div>

            </div>



              


              <div className='  overflow-hidden relative rounded-2xl  w-100 h-150 group  shadow-xl/30 '>
                
                 <div className='h-full '>
                     <img className=' h-full w-full  object-cover ' src="/public/slide/Usturit.jpeg" alt="" />
                  </div>
                <motion.div 
                initial={{ y: 100 }}
                  whileHover={{ y: -200}}
                   transition={{ duration: 0.5 }}
                className='border-t-2 rounded-3xl  p-5  h-full  backdrop-blur-xl absolute bottom-0 left-0 right-0 top-90 '>
                     <h1 className='text-3xl'>Тур Устюрт</h1>
                    <p className='mt-5 '>Тур в другую планету</p>
                    <p className='mt-10'> Приглашаем вас посетить другую планету с
                         потрясающе красивыми видами полуострова Мангистау,
                          Казахстан. Вас ждет нетронутая первозданная природа,
                           божественно прекрасная в любое время года.
                    </p>

                    <button className='mt-10 border p-3 rounded hover:bg-[#63855cf3] '>Подробнее</button>
                </motion.div>

            </div>


            <div className='  overflow-hidden relative rounded-2xl  w-100 h-150 group  shadow-xl/30 '>
                
                 <div className='h-full '>
                     <img className=' h-full w-full   ' src="public/Photo/Катон Карагай.jpeg" alt="" />
                  </div>
                <motion.div 
                initial={{ y: 100 }}
                  whileHover={{ y: -200}}
                   transition={{ duration: 0.5 }}
                className='border-t-2 rounded-3xl  p-5  h-full  backdrop-blur-xl absolute bottom-0 left-0 right-0 top-90 '>
                     <h1 className='text-3xl'>Тур Катон-Карагай</h1>
                    <p className='mt-5 '>Тур в завораживающее приключение </p>
                    <p className='mt-10'> Это завораживающее приключение 
                        в отдаленный горный район на самом восточном 
                        краю огромного Казахстана. Вас ждет неделя среди гор, озер 
                        и хвойных лесов, которые будут дополнены живописными
                         перевалами и бурными водопадами.
                    </p>

                    <button className='mt-10 border p-3 rounded hover:bg-[#63855cf3] '>Подробнее</button>
                </motion.div>

            </div>


            <div className='  overflow-hidden relative rounded-2xl  w-100 h-150 group  shadow-xl/30 '>
                
                 <div className='h-full '>
                     <img className=' h-full w-full   ' src="/public/Photo/Markakol.jpeg" alt="" />
                  </div>
                <motion.div 
                initial={{ y: 100 }}
                  whileHover={{ y: -200}}
                   transition={{ duration: 0.5 }}
                className='border-t-2 rounded-3xl  p-5  h-full  backdrop-blur-xl absolute bottom-0 left-0 right-0 top-90 '>
                     <h1 className='text-3xl'>Тур Маркаколь</h1>
                    <p className='mt-5 '>Тур в заповедник Маркаколь</p>
                    <p className='mt-10'> Если хотите видеть кросоту Алтая ,
                        вам поможет этот тур.
                        Заповедник находится в Восточно-Казахстанской области,
                        удивительный место полон кросивами локациями.
                    </p>

                    <button className='mt-10 border p-3 rounded hover:bg-[#63855cf3] '>Подробнее</button>
                </motion.div>

            </div>
              

        </div>
           </div>
         </div>
        </>
    )
}