import { Facebook,Instagram,Twitter,Pinterest } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p``;

const SocialContainer = styled.div``;

const SocialIcon = styled.div``;


const Center = styled.div`
    flex:1;
    
`;

const Right = styled.div`
    flex:1;
    
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Shop.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid asperiores natus nam ab? Vitae fugit amet cum libero animi cupiditate. Esse asperiores fugit animi officia iste totam accusamus fugiat!
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>

        </Container>
    )
}

export default Footer
