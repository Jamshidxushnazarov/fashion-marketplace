import trending1 from "../assets/images/Trending_img1.png";
import trending2 from "../assets/images/Trending_img2.png";
import trending3 from "../assets/images/Trending_img3.png";

// Define the type for the trending data
 export interface TrendingCard {
    id: number;
    author: string;
    title: string;
    image: string;
    currentBid: string;
    liked: boolean;
    buttonText: string;
}

// Create the trending cards array with type annotation
export const cards: TrendingCard[] = [
    {
        id: 1,
        author: "@Johny",
        title: "Lorem Ipsum",
        image: trending1,
        currentBid: "0.005 ETH",
        liked: false,
        buttonText: "Buy Now",
    },
    {
        id: 2,
        author: "@Johny",
        title: "Lorem Ipsum",
        image: trending2,
        currentBid: "0.005 ETH",
        liked: false,
        buttonText: "Buy Now",
    },
    {
        id: 3,
        author: "@Johny",
        title: "Lorem Ipsum",
        image: trending3,
        currentBid: "0.005 ETH",
        liked: false,
        buttonText: "Buy Now",
    },
];
