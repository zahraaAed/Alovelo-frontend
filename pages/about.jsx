import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import Header from "@/Component/Header.jsx";

console.log("Styles Object:", styles);
console.log("Image Component:", Image);
console.log("Head Component:", Head);

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/about/get");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Raw API Response:", JSON.stringify(data, null, 2)); // Added here
        if (data.length > 0) {
          setAboutData(data[0]);
          console.log("About Data:", JSON.stringify(data[0], null, 2)); // Added here
        } else {
          setError("No data available");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading || !aboutData) {
    console.log("Data is loading or not available yet.");
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Alovelo - About Us</title>
      </Head>
      <Header />
      {/* Hero Section */}
      <Image
        src={`http://localhost:5000/images/${aboutData.hero_image
          .split("/")
          .pop()}`}
        alt="About Hero"
        width={1146}
        height={768}
        className={styles.heroImage}
      />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{aboutData?.hero_title || "Default Title"}</h1>
          <p>{aboutData?.hero_content || "Default content goes here."}</p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.visionMission}>
        <div>
          <h1>VISION & MISSION</h1>
        </div>

        <div className={styles.textContainer}>
          <div className={styles.missionVissionContainer}>
            <div className={styles.vision}>
              <h2>Vision</h2>
              <h3>{aboutData?.vision_title || "Our Vision"}</h3>
              <p>
                {aboutData?.vision_content || "Vision description goes here."}
              </p>
            </div>
            <div className={styles.mission}>
              <h2>Mission</h2>
              <h3>{aboutData?.mission_title || "Our Mission"}</h3>
              <p>
                {aboutData?.mission_content || "Mission description goes here."}
              </p>
            </div>
          </div>
          <Image
            src={`http://localhost:5000${
              aboutData?.main_image?.startsWith("/")
                ? aboutData.main_image
                : "/" + aboutData.main_image
            }`}
            alt="Vision & Mission"
            width={800}
            height={500}
            className={styles.missionImage}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>WHAT MAKES US DIFFERENT</h2>
        <div className={styles.featureContainer}>
          {aboutData?.features?.length > 0 ? (
            aboutData.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <Image
                  src={`http://localhost:5000${
                    feature.icon?.startsWith("/")
                      ? feature.icon
                      : "/" + feature.icon
                  }`}
                  alt={feature.title || "Feature"}
                  width={100}
                  height={100}
                />
                <p>{feature.title || "Feature Title"}</p>
              </div>
            ))
          ) : (
            <p>No features available.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Alovelo. All Rights Reserved.</p>
      </footer>
    </>
  );
}
