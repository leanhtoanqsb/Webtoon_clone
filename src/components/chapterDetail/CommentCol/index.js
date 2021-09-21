import React, { useState } from 'react';
import styles from './index.module.css';

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

export default function CommentCol() {
    
  return (
    <div className={styles.root}
    >
      <ul className={styles.comment_box}>
        <CommentItem />
        <CommentItem />
        <Paginate />
      </ul>
    </div>
  );
}

function CommentItem() {
  const [replyIsShow, setReplyIsShow] = useState(false)
  const onclickReply = function onclickReply() {
    setReplyIsShow(prev => !prev)
  }
  
  return (
    <li className={styles.comment_box_item}>
      <CommentDetail />
      <button
        className={styles.comment_reply_button}
        onClick={onclickReply}
      >
        Reply
      </button>
      <ul
        className={styles.reply_list}
        style={{display: replyIsShow ? 'block' : 'none'}}
      >
        <li className={styles.reply_box_item}>
          <div className={styles.reply_start_icon}></div>
          <CommentDetail />
        </li>
        <li className={styles.reply_box_item}>
          <div className={styles.reply_start_icon}></div>
          <CommentDetail />
        </li>
        <li className={styles.reply_box_item}>
          <div className={styles.reply_start_icon}></div>
          <CommentDetail />
        </li>
      </ul>
    </li>
  );
}

function CommentDetail() {
  
  return (
    <div className={styles.comment_detail}
    >
      <span className={styles.user}>{'Username'}</span>
      <span className={styles.comment}>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet felis nulla, eu laoreet eros gravida hendrerit. Integer eget sodales velit. Aenean bibendum cursus massa eu convallis. '
        }
      </span>
      <div className={styles.date_and_action}>
        <span className={styles.date}>{'Date'}</span>
        <span className={styles.bar}></span>
        <button className={styles.action}>{'Report'}</button>
      </div>
    </div>
  );
}

function Paginate({number=10, onClick}) {
  let listItem = []
  for (let i = 1; i <= number; i++) {
    listItem.push(
      <li className={styles.paginate_item}>
        <span className={styles.paginate_text}>{i}</span>
      </li>
    )
  }
  console.log(listItem)
  return (
    <div className={styles.paginate_root}>
      <ul className={styles.paginate_container}>
        {listItem}
      </ul>
    </div>
  );
}
