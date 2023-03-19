import React, { useState } from 'react'
import Card from './Card';

export default function Cards(p) {
  const [data]=useState(p.course);
  let cateogry=p.cateogry;
     let getCourse=()=>{
        if(cateogry==='All'){
              let Courses=[];
              Object.values(data).forEach((array)=>{
                array.forEach((Element)=>{
                   Courses.push(Element);
                })
              });
              return Courses;
        }else{
          return data[cateogry];

        }
     }
     const [isLike,setLike]=useState([]);
  return (
   <>
    {
      getCourse().map((course)=>{
        return (
           <>
            <Card course={course} key={course.id} Like={isLike} setLike={setLike}></Card>
           </>
        )
      })
    }
   </>
  )
}
