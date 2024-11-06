import { Contact } from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { Grid } from "@/components/Grid";
import { Main } from "@/components/Main";
import Projects from "@/components/Projects";
import { Nav } from "@/components/ui/Nav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-[1900px] w-full">
          <Nav navItems={navItems}/>
          <Main/>
          <Grid/>
          <Projects/>
          <Contact/>
          <Experience/>
          <Footer/>


        </div>
     
     </div>

    </main>
    
  );
}
