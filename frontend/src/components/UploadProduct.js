import React,{useState, useEffect} from 'react'
import isEmpty from 'validator/lib/isEmpty';
import { createProduct } from '../api/product';
import { MultiSelect } from "react-multi-select-component";
import { toast } from 'react-toastify';
import { readCategories } from '../api/category';
import { readTag } from '../api/tag';
const options = [
];
const UploadProduct = () => {

    const [zip, setZip] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [selected, setSelected] = useState([]);
    const [categories, setCategories] = useState('');
  const loadCategory=async()=>{
    await readCategories()
    .then((response)=>{
      console.log(response.data)
      setCategories(response.data.category)
    })
    .catch((err)=>{
      toast.error("Error while loading category")
    })
  }
  useEffect(()=>
  {loadCategory()
    loadTag()
  },[]);

  const loadTag=async()=>{
    await readTag()
    .then((response)=>{
      console.log(response.data)
      response.data.tag.map(tag=> options.push({label: tag.tag, value: tag.tag}))
      
    })
    .catch((err)=>{
      toast.error("Error while loading Tags")
    })
  };
  console.log(options)

    const [productData, setProductData] = useState({
        category: 'Super Hero',
        name: '',
        price: 0,
        color: 'Red',
        metaTitle: '',
        purchase: 'free',
        model: '4D'
      })
      const handleProductChange = (e) => {
        setProductData({...productData, [e.target.name]: e.target.value})
      }
      
      const {category, name, price, color, metaTitle, purchase, model} = productData;

      const handleProductSubmit = (e) => {
        e.preventDefault();
        if (!zip || isEmpty(name) || isEmpty(category) || isEmpty(price) || isEmpty(color)  || isEmpty(metaTitle) || isEmpty(purchase), isEmpty(model)){
          toast.warn("All fields are required")
        } 
        else {
          console.log(zip)
          console.log(thumbnail)
          const formData = new FormData();
          formData.append('category',category);
          formData.append('name', name);
          formData.append('price',price);
          formData.append('metaTitle', metaTitle);
          formData.append('color', color);
          formData.append('purchase',purchase);
          formData.append('model',model);
          formData.append('files', zip);
          formData.append('files', thumbnail)
          selected.map((element)=> {formData.append('tag', element.value)})
          createProduct(formData)
            .then((response) => {
              if(response){
                toast.success("Uploaded Successfully")
              }
              setProductData({
                name: '',
                price: 0,
                metaTitle: '',
              });
              zip=''
              thumbnail=''
            })
          .catch(err => {
            toast.error("Upload Failed")
          })      
        }
      }  

      return (
    <div className='min-vh-100 d-flex justify-content-center align-items-center me-0 flex-column' style={{backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"}}>
    {/* <p className='h1 mb-5 fw-bold'>Upload Your Wallpaper</p> */}
    <div className='row bg-light px-2 vw-100 me-0' style={{backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"}}>
    <div className='col-12 col-sm-6 col-md-4'>
            <label >Category</label>
            <select className="form-select form-select-lg mt-2" aria-label="Default select example" name='category' onChange={handleProductChange} >
                {categories.length >0 &&categories.map(category=>{
                  return   <option value={category.cat_name}>{category.cat_name}</option>
                })}
            </select>
            <label className="form-label mt-3" style={{display:"block"}}>Name</label>
            <div className="form-floating ">
                <input type="text" className="form-control" id="floatingName" placeholder="Name" name='name' onChange={handleProductChange} value={productData.name}/>
            </div>
            <label className="form-label">Price</label>
            <div className="form-floating">
                <input type="number" className="form-control" id="floatingName" placeholder="Price" name='price'onChange={handleProductChange} value={productData.price}/>
            </div>
        </div>
        <div className='col-12 col-sm-6 col-md-4'>
            <label className="form-label">Color</label>
            <select className="form-select form-select-lg" aria-label="Default select example" name='color' onChange={handleProductChange}>
                <option defaultValue="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Blue">Blue</option>
            </select>
            <label className="form-label mt-3">Meta Title</label>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingName" placeholder="Meta Title" name='metaTitle' onChange={handleProductChange} value={productData.metaTitle}/>
            </div>
            <div>
            <label for="formFileLg" className="form-label mt-2">Zip File</label>
                <input className="form-control form-control-lg" id="formFileLg"  type="file" onChange={(e)=>setZip(e.target.files[0])} />
            </div>
        </div>
        <div className='col-12 col-sm-6 col-md-4 pe-0'>
            <label className="form-label">Purchase</label>
            <select className="form-select form-select-lg" name='purchase' aria-label="Default select example" onChange={handleProductChange}>
                <option selected value="free">Free</option>
                <option value="paid">Paid</option>
            </select>
            <label className="form-label mt-3">Model</label>
            <select className="form-select form-select-lg " name='model' aria-label="Default select example" onChange={handleProductChange}>
                <option selected value="4D">4D</option>
                <option value="4K">4K</option>
                <option value="Live">Live</option>
            </select>
            <div>
            <label for="formFileLg" className="form-label mt-3">Thumbnail</label>
                <input className="form-control form-control-lg" id="formFileLg" type="file" accept="image/*" onChange={(e)=>setThumbnail(e.target.files[0])} />
            </div>
            
        </div>
        <div className='m-auto'>
        <p className='fs-5 text-center mt-3 fw-bolder'>Tags</p>
            <MultiSelect
            className='mt-4' style={{maxHeight: "50px"}}
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      /></div>
    </div>
    <button type="button" className="btn btn-outline-success btn-lg mt-5" onClick={handleProductSubmit}>Submit</button>
    </div>
  )
}

export default UploadProduct;