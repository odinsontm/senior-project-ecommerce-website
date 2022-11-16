import React from 'react';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../pics/about.jpg';
import styled from 'styled-components';

export default function AboutContactScreen() {
  const AboutMe = styled.img`
  width: 90%;
  height auto;
  margin: 1rem 5% 0 5%;
  text-align: center;
`;

  const Deft = styled.h1`
    margin-bottom: 3rem;
  `;

  const Break = styled.div`
    background-color: #131313;
    color: #eeeeee;
    text-align: center;
    padding: 2rem 15% 1rem 15%;
  `;
  const BreakOne = styled.div`
    text-align: center;
    margin: 2rem 15% 1rem 15%;
  `;

  return (
    <div>
      <Helmet>
        <title>TheDEFT</title>
      </Helmet>
      <div>
        <div class="banner"></div>

        <Row className="justify-content-md-center main-content products">
          <Col lg={5} md={4} sm={1}>
            <Deft>TheDEFT</Deft>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col>
            <AboutMe src={about} alt="TheDEFT" />
          </Col>
        </Row>
        <div className="feat-container">
          <Break>
            <p>
              Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Mauris
              pharetra et ultrices neque ornare aenean euismod. In metus
              vulputate eu scelerisque felis imperdiet. Nisi vitae suscipit
              tellus mauris a diam maecenas. Sed nisi lacus sed viverra tellus
              in hac habitasse. Diam ut venenatis tellus in metus vulputate.
              Nibh tortor id aliquet lectus proin nibh nisl condimentum. Viverra
              suspendisse potenti nullam ac tortor. Fringilla urna porttitor
              rhoncus dolor purus non enim praesent elementum. Donec massa
              sapien faucibus et molestie ac. Malesuada fames ac turpis egestas
              sed tempus urna et.
            </p>
          </Break>
        </div>
        <div className="new-container">
          <BreakOne>
            <p>
              Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
              Platea dictumst vestibulum rhoncus est pellentesque. Id volutpat
              lacus laoreet non curabitur gravida arcu. Amet porttitor eget
              dolor morbi. Adipiscing elit ut aliquam purus sit amet luctus
              venenatis. Rhoncus mattis rhoncus urna neque. Aliquam faucibus
              purus in massa tempor nec feugiat nisl. Bibendum est ultricies
              integer quis auctor elit sed vulputate. Fusce id velit ut tortor
              pretium viverra suspendisse potenti. Enim diam vulputate ut
              pharetra. Consectetur purus ut faucibus pulvinar. Malesuada nunc
              vel risus commodo viverra. Rhoncus dolor purus non enim praesent
              elementum facilisis leo. Ut faucibus pulvinar elementum integer.
              Tempus urna et pharetra pharetra. Venenatis a condimentum vitae
              sapien.
            </p>
          </BreakOne>
        </div>
        <div class="footerimg"></div>
      </div>
    </div>
  );
}
