import { Container, Row, Col } from "react-bootstrap";
import { FaCar, FaLock, FaDollarSign, FaCogs, FaCheckCircle, FaStar } from "react-icons/fa";

const WhyUs = () => {
  const features = [
    { icon: <FaCar />, title: "احترافية في الخدمة", description: "نفتخر بفريق محترف من الفنيين والسائقين المدربين، ملتزمين بتقديم خدمات نقل سيارات مصدومة ومعطلة بأعلى معايير الاحتراف." },
    { icon: <FaLock />, title: "تغطية واسعة", description: "تقديم خدمات النقل بين المدن والأحياء، ونقل السيارات من وإلى الجمارك أو صالات البيع، مع توفير تغطية شاملة في جميع المناطق." },
    { icon: <FaCheckCircle />, title: "سلامة السيارة", description: "باستخدام أحدث التقنيات والأساليب، نهتم بسلامة السيارة أثناء عمليات الرفع والنقل، مع التزامنا بمعايير الأمان." },
    { icon: <FaCogs />, title: "تكنولوجيا حديثة", description: "نحن دائماً في تطور، ونستخدم أحدث التكنولوجيا والمعدات، بما في ذلك سطحات هيدروليكية، لتوفير خدمات نقل متطورة." },
    { icon: <FaStar />, title: "تقدير فوري", description: "نقدم تقديرًا فوريًا لحوادث المرور، مما يساعد عملائنا في اتخاذ القرارات بشكل سريع ومستنير. نتميز بشفافية في جميع عمليات الخدمة." },
    { icon: <FaDollarSign />, title: "أسعار مناسبة", description: "نلتزم بتقديم خدمات بأسعار ميسرة، مما يجعل نقل السيارات ميسرًا لجميع عملائنا.." }
  ];

  return (
    <Container className="text-center my-5">
      <h1 className="fw-bold">لماذا نحن</h1>
      <h2 className="mt-5">سطحة لنقل السيارات المصطدمة والمعطلة</h2>
      <Row className="mt-4">
        {features.map((feature, index) => (
          <Col key={index} md={4} className="mb-4">
            <div className="p-4 border rounded shadow-lg">
              <div className="text-warning fs-2">{feature.icon}</div>
              <h5 className="mt-3 fw-bold">{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyUs;