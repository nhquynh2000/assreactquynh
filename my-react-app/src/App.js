import React, { useState, useEffect } from 'react';
import Routers from './routers';
import apiRequest from './api/productApi';
import apiRequest1 from './api/postApi';
function App() {
  const [products, setProducts] = useState([]);
  const [post, setPost] = useState([]);
  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);
// Danh sách bài viết
useEffect(() => {
  const getPost = async () => {
    try {
      const { data } = await apiRequest1.getAll();
      setPost(data);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  getPost();
}, []);
  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
     await apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      const confirmAdd=window.confirm("Thêm thành công !");
      if(data){
      setProducts([ ...products, data
      ])}
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  // caap nhat san pham 
  const onHandleUpdate = async(id, updateProduct) =>{
    console.log(id, ' ', updateProduct)
    try {
      const {data} = await apiRequest.update(id, updateProduct)
      const newProducts = products.map(product =>(product.id === data.id ? data : product));
      setProducts(newProducts);
    } catch (error) {
      console.log("error api",error)
    }
  }

  // Cập nhật product 
  // const onHandleUpdate = (id,updateProduct) => {
  //   try{
  //   const newProducts = products.map(product => (
  //     product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
  //   ));
  //   localStorage.setItem('products', JSON.stringify(newProducts));
  //   setProducts(newProducts);
  // }
  // catch (error) {
  //   console.log('failed to request API: ', error)
  // }
  // }
  
  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} 
      onUpdate={onHandleUpdate} post={post}/>
    </div>
  )
}
export default App;