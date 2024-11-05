import { Grid } from "@/components/Grid";
import { Main } from "@/components/Main";
import Projects from "@/components/Projects";
import { Nav } from "@/components/ui/Nav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-[1900px] w-full">
          <Nav navItems={[{name: 'Home', link: '/', icon: <FaHome/>}]}/>
          <Main/>
          <Grid/>
          <Projects/>


        </div>
     
     </div>

    </main>
    
  );
}
