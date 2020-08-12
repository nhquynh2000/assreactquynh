
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Pro = ({ products, onRemove }) => {
        const removeHandle = (id) => {
            const confirmRemove = window.confirm("Bạn có chắc muốn xóa?");
            onRemove(id)
        }
        return (
            <div className="card-body">
              <div className="row text-center">
              {products.map((item, index) => (
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card h-100">
                  <img className="img-fluid"  src={item.image} alt=""  />
                    <div className="card-body">
                      <h4 className="card-title">{item.name}</h4>   
                    </div>           
                      <Link to={`/deail/${item.id}`} className="btn hvr-hover" >Detail</Link>             
                  </div>
                </div>
              ))}
            </div>
            </div>
          )
      }
Pro.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default Pro