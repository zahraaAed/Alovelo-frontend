// pages/services.js
import { useEffect, useState } from "react";
import Image from "next/image";
import pageStyles from "../styles/Services.module.css"; 
import ServiceRow from "../component/ServicesRow"; // match your actual folder name!

export default function Services() {
  const [servicesData, setServicesData] = useState(null);
  const API_URL = "http://localhost:5000/api";

  useEffect(() => {
    fetch(`${API_URL}/services/get`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.length === 0) {
          console.error("No services data found");
          return;
        }

        // pick the newest
        const latestService = data.reduce((prev, current) =>
          new Date(prev.createdAt) > new Date(current.createdAt) ? prev : current
        );
        setServicesData(latestService);
      })
      .catch((err) => console.error("Error fetching services content:", err));
  }, []);

  if (!servicesData) return <p>Loading...</p>;

  // Destructure
  const { heroImage, heroTitle, description, servicesList = [] } = servicesData;

  return (
    <div>
      {/* Top hero image */}
      <Image
        src={
          heroImage
            ? `http://localhost:5000${heroImage}`
            : "/assets/services-image.png"
        }
        alt="Services Hero"
        width={100}
        height={100}
        className={pageStyles.heroImage}
        unoptimized
      />

      <div className={pageStyles.servicesContainer}>
        {/* Hero Section: large text paragraph */}
        <section className={pageStyles.hero}>
          <p className={pageStyles.heroText}>
            {description || "Signature Cocktails, Dance-Floor Surprises..."}
          </p>
        </section>

        {/* Services Snippet: heading + mapped rows */}
        <div className={pageStyles.servicesSnippet}>
          <p className={pageStyles.servicesHeading}>
            {heroTitle || "Our Services"}
          </p>

          {servicesList.length > 0 ? (
            servicesList.map((service, index) => (
              <ServiceRow key={index} service={service} index={index} />
            ))
          ) : (
            <p>No services available</p>
          )}
          {/* Removed the extra <ServiceRow /> so we only render from the map */}
        </div>
      </div>
    </div>
  );
}
