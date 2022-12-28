import React , {useEffect , useState} from 'react'
import axios from 'axios'

function Showblog() {
    const [blogdata, setblogdata] = useState([])
   

    async function getblog () {
        
        await axios.get( 'http://localhost:3001/getblogs')
        .then( (res => {
            console.log(res.data.blogs)
            setblogdata(res.data.blogs)
        })).catch( err => {
            console.log(err)
        } )
     
    }
    useEffect(() => {
      getblog()
    },[])


  return (
    <>
    
    {

blogdata.map( (item, index) => {
            return (
            <> 
            <div className='mmm' key={index} >
                    <h1 className="card">{item.userid}</h1>
                    <h1 className="card">{item.blogtitle}</h1>
                    <h1 className="card">{item.blogbody}</h1>
                    
                </div>
            </>
            )

})

}
 
  
  

  </>
  )

    }
export default Showblog