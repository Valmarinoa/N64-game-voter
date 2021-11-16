import Head from "next/head";
import { gameslist } from "./data";
import GameCards from "../components/GameCards";
import Popular from "../components/Popular";
import Hero from "../components/Hero";

const Home = ({ exploreGames }) => {
  return (
    <div>
      <Head>
        <title>🕹 N64 Voter!</title>
      </Head>
      <body className="bg-black flex items-center bg-fixed justify-center px-2 lg:px-16">
        <div className=" w-full z-0 max-w-lg fixed">
          <Hero />
        </div>
        <main className="max-w-5xl mx-auto z-10">
          <header className=" sticky top-0 h-[360px] md:h-[460px] xl:[600px] 2xl:[700px] bg-fixed">
            <div className="justify-items-center">
              <Popular className="relative lg:mb-20 md:mt-40 space-x-10 " />
            </div>
            <div className="mb-40 lg:mx-64">
              <h1 className=" text-xl text-white mt-6 md:text-3xl text-center font-bold md:mt-10 md:p-4 ">
                Most Popular Games at Routinely
              </h1>
              <p className="text-white text-center mb-3 mt-1 md:text-sm md:text-md">
                Vote for your favorite Nintendo 64 games 🙌
              </p>
            </div>
          </header>
          <section className="pt-6 h-[20px] md:h-[60px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6 md:gap-y-12">
              {exploreGames?.map(({ img, title, id }) => (
                <GameCards key={id} img={img} title={title} />
              ))}
            </div>
          </section>
        </main>
      </body>
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  return {
    props: {
      exploreGames: gameslist,
    },
  };
}
