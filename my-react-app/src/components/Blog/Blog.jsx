import tours from "../../toursData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Blog.css'

export default function Blog() {
  return (
    <div className="mt-20 h-screen inset-shadow-sm/100  rounded-3xl ">
      <div className="m-0.5 h-full content-center overflow-x-auto "> 
        <div className="inline-flex space-x-10">
          {tours.map((tour) => (
            <div key={tour.id} className="overflow-hidden relative rounded-2xl w-90 lg:w-100 h-150 group shadow-xl/30">
              <div className="h-full">
                <img className="h-full w-full" src={tour.image} alt={tour.title} />
              </div>
              <motion.div
                initial={{ y: 100 }}
                whileHover={{ y: -200 }}
                transition={{ duration: 0.5 }}
                className="border-t-2 rounded-3xl p-5 h-full backdrop-blur-xl absolute bottom-0 left-0 right-0 top-90"
              >
                <h1 className="text-3xl  h-20 content-center ">{tour.title}</h1>
                <p>{tour.subtitle}</p>
                <p className="mt-5">{tour.titleDescription}</p>

                <Link to={`/pages2/${tour.id}`}>
                  <button className="mt-10 border p-3 rounded hover:bg-[#63855cf3]">
                    Подробнее
                  </button>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
