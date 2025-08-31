import weddingIcon from './home/categories/weddings.png';
import eventsIcon from './home/categories/events.png';
import birthdayIcon from './home/categories/birthday.png';
import nightLifeIcon from './home/categories/nightlife.png';
import attractionsIcon from './home/categories/attractions.png';
import planeWedding from './home/planewedding/planewedding.png'

export const assetsHome ={
    planeWedding,
}


export const mainData = [
    {
        id: 1,
        title: "Event's",
        dis: "Book tickets for the most popular events around you.From concerts to sports – secure your spot instantly. Easy booking with instant confirmation.",
        thumbnail: eventsIcon,
        bgColor: "65deg, #6c67dd, #b9b2f6",
    },
    {
        id: 2,
        title: "Attraction",
        dis: "Explore top tourist attractions hassle-free. Get your tickets in advance for museums, parks, and more. No long lines – just unforgettable experiences.",
        thumbnail: attractionsIcon,
        bgColor: "135deg, #ffd3e7, #9bf5ff",
    },
    {
        id: 3,
        title: "Night Life",
        dis: "Experience the best of nightlife with exclusive event access. Clubs, parties, and DJ nights – all in one place. Book now and skip the queue.",
        thumbnail: nightLifeIcon,
        bgColor: "135deg, #ffd3e7, #9bf5ff",
    },
    {
        id: 4,
        title: "Birthday",
        dis: "Plan the perfect birthday with zero stress. We handle everything – cake, venue, décor, and more. You just show up and celebrate!",
        thumbnail: birthdayIcon,
        bgColor: "65deg, #ffd3e7, #9bf5ff",
    },
    {
        id: 5,
        title: "Wedddings",
        dis: "Your dream wedding starts here. From planning to execution – we manage it all. Make your special day truly unforgettable.",
        thumbnail: weddingIcon,
        bgColor: "65deg, #ff5e9b, #45aaff",
    }

];

export default mainData;

