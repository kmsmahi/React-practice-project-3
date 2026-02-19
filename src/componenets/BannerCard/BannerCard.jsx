import React from 'react';

const BannerCard = ({toggle,setToggle}) => {
    return (
        <>
        <div className='max-w-[1200px] mx-auto mt-20 flex gap-8 justify-center items-center'>
      <div className='w-70 h-50 bg-gray-500 flex flex-col gap-2 justify-center items-center '>
        <h1 className='text-3xl font-bold text-white'>Pending</h1>
      <p className='text-xl font-semibold text-white'>0</p>
      </div>
      <div className='w-70 h-50 bg-purple-500 flex flex-col gap-2 justify-center items-center '>
        <h1 className='text-3xl font-bold text-white'>Submitted</h1>
      <p className='text-xl font-semibold text-white'>0</p>
      </div>
      <div className='w-70 h-50 bg-teal-500 flex flex-col gap-2 justify-center items-center '>
        <h1 className='text-3xl font-bold text-white'>Reviewed</h1>
      <p className='text-xl font-semibold text-white'>0</p>
      </div>
    </div>
    <div className="max-w-[1200px] mx-auto flex gap-2 justify-center items-center mt-8 bg-base-200/50 p-1.5 rounded-xl w-fit">
  {/* Active State */}
  <button onClick={()=>setToggle('all')} 
  className={`btn btn-sm md:btn-md px-6 rounded-lg ${toggle === 'all' ? 'btn-primary' : 'btn-ghost'}`}>
    All
  </button>
  
  {/* Inactive States */}
  <button onClick={()=>setToggle('pending')} 
  className={`btn btn-sm md:btn-md px-6 rounded-lg ${toggle === 'pending' ? 'btn-primary' : 'btn-ghost'}`}>
    Pending
  </button>
  <button onClick={()=>setToggle('submitted')} 
  className={`btn btn-sm md:btn-md px-6 rounded-lg ${toggle === 'submitted' ? 'btn-primary' : 'btn-ghost'}`}>
    Submitted
  </button>
  <button onClick={()=>setToggle('reviewed')}
  className={`btn btn-sm md:btn-md px-6 rounded-lg ${toggle === 'reviewed' ? 'btn-primary' : 'btn-ghost'}`}>
    Reviewed
  </button>
</div>
        </>
    );
};

export default BannerCard;