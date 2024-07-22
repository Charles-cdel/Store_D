import Footer from "../../components/Footer";
import StripProduct from"../../components/StripProduct"
import Header from "../../components/Header";
import Main from "../../components/Main";
import ProductCard from "../../components/ProductCard";
import ProductBar from "../../components/ProductBar";
import Produtos from "../../components/Api";
import RoadFeet from "../../components/RoadFeet";



function Home() {
    return ( 
        <>
            <Header/>
            <Main/>
            <ProductCard/>
            <StripProduct/>
            <ProductBar/>
            <Produtos/>
            <RoadFeet/>
            <Footer/>
            
        </>
     );
}

export default Home;