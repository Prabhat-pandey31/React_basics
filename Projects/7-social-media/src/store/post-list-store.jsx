import {createContext} from "react";

const DEFAULT_CONTEXT = {
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
};

 export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer =(currPostList,action) =>{
  return currPostList;
}

const PostListProvider =({children})=>{

  const [postList,dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = ()=>{

  }

  const deletePost = ()=>{

  }

  return (
  <PostList.Provider value={
   { postList,
    addPost,
    deletePost}
  }>
     {children}
  </PostList.Provider>
  );
}

const DEFAULT_POST_LIST = [{
  id:"1",
  title:"Going to mathura",
  body:"Hi friends i am going to mathura for meeting my family",
  reactions:2,
  userId:"user-7",
  tags:['vacation','mumbai','enjoying']

}]

[{
  id:"2",
  title:"Pass ho gya bhai",
  body:"bachodi k baad bhi",
  reactions:15,
  userId:"user-34",
  tags:['graduating','cool','enjoying']

}]



export default PostListProvider;
