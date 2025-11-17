import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Reviews = ({ rating, reviews }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = Math.max(0, 5 - fullStars - (halfStar ? 1 : 0));

    const renderStars = (starRating) => {
        const stars = Math.floor(starRating);
        const noStars = 5 - stars;

        return (
          <>
            {[...Array(stars)].map((_, i) => (
              <FaStar key={`full-${i}`} className="text-yellow-400" size={20} />
            ))}
            {[...Array(noStars)].map((_, i) => (
              <FaRegStar
                key={`empty-${i}`}
                className="text-gray-400"
                size={20}
              />
            ))}
          </>
        );
    }

  return (
    <div>
      <div className="mx-auto mt-20 mb-20 flex max-w-330 items-center">
        <div className="h-3 w-3 rounded-full border-2 border-solid border-black"></div>
        <div className="h-0.5 flex-1 bg-black"></div>
        <div className="h-3 w-3 rounded-full border-2 border-solid border-black"></div>
      </div>

        <div className="flex items-center gap-2">
      <h2 className="ml-10 p-5 text-4xl font-bold text-(--h1-color)">Anmeldelser</h2>
      
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-yellow-400" size={40} />
      ))}
      {halfStar && (
        <FaStarHalfAlt key="half" className="text-yellow-400" size={40} />
      )}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`emepty-${i}`} className="text-gray-400" size={40} />  
        ))}
        </div>

        <div className="flex justify-between ml-12 mr-12 mt-10 mb-10">
            {reviews?.slice(0, 3).map((review, index) => (
                <div key={index} className="flex border-b pb-4">
                    <div className="flex flex-col items-center mb-2 gap-4">
                    <div className="flex gap-2">
                        {renderStars(review.rating)}
                    </div>
                    <p className="font-semibold text-2xl text-(--h1-color)">"{review.comment}"</p>
                    </div>
                    </div> 
            ))}
            
        </div>
    </div>
  );
};

export default Reviews;
