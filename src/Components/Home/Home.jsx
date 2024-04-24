import BooksContainer from "../BooksContainer/BooksContainer";
import BannerSection from "../bannerSection/BannerSection";


const Home = () => {
    return (
     <div className=" mx-16">
        <BannerSection></BannerSection>
        <BooksContainer></BooksContainer>
     </div>
        
    );
};

export default Home;