import { Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";

const FooterComponent = () => {
  const arrIcon = [
    {
      title: "tiki",
      url: "https://storage.googleapis.com/hust-files/images/tiki_21.1k.png",
    },
    {
      title: "visa",
      url: "https://photo2.tinhte.vn/data/attachment-files/2022/05/5982776_Screen_Shot_2022-05-11_at_09.07.10.png",
    },
    {
      title: "jcb",
      url: "https://static-00.iconduck.com/assets.00/jcb-icon-512x322-flsjwt1o.png",
    },
    {
      title: "momo",
      url: "https://developers.momo.vn/v3/vi/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png",
    },
    {
      title: "zaloPay",
      url: "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png",
    },
    {
      title: "vnPay",
      url: "https://vnpay.vn/s1/statics.vnpay.vn/2023/9/06ncktiwd6dc1694418196384.png",
    },
    {
      title: "tragop",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4iU9RDZ7H0dbc94gV3eNfCHCuM_FR0TKjw&usqp=CAU",
    },
    {
      title: "tindung",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIqThfCJBF3oC9yAlsDvRTLOWOVJveIUNuQ&usqp=CAU",
    },
    {
      title: "riot",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/768px-Instagram-Icon.png",
    },
  ];
  return (
    <div className="wrapper-footer flex flex-wrap justify-between lg:grid lg:grid-cols-5 bg-white p-20 space-y-5 mt-0">
      <div className="support-customer w-full lg:w-auto lg:flex-1 lg:mr-10 pt-6">
        <h3 className="font-bold text-2xl pb-2">Hỗ trợ khách hàng</h3>
        <ul className="text-xl space-y-2">
          <li>
            <Link href="">
              Hotline: 1900-6035 (1000 đ/phút, 8-21h kể cả T7, CN)
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to={
                "https://hotro.tiki.vn/s/?_gl=1*jts130*_ga*Njk0NDcwNjUuMTcwMjQ5NTQyNg..*_ga_S9GLR1RQFJ*MTcwMzQwMjU3OC4xMy4xLjE3MDM0MDMzODguNjAuMC4w"
              }
            >
              Các câu hỏi thường gặp
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://tiki.vn/lien-he/gui-yeu-cau">
              Gửi yêu cầu hỗ trợ
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to={
                "https://hotro.tiki.vn/s/article/lam-the-nao-de-toi-dat-hang-qua-website-tiki?_gl=1*10dzfvz*_ga*Njk0NDcwNjUuMTcwMjQ5NTQyNg..*_ga_S9GLR1RQFJ*MTcwMzQwMjU3OC4xMy4xLjE3MDM0MDM3NDQuNjAuMC4w"
              }
            >
              Hướng dẫn đặt hàng
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to={
                "https://hotro.tiki.vn/s/article/cac-hinh-thuc-giao-hang-tai-tiki?_gl=1*10dzfvz*_ga*Njk0NDcwNjUuMTcwMjQ5NTQyNg..*_ga_S9GLR1RQFJ*MTcwMzQwMjU3OC4xMy4xLjE3MDM0MDM3NDQuNjAuMC4w"
              }
            >
              Phương thức vận chuyển
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://hotro.tiki.vn/s/article/chinh-sach-doi-tra-san-pham-tai-tiki-nhu-the-nao?_gl=1*1s4lx4l*_ga*Njk0NDcwNjUuMTcwMjQ5NTQyNg..*_ga_S9GLR1RQFJ*MTcwMzQwMjU3OC4xMy4xLjE3MDM0MDM3NDQuNjAuMC4w"
            >
              Chính sách đổi trả
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://tiki.vn/khuyen-mai/huong-dan-tra-gop"
            >
              Hướng dẫn trả góp
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://hotro.tiki.vn/s/article/dich-vu-giao-hang-tu-nuoc-ngoai?_gl=1*q2wul*_ga*Njk0NDcwNjUuMTcwMjQ5NTQyNg..*_ga_S9GLR1RQFJ*MTcwMzQwMjU3OC4xMy4xLjE3MDM0MDM3OTMuMTEuMC4w"
            >
              Chính sách hàng nhập khẩu
            </Link>
          </li>
          <li>
            <Link rel="opner" to="#">
              Hỗ trợ khách hàng: hotro@tiki.vn
            </Link>
          </li>
          <li>
            <Link rel="opner" to="#">
              Báo lỗi bảo mật: security@tiki.vn
            </Link>
          </li>
        </ul>
      </div>
      <div className="about-tiki w-full lg:w-auto lg:flex-1 lg:mr-10">
        <h3 className="font-bold text-2xl pb-2">Về Tiki</h3>
        <ul className="text-xl space-y-2">
          <li>
            <Link
              target="_blank"
              to="https://tiki.vn/thong-tin/gioi-thieu-ve-tiki"
            >
              Giới thiệu Tiki
            </Link>
          </li>
          <li>
            <Link target="_blank" rel="opner" to="https://tiki.vn/blog/">
              Tiki Blog
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://tuyendung.tiki.vn/?_gl=1*gvmzjb*_ga*Njk0NDcwNjUuMTcwMjQ5NTQyNg..*_ga_S9GLR1RQFJ*MTcwMzQwMjU3OC4xMy4xLjE3MDM0MDM4MTkuNjAuMC4w"
            >
              Tuyển dụng
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://tiki.vn/bao-mat-thanh-toan">
              Chính sách bảo mật thanh toán
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://tiki.vn/bao-mat-thong-tin-ca-nhan"
            >
              Chính sách bảo mật thông tin cá nhân
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://hotro.tiki.vn/s/article/chinh-sach-giai-quyet-khieu-nai?_gl=1*mn74nc*_ga*Njk0NDcwNjUuMTcwMjQ5NTQyNg..*_ga_S9GLR1RQFJ*MTcwMzQwMjU3OC4xMy4xLjE3MDM0MDM4NzEuOC4wLjA."
            >
              Chính sách giải quyết khiếu nại
            </Link>
          </li>
          <li>
            <Link to="https://hotro.tiki.vn/s/article/dieu-khoan-su-dung?_gl=1*13zyxeo*_ga*Njk0NDcwNjUuMTcwMjQ5NTQyNg..*_ga_S9GLR1RQFJ*MTcwMzQwMjU3OC4xMy4xLjE3MDM0MDM5MDIuNTYuMC4w">
              Điều khoản sử dụng
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://hotro.tiki.vn/s/article/tiki-xu-la-gi?_gl=1*13zyxeo*_ga*Njk0NDcwNjUuMTcwMjQ5NTQyNg..*_ga_S9GLR1RQFJ*MTcwMzQwMjU3OC4xMy4xLjE3MDM0MDM5MDIuNTYuMC4w"
            >
              Giới thiệu Tiki Xu
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://tiki.vn/astra-rewards/home">
              Gói hội viên VIP
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://tiki.vn/khuyen-mai/tiki-tiep-thi-lien-ket"
            >
              Tiếp thị liên kết cùng Tiki
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://tiki.vn/khuyen-mai/ban-hang-doanh-nghiep"
            >
              Bán hàng doanh nghiệp
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://www.tikinow.vn/bang-gia">
              Điều kiện vận chuyển
            </Link>
          </li>
        </ul>
      </div>
      <div className="contact w-full lg:w-auto lg:flex-1 lg:mr-10">
        <h3 className="font-bold text-2xl pb-2">Hợp tác và liên kết</h3>
        <span className="text-xl">
          <Link target="_blank" to="https://tiki.vn/quy-che-hoat-dong-sgdtmdt">
            Quy chế hoạt động Sàn GDTMĐT <br />
          </Link>
        </span>
        <span className="text-xl">
          <Link
            target="_blank"
            to="https://tiki.vn/khuyen-mai/ban-hang-cung-tiki"
          >
            Bán hàng cùng Tiki
          </Link>
        </span>
        <div className="mt-2">
          <span className="font-bold text-xl">Chứng nhận bởi</span>
          <div className="flex pt-2 space-x-2">
            <img
              width={50}
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
              alt="#"
            />
            <img
              width={100}
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
              alt=""
            />
            <img
              width={50}
              src="https://images.dmca.com/Badges/dmca_protected_sml_120y.png?ID=388d758c-6722-4245-a2b0-1d2415e70127"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="payment w-full lg:w-auto lg:flex-1 lg:ml-6">
        <h3 className="font-bold text-2xl pb-2">Phương thức thanh toán</h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 lg:gap-1 space-y-2">
          {arrIcon.map((item, index) => (
            <div key={index}>
              <Image width={30} height={30} preview={false} src={item.url} />
            </div>
          ))}
        </div>
      </div>

      <div className="connect w-full lg:w-auto lg:flex-1 ml-5">
        <h3 className="font-bold text-2xl pb-2">Kết nối với chúng tôi</h3>
        <div className="grid  sm:grid-cols-1 lg:grid-cols-3 text-5xl">
          <FaFacebookSquare className="text-blue-600" />
          <IoLogoYoutube className="text-red-600" />
          <SiZalo className="border-solid border-2 border-indigo-600 p-1 rounded-full bg-blue-500 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-2xl pt-2 pb-2">
            Tải ứng dụng trên điện thoại
          </h3>
          <div className="flex space-x-2">
            <img
              width={100}
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png"
              alt=""
            />
            <div className="apple space-y-1">
              <img
                width={100}
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
                alt=""
              />
              <img
                width={100}
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
