import React, { useState, useEffect, useRef } from "react";
import styles from "./Mainbanner.module.css";

function Mainbanner() {
  const images = [
    { id: 1, src: "./images/banner-1.png" },
    { id: 2, src: "./images/banner-2.png" },
    { id: 3, src: "./images/banner-3.png" },
    { id: 4, src: "./images/banner-4.png" },
    { id: 5, src: "./images/banner-5.png" },
  ];
  const delay = 3000;

  const [index, setIndex] = useState([1, 0]);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => {
        return [
          prevIndex[0] === images.length ? 1 : prevIndex[0] + 1,
          prevIndex[0],
        ];
      });
    }, delay);
  }, [index, images.length]);
  // console.log(index)
  const handleClass = (imageId) => {
    if (imageId === index[0]) {
      return styles.show;
    }
    if (imageId === index[1]) {
      return styles.hide;
    }
    return "";
  };
  const handleStyle = (imageId) => {
    if (imageId === index[0]) {
      return { opacity: 1 };
    }
    return { opacity: 0 };
  };
  /*  */
  const mainBannerSlideshow = images.map((image) => {
    return (
      <div
        key={image.id}
        className={`${styles.banner_big_inner} ${handleClass(image.id)}`}
        style={handleStyle(image.id)}
      >
        <a href="/#">
          <img src={image.src} alt=""></img>
        </a>
      </div>
    );
  });
  /*  */
  let num = [];
  for (let i = 0; i < images.length; i++) {
    num.push(
      <a
        href="/#"
        key={images[i].id}
        style={{
          width: "15px",
          height: "15px",
          backgroundColor: ` ${i + 1 === index[0] ? "black" : "white"}`,
          borderRadius: "50%",
          display: "inline-block",
          margin: "5px",
        }}
        onClick={(e) => {
          // clearTimeout(timeoutRef.current);
          e.preventDefault();
          setIndex((prevIndex) => {
            return [i + 1, prevIndex[0]];
          });
        }}
      >
        <span style={{ display: "none" }}>{i}</span>
      </a>
    );
  }
  // console.log(index);
  return (
    <div
      className={styles.main_banner_wrap}
      style={{
        background:
          "url(https://webtoons-static.pstatic.net/image/pc/home_bg001.jpg) no-repeat 50% 0",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.main_banner_inner}>
        <div className={styles.main_banner_big}>{mainBannerSlideshow}</div>
        <div className={styles.main_banner_small1}>
          <a href="/#">
            <img src="./images/banner-small-1.png" alt="" />
          </a>
        </div>
        <div className={styles.main_banner_small2}>
          <a href="/#">
            <img src="./images/banner-small-2.png" alt="" />
          </a>
        </div>
        <div className={styles.main_banner_paging}>{num}</div>
      </div>
    </div>
  );
}

export default Mainbanner;
