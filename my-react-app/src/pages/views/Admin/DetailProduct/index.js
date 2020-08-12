import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";

const DetailProduct = ({ products }) => {
    const { id } = useParams();
    const product = products.find(product => product.id === id);
    console.log(product);
    return (
        <div>
 <div class="modal-body text-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8"  >
            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">{product.name}</h2>
             <div class="modal-dialog modal-xl" role="document">
           <img  class="img-fluid" src={product.image}  alt="" />
             </div>
            <p class="mb-6">Giá: $ {product.price}</p>
            <p class="mb-6">Nội dung chi tiết: {product.detail}</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct
