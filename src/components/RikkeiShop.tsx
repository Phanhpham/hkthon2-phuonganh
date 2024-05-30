function RikkeiShop() {
  const products = [
    // Thiết bị điện tử
    {
      id: 1,
      category: "Thiết bị điện tử",
      name: "Iphone 6",
      brand: "Apple",
      price: "29.000.000đ",
      image: "images/products/ThietBiDienTu/iphone6.jpg",
      place: "Hà Nội",
      sold: 30,
    },
    {
      id: 2,
      category: "Thiết bị điện tử",
      name: "Iphone 6 Plus",
      brand: "Apple",
      price: "3.000.000đ",
      image: "images/products/ThietBiDienTu/iphone6plus.jpg",
      place: "Hà Nội",
      sold: 500,
    },
    {
      id: 3,
      category: "Thiết bị điện tử",
      name: "Iphone 7",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphone7.jpg",
      place: "Hà Nội",
      sold: 500,
    },
    {
      id: 4,
      category: "Thiết bị điện tử",
      name: "Iphone 7 Plus",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphone7plus.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 5,
      category: "Thiết bị điện tử",
      name: "Iphone 8",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphone8.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 6,
      category: "Thiết bị điện tử",
      name: "Iphone 8 Plus",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphone8plus.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 7,
      category: "Thiết bị điện tử",
      name: "Iphone X",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphonex.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 8,
      category: "Thiết bị điện tử",
      name: "Iphone Xr",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphonexr.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 9,
      category: "Thiết bị điện tử",
      name: "Iphone Xs",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphonexs.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 10,
      category: "Thiết bị điện tử",
      name: "Iphone Xs Max",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphonexsmax.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 11,
      category: "Thiết bị điện tử",
      name: "Iphone 11",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphone11.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 12,
      category: "Thiết bị điện tử",
      name: "Iphone 11 Pro",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphone11pro.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 13,
      category: "Thiết bị điện tử",
      name: "Iphone 11 Pro Max",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphone11promax.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 14,
      category: "Thiết bị điện tử",
      name: "Iphone 12 Mini",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphone12mini.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 15,
      category: "Thiết bị điện tử",
      name: "Iphone 12",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphone12.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 16,
      category: "Thiết bị điện tử",
      name: "Iphone 12 Pro",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphone12pro.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    {
      id: 17,
      category: "Thiết bị điện tử",
      name: "Iphone 12 Pro Max",
      brand: "Apple",
      price: "35.000.000đ",
      image: "images/products/ThietBiDienTu/iphone11promax.jpg",
      place: "Hà Nội",
      sold: 48,
    },
    // Sách
    {
      id: 18,
      category: "Sách",
      name: "Hoàng tử bé",
      brand: "",
      price: "53.700đ",
      image: "images/products/Sach/HoangTuBe.jpg",
      place: "Hà Nội",
      sold: 6981,
    },
    {
      id: 19,
      category: "Sách",
      name: "Muôn kiếp nhân sinh",
      brand: "",
      price: "109.000đ",
      image: "images/products/Sach/MuonKiepNhanSinh.jpg",
      place: "Hà Nội",
      sold: 4169,
    },
    {
      id: 20,
      category: "Sách",
      name: "Nhà giả kim",
      brand: "",
      price: "55.000đ",
      image: "images/products/Sach/NhaGiaKim.jpg",
      place: "Hồ Chí Minh",
      sold: 9654,
    },
    {
      id: 21,
      category: "Sách",
      name: "Tôi tự học",
      brand: "",
      price: "32.900đ",
      image: "images/products/Sach/ToiTuHoc.jpg",
      place: "Đà nẵng",
      sold: 2456,
    },
    {
      id: 22,
      category: "Sách",
      name: "Đắc nhân tâm",
      brand: "",
      price: "56.100đ",
      image: "images/products/Sach/DacNhanTam.jpg",
      place: "Hà Nội",
      sold: 16498,
    },
    {
      id: 23,
      category: "Sách",
      name: "Mắt biếc",
      brand: "",
      price: "76.400đ",
      image: "images/products/Sach/MatBiec.jpg",
      place: "Nghệ An",
      sold: 9543,
    },
    {
      id: 24,
      category: "Sách",
      name: "Không gia đình",
      brand: "",
      price: "74.500đ",
      image: "images/products/Sach/KhongGiaDinh.jpg",
      place: "Hà Nội",
      sold: 12483,
    },
    {
      id: 25,
      category: "Sách",
      name: "Your name",
      brand: "",
      price: "45.000đ",
      image: "images/products/Sach/YourName.jpg",
      place: "Hồ Chí Minh",
      sold: 5347,
    },
    {
      id: 26,
      category: "Sách",
      name: "Hai số phận",
      brand: "",
      price: "97.900đ",
      image: "images/products/Sach/HaiSoPhan.jpg",
      place: "Hà Nội",
      sold: 1452,
    },
    {
      id: 27,
      category: "Sách",
      name: "Đi tìm lẽ sống",
      brand: "",
      price: "61.900đ",
      image: "images/products/Sach/DiTimLeSong.jpg",
      place: "Hà Nội",
      sold: 2486,
    },
    // Thời trang
    {
      id: 28,
      category: "Thời trang",
      name: "Áo phông",
      brand: "Nike",
      price: "919.000đ",
      image: "images/products/ThoiTrang/ao1.jpg",
      place: "Hà Nội",
      sold: 541,
    },
    {
      id: 29,
      category: "Thời trang",
      name: "Áo phông",
      brand: "Nike",
      price: "719.000đ",
      image: "images/products/ThoiTrang/ao2.jpg",
      place: "Hà Nội",
      sold: 349,
    },
    {
      id: 30,
      category: "Thời trang",
      name: "Áo khoác",
      brand: "Nike",
      price: "2.499.000đ",
      image: "images/products/ThoiTrang/ao3.jpg",
      place: "Hồ Chí Minh",
      sold: 684,
    },
    {
      id: 31,
      category: "Thời trang",
      name: "Quần nỉ họa tiết",
      brand: "Nike",
      price: "2.299.000đ",
      image: "images/products/ThoiTrang/quan1.jpg",
      place: "Hà Nội",
      sold: 246,
    },
    {
      id: 32,
      category: "Thời trang",
      name: "Quần nỉ đen sọc trắng",
      brand: "Nike",
      price: "1.759.000đ",
      image: "images/products/ThoiTrang/quan2.jpg",
      place: "Hà Nội",
      sold: 694,
    },
    {
      id: 33,
      category: "Thời trang",
      name: "Áo phông",
      brand: "Nike",
      price: "1.479.000đ",
      image: "images/products/ThoiTrang/ao4.jpg",
      place: "Hà Nội",
      sold: 614,
    },
    {
      id: 34,
      category: "Thời trang",
      name: "Quần nỉ Jordan",
      brand: "Nike",
      price: "1.919.000đ",
      image: "images/products/ThoiTrang/quan3.jpg",
      place: "Hà Nội",
      sold: 537,
    },
    {
      id: 35,
      category: "Thời trang",
      name: "Áo phông",
      brand: "Nike",
      price: "819.000đ",
      image: "images/products/ThoiTrang/ao5.jpg",
      place: "Hồ Chí Minh",
      sold: 769,
    },
    {
      id: 36,
      category: "Thời trang",
      name: "Quần đùi",
      brand: "Nike",
      price: "659.000đ",
      image: "images/products/ThoiTrang/quan6.jpg",
      place: "Hà Nội",
      sold: 426,
    },
    {
      id: 37,
      category: "Thời trang",
      name: "Quần nỉ xám",
      brand: "Nike",
      price: "1.019.000đ",
      image: "images/products/ThoiTrang/quan5.jpg",
      place: "Hà Nội",
      sold: 418,
    },
    {
      id: 38,
      category: "Thời trang",
      name: "Áo khoác",
      brand: "Nike",
      price: "1.739.000đ",
      image: "images/products/ThoiTrang/ao6.jpg",
      place: "Hà Nội",
      sold: 849,
    },
    {
      id: 39,
      category: "Thời trang",
      name: "Quần đùi",
      brand: "Nike",
      price: "659.000đ",
      image: "images/products/ThoiTrang/quan7.jpg",
      place: "Hồ Chí Minh",
      sold: 968,
    },
    // Đồ tiêu dùng
    {
      id: 40,
      category: "Đồ tiêu dùng",
      name: "Nước xả vải Comfort",
      brand: "",
      price: "145.000đ",
      image: "images/products/DoTieuDung/comfort.jpg",
      place: "Hồ Chí Minh",
      sold: 6514,
    },
    {
      id: 41,
      category: "Đồ tiêu dùng",
      name: "Thùng bia Tiger",
      brand: "",
      price: "341.000đ",
      image: "images/products/DoTieuDung/BiaTiger.jpg",
      place: "Hồ Chí Minh",
      sold: 3145,
    },
    {
      id: 42,
      category: "Đồ tiêu dùng",
      name: "Thùng mỳ tôm Hảo Hảo",
      brand: "",
      price: "108.000đ",
      image: "images/products/DoTieuDung/haohao.jpg",
      place: "Hồ Chí Minh",
      sold: 14905,
    },
    {
      id: 43,
      category: "Đồ tiêu dùng",
      name: "Dầu đậu nành Simply",
      brand: "",
      price: "108.000đ",
      image: "images/products/DoTieuDung/DauAn.jpg",
      place: "Hồ Chí Minh",
      sold: 12450,
    },
    {
      id: 44,
      category: "Đồ tiêu dùng",
      name: "Thùng bia Heineken ",
      brand: "",
      price: "405.000đ",
      image: "images/products/DoTieuDung/BiaHeineken.jpg",
      place: "Hồ Chí Minh",
      sold: 6843,
    },
    {
      id: 45,
      category: "Đồ tiêu dùng",
      name: "Lốc 4 hộp sữa Nestle Milo",
      brand: "",
      price: "28.000đ",
      image: "images/products/DoTieuDung/milo.jpg",
      place: "Hồ Chí Minh",
      sold: 9421,
    },
    {
      id: 46,
      category: "Đồ tiêu dùng",
      name: "Túi nước giặt Omo Matic",
      brand: "",
      price: "142.000đ",
      image: "images/products/DoTieuDung/omo.jpg",
      place: "Hồ Chí Minh",
      sold: 3457,
    },
    {
      id: 47,
      category: "Đồ tiêu dùng",
      name: "Thùng 48 hộp sữa tươi có đường TH True Milk",
      brand: "",
      price: "259.000đ",
      image: "images/products/DoTieuDung/suaTH.jpg",
      place: "Hồ Chí Minh",
      sold: 2496,
    },
    {
      id: 48,
      category: "Đồ tiêu dùng",
      name: "Nước rửa chén Sunlight",
      brand: "",
      price: "91.000đ",
      image: "images/products/DoTieuDung/sunlight.jpg",
      place: "Hồ Chí Minh",
      sold: 3516,
    },
    {
      id: 49,
      category: "Đồ tiêu dùng",
      name: "Nước tẩy bồn cầu Vim",
      brand: "",
      price: "36.000đ",
      image: "images/products/DoTieuDung/vim.jpg",
      place: "Hồ Chí Minh",
      sold: 3475,
    },
  ];
  return (
    <>
      <div className="home_app">
        {/* Header */}
        <header className="header">
          <ul className="header-items">
            <li className="header-item">
              <a href="" className="header-item-link logo">
                Rikkei_Shop
              </a>
            </li>
            <li className="header-item">
              <input
                className="search-bar"
                type="search"
                placeholder="Nhập để tìm kiếm"
              />
              <button className="search-icon">
                <i className="fas fa-search" />
              </button>
            </li>
            <li className="header-item">
              <a href="" className="header-item-link header-cart">
                <i className="header-cart-icon fas fa-shopping-cart" />
                Giỏ hàng
              </a>
            </li>
            <li className="header-item">
              <a className="header-item-link header-login">Đăng nhập</a>
            </li>
            <li className="header-item">
              <a className="header-item-link header-signup">Đăng ký</a>
            </li>
          </ul>
        </header>
        
        {/* Banner */}  
         <div style={{backgroundColor:"red"}}>
          <div className="slides fade">
            <img
              className="banner-images"
              src="../../public/images/banner/banner-1.jpg"
              alt="Banner-1qqqqqqq"
              style={{ width: "60%" }}
            />
          </div>
          <div className="slides fade">
            <img
              className="banner-images"
              src="images/banner/banner-2.jpg"
              alt="Banner-2"
              style={{ width: "60%" }}
            />
          </div>
          <div className="slides fade">
            <img
              className="banner-images"
              src="images/banner/banner-3.jpg"
              alt="Banner-3"
              style={{ width: "60%" }}
            />
          </div>
          <div className="slides fade">
            <img
              className="banner-images"
              src="images/banner/banner-4.jpg"
              alt="Banner-4"
              style={{ width: "60%" }}
            />
          </div>
          <div className="slides fade">
            <img
              className="banner-images"
              src="images/banner/banner-5.jpg"
              alt="Banner-4"
              style={{ width: "60%" }}
            />
          </div>
          <a className="prev">❮</a>
          <a className="next">❯</a>
        </div>
        <br /> 
        {/* Dots */}
        <div className="slides-dot" style={{ textAlign: "center" }}>
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        {/* Phần thân */}
        <div className="container" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="grid">
            <div className="grid__row">
              <div className="grid__column-2">
                <nav className="category">
                  <h3 className="category_heading">
                    <i className="category_heading-icon fas fa-list" />
                    Danh mục sản phẩm
                  </h3>
                  <ul className="category-list">
                    <li className="category-item category-item--active">
                      <a id="all" className="category-item__link">
                        Tất cả sản phẩm
                      </a>
                    </li>
                    <li className="category-item category-item">
                      <a id="thietBiDienTu" className="category-item__link">
                        Thiết bị điện tử
                      </a>
                    </li>
                    <li className="category-item">
                      <a id="sach" className="category-item__link">
                        Sách
                      </a>
                    </li>
                    <li className="category-item">
                      <a id="doTieuDung" className="category-item__link">
                        Đồ tiêu dùng
                      </a>
                    </li>
                    <li className="category-item">
                      <a id="thoiTrang" className="category-item__link">
                        Thời trang
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="grid__column-10">
                <div className="product">
                  <div id="product_items" className="grid__row">
                    {products.map((e, i) => (
                      <div className="grid__column-2-4" key={i}>
                        <a className="product-item" href="#">
                          <div
                            className="product-item_img"
                            style={{
                              backgroundImage: `url(${e.image})`,
                            }}
                          />
                          <h4 className="product-item_name">{e.name}</h4>
                          <div className="product-item_price">{e.price}</div>
                          <div className="product-item_action">
                            <span className="product-item_like">
                              <i className="far fa-heart" />
                            </span>
                            <div className="product-item_rating">
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="product-item_star-gold fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span className="product-item_sold">
                              {e.sold} đã bán
                            </span>
                          </div>
                          <div className="product-item_origin">
                            <span className="product-item_brand">
                              {e.brand}
                            </span>
                            <span className="product-item_place">
                              {e.place}
                            </span>
                          </div>
                        </a>
                      </div>
                    ))}
                    {/* Product item */}
                    {/* <div class="grid__column-2-4">
                              <a class="product-item" href=#>
                                  <div class="product-item_img" style="background-image: url(https://www.viendongmobile.com/vnt_upload/product/07_2020/Untitled-1.png);"></div>
                                  <h4 class="product-item_name">Iphone 12 Pro Max</h4>
                                  <div class="product-item_price">30.000.000đ</div>
                                  <div class="product-item_action">
                                      <span class="product-item_like">
                                          <i class="far fa-heart"></i>
                                      </span>
                                      <div class="product-item_rating">
                                          <i class="product-item_star-gold fas fa-star"></i>
                                          <i class="product-item_star-gold fas fa-star"></i>
                                          <i class="product-item_star-gold fas fa-star"></i>
                                          <i class="product-item_star-gold fas fa-star"></i>
                                          <i class="fas fa-star"></i>
                                      </div>
                                      <span class="product-item_sold">50 đã bán</span>
                                  </div>
                                  <div class="product-item_origin">
                                      <span class="product-item_brand">Apple</span>
                                      <span class="product-item_place">Hà Nội</span>
                                  </div>
                              </a>
                          </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer">
          <div className="grid">
            <div className="grid__row">
              <div className="grid__column-2-4">
                <h3 className="footer_heading">Chăm sóc khách hàng</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      Trung tâm trợ giúp
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      Hướng dẫn mua hàng
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid__column-2-4">
                <h3 className="footer_heading">Giới thiệu</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      Điều khoản
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      Tuyển dụng
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid__column-2-4">
                <h3 className="footer_heading">Danh mục sản phẩm </h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      Thời trang
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      Đồ tiêu dùng
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      Thiết bị điện tử
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      Sách
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid__column-2-4">
                <h3 className="footer_heading">Theo dõi chúng tôi</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      <i className="footer-item_icon fab fa-facebook" />
                      Facebook
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      <i className="footer-item_icon fab fa-instagram" />
                      Instagram
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item_link">
                      <i className="footer-item_icon fab fa-twitter" />
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid__column-2-4">
                <h3 className="footer_heading">Đội ngũ phát triển</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <span className="footer-item_member">Trịnh Quốc Hai</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
     
      
    </>
  );
}

export default RikkeiShop;
