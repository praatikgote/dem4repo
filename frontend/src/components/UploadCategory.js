import React,{useState, useEffect} from 'react'
import isEmpty from 'validator/lib/isEmpty';
// import { createProduct } from '../api/product';
import {uploadCategory} from '../api/category'
import { toast } from 'react-toastify';

const UploadCategory = () => {

    const [image, setImage] = useState("");
    const [cat_name, setCategory] = useState("")
      const handleProductSubmit = (e) => {
        e.preventDefault();
        if (!image && !cat_name){
          console.log("Category image is required")
        } 
        else {
          const formData = new FormData();
            formData.append('cat_name', cat_name)
            formData.append('file', image)
          uploadCategory(formData)
          .then((response)=>{
            toast.success("Uploaded Successfully")
            image = ""
            cat_name = ""
          })
          .catch(err =>{
            toast.error("Upload Failed")
          })    
        }
      }  
      return (
   <div className='p-5'>
   <input onChange={(e)=> setCategory(e.target.value)} className="form-control mb-5" type="text" placeholder='Enter Category Name' value={cat_name}/>
    <input onChange={(e)=> setImage(e.target.files[0])} className="form-control form-control-lg" type="file" />
    <button type="button" className="btn btn-outline-success btn-lg mt-5" onClick={handleProductSubmit}>Submit</button>
   </div>
  )
}

export default UploadCategory