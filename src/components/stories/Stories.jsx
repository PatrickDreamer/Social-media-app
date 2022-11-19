import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import "./stories.scss"


const Stories = () => {
    const {currentUser} = useContext(AuthContext);
    const stories = [
        {
            id:1,
            name:'John Doe',
            img:"https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863"
        },
        {
            id:2,
            name:'John Doe',
            img:"https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863"
        },
        {
            id:3,
            name:'John Doe',
            img:"https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863"
        },
        {
            id:4,
            name:'John Doe',
            img:"https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863"
        },
        {
            id:5,
            name:'John Doe',
            img:"https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863"
        },
        {
            id:5,
            name:'John Doe',
            img:"https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863"
        }
    ];

  return (
    <div className='stories'>
        <div className='story'>
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
        </div>
        {stories.map(story=>(
            <div className='story'>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
                </div>
        ))}
    </div>
  )
}

export default Stories