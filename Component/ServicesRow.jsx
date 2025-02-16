// component/ServiceRow.js
import Image from "next/image";
import styles from "./ServicesRow.module.css";

export default function ServicesRow({ service, index }) {
  const isEven = index % 2 === 0;

  // Provide fallback if there's no icon, title, or description
  const iconUrl = service.icon
    ? `http://localhost:5000${service.icon}`
    : "/assets/fallback.png";

  const title = service.title || "Default Service Title";
  const description =
    service.description || "Default service description...";

  return (
    <div className={styles.serviceRow}>
      {isEven ? (
        // Even row => icon on the left, text on the right
        <>
          <div className={styles.serviceLeft}>
            <Image
              src={iconUrl}
              alt="Service Icon"
              width={300}
              height={300}
              className={styles.serviceIcon}
              unoptimized
            />
            <div className={styles.serviceText}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className={styles.serviceRight} />
        </>
      ) : (
        // Odd row => text on the left, icon on the right
        <>
          <div className={styles.serviceLeft}>
            <div className={styles.serviceText}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className={styles.serviceRight}>
            <Image
              src={iconUrl}
              alt="Service Icon"
              width={300}
              height={300}
              className={styles.serviceIcon}
              unoptimized
            />
          </div>
        </>
      )}
    </div>
  );
}
