
import "../styles/services.css";
import services from "../data/services";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-heading">
          <span className="services-label">WHAT I DO</span>

          <h2>How I Can Help You</h2>

          <p className="services-intro">
            Creative solutions for the web, content, and digital growth.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.title || index}
                style={{ "--card-index": index }}
              >
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon aria-hidden="true" />
                  </div>

                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-card-line" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
