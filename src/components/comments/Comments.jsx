import React from "react";
import "./comments.scss"

const Comments = () =>{
    //temporary
    const comments = [
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

    return(
        <div className="comments">
         {comments.map(comment => (
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>

            </div>

            ))}
        </div>
    )
}

export default Comments;