import React from 'react'

const PostList = ({ post }) => {
        
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">     
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tiêu đề bài viết</th>
                                    <th scope="col">Nội dung bài viết</th>
                                    <th scope="col">Danh mục</th>      
                                </tr>
                            </thead>
                            <tbody>
                                {post.map(({ title , content, category,id }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{title}</td>
                                        <td>{content}</td>
                                        <td>{category}</td> 
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

PostList.propTypes = {
  
 
}

export default PostList