import React from 'react'

export const Ratings = ({ ratings }) => {

    let ratingArr = Array(5).fill(false);

    for (let i = 0; i < ratings; i++) {
        ratingArr[i] = true;
    }

    return (
        <>
            {
                ratingArr.map((value) => (

                    value ? (<i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>) : (
                        <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                    )
                ))}

        </>
    )
}
