import imag1 from "../../public/IMG-20250119-WA0034.jpg"
import imag2 from "../../public/IMG-20250119-WA0035.jpg"
import {useEffect  } from "react"     
import AOS from "aos"
import 'aos/dist/aos.css'
import { IoMdCheckmark } from "react-icons/io"
import { VscCircle } from "react-icons/vsc"
import {FaWhatsapp} from "react-icons/fa"
function About (){
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

    return(
        <div>
                <div className="About container mt-5">
                    <div className="main-title text-center  pb-5 position-relative mb-4">
                        <h1 className="text-warning mt-5">خدمتنا</h1>
                    </div>
                    <h2 className="mb-5">سطحة جدة لنقل السيارات المصدومة والمعطلة</h2>
                    <div data-aos = "fade-up-right" className="row "> 
                        <div  data-aos = "fade-up-left" className= {`title-about col-lg-7 text-md-start mb-5`}>
                            <div className="text-about px-5">
                                <h2>خدماتنا تتضمن</h2>
                                <h5 className=" mt-4 text-black-50"><IoMdCheckmark color="rgb(240, 122, 25)" fontSize={"25px"} fontWeight={"800"}/> نقل السيارات المصدومة والمعطلة بأحدث تكنولوجيا الرفع والحماية </h5>
                                <h5 className=" text-black-50"><IoMdCheckmark color="rgb(240, 122, 25)" fontSize={"25px"} fontWeight={"800"}/>تقديم تقدير فوري لحوادث المرور مع شفافية تامة في كل عملية.</h5>
                                <h5 className="text-black-50"><VscCircle color="rgb(240, 122, 25)" fontSize={"25px"} fontWeight={"800"}/>تغطية واسعة، حيث ننقل سياراتك بين المدن والأحياء.</h5>
                                <h5 className="text-black-50"><VscCircle color="rgb(240, 122, 25)" fontSize={"25px"} fontWeight={"800"}/>احترافية في الخدمة مع طاقم فني مدرب وملتزم براحة وأمان سيارتك.</h5>
                                <h5 className="text-black-50 mt-4">نقل السيارات المصدومة والمعطلة بأحدث تكنولوجيا الرفع والحماية</h5>
                                <h5 className="text-black-50">تقديم تقدير فوري لحوادث المرور مع شفافية تامة في كل عملية.</h5>
                                <h5 className="text-black-50">تغطية واسعة، حيث ننقل سياراتك بين المدن والأحياء.</h5>
                                <h5 className="text-black-50">حترافية في الخدمة مع طاقم فني مدرب وملتزم براحة وأمان سيارتك.</h5>
                                <h5 className="text-black-50"></h5>
                            </div>
                        </div>

                            <div className="col-lg-5 mb-5">
                                <div className="image-About position-relative">
                                    <img className="img-fluid" src={imag1} alt="" />
                                </div>
                            </div>
                        </div>

                        <div data-aos = "fade-up-left" className="row ">
                            <div data-aos = "fade-up-right" className= {`title-about col-lg-7 text-md-start mb-5`}>
                                <div className="text-about px-5">
                                    <h2>لماذا نحن</h2>
                                    <h5 className="text-black-50">في سطحة، نؤمن بأن نقل السيارات يتطلب توازنًا فريدًا من بين الخبرة</h5>
                                    <h5 className="text-black-50">والكفاءة. تفخر شركتنا بأن تكون رفيقك الموثوق في رحلة نقل</h5>
                                    <h5 className="text-black-50">سيارتك، حيث نجمع بين الجودة والاحترافية بتقنيات حديثة.</h5>
                                </div>
                            </div>

                            <div className="col-lg-5 mb-5">
                                <div className="image-About2 position-relative d-flex">
                                    <img className="img-fluid w-50" src={imag2} alt="" />
                                    <img className="img-fluid w-50 mx-3" src={imag2} alt="" />
                                </div>
                            </div>
                        </div>
                        <h3 className="">اتصل بنا اليوم لتجربة خدمة نقل تتفوق عن العادة.</h3>
                        <div className="About-btn mt-3 mb-2"><button> <a href="https://wa.me/0532581822" className="text-decoration-none text-light"> تواصل معنا</a> <FaWhatsapp/></button></div>
                </div>
            </div>
    )
}
export default About 