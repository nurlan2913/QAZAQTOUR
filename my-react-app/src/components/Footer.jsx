


export default function Footer (){
    return(
        <>
        <div className="border absolute w-full left-0 h-50 gap-30 content-center items-center flex bg-[#313743]">
            <img className="w-50" src="/public/Logo.png" alt="" />
            <p className="content-center ">
                Контакты:
                <br />
                +7(ххх)ххх-хх-хх
                <br />
                +7(ххх)ххх-хх-хх

            </p>
            <p className="content-center ">
                Адрес:
                <br />
                г.Алматы ул.Мауленова192
            </p>
            <div className="  flex gap-10 h-10">
                <img src="/public/Photo/instagram.png" alt="" />
            <img src="/public/Photo/phone.png" alt="" />
            </div>
            
        </div>
        </>
    )
}