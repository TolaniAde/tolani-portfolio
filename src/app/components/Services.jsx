import "../styles/services.css";
import services from "../data/services";

export default function Services() {
  return (
    <section className="services" id="services">
      <h4>My Services</h4>

      <h2>How I Can Help You</h2>

      <p className="services-intro">
        I combine technology, creativity, and problem-solving to build
        digital products and create content that delivers real value.
      </p>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <Icon />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}