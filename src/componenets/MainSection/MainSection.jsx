import React, { use } from 'react';

const MainSection = ({fetchPromise}) => {
    const data=use(fetchPromise);
    console.log(data);
    return (
        <div className='max-w-[1200px] mx-auto mt-20 grid grid-cols-3 gap-4 justify-center items-center '>
            {
                
                data.map((item)=>{
                    return (
                        // <div className='w-90 h-70 bg-gray-300 flex flex-col gap-2 p-4'>
                        //     <img src={item.userImg} alt="userIMG"
                        //     className='w-24 h-24 rounded-full' />
                        //     <h1 className='text-xl font-semibold'>{item.requestedBy}</h1>
                        //     <p className='text-2xl font-bold'>{item.
                        //     subject}</p>
                        //     <div className='flex gap-4'>
                        //         <button>{item.
                        //         priority}</button>
                        //         <button>{item.
                        //         status}</button>
                        //     </div>
                        //     <p className='text-sm text-black font-semibold'>{item.
                        //     description}</p>


                        // </div>
                        <div className='w-full max-w-sm bg-base-100 border border-base-200 shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col gap-4'>
  
  {/* Top Section: User Info */}
  <div className='flex items-center gap-4'>
    <div className="avatar">
      <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={item.userImg} alt="user" />
      </div>
    </div>
    <div>
      <h1 className='text-lg font-bold text-base-content'>{item.requestedBy}</h1>
      <p className='text-xs text-base-content/60 uppercase tracking-wider'>Requester</p>
    </div>
  </div>

  {/* Middle Section: Subject & Description */}
  <div className='space-y-2'>
    <p className='text-xl font-extrabold text-primary leading-tight'>
      {item.subject}
    </p>
    <p className='text-sm text-base-content/70 line-clamp-2'>
      {item.description}
    </p>
  </div>

  {/* Bottom Section: Status Badges */}
  <div className='flex gap-2 mt-2'>
    {/* Priority Badge */}
    <div className={`badge badge-outline font-semibold ${item.priority === 'High' ? 'badge-error' : 'badge-info'}`}>
      {item.priority}
    </div>
    
    {/* Status Badge */}
    <div className="badge badge-primary font-semibold">
      {item.status}
    </div>
  </div>

  {/* Action Button */}
  <div className="card-actions justify-end mt-2">
    <button className="btn btn-primary btn-sm btn-outline">View Details</button>
  </div>
</div>
                    )
                })
             }
        </div>
    );
};

export default MainSection;