import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
    const {posts, loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[550px] py-8 flex flex-col gap-y-7 mt-8 mb-8'>
        {
            loading ? (<Spinner/>) : (
                posts.length === 0 ? (<div>
                    <p>No Post Found</p>
                    </div>
                    ) : 
                    (posts.map( (post) => (
                        <div key={post.id}>
        <p className='font-bold text-xl'>{post.title}</p>
        <p className='text-[13px]'>
            By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
        </p>
        <p className='text-[11px]'>Posted on {post.date}</p>
        <p className='text-[14px] mt-[8px]'>{post.content}</p>
        <div className='flex gap-3'>
            {post.tags.map( (tag,index) => {
                return <span className='text-blue-500 underline font-bold text-[9px]' key={index}>{` #${tag}`}</span>
            })}
        </div>
    </div>
                    )))
            )
        }
    </div>
  )
}

export default Blogs