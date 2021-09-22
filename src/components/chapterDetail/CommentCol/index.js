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

export default function CommentCol({data}) {
  var splitComment = modifyArray()
  var newCommentArray = splitComment(data, 4)
  const [currentPage, setCurrentPage] = useState(0)
  const onClickPaginate = (index) => (e) => {
    setCurrentPage(index)
  }
  let currentCommentPage = newCommentArray[currentPage]

  return (
    <div className={styles.root}
    >
      <ul className={styles.comment_box}>
        {
          (currentCommentPage || []).map((comment) => {
            return (
              <CommentItem data={comment} />
            )
          })
        }
        <Paginate
          currentPage={currentPage}
          number={newCommentArray.length}
          onClick={onClickPaginate}
        />
      </ul>
    </div>
  );
}

function CommentItem({data}) {
  const [replyIsShow, setReplyIsShow] = useState(false)
  const onclickReply = function onclickReply() {
    setReplyIsShow(prev => !prev)
  }
  
  var splitReply = modifyArray()
  var newReplyArray = splitReply(data.reply, 4)
  const [currentPage, setCurrentPage] = useState(0)
  const onClickPaginate = (index) => (e) => {
    setCurrentPage(index)
  }
  let currentReplyPage = newReplyArray[currentPage]
  return (
    <li className={styles.comment_box_item}>
      <CommentDetail comment={data} />
      <button
        className={styles.comment_reply_button}
        onClick={onclickReply}
      >
        Reply
      </button>
      <div
        style={{display: replyIsShow ? 'block' : 'none'}}
      >
        <ul
          className={styles.reply_list}
        >
          {
            (currentReplyPage || []).map((reply) => {
              return (
                <li className={styles.reply_box_item}>
                  <div className={styles.reply_start_icon}></div>
                  <CommentDetail comment={reply} />
                </li>
              )
            })
          }
        </ul>
        <Paginate
          currentPage={currentPage}
          number={newReplyArray.length}
          onClick={onClickPaginate}
        />
      </div>
    </li>
  );
}

function CommentDetail({comment}) {
  
  return (
    <div className={styles.comment_detail}
    >
      <span className={styles.user}>{comment.username}</span>
      <span className={styles.comment}>{comment.comment}</span>
      <div className={styles.date_and_action}>
        <span className={styles.date}>{comment.date}</span>
        <span className={styles.bar}></span>
        <button className={styles.action}>{'Report'}</button>
      </div>
    </div>
  );
}

function Paginate({currentPage=0, number=10, onClick=()=>{}}) {
  let listItem = []
  for (let i = 0; i < number; i++) {
    listItem.push(
      <li
        className={styles.paginate_item}
        style={{
          background: currentPage==i?'#00dc64':'transparent',
          color: currentPage==i?'white':'black',
        }}
        onClick={onClick(i)}
      >
        <span className={styles.paginate_text}>{i+1}</span>
      </li>
    )
  }
  return (
    <div className={styles.paginate_root}>
      <ul className={styles.paginate_container}>
        {listItem}
      </ul>
    </div>
  );
}

function modifyArray() {
  var newArray = [];
  return function spliceArrayTo(array, number) {
    var mutableArray = [...array]
    while (mutableArray.length > 0) {
      newArray.push(mutableArray.splice(0, number))
      return spliceArrayTo(mutableArray, number)
    }
    return newArray
  }

}
