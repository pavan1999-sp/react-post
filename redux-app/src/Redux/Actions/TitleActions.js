

export const postupdate=(title,content)=>{
  return {
     type: "ADD_BLOG",
     data: {title:title,content:content}
  }
   
}