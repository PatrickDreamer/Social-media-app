import React from 'react'
import "./posts.scss"
import Post from "../post/Post"

const Posts = () => {
  //Temporary

  const posts = [
    {
      id:1,
      name:'John Doe',
      userId:1,
      profilePic: "https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863",
      desc: "I believe I will be succeed",
      img:"https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863"
  },
  {
    id: 2,
    name:'John Doe',
    userId: 2,
    profilePic: "https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863",
    desc: "I believe I will be succeed",
    img:"https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863"
},

  ];

  return (
    <div className='posts'>
      {posts.map(post=>(
        <div className='post'>
          <Post post={post} key= {post.name}/>
          </div>
      ))}
    </div>
  )
}

export default Posts