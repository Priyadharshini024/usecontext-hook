import { useContext } from 'react'
import { AppContext } from './App'


const GetName = () => {

const{setName} = useContext(AppContext); 
  return (
    <>
    <input type='text' placeholder='Enter Name..'
    onChange={e=> setName(e.target.value)}/>
    </>
  )
}

export default GetName