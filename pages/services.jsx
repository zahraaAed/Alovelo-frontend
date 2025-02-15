import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Services.module.css"; // ✅ Import CSS Module

export default function Services() {
  const [servicesData, setServicesData] = useState(null);
  const API_URL = "http://localhost:5000/api";

  useEffect(() => {
    fetch(`${API_URL}/services/get`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          console.error("No services data found");
          return;
        }

        // ✅ Option 1: Get the latest added service (newest createdAt)
        const latestService = data.reduce((prev, current) =>
          new Date(prev.createdAt) > new Date(current.createdAt) ? prev : current
        );

        // ✅ Option 2: Use a specific `_id` if needed
        // const specificService = data.find(item => item._id === "67ac1985ae9ab56334afe417");

        setServicesData(latestService); // ✅ Use the latest service
      })
      .catch((err) => console.error("Error fetching services content:", err));
  }, []);

  if (!servicesData) return <p>Loading...</p>;

  return (
    <div className={styles.servicesContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src={`http://localhost:5000${servicesData.heroImage}`}
          alt="Services Hero"
          width={1200}
          height={600}
          unoptimized
        />
        <h1>{servicesData.heroTitle}</h1>
        <p>{servicesData.description}</p>
      </section>

      {/* Services List */}
      <section className={styles.serviceList}>
        {servicesData.servicesList?.length > 0 ? (
          servicesData.servicesList.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <Image
                src={`http://localhost:5000${service.icon}`}
                alt="Service Icon"
                width={100}
                height={100}
                unoptimized
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))
        ) : (
          <p>No services available.</p>
        )}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Copyright © All Rights Reserved.</p>
      </footer>
    </div>
  );
}
