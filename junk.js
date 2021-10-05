import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react";

import "./goals.css";
const imageFirst = "/images/ourgoals/Rectangle116.png";
const imageSecond = "/images/ourgoals/Rectangle117.png";

const Goals = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".goals__section",
        start: "top 50%",
      },
    });

    timeline
      .fromTo(
        ".goals__svg__left",
        {
          x: "-100%",
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        ".goals__info--absolute",
        {
          x: 200,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 1 }
      )
      .add("start")
      .fromTo(
        ".goal__image--first",
        {
          y: "100%",
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 1 },
        "start"
      )
      .fromTo(
        ".goal__image--second",
        {
          y: "100%",
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 1 },
        "start"
      );
  }, []);

  return (
    <section className="goals__section">
      <div className="goals__section__container">
        <div className="goals__info">
          <svg
            className="goals__svg__left"
            width="229"
            height="247"
            viewBox="0 0 223 247"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M218 201.04V242H5V5H218V43.8989"
              stroke="#24D265"
              stroke-width="10"
            />
          </svg>

          <p className="font-inter goals__info--absolute">
            Our goal is to provide you with a safe space where you can live
            comfotably without having to worry about disasters or other any
            mishappenings
          </p>
        </div>

        <div className="goal__image--first">
          <div>
            <Image src={imageFirst} layout="fill" objectFit="cover" />
          </div>
          <p className="font-inter">Private Terrace</p>
        </div>

        <div className="goal__image--second">
          <div>
            <Image src={imageSecond} layout="fill" objectFit="cover" />
          </div>
          <p className="font-inter">Private Parking</p>
        </div>
      </div>
    </section>
  );
};

export default Goals;
