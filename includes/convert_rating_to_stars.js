function convertRatingToStars(rating_value) {
    return `CASE
                WHEN (${rating_value} = 0.0)    THEN "☆☆☆☆☆"
                WHEN (${rating_value} <= 2.0)   THEN "★☆☆☆☆"
                WHEN (${rating_value} <= 4.0)   THEN "★★☆☆☆"
                WHEN (${rating_value} <= 6.0)   THEN "★★★☆☆"
                WHEN (${rating_value} <= 8.0)   THEN "★★★★☆"
                WHEN (${rating_value} <= 10.0)  THEN "★★★★★"
                ELSE "☆☆☆☆☆"
            END`;
}
module.exports = { convertRatingToStars };
