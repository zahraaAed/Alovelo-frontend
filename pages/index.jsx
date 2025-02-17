import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Header from "@/Component/Header.jsx";
import Link from "next/link";
import Footer from "@/Component/Footer.jsx";

export default function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/home/homecontent")
      .then((res) => res.json())
      .then((data) => {
        setHomeData(data[0]); // Assuming only one document exists
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!homeData) return <p>Loading...</p>;

  return (
    <div>
      <Head>
        <title>Alovelo Home</title>
      </Head>
      <Header />
      {/* Hero Section */}
      <section className={styles.heroSection}>
      <Image 
  src={`http://localhost:5000${homeData.imageHome}`} 
  alt="Hero Image" 
  width={1000}
  height={300} 
  className={styles.heroImage} 
/>
<div className={styles.hero}>
<div className={styles.heroContent}>
        <h1>{homeData.subtitlehomeHeader}</h1>
        <p className="hero-text">{homeData.contenthomeHeader}</p>
        <Link href="/about" passHref>
  <button className={styles.boutton}>
    {homeData.ctabtnhomeHeader}
  </button>
</Link>
        </div>
        </div>
      </section>

      {/* Events Section */}
      <section class={styles.eventSection} >
        <img src={`http://localhost:5000${homeData.imageSection}`} alt="Event" className={styles.eventImage}  />
        {/*<h2>{homeData.titleSection}</h2>*/}
        <p className={styles.eventstext} >{homeData.contentSection}</p>
      </section>

      {/* Promotional Section */}
      <section className={styles.promotion}>
        <h2>{homeData.titlePromotionalSection}</h2>
        <button >{homeData.ctabtnPromotionalSection}</button>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className={styles.galleryContainer}>
          {homeData.galleryImages.map((img, index) => (
            <img key={index} src={`http://localhost:5000${img}`} alt={`Gallery ${index}`} width="300px" />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
