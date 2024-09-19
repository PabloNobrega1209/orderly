import React, {useState} from 'react';
import axios from 'axios';
import './AddPosts.css'

function AddPosts(){

  const url = 'http://localhost:5000/produtos'
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    image1 : "",
    image2 : "",
    image3 : "",
    image4 : ""
  })

function submit(e){
  e.preventDefault();
  axios.post(url,{
    title : data.title,
    description : data.description,
    price : data.price,
    image1 : data.image1,
    image2 : data.image2,
    image3 : data.image3,
    image4 : data.image4
  })
  .then(res => {
    console.log(res.data)
  })
}

function handle(e){
  const newdata = {...data}
  newdata[e.target.id] = e.target.value
  setData(newdata)
  console.log(newdata)
}

return(
  <div className='bodyEditPosts'>
    <div className="EditPosts">
      <h1>Adicionar novo produto</h1>
      <form onSubmit={(e) => submit(e)}>
        <input onChange={(e) => handle(e)} id='title' value={data.title} placeholder='Título' type='text'/>
        <input onChange={(e) => handle(e)} id='description' value={data.description} placeholder='Descrição' type='text'/>
        <input onChange={(e) => handle(e)} id='image1' value={data.image1} placeholder='Imagem 1' type='textarea'/>
        <input onChange={(e) => handle(e)} id='image2' value={data.image2} placeholder='Imagem 2' type='textarea'/>
        <input onChange={(e) => handle(e)} id='image3' value={data.image3} placeholder='Imagem 3' type='textarea'/>
        <input onChange={(e) => handle(e)} id='image4' value={data.image4} placeholder='Imagem 4' type='textarea'/>
        <input onChange={(e) => handle(e)} id='price' value={data.price} placeholder='Valor' type='text'/>
        <input type='submit'/>
      </form>
    </div>
  </div>
)
  
}
export default AddPosts;
