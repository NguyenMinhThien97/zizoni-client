import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="item-blog p-b-80">
                <a href="blog-detail.html" className="item-blog-img pos-relative dis-block hov-img-zoom">
                    <img src="images/blog-04.jpg" alt="IMG-BLOG" />
                    <span className="item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1">
                    28 Dec, 2018
                    </span>
                </a>
                <div className="item-blog-txt p-t-33">
                    <h4 className="p-b-11">
                    <a href="blog-detail.html" className="m-text24">
                        Black Friday Guide: Best Sales &amp; Discount Codes
                    </a>
                    </h4>
                    <div className="s-text8 flex-w flex-m p-b-21">
                    <span>
                        By Admin
                        <span className="m-l-3 m-r-6">|</span>
                    </span>
                    <span>
                        Cooking, Food
                        <span className="m-l-3 m-r-6">|</span>
                    </span>
                    <span>
                        8 Comments
                    </span>
                    </div>
                    <p className="p-b-12">
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                    </p>
                    <a href="blog-detail.html" className="s-text20">
                    Continue Reading
                    <i className="fa fa-long-arrow-right m-l-8" aria-hidden="true" />
                    </a>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;
