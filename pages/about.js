//the Layout component gets imported and used to wrap around the page's content
import Layout from "../components/MyLayout";

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        Welcome to my Portfolio. My name is Gershwen and I have a passion for
        all things tech, especially writing code. As you will see below I have
        years of experience in sales and management however its during my years
        as a manager I discovered my true passion. As I have always been the
        "go-to" tech guy in the office. I then decided to change my career and
        follow the path im passionate about.
      </p>
      <ul>
        <h2>Education</h2>
        <li>
          Full Stack Web Developement - HyperionDev - October 2021 to January
          2022
        </li>
        <li>
          The Complete 2021 Web Development BOOT‑CAMP - Udemy Course - November
          2020 to June 2021
        </li>
        <li>
          Finance for non ‑ financial managers - Old Mutual Business School -
          2016
        </li>
        <li>
          Manager of others development programme - Old Mutual Business School -
          2011{" "}
        </li>
        <li>Regulatory Exam 5 - Moon Stone - 2011</li>
        <li>Wealth Management NQF5 - Recognition of prior learning - 2009</li>
        <li>Matric - Belhar High School - 2005</li>
      </ul>
      <ul>
        <h2>Work History</h2>
        <li>Sales Manager - Old Mutual - January 2010 to February 2021</li>
        <li>Sales Consultant - Old Mutual - April 2008 to December 2009</li>
        <li>
          Sales Agent - Direct Fin Solution - February 2007 to February 2008
        </li>
      </ul>
    </Layout>
  );
};

export default About;
