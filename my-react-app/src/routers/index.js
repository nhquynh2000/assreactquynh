import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProduct from '../pages/views/Admin/AddProduct';
import EditProduct from '../pages/views/Admin/EditProductForm';
import DetailProduct from '../pages/views/Admin/DetailProduct';
import PostList from '../pages/views/Admin/Post';
//Views
import About from '../pages/views/Main/About'
import Conact from '../pages/views/Main/Conact'
import Home from '../pages/views/Main/Home'
import Pro from '../pages/views/Main/Produc'
const Routers = ({ products, onRemove, onAdd, onUpdate, post }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/post'>
                                <PostList post={post} />
                            </Route>
                            <Route path='/admin/product/add' exact>
                                <AddProduct onAdd={onAdd} />
                            </Route>
                            <Route path="/admin/product/:id">
                                <EditProduct
                                    products={products}
                                    onUpdate={onUpdate}
                                />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/conact">
                                <Conact />
                            </Route>
                            <Route path="/deail/:id">
                                <DetailProduct products={products} />
                            </Route>
                            <Route path='/products'>
                                <Pro products={products} onRemove={onHandleRemove} />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}
Routers.propTypes = {
}

export default Routers
