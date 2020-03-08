import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './../../component/ProductItem/ProductItem';
import { actFetchProductsRequest, actGetProductRequest} from './../../actions/index';

class Pants extends Component {

  componentDidMount() {
    var catalogID = 1;
        this.props.fetchAllProducts(catalogID);
  }

    render() {
      var { products } = this.props;
        return (
            <div>
              {/* Title Page */}
              <section className="bg-title-page p-t-50 p-b-40 flex-col-c-m" style={{backgroundImage: 'url(images/heading-pages-02.jpg)'}}>
                <h2 className="l-text2 t-center">
                  Women
                </h2>
                <p className="m-text13 t-center">
                  New Arrivals Women Collection 2018
                </p>
              </section>
              {/* Content page */}
              <section className="bgwhite p-t-55 p-b-65">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
                      <div className="leftbar p-r-20 p-r-0-sm">
                      <div className="search-product pos-relative bo4 of-hidden">
                        <input className="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Products..." />
                        <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                          <i className="fs-12 fa fa-search" aria-hidden="true" />
                        </button>
                      </div>
                    <div className="filter-price p-t-22 p-b-50 bo3">
                      <h4 className="m-text14 p-b-7">
                        Theo giá:
                      </h4>
                      <ul className="p-b-54">
                        <li className="p-t-4">
                          <a href="#" className="s-text13">
                            Dưới 150k
                          </a>
                        </li>
                        <li className="p-t-4">
                          <a href="#" className="s-text13">
                          Từ 150k đến 200k
                          </a>
                        </li>
                        <li className="p-t-4">
                          <a href="#" className="s-text13">
                            Từ 200k đến 250k
                          </a>
                        </li>
                        <li className="p-t-4">
                          <a href="#" className="s-text13">
                            Trên 250k
                          </a>
                        </li>
                      </ul>
                    </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                      {/*  */}
                      <div className="flex-sb-m flex-w p-b-35">
                        <div className="flex-w">
                          <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                            <select className="selection-2">
                              <option>Default Sorting</option>
                              <option>Popularity</option>
                              <option>Price: low to high</option>
                              <option>Price: high to low</option>
                            </select>
                          </div>
                        </div>
                        <span className="s-text8 p-t-5 p-b-5">
                        Hiển thị 1–12 / {products.length} kết quả
                        </span>
                      </div>
                      {/* Product */}
                      <div className="row">
                        {this.showProducts(products)}
                      </div>
                      {/* Pagination */}
                      <div className="pagination flex-m flex-w p-t-26">
                        <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
                        <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

        );
    }
    showProducts(products) {
      var result = null;
      if (products.length > 0) {
          result = products.map((product, index) => {
              return (
                  <ProductItem
                      key={index}
                      product={product}
                      index={index}
                  />
              );
          });
      }
      return result;
  }
  

}

const mapStateToProps = state => {
  return {
      products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchAllProducts : (catalogID) => {
          dispatch(actFetchProductsRequest(catalogID));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pants);
