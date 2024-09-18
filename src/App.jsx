import "./App.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import banner2 from "./Images/banner2.jpg";
import banner3 from "./Images/banner3.jpg";
import banner1 from "./Images/banner.jpg";
import Products from "./Components/Products";
import Service from "./Components/Service";

function App() {
  const banner = [
    {
      name: banner1,
      title: "Bring Nature Home",
      info: "Explore a curated collection of indoor plants perfect for any space. Freshen up your living room or workspace with easy-to-care-for greens!",
      buttonText: "Shop & Explore",
    },
    {
      name: banner2,
      title: "Air-Purifying Plants",
      info: "Breathe easy with our selection of plants that purify the air naturally. Perfect for bedrooms, living rooms, and office spaces.",
      buttonText: "Shop & Explore",
    },
    {
      name: banner3,
      title: "Rare & Exotic",
      info: "Looking for something unique? Explore our rare and exotic plants that are sure to make a statement.",
      buttonText: "Shop & Explore",
    },
  ];

  return (
    <>
      <NavBar />
      <Banner banner={banner} />
      <Service />
      <Products />
    </>
  );
}

export default App;
