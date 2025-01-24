import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <div className="hero-section text-white d-flex align-items-center">
      <Container className="text-center position-relative z-index-1">
        <h1 className="fw-bold ">سطحة جدة لنقل السيارات المصطدمة والمعطلة</h1>
        <p className="my-4" style={{fontSize:"20px" , fontWeight:"bold"}}>
        نفخر بتقديم خدمات متميزة لنقل مركباتك بكفاءة وأمان. سواء كنت بحاجة إلى نقل سيارة مصدومة أو معطلة بين المدن أو إلى وجهتك المفضلة، نحن هنا لضمان وصول مركبتك بأمان وفي أفضل حالة ممكنة
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="warning" className="px-4 py-2">
            <a href="https://wa.me/0532581822" className="text-decoration-none"> تواصل بنا</a>
          </Button>
          <Button variant="outline-light" className="px-4 py-2">
          <a href="https://wa.me/0532581822" className="text-decoration-none"> تواصل بنا</a>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;