
import React from 'react';
import { connect } from'react-redux'

const PostData = ({ titleData }) => {
    let tdata = titleData.map(x => (
        <div key={x.title}>
            <h3 className="title-blog"  >{x.title}</h3>
            <p className="content-blog" >{x.content}</p>
        </div>
    ))
    console.log(titleData);
    return (
        <div>

<div className="main-blog" >
{tdata}
</div>

            

           
        </div>
    )

}

const data =(store)=>{
    return {titleData: store.peoplevalues.titleData}
}

export const PostdisplayHoc=connect(data)(PostData)
   



