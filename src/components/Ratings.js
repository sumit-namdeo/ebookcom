
export const Ratings = ({ ratings }) => {

    let ratingArr = Array(5).fill(false);

    for (let i = 0; i < ratings; i++) {
        ratingArr[i] = true;
    }

    return (
        <>
            {
                ratingArr.map((value, index) => (

                    value ? (<i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>) : (
                        <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                    )
                ))}

        </>
    )
}
