export  const chapterDetail = {
  id: 1,
  imgUrl: "./images/theFirstNightWithTheDuke.png",
  title: "The First Night With the Duke",
  author: "MSG/Teava",
  genre: "drama",
  info: "A handsome, selfish noble falls for a beautiful, kind commoner -- at least, that’s how the story’s supposed to go. When an average college student wakes up as Ripley, an extra in her favorite romance novel, she resolves to enjoy the luxuries of her character’s status while watching the novel's plot unfold from the sidelines. However, her plans are soon derailed when she finds herself in bed with no other than Duke Zeronis, the novel’s hero! Dodging the villainess’ schemes, the Duke’s advances, and her own feelings, can Ripley keep the story on track and survive beyond the first night?",
  like: 4000000,
  sub: 890000,
  rate: 9.67,
  weekday: ["mon"],
  comments: [
    generateComment('UserComment 1','UserReply 1','UserReply 2','UserReply 3','UserReply 4','UserReply 5','UserReply 6','UserReply 7','UserReply 8','UserReply 9','UserReply 10',),
    generateComment('UserComment 2','UserReply 1','UserReply 2','UserReply 3','UserReply 4','UserReply 5','UserReply 6','UserReply 7','UserReply 8','UserReply 9','UserReply 10',),
    generateComment('UserComment 3','UserReply 1','UserReply 2','UserReply 3','UserReply 4','UserReply 5','UserReply 6','UserReply 7','UserReply 8','UserReply 9','UserReply 10',),
    generateComment('UserComment 4','UserReply 1','UserReply 2','UserReply 3','UserReply 4','UserReply 5','UserReply 6','UserReply 7','UserReply 8','UserReply 9','UserReply 10',),
    generateComment('UserComment 5','UserReply 1','UserReply 2','UserReply 3','UserReply 4','UserReply 5','UserReply 6','UserReply 7','UserReply 8','UserReply 9','UserReply 10',),
    generateComment('UserComment 6','UserReply 1','UserReply 2','UserReply 3','UserReply 4','UserReply 5','UserReply 6','UserReply 7','UserReply 8','UserReply 9','UserReply 10',),
    generateComment('UserComment 7','UserReply 1','UserReply 2','UserReply 3','UserReply 4','UserReply 5','UserReply 6','UserReply 7','UserReply 8','UserReply 9','UserReply 10',),
    generateComment('UserComment 8','UserReply 1','UserReply 2','UserReply 3','UserReply 4','UserReply 5','UserReply 6','UserReply 7','UserReply 8','UserReply 9','UserReply 10',),
    generateComment('UserComment 9','UserReply 1','UserReply 2','UserReply 3','UserReply 4','UserReply 5','UserReply 6','UserReply 7','UserReply 8','UserReply 9','UserReply 10',),
    generateComment('UserComment 10','UserReply 1','UserReply 2','UserReply 3','UserReply 4','UserReply 5','UserReply 6','UserReply 7','UserReply 8','UserReply 9','UserReply 10',),
  ]
}
function generateReply(user) {
  return {
    username: `${user}`,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet felis nulla, eu laoreet eros gravida hendrerit. Integer eget sodales velit. Aenean bibendum cursus massa eu convallis. ',
    date: '2021-09-22',
  }
}

function generateComment(...user) {
  let [userComment, ...userReplys] = [...user]
  return {
    username: `${userComment}`,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet felis nulla, eu laoreet eros gravida hendrerit. Integer eget sodales velit. Aenean bibendum cursus massa eu convallis. ',
    date: '2021-09-22',
    reply: userReplys.map((user) => {return generateReply(user)})
  }
}
