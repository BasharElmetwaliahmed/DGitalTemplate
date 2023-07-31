
function SpecialHeader({color,parts,text,center}) {
  const bool=(parts==='right')
  return (

    <div className={`py-4  flex items-center ${center?'justify-center mx-auto':''}`}>
      { !bool &&
      <div className='left-side mr-10 flex'>
        <span className={`w-[40px] h-[2px] bg-${color} block mr-1`}></span>
        <span className={`w-[20px] h-[2px] bg-${color} block`}></span>
      </div>
        }
        <h2 className={`text-${color} text-lg font-semibold`} >{text}</h2>

              <div className='left-side ml-10 flex'>
                
        <span className={`w-[20px] h-[2px] bg-${color} block mr-1`}></span>
        <span className={`w-[40px] h-[2px] bg-${color} block`}></span>
      </div>
    </div>
  )
}

export default SpecialHeader