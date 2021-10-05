import Image from "next/image";
import a from "../img/a.jpg";
import b from "../img/b.jpeg";
import c from "../img/c.jpeg";
import { gsap } from "gsap";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: -1,
      delay: 1,
      repeatDelay: 1,
    });

    timeline
      .to(".img1", { y: "-100%", opacity: 0, duration: 1 })
      .to(".img2", { y: "-100%", opacity: 1, duration: 1 }, "<")
      .to(".img3", { y: "-100%", opacity: 0, duration: 1 }, "<")
      .to(".img1, .img2, .img3", { y: "-100%", duration: 1 }, ">")
      .to(".img1", { y: "-200%", opacity: 0, duration: 1 }, ">")
      .to(".img2", { y: "-200%", opacity: 0, duration: 1 }, "<")
      .to(".img3", { y: "-200%", opacity: 1, duration: 1 }, "<")
      .to(".img1, .img2, .img3", { y: "-200%", duration: 1 }, ">");
    timeline.set(".img1", { y: "100%" });
    timeline
      .to(".img2, .img3", { y: "-300%", opacity: 0, duration: 1 }, ">")
      .to(".img1", { y: "0%", opacity: 1, duration: 1 }, "<")
  }, []);
  return (
    <div style={{ height: "400px", overflow: "hidden" }} className="images">
      <div className="img">
        <div className="img1">
          <Image
            src={a}
            alt=""
            title=""
            width="400px"
            height="400px"
          />
        </div>
        <div className="img2" style={{opacity: 0}}>
          <Image
            src={b}
            alt=""
            title=""
            width="400px"
            height="400px"
          />
        </div>
        <div className="img3">
          <Image
            src={c}
            alt=""
            title=""
            width="400px"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
