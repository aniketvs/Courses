import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner  from './components/Spinner'
import {filterData,apiUrl} from './data'
export default function App() {
  const [isloading,setIsloading]=useState(false);
  
   const [data,setData]=useState([]);
 const [cateogry,setCateogry]=useState(filterData[0].title);

  useEffect(()=>{
   const result=async()=>{
    setIsloading(true);
    let result=await fetch(apiUrl);
    result=await result.json();
    setData(result.data);
  setIsloading(false);
   }
   result();

  },[]);
  
  return (
    <>
     <div className="min-h-screen flex flex-col bg-bgDark2">
      <Nav/>
      <div className="bg-bgDark2">
      <div>
        <Filter data={filterData} cateogry={cateogry} setCateogry={setCateogry}/>
      </div>
      <div className='flex flex-wrap w-11/12 max-w-[1200px] justify-center mx-auto min-h-[50vh]'>
        {
          isloading?<Spinner/>
          :
          <Cards course={data} cateogry={cateogry} />
        }
      </div>
      </div>
      </div>
    </>
  )
}
