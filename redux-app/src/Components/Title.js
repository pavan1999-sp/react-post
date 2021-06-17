
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Title= ({postdata})=>{
 

    let [title,setTitle] =useState()
    let [content,setContent]=useState()

  return(
<div>
<table>
            <tr>
                <td>title</td>
                <td><input type="text"  required onChange={(e)=>setTitle(e.target.value)} 
                value={title}/></td>
            </tr>
            <tr>
                <td>content</td> 
                <td><textarea rows="4" cols="50" onChange={(e)=>setContent(e.target.value)}
                value={content}></textarea> </td>
            </tr>
         <tr>
            <Link to="/PostData"  colspan="2">
                <button className="btn btn-danger"  style={{ marginLeft:"50px"}}
                onClick={()=>postdata(title,content)}>PostData</button>
                </Link>
                </tr>
        </table>
    

</div>  
  )
   
}

export default Title