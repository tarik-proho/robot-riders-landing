"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

//optional hook for smooth scrolling
//import useLenis from "@/hooks/useLenis";

const images = [
  "/LSS098.png",
  "/LSS013.png",
  "/LSS015.png",
  "/LSS018.png",
  "/LSS020.png",
  "/LSS021.png",
  "/LSS029.png",
  "/LSS032.png",
];

const SwipeGrid = () => {
  const grid = useRef<any>(null);
  const gridWrap = useRef<any>(null);

  const hasRun = useRef(false);

  const applyAnimation = () => {
    // Register Scroll Triggren
    gsap.registerPlugin(ScrollTrigger);

    // Child elements of grid
    const gridItems = grid.current?.querySelectorAll(".grid__item");
    const gridItemsInner = [...gridItems].map((item) => item.querySelector(".grid__item-inner"));

    // Define GSAP timeline with ScrollTrigger
    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: gridWrap.current,
        start: "top bottom+=5%",
        end: "bottom top-=5%",
        scrub: true,
        // markers: true // Optional: for debugging
      },
    });

    grid.current.style.perspective = "1000px";
    grid.current.style.width = "calc(1 / 0.65 * 100%)";
    grid.current.style.height = "calc(1 / 0.5 * 100%)";

    timeline
      .set(gridWrap.current, {
        rotationY: 25,
      })
      .set(gridItems, {
        z: () => gsap.utils.random(-1600, 200),
      })
      .fromTo(
        gridItems,
        { xPercent: () => gsap.utils.random(-1000, -500) },
        { xPercent: () => gsap.utils.random(500, 1000) },
        0,
      )
      .fromTo(gridItemsInner, { scale: 2 }, { scale: 0.5 }, 0);
  };

  //useLenis();

  useEffect(() => {
    //make sure we run this function only once
    if (!hasRun.current && grid.current) {
      applyAnimation();
      window.scrollTo({ top: 0 });
      hasRun.current = true;
    }
  }, [grid]);

  return (
    <div className="z-10 w-full overflow-hidden bg-stone-200 dark:bg-stone-900">
      <section className="relative mb-[20vh]">
        <div
          ref={grid}
          className="grid h-[calc(1/1*100%)] w-[calc(1/1*100%)] place-items-center p-8"
          style={{ perspective: "1000px" }}
        >
          <div
            style={{ transformStyle: "preserve-3d" }}
            ref={gridWrap}
            className="grid h-full w-10/12 grid-cols-6 gap-[1.5vw]"
          >
            {Array(5)
              .fill(images)
              .flat()
              .map((src, index) => (
                <div
                  key={index}
                  className="grid__item relative grid aspect-[1.5] h-[450px] w-10/12 place-items-center overflow-hidden rounded-md ring-1"
                >
                  <Image
                    quality={40}
                    src={src}
                    fill={true}
                    className="grid__item-inner relative object-fill object-center py-7 px-3"
                    alt="image"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwipeGrid;