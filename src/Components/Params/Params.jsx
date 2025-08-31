import { useParams } from 'react-router-dom'
function Params() {
  const {id} = useParams() //This is a router function not custom 
  return (
    <div className='bg-white text-black '>Params : {id}</div>
  )
}

export default Params
