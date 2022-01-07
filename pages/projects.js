//the Layout component gets imported and used to wrap around the page's content
import Layout from "../components/MyLayout";
import Link from "next/link";
import Image from "react-bootstrap/Image";
import data from "../data.json";

const Projects = () => {
  return (
    <Layout>
      <h1>My Portfolio</h1>
      <div className="container">
        {data.map((project) => {
          return (
            <div className="project-container">
              <Image src={project.imgsrc} thumbnail alt={project.alt} />
              <h3>{project.description}</h3>
              <div className="links">
                <Link href={project.appUri} passHref>
                  <a>Application site</a>
                </Link>
                <Link href={project.githubrepo} passHref>
                  <a>GitHub Repo</a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
