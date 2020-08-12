import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import apiRequest from '../../../../api/productApi';
const EditProduct = ({ products, onUpdate }) => {
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    let { id } = useParams();
    let history = useHistory();
    const [currentProduct, setCurrentProduct] = useState({});
// GOI API LAY RA SAN PHAM
    useEffect(()=>{
        const getProduct = async ()=>{
            try {
                const {data} = await apiRequest.get(id);
                setCurrentProduct(data)
            } catch (error) {
                console.log("error api ")
            }
        }
        getProduct();
    },{})
    const onHandleSubmit = (data) => {
        console.log(currentProduct)
            setCurrentProduct(data)
            onUpdate(id,currentProduct) 
            history.push('/admin/products');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" value={currentProduct.name} onChange={onHandleChange} className="form-control"
                       className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        ref={register({ required: true,minLength: 4 ,maxLength: 50 ,
                       pattern:(/^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/)})} />
                        {errors.name && errors.name.type === "required" && <span className="text-danger">Hãy nhập tên sản phẩm</span>}
                            {errors.name && errors.name.type === "pattern" && <span className="text-danger">Hãy điền kí tự</span>}
                            {errors.name && errors.name.type === "minLength" && <span className="text-danger">Tên sản phẩm không được ít hơn 4 kí tự</span>}
                            {errors.name && errors.name.type === "maxLength" && <span className="text-danger">Tên sản phẩm không được vượt quá 50 kí tự</span>}
                        </div>
                {/* <div className="form-group">
                    <label htmlFor="productName">ảnh sản phẩm</label>
                    <input type="text" name="image" value={currentProduct.image} onChange={onHandleChange} className="form-control"
                      ref={register({ required: true
                    //   , pattern:(/\.(gif|jpe?g|tiff|png|web|bng)$/i)
                      })}/>
                      {errors.image && errors.image.type === "required" && <span className="text-danger">Hãy điền đường dẫn ảnh</span>}
                      {/* {errors.image && errors.image.type === "pattern" && <span className="text-danger">Hãy nhập đúng đường dẫn</span>} */}
                  {/* </div>  */}
                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="number" name="price" value={currentProduct.price} onChange={onHandleChange} className="form-control"
                     ref={register({ required: true })} />
                     {errors.price && errors.price.type === "required" && <span className="text-danger">Hãy nhập giá sản phẩm</span>}
                 </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct
