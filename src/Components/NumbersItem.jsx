
function NumbersItem({icon,title,number}) {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center " >
        <i className={`${icon} text-secondary text-5xl mb-2`}></i>
        <h5 className="text-lg text-white text-3xl font-bold">{number}</h5>
        <h6 className="text-white">{title}</h6>
    </div>
  )
}

export default NumbersItem