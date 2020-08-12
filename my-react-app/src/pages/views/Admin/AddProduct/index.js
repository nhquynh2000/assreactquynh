import { useForm } from 'react-hook-form';
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";

const AddProduct = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
 
    let history = useHistory();

    const onHandleSubmit = (data) => {
        onAdd(data);
        history.push("/admin/products")
    }
    return (
        <div>
            <div class="card shadow mb-4"><div class="card-header py-3">
                <h2 class="m-0 font-weight-bold text-primary">Them san pham</h2>
            </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" name="name" 
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            placeholder="Enter name" ref={register({ required: true,minLength: 4 ,maxLength: 50 ,
                            pattern:(/^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/)
                            })} />
                            {errors.name && errors.name.type === "required" && <span className="text-danger">Hãy nhập tên sản phẩm</span>}
                            {errors.name && errors.name.type === "pattern" && <span className="text-danger">Hãy điền kí tự</span>}
                            {errors.name && errors.name.type === "minLength" && <span className="text-danger">Tên sản phẩm không được ít hơn 4 kí tự</span>}
                            {errors.name && errors.name.type === "maxLength" && <span className="text-danger">Tên sản phẩm không được vượt quá 50 kí tự</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Image</label>
                            <input type="text" name="image" className="form-control"
                             id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter image"
                             ref={register({ required: true, pattern:(/\.(gif|jpe?g|tiff|png|web|bng)$/i)})}/>
                            {errors.image && errors.image.type === "required" && <span className="text-danger">Hãy điền đường dẫn ảnh</span>}
                            {errors.image && errors.image.type === "pattern" && <span className="text-danger">Hãy nhập đúng đường dẫn</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Price</label>
                            <input type="number" name="price"  className="form-control" id="exampleInputEmail1"
                             aria-describedby="emailHelp" placeholder="Enter price"
                             ref={register({ required: true })} />
                            {errors.price && errors.price.type === "required" && <span className="text-danger">Hãy nhập giá sản phẩm</span>}
                        </div>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
// import React, { useState } from 'react'
// import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
// import { useForm } from 'react-hook-form';


// const AddProduct = ({ onAdd }) => {
//     const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
//     let history = useHistory();

//     // const [valueInput, setValueInput] = useState({});

//     // const onHandleChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setValueInput({
//     //         ...valueInput,
//     //         [name]: value
//     //     })
//     // }

//     const onHandleSubmit = (data) => {
//         const newData = {
//             id: Math.random().toString(36).substr(2, 9),
//             ...data
//         }
//         onAdd(newData);
//         history.push('/admin/products');
//     }

//     return (
//         <div>
//             <form action="" className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
//                 <div className="form-group">
//                     <label htmlFor="productName">Tên sản phẩm</label>
//                     <input
//                         type="text"
//                         name="name"
//                         className="form-control"
//                         id="productName"
//                         ref={register({ required: true, minLength: 1 })}
//                         aria-describedby="nameHelp"
//                     />
//                     <small id="nameHelp" className="form-text text-danger">
//                         {errors.name && errors.name.type === "required" && <span>This field is required</span>}
//                         {errors.name && errors.name.type === "minLength" && <span>Min Length 10</span>}
//                     </small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="productPrice">Ảnh sản phẩm</label>
//                     <div className="input-group">
//                         <div className="custom-file">
//                             <input type="file" className="custom-file-input" id="inputGroupFile02" name="image"
//                             />
//                             <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
//                         </div>
//                     </div>
//                     <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="productPrice">Giá sản phẩm</label>
//                     <input
//                         type="text"
//                         name="price"
//                         className="form-control"
//                         id="productPrice"
//                         ref={register({ required: true })}
//                         aria-describedby="priceHelp"
//                     />
//                     <small id="priceHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
//             </form>
//         </div>
//     )
// }

// AddProduct.propTypes = {
//     onAdd: PropTypes.func
// }

// export default AddProduct






