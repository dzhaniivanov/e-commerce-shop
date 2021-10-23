import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``;




const Products = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Bomber Jacket</Title>
                    <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed earum praesentium autem adipisci, excepturi officia accusamus odio vel hic aliquam.</Desc>
                    <Price>$20</Price>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Products
