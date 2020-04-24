import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <Header />
    <div className="container mx-auto py-8">
      <div className="description pb-4">
        <h1 className="text-2xl">Victor Guadarrama Mireles</h1>
        <code>$ git ci -m "working remotely" 🏡</code>
      </div>

      <div class="flex flex-wrap">
        <div className="flex-1 text-gray-700 text-center self-auto">
          Software Dev &rarr;
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
