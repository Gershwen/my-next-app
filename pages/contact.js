//the Layout component gets imported and used to wrap around the page's content
import Layout from "../components/MyLayout";
import Link from "next/link";

const Contact = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <Link className="email" href="mailto:gershwen@gmail.com" passHref>
        <a>gershwen@gmail.com</a>
      </Link>
      <h3>cell: 0720101062</h3>
    </Layout>
  );
};

export default Contact;
