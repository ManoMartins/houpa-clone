import { Box } from "@chakra-ui/react";
import Banners from "../components/Banners";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";

export default function Dashboard() {
  return (
    <Box>
      <Header />
      <Banners />
      <Categories />
      <Products 
        title="Novidades da estação" 
        products={[
          {
            price: 1000,
            name: "Blusa",
            image: "https://images.houpa.app/uploads/produtos/medium/2021/04/05/606b9fb9e7745.png",
          },
          {
            price: 300,
            name: "Blusa",
            image: "https://images.houpa.app/uploads/produtos/medium/2021/04/05/606b9fb9e7745.png",
          },
          {
            price: 269,
            name: "Blusa",
            image: "https://images.houpa.app/uploads/produtos/medium/2021/04/05/606b9fb9e7745.png",
          },
        ]} 
      />
      <Products 
        title="Promoções" 
        products={[
          {
            price: 1000,
            name: "Blusa",
            image: "https://images.houpa.app/uploads/produtos/medium/2021/04/05/606b9fb9e7745.png",
          },
          {
            price: 300,
            name: "Blusa",
            image: "https://images.houpa.app/uploads/produtos/medium/2021/04/05/606b9fb9e7745.png",
          },
          {
            price: 269,
            name: "Blusa",
            image: "https://images.houpa.app/uploads/produtos/medium/2021/04/05/606b9fb9e7745.png",
          },
          {
            price: 269,
            name: "Blusa",
            image: "https://images.houpa.app/uploads/produtos/medium/2021/04/05/606b9fb9e7745.png",
          },
        ]} 
      />
      <Footer />
    </Box>
  );
}