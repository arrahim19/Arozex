import Link from "next/link";

const comparisonRows = [
  {
    feature: "Installation",
    indoor: "Indoor environments",
    outdoor: "Outdoor environments",
  },
  {
    feature: "Brightness",
    indoor: "600-1,200 Nits",
    outdoor: "4,500-7,000+ Nits",
  },
  {
    feature: "Pixel Pitch",
    indoor: "P1.25 - P3",
    outdoor: "P3 - P10",
  },
  {
    feature: "Weather Resistance",
    indoor: "Not Waterproof",
    outdoor: "IP65/IP66 Waterproof",
  },
  {
    feature: "Viewing Distance",
    indoor: "Short Distance",
    outdoor: "Long Distance",
  },
  {
    feature: "Best Applications",
    indoor: "Offices, Conference Rooms, Shopping Malls, Showrooms",
    outdoor: "Billboards, Building Facades, Stadiums, Roadsides",
  },
  {
    feature: "Maintenance",
    indoor: "Easy Front/Rear Access",
    outdoor: "Weather-Protected Maintenance",
  },
  {
    feature: "Power Consumption",
    indoor: "Lower",
    outdoor: "Higher",
  },
  {
    feature: "Sunlight Visibility",
    indoor: "Moderate",
    outdoor: "Excellent",
  },
  {
    feature: "Typical Lifespan",
    indoor: "Up to 100,000 Hours",
    outdoor: "Up to 100,000 Hours",
  },
];

export function IndoorOutdoorComparisonSection() {
  return (
    <section
      className="indoor-outdoor-section"
      aria-labelledby="indoor-outdoor-comparison-title"
    >
      <div className="indoor-outdoor-section__inner">
        <div className="indoor-outdoor-section__header">
          <span className="indoor-outdoor-section__eyebrow">
            Indoor vs outdoor LED display guide
          </span>
          <h2 id="indoor-outdoor-comparison-title">
            Indoor vs Outdoor LED Display: Which One Is Right for Your Business?
          </h2>
          <p>
            Choosing between an indoor and outdoor LED display depends on your installation
            environment, viewing distance, brightness requirements, weather conditions, and
            business objectives. Understanding the key differences will help you select the
            most suitable LED display solution for reliable performance, excellent image
            quality, and long-term value.
          </p>
        </div>

        <div className="indoor-outdoor-section__table-wrap">
          <div className="indoor-outdoor-section__table-scroll">
            <table className="indoor-outdoor-section__table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Indoor LED Display</th>
                  <th scope="col">Outdoor LED Display</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row">{row.feature}</th>
                    <td>{row.indoor}</td>
                    <td>{row.outdoor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="indoor-outdoor-section__content-grid">
          <article className="indoor-outdoor-section__content-panel">
            <h3>Indoor LED Display</h3>
            <p>
              Indoor LED displays are designed for environments where viewers are located at
              a close viewing distance and lighting conditions are controlled. They provide
              exceptional image clarity, vivid colors, high resolution, and smooth video
              playback, making them ideal for conference rooms, retail stores, shopping
              malls, corporate offices, hotels, educational institutions, television
              studios, exhibition centers, and indoor digital signage. Lower pixel pitch
              options such as P1.25, P1.53, P1.86, P2, and P2.5 deliver crystal-clear
              visuals for audiences viewing the screen from short distances. Because indoor
              LED screens usually operate in protected environments, they can focus more on
              fine detail, color consistency, slim installation design, and premium image
              performance for brand presentations, meeting rooms, product showcases, and
              customer-facing spaces.
            </p>
          </article>

          <article className="indoor-outdoor-section__content-panel">
            <h3>Outdoor LED Display</h3>
            <p>
              Outdoor LED displays are engineered to withstand harsh weather conditions while
              maintaining excellent visibility under direct sunlight. With high brightness
              levels, waterproof cabinets, durable construction, and advanced protection
              against dust, rain, and heat, outdoor LED displays are widely used for
              advertising billboards, commercial buildings, stadiums, transportation hubs,
              public information displays, event venues, and roadside advertising. Pixel
              pitches such as P3, P4, P5, P6, and P8 are commonly selected depending on the
              required viewing distance and installation location. These displays are built
              for stronger impact across longer distances, stable performance in changing
              weather, and continuous operation for businesses that need high-visibility
              digital communication in public spaces.
            </p>
          </article>
        </div>

        <article className="indoor-outdoor-section__choice">
          <h3>Which LED Display Should You Choose?</h3>
          <p>
            The right LED display depends on your business environment, installation
            location, audience viewing distance, content type, and budget. Businesses
            requiring close-range viewing and premium image quality should choose an indoor
            LED display, while outdoor advertising and public communication require
            high-brightness, weatherproof outdoor LED displays. Selecting the correct pixel
            pitch, brightness level, control system, and installation method ensures the best
            long-term performance and return on investment. A professional site survey can
            also prevent costly mistakes by matching the screen specification with the
            project environment before purchase.
          </p>
        </article>

        <aside className="indoor-outdoor-section__callout" aria-labelledby="led-display-choice-help">
          <div>
            <h3 id="led-display-choice-help">Need Help Choosing the Right LED Display?</h3>
            <p>
              Arozex Technologies helps businesses select the most suitable indoor or
              outdoor LED display based on project requirements, viewing distance,
              installation environment, content type, and budget. Our experienced engineers
              provide complete consultation, display planning, pixel pitch recommendations,
              professional installation, CMS configuration, testing, calibration, 1-3 years
              warranty, and reliable after-sales support to ensure the best possible display
              solution.
            </p>
          </div>
          <div className="indoor-outdoor-section__actions">
            <Link href="/contact/" className="indoor-outdoor-section__button indoor-outdoor-section__button--primary">
              Get Free Consultation
            </Link>
            <Link href="/contact/" className="indoor-outdoor-section__button indoor-outdoor-section__button--secondary">
              Request a Quotation
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
