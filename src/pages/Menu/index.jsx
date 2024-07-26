import Produtos from "../../components/Api";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuSlide from "../../components/MenuSlide";
import MenuTop from "../../components/MenuTop";
import ProductBar from "../../components/ProductBar";


function Menu(){
  return(
    <>

    <Header/>
    <MenuTop/>
    <MenuSlide/>
    <ProductBar/>
    <Produtos/>
    <Footer/>
    
    


    </>
  )
}
export default Menu