import Head from "next/head";
import Footer from "../components/Footer";

const Home = () => (
  <div className='container'>
    <Head>
      <title>VictorGu</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <h3 className='title' style={{ color: "#0e182a" }}>
        Victor Guadarrama
      </h3>
      <p className='description' style={{ color: "#0e182a" }}>
        Software Engineer currently working from 🏡
      </p>

      <div className='grid'>
        <a
          href='https://www.linkedin.com/in/victorgu/'
          target='_blank'
          className='card'
        >
          <h3>LinkedIn &rarr;</h3>
          <p>My LinkedIn profile.</p>
        </a>

        <a href='https://github.com/victore/' target='_blank' className='card'>
          <h3>Github</h3>
          <p>My space on Github</p>
        </a>

        <a href='https://gitlab.com/victorgu' target='_blank' className='card'>
          <h3>Gitlab</h3>
          <p>My space on Github</p>
        </a>

        <a href='#' className='card'>
          <h3>Work in progress &rarr;</h3>
          <p>loading...</p>
        </a>
      </div>
    </main>
    <Footer />

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
