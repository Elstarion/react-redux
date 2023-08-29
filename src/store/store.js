import { createStore } from "redux";

const initialState = {
  posts: [
    {
      author: "Macaulay Culkin",
      authorPhoto:
        "https://pbs.twimg.com/profile_images/968572702788239360/KL-zulbA_400x400.jpg",
      authorNickname: "@IncredibleCulk",
      date: "27 Aug, 2020",
      postText: "Hey guys, wanna feel old? I'm 40. You're welcome.",
      postPicture:
        "https://s.yimg.com/ny/api/res/1.2/FrbDuj5OseG8Pov_yrCC0A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/us_magazine_896/d235fbd70e26f7e6d702815b9cbf40ae",
      likes: "3M",
      comments: "131K",
      shares: "451.5K",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

export default createStore(reducer);
