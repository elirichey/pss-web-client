import Link from "next/link";

export default function CallToAction(props) {
  return (
    <div id="call-to-action">
      <div className="container-sm column">
        <h3>Quality Service Guaranteed</h3>
        <p>
          Whatever your needs are, from turn-key police vehicle builds, to
          product replacement, to upgrades or repairs, to completely new fleets,
          Passive Security Solutions will get you and your vehicles in-service
          in a timely and professional manner.
        </p>

        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </div>
    </div>
  );
}
