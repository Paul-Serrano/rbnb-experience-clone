import image1 from "../public/img/image1.png";
import image2 from "../public/img/image2.png";
import image3 from "../public/img/image3.png";

const data = [
    {
        key: 0,
        img: image1,
        stats : {
            rating: "5.0",
            reviewsNumber: 6
        },
        location: "USA",
        description: "Life lessons with Katie Zaferes",
        price: 136,
        openSpots: 0
    },

    {
        key: 1,
        img: image2,
        stats : {
            rating: "5.0",
            reviewsNumber: 30
        },
        location: "ONLINE",
        description: "Learn wedding photography",
        price: 125,
        openSpots: 25
    },

    {
        key: 2,
        img: image3,
        stats : {
            rating: "4.8",
            reviewsNumber: 2
        },
        location: "USA",
        description: "Group Mountain Biking",
        price: 50,
        openSpots: 2
    }
]

export default data;
