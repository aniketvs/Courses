import React from 'react'

export default function Filter(p) {
    let data=p.data;
    let category=p.cateogry;
    let setCateogry=p.setCateogry;

    const clickHandler=(title)=>{
      setCateogry(title);
    }
    
  return (
    <div className='flex flex-row space-x-2 justify-center py-4'>
        {
          data.map((item)=>{
            return (
              <div className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === item.title ? 
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}
            `}>
                 <button key={item.id} onClick={()=>{clickHandler(item.title)}}>{item.title}</button>
              </div>
              )
          })
          
        }
    </div>
  )
}
