"use client";

import Link from "next/link";  // Import Next.js Link component
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const Projects = () => {
  return (
    <div id="projects" className="py-20 flex flex-col gap-[100px]">
      <h1 className="text-[40px] font-bold gap-[10px] flex items-center justify-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-[20px] gap-[80px]">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            {/* Wrap PinContainer inside Link to handle navigation */}
            <Link href={item.href}>
              <PinContainer
                title={item.link}
                href={item.href}
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[40vh] lg:h-[30vh] mb-0">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1 p-[10px]">
                  {item.title}
                </h1>

                <p
                  className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;