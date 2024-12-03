import Hero from "../Hero/Hero";
import OurWork from "../../components/OurWork/OurWork";
import CallToAction from "../../components/CallToAction/CallToAction";

export default function FleetPage() {
  return (
    <section id="fleet" className="body body-column">
      <Hero id="fleet-hero" />

      <div id="fleet-intro">
        <div className="container-md py-30 column">
          <h1>
            FLEET VEHICLE EQUIPMENT OUTFITTING, INSTALLATIONS & REPAIR SERVICES
          </h1>
          <p className="intro-p">
            PSS is your one stop shop for your fleet and emergency serivce
            vehicle needs. Whether is it a repair part or a turn-key vehicle, we
            have what you need. We offer full-service installation services for
            both interior and exterior parts and accessories. For those who
            handle their own installations, we can provide you with all of the
            equipment you need to do it yourself too. We have been servicing
            fleet and emergency service vehicles of all shapes and sizes for the
            past 11 years in central Indiana and have continually delivered the
            highest quality results for each and every project.
          </p>
        </div>
      </div>

      <OurWork type="fleet" />

      <CallToAction />
    </section>
  );
}
