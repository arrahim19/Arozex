const benefitSections = [
  {
    title: "Improve Brand Visibility",
    body: (
      <>
        <strong>LED displays</strong> create a strong visual presence with vibrant colors,
        high brightness, and dynamic content that attracts attention instantly. Whether
        installed in retail stores, shopping malls, corporate offices, hotels, or outdoor
        locations, they help businesses strengthen brand recognition, present promotions
        with authority, and communicate more effectively than traditional printed signage.
        This makes the brand easier to notice in busy commercial environments where
        customers make quick decisions.
      </>
    ),
  },
  {
    title: "Display Dynamic Content Instantly",
    body: (
      <>
        Unlike conventional banners or posters, LED displays allow businesses to update
        advertisements, promotions, announcements, videos, menus, and live information
        instantly. This flexibility enables organizations to respond quickly to marketing
        campaigns, seasonal offers, customer demands, and operational changes without
        additional printing costs or delays in content production. Marketing teams can keep
        messaging current, relevant, and consistent across daily business activity.
      </>
    ),
  },
  {
    title: "Cost-Effective Long-Term Investment",
    body: (
      <>
        Although LED displays require an initial investment, they provide significant
        long-term value by reducing recurring printing expenses and minimizing maintenance
        costs. Their durability, energy efficiency, and long operational lifespan make them
        a smart <strong>digital advertising solution</strong> for modern businesses that
        want better visibility and a stronger return from every communication channel. Over
        time, one display can support many campaigns, messages, departments, and audiences.
      </>
    ),
  },
  {
    title: "Energy-Efficient & Reliable Performance",
    body: (
      <>
        Modern LED display technology combines exceptional brightness, accurate color
        reproduction, and high refresh rates while maintaining efficient power consumption.
        Premium components, intelligent control systems, proper calibration, and stable
        power management ensure reliable performance, consistent image quality, and
        extended service life for demanding indoor and outdoor applications. This balance
        helps reduce heat, support continuous operation, and protect the overall display
        system.
      </>
    ),
  },
  {
    title: "Suitable for Every Industry",
    body: (
      <>
        LED displays are widely used in retail stores, shopping malls, restaurants, hotels,
        hospitals, educational institutions, corporate offices, airports, conference rooms,
        event venues, stadiums, control rooms, and outdoor advertising. They provide an
        engaging, professional, and highly effective communication platform for businesses
        that need clear messaging, premium presentation, and flexible digital content. From
        customer engagement to wayfinding and public information, LED displays adapt to
        almost any environment.
      </>
    ),
  },
  {
    title: "Complete LED Display Solutions from Arozex Technologies",
    body: (
      <>
        At <strong>Arozex Technologies</strong>, we do more than simply supply LED display
        products. We provide complete LED display solutions, including consultation, site
        survey, display planning, pixel pitch selection, genuine product supply, controller
        configuration, CMS software setup, professional installation, testing, calibration,
        operator training, <strong>1&ndash;3 years warranty</strong>, preventive maintenance,
        and dependable after-sales support. Our experienced team ensures every LED display
        system is optimized for superior image quality, stable performance, energy
        efficiency, and long-term reliability. We align each project with the site,
        audience, viewing distance, and business goal.
      </>
    ),
  },
];

export function LedBenefitsSection() {
  return (
    <section className="led-benefits-section" aria-labelledby="led-benefits-title">
      <div className="led-benefits-section__inner">
        <div className="led-benefits-section__header">
          <span className="led-benefits-section__eyebrow">Business growth with digital display technology</span>
          <h2 id="led-benefits-title">Benefits of LED Display for Modern Businesses</h2>
          <p>
            Discover how modern LED display technology helps businesses improve
            communication, strengthen brand visibility, attract more customers, and deliver
            dynamic digital content with outstanding visual performance.
          </p>
        </div>

        <div className="led-benefits-section__article">
          {benefitSections.map((section, index) => (
            <article className="led-benefits-section__entry" key={section.title}>
              <span className="led-benefits-section__entry-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
