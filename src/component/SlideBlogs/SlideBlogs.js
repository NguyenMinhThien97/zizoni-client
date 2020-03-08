import React, { Component } from 'react';
import moment from 'moment';
class SlideBlogs extends Component {
    render() {
        var { blog } = this.props;
        return (
            <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                {/* Block3 */}
                <div className="block3">
                    <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
                    <img src={blog.image} alt="IMG-BLOG" />
                    </a>
                    <div className="block3-txt p-t-14">
                    <h4 className="p-b-7">
                        <a href="blog-detail.html" className="m-text11">
                        {blog.title}
                        </a>
                    </h4>
                    <span className="s-text6">Đăng ngày: </span> <span className="s-text7">{this.showCreatedDate(blog)}</span>
                    <p className="s-text8 p-t-16">
                        {blog.description}
                    </p>
                    </div>
                </div>
            </div>
        );
    }
    showCreatedDate(blog){
        // return moment().format(blog.created_date,'YYYY-MM-DD');
        return blog.created_date;
    }
}

export default SlideBlogs;
