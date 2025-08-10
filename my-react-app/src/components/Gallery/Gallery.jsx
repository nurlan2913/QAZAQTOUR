import React from 'react';
import { useParams } from 'react-router-dom';
import tours from '../../toursData';

export default function Gallery() {
  const { id } = useParams();
  const tour = tours.find(t => t.id === id);

  if (!tour || !tour.images || tour.images.length === 0) {
    return <p className="text-center mt-10">Нет картинок для этого тура</p>;
  }

  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-10">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {tour.images.map((src, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <img
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              src={src}
              alt={`Gallery ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
