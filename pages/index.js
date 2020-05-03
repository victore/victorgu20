import Header from "../components/Header";
import Link from "next/link";
import { posts } from "../posts";
import Footer from "../components/Footer";

export function getStaticProps() {
  return {
    props: {
      posts: posts.map((post) => ({
        ...post,
        url: `${new Date(post.date).getFullYear()}/${post.id}`,
      })),
    },
  };
}

const Home = ({ posts, date }) => (
  <>
    <Header />
    <div className="container mx-auto py-8">
      <div className="description pb-4">
        <h1 className="text-2xl">Victor Guadarrama Mireles</h1>
        <code>$ git ci -m "working remotely" 🏡</code>
      </div>

      <div class="bg-gray-100 p-4">
        <div className="description block text-gray-700 text-justify bg-gray-300 px-4 py-2">
          Hi there! I'm a Software engineer with experience in some cool
          technologies for developing web and mobile applications. I've work in
          differente kind of projects from News websites to Real time
          applications. Some technologies I've work with:
          <ul>
            <li>Ruby on Rails</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>Other</li>
          </ul>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <span>{post.date}</span>
                <Link href={post.url}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div className="flex-1 text-gray-700 text-center self-auto">
          Tech &rarr;
        </div>
        <div className="flex-1 text-gray-700 text-center self-auto">Links</div>
        <div className="flex-1 text-gray-700 text-center self-auto">
          Básquetbol &rarr;
        </div>
        <div className="flex-1 text-gray-700 text-center self-auto">
          Literatura &rarr;
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Home;
