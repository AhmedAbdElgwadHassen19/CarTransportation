import imagCard1 from "../../public/IMG-20250119-WA0038.jpg"
import imagCard2 from "../../public/IMG-20250119-WA0035.jpg"
import imagCard3 from "../../public/IMG-20250119-WA0037.jpg"
import imagCard4 from "../../public/IMG-20250119-WA0034.jpg"
import imagCard5 from "../../public/IMG-20250119-WA0039.jpg"
import imagCard6 from "../../public/IMG-20250119-WA0040.jpg"
import {useEffect  } from "react"     
import AOS from "aos"
import 'aos/dist/aos.css'
const CarServices = () => {
  // Animation  AOS
      useEffect(()=>{
          AOS.init({
              duration: 2000,
              offset : 200,
              easing : "ease-in-out",
              mirror : true,
              once: false
          })
      },[])
  return (
    <>
    <div className="container mt-5">
          <div className="row">
            <div data-aos = "fade-up-right" className="services col-lg-4 ">
                <img className="img-fluid" src={imagCard1} alt="" />
                <div className="card-body bg-dark pt-3">
                  <h5 className="card-title text-center text-light pb-3">سحب السيارات من الجمارك</h5>
                  <p className="card-text text-center text-light">خدمات النقل السريعة والفعّالة للسيارات القادمة من الجمارك إلى</p>
                  <p className="card-text text-center text-light">الأماكن المطلوبة، مع الالتزام بالقوانين والتشريعات.</p>
                  <button className="btn btn-warning me-3 mb-3"> <a href="https://wa.me/966532581822" className="text-decoration-none text-dark"> اتصل بنا </a></button>
                </div>
            </div>

            <div data-aos = "fade-up" className="services col-lg-4 ">
                <img className="img-fluid" src={imagCard2} alt="" />
                <div className="card-body bg-dark pt-3">
                  <h5 className="card-title text-center text-light pb-3">نقل بين المدن والأحياء</h5>
                  <p className="card-text text-center text-light">نحن هنا لتوفير حلاً موثوقًا لنقل سيارتك بأمان من مكان لآخر،</p>
                  <p className="card-text text-center text-light mb-3">سواء كان ذلك بين المدن أو داخل الأحياء.</p>
                  <button className="btn btn-warning me-3 mb-3"><a href="https://wa.me/966532581822" className="text-decoration-none text-dark"> اتصل بنا </a></button>
                </div>
            </div>

            <div data-aos = "fade-up-left" className="services col-lg-4 ">
                <img className="img-fluid" src={imagCard3} alt="" />
                <div className="card-body bg-dark pt-3">
                  <h5 className="card-title text-center text-light pb-3">نقل سيارات مصدومة ومعطلة</h5>
                  <p className="card-text text-center text-light mb-4">  تقديم خدمات النقل المحترفة للسيارات التي تعاني من أعطال أو تضررات.</p>
                  <button className="btn btn-warning me-3 mb-3"> <a href="https://wa.me/966532581822" className="text-decoration-none text-dark"> اتصل بنا </a></button>
                </div>
            </div>
          </div>
      </div>

        <div className="container mt-5">
        <div className="row">
          <div data-aos = "fade-up-right" className="services col-lg-4 ">
              <img className="img-fluid" src={imagCard4} alt="" />
              <div className="card-body bg-dark pt-3">
                <h5 className="card-title text-center text-light pb-3">سحب السيارات من الجمارك</h5>
                <p className="card-text text-center text-light">خدمات النقل السريعة والفعّالة للسيارات القادمة من الجمارك إلى</p>
                <p className="card-text text-center text-light">الأماكن المطلوبة، مع الالتزام بالقوانين والتشريعات.</p>
                <button className="btn btn-warning me-3 mb-3"> <a href="https://wa.me/0532581822" className="text-decoration-none text-dark"> اتصل بنا </a> </button>
              </div>
          </div>

          <div data-aos = "fade-up" className="services col-lg-4 ">
              <img className="img-fluid" src={imagCard5} alt="" />
              <div className="card-body bg-dark pt-3">
                <h5 className="card-title text-center text-light pb-3">نقل بين المدن والأحياء</h5>
                <p className="card-text text-center text-light">نحن هنا لتوفير حلاً موثوقًا لنقل سيارتك بأمان من مكان لآخر،</p>
                <p className="card-text text-center text-light mb-3">سواء كان ذلك بين المدن أو داخل الأحياء.</p>
                <button className="btn btn-warning me-3 mb-3"> <a href="https://wa.me/966532581822" className="text-decoration-none text-dark"> اتصل بنا </a></button>
              </div>
          </div>

          <div data-aos = "fade-up-left" className="services col-lg-4 ">
              <img className="img-fluid" src={imagCard6} alt="" />
              <div className="card-body bg-dark pt-3">
                <h5 className="card-title text-center text-light pb-3">نقل سيارات مصدومة ومعطلة</h5>
                <p className="card-text text-center text-light mb-4">  تقديم خدمات النقل المحترفة للسيارات التي تعاني من أعطال أو تضررات.</p>
                <button className="btn btn-warning me-3 mb-3"><a href="https://wa.me/966532581822" className="text-decoration-none text-dark"> اتصل بنا </a></button>
              </div>
          </div>
        </div>
        </div>
</>
  );
  }
  export default CarServices
