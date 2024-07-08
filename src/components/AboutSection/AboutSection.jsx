import styled from "styled-components";

const Container = styled.div`
 max-width: 1200px;
 margin: 0 auto;
 padding: 3rem 1rem;
`;

const Title = styled.h1`
 color: #118ab2;
 font-size: 3rem;
 text-align: center;
 margin-bottom: 2rem;
`;

const Content = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const Section = styled.div`
 width: 100%;
 max-width: 800px;
 margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
 font-size: 2rem;
 margin-bottom: 1rem;
`;

const Paragraph = styled.p`
 line-height: 1.6;
 text-align: justify;
`;

function AboutSection() {
 return (
  <Container>
   <Title>About</Title>
   <Content>
    <Section>
     <SectionTitle>Lorem</SectionTitle>
     <Paragraph>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita rerum
      quod reiciendis deserunt aspernatur totam! Facilis dolor in obcaecati eum
      quam. Distinctio in asperiores, autem magni expedita rem laudantium quo.
     </Paragraph>
    </Section>
    <Section>
     <SectionTitle>Ipsum</SectionTitle>
     <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut et
      assumenda velit nam distinctio explicabo minima ratione consequatur, sunt
      recusandae tenetur sequi dicta id. Eaque illum cum veniam id?
     </Paragraph>
    </Section>
    <Section>
     <SectionTitle>Dolor</SectionTitle>
     <Paragraph>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam expedita
      alias officia quidem laboriosam, ad, voluptates nemo voluptate porro
      sapiente facilis laudantium fugiat voluptatem sint libero qui in odio est?
     </Paragraph>
    </Section>
   </Content>
  </Container>
 );
}

export default AboutSection;
