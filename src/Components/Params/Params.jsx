import { useParams } from 'react-router-dom'
function Params() {
  const {id} = useParams() //This is a router function not custom 
  return (
    <div className='bg-grey-600 text-white  text-3xl p-4'>Params : {id}</div>
  )
}

export default Params
