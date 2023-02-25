import React,{useState, useEffect} from 'react'
import isEmpty from 'validator/lib/isEmpty';
import { toast } from 'react-toastify';
// import { createProduct } from '../api/product';
import {uploadBanner} from '../api/banner'
const UploadBanner = () => {

    const [images, setImages] = useState("");
      const handleProductSubmit = (e) => {
        e.preventDefault();
        if (images.length==0){
          toast.warn("Banner is required")
        } 
        else {
          const formData = new FormData();
          for(let i=0; i<images.length;i++){
            formData.append('files', images[i])
            console.log(images[i]);
          }
          uploadBanner(formData)
          .then((response)=>{
            toast.success("Uploaded Successfully")
            images = ""
          })
          .catch(err =>{
            toast.error("Upload Failed")
          })    
        }
      }  
      return (
   <div className='text-center'>
  <label for="formFileLg" className="form-label m-3 mb-1 fw-bold fs-3">Banner Images</label>
    <input className="form-control form-control-lg m-3" id="formFileLg" onChange={(e)=> setImages(e.target.files)} type="file" multiple />
    <button type="button" className="btn btn-outline-success btn-lg mt-5" onClick={handleProductSubmit}>Submit</button>
   </div>
  )
}

export default UploadBanner;