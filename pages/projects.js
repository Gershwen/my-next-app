//the Layout component gets imported and used to wrap around the page's content
import Layout from "../components/MyLayout";
import Link from "next/link";
//Container, Row, Col, Image gets imported from React-Bootstrap. These styles/containers are used to wrap the content of the page
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Image from "react-bootstrap/image";

const Projects = () => {
  return (
    <Layout>
      <h1>My Portfolio</h1>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Link href="https://gershwen.github.io/planets-fact-site-project/">
              <Image src="/public/PlanetsSite.png" thumbnail alt="thumbnail of planets site" />
            </Link>
            <h3>
              8 page website built with Semantic HTML, CSS and JavaScript using
              a Figma design
            </h3>
          </Col>
          <Col xs={6} md={4}>
            <Link href="https://gershwen.github.io/sunnyside-landing-page-project/">
              <Image src="/public/SunnySideLandingPage.png" thumbnail alt="thumbnail of sunnyside site" />
            </Link>
            <h3>
              Landing built with Semantic HTML, CSS and JavaScript using a Figma
              design
            </h3>
          </Col>
          <Col xs={6} md={4}>
            <Link href="https://github.com/Gershwen/Capstone_project_2">
              <Image src="/public/OnlineStore.png" thumbnail alt="thumbnail of online store" />
            </Link>
            <h3>Online store built using Semantic HTML, Bootstrap & jQuery.</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Link href="https://github.com/Gershwen/Full_Stack_iTunes_Search_App/tree/main/backend">
              <Image src="/public/FullStackiTunesApp.png" thumbnail alt="thumbnail of iTunes App" />
            </Link>
            <h3>Full-Stack web App using iTunes API</h3>
          </Col>
          <Col xs={6} md={4}>
            <Link href="https://github.com/Gershwen/Minesweeper-Game">
              <Image src="/public/MinesweeperGame.png" thumbnail alt="thumbnail of Minesweeper game" />
            </Link>
            <h3>Minesweeper game built with React.js</h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Projects;
