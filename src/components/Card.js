import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';
export default function Card(p) {
    let course = p.course;
    let like=p.Like;
    let setLike=p.setLike;

  let handel=()=>{
    if(like.includes(course.id)){
       setLike((prev)=>prev.filter((cid)=>(cid!==course.id)));
       toast.warning('Like Removed');
    }else{
        if(like.length===0){
          setLike([course.id]);
        }else{
           setLike((prev)=>[...prev,course.id]);
        }
        toast.success('Thanks for Like');
    }
  }
    return (
        <>
            <div className='w-[300px] m-2 bg-bgDark bg-opacity-80'>
                <div className='w-[300px] relative'>
                    <img src={course.image.url} alt={course.image.alt} />
                    <div className='flex  flex-col justify-center absolute right-2 bottom-[-12px] rounded-full bg-white w-[40px] h-[40px]'>
                      <button type='button' onClick={handel}>{
                        like.includes(course.id)? 
                        <FcLike fontSize="1.75rem" className='ml-[6px]'/>:
                        <FcLikePlaceholder fontSize="1.75rem" className='ml-[6px]' />}
                        </button>
                    </div>
                </div>

                <div className='m-2 text-white'>
                    <p>{course.title}</p>
                    <p>{course.description.slice(0, 100) + '...'}</p>
                </div>
            </div>
        </>
    )
}
