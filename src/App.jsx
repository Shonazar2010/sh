import { Container, Drawer } from "@chakra-ui/react";
import Carousel from "./app/Carousel";
// import BurgerMenu from './app/Drawer';
import Header from "./app/header";
import Text1 from './app/Yazuv/Yazuv'
import Pruducts from "./app/producks/Products";

function App() {
  return (
    <div>
      <Container maxW="container.xl">
        <Header/>
        <Drawer/>
        <Text1/>
        <Carousel/>
        <Pruducts/>
      </Container>
    </div>
  );
}
export default App;
