import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // تأكد من تثبيت Bootstrap
import { MdEmail } from "react-icons/md"; // أيقونة الرسالة
import { FaWhatsapp, FaPhone } from "react-icons/fa"; // أيقونات الواتساب والهاتف
import image from "../../public/photo_2025-01-24_17-34-42.jpg"
import { Link } from "react-router-dom";
const Footer = () => {
  const [showIcons, setShowIcons] = useState(false); // حالة إظهار/إخفاء الأيقونات

  // وظيفة تبديل ظهور الأيقونات
  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <footer className="footer  text-dark py-4">
      <div className="container">
        <div className="row">
            {/* قسم معلومات الشركة */}
          <div className="col-md-5 text-md-end">
            <h5 style={{fontSize:"20px" , fontWeight:"bold"}}>سطحة جدة نقل السيارات الصعودية والمعطلة</h5>
            <p className="text-light" style={{fontSize:"20px" , fontWeight:"bold" , maxWidth:"25rem"}}>
              في سطحة جدة نقل السيارات الصعودية والمعطلة، نقدم خدمات شاملة ومميزة لنقل السيارات داخل وخارج المملكة.
              نحن لسنا مجرد شركة سحب، بل نقدم الأمان والخدمة وفقًا لمعايير الثقة التي يضعها عملاؤنا.
            </p>
          </div>

          {/* قسم روابط الموقع مع الصورة */}
          <div className="col-md-7 d-flex  justify-content-between">
            {/* روابط الموقع */}
            <div>
              <h5 style={{fontSize:"20px" , fontWeight:"bold"}}>روابط أقسام الموقع</h5>
              <ul className="list-unstyled">
                <Link to={"/"}><li><a href="#" className="text-light">الرئيسية</a></li></Link>
                <Link to={"/abut"}><li><a href="#" className="text-light">خدمتنا</a></li></Link>
                <Link to={"/about-us"}><li><a href="#" className="text-light">من نحن</a></li></Link>
                <Link to={"/count-us"}><li><a href="#" className="text-light">تواصل معنا</a></li></Link>
              </ul>
            </div>

            {/* الصورة */}
            <img
              src={image} // استبدل هذا بالمسار الصحيح لصورتك
              alt="صورة الموقع"
              className="img-fluid me-4"
              style={{ width: "250px", height: "200px" }}
            />
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="text-center text-light mt-4">
          <p className="mb-0" style={{fontSize:"20px" , fontWeight:"bold"}}>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} سطحة جدة نقل السيارات</p>
        </div>
      </div>

      {/* أيقونة الرسالة الثابتة */}
      <div className="fixed-contact">
        {/* أيقونات التواصل (واتساب، هاتف) */}
        {showIcons && (
          <div className="d-flex flex-column gap-2 mb-2">
            <a href="https://wa.me/966532581822" className="btn btn-success rounded-circle p-3">
              <FaWhatsapp size={24} /> {/* أيقونة الواتساب فقط */}
            </a>
            <a href="tel:+966532581822" className="btn btn-primary rounded-circle p-3">
              <FaPhone size={24} /> {/* أيقونة الهاتف فقط */}
            </a>
          </div>
        )}

        {/* أيقونة الرسالة */}
        <button className="btn btn-light rounded-circle p-3" onClick={toggleIcons}>
          <MdEmail size={24} /> {/* أيقونة الرسالة */}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
