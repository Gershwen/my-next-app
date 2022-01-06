//the Head allows us to pass in CDN's like google fonts and react-bootstrap
import Head from "next/Head";
//Header components holds the links that behave as the navbar
import Header from "./Header";

//below styles will apply a general layout for all pages.
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

//the layout component is what we will wrap all pages in to pass the same styles to all pages.
const Layout = (props) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>
      <div style={layoutStyle}>
        <Header />
        {props.children}
      </div>
      {/* Applying global styles that will be applied to all pages */}
      <style global jsx>
        {`
          h1 {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            margin: 1.2em 0 1.2em 0;
          }
          h2 {
            font-family: "Poppins", sans-serif;
            font-weight: 400;
          }
          h3 {
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-size: 1em;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
