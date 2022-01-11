import { Hero } from "../components/Hero/index";
import { Connect } from "../components/Connect/index";
import Director from "../components/Director/Director";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Connect />
      <Director />
      <Contact/>
    </>
  );
}

export default Home;
