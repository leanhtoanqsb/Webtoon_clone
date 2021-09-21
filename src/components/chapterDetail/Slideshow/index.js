import React, { useState } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const slideshowStyles = function slideshowStyles() {
  return {
    root: {
      width: '900px',
      height: '130px',
    },
    item: {
      width: '100px',
      height: '130px',
    }
  }
}

export default function Slideshow({data, component}) {
  const numberOfEpisode = 20; // temporary
  let { root: rootStyle } = slideshowStyles()
  const [position, setPosition] = useState(0)
  const setNextPosition = function setNextPosition() {
    setPosition((prev) => {
      return prev < Math.floor(numberOfEpisode/9)
      ? prev + 1
      : Math.floor(numberOfEpisode/9)
    })
  }
  const setPrevPosition = function setPrevPosition() {
    setPosition((prev) => prev > 0 ? prev - 1 : 0)
  }

  let listItem = [];
  for (let i = 0; i < numberOfEpisode; i++) {
    listItem.push(<ItemComponent />)
  }
  console.log(position,Math.floor(numberOfEpisode/9) - 1)

  return (
    <div className={styles.root}
    >
      <button
        className={`${styles.button} ${styles.button_prev}`}
        onClick={setPrevPosition}
        disabled={position == 0 ? true : false}
      >
        <FontAwesomeIcon icon="chevron-left" size='2x' />
      </button>
      <div className={styles.slideshow_root}
        style={rootStyle}
      >
        <div className={styles.viewport}>
          <ul
            className={styles.film}
             /* or
            style={{ transform: `translate3d(${-index * 1140}px,0,0)` }}
            */
            style={{
              left: `${-position * 900}px`,
            }}
          >
            {listItem}
          </ul>
        </div>
      </div>
      <button
        className={`${styles.button} ${styles.button_next}`}
        onClick={setNextPosition}
        disabled={position == Math.floor(numberOfEpisode/9) ? true : false}
      >
        <FontAwesomeIcon icon="chevron-right" size='2x' />
      </button>
    </div>
  );
}

function ItemComponent({data = {}}) {
  let { item: itemStyle } = slideshowStyles()
  return (
    <li className={styles.item}
      style={itemStyle}
    >
      <div className={styles.item_image}
        style={{
          width: itemStyle.width,
          height: itemStyle.width,
          padding: '1rem',
        }}
      >
        { /* delete conditional if have data */
          data.image
          ? <img src={data.image} alt='image' />
          : <div
              style={{
                width: '100%',
                height: '100%',
                background: 'black',
              }}
          />
        }
      </div>
      <p className={styles.item_text}>
        {data.episode || 'Episode 1111111'}
      </p>
    </li>
  )
}
