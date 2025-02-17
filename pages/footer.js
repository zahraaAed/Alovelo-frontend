// components/Footer.js
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Row */}
      <div className={styles.footerTop}>
        {/* Column 1: Logo */}
        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>
            <Image
              src="/assets/white-logo-edit.png"
              alt="Alovelo Logo"
              width={250}
              height={100}
              className={styles.logoImage}
              unoptimized
            />
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className={styles.footerColumn}>
          <h4>NAVIGATION</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3: Quick Action */}
        <div className={styles.footerColumn}>
          <h4>Quick Action</h4>
          <ul>
            <li>Booking</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 4: Platform */}
        <div className={styles.footerColumn}>
          <h4>Platform</h4>
          <ul>
            <li>
              <Image
                src="/assets/🦆 icon _Instagram_.png"
                alt="Instagram"
                width={25}
                height={25}
                unoptimized
              />
            </li>
            <li>
              <Image
                src="/assets/🦆 icon _Facebook Square_.png"
                alt="Facebook"
                width={25}
                height={25}
                unoptimized
              />
            </li>
            <li>
              <Image
                src="/assets/🦆 icon _What's App_.png"
                alt="WhatsApp"
                width={25}
                height={25}
                unoptimized
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Middle Row: Icons (Location, Phone, Email) */}
      <div className={styles.footerIcons}>
        <div title="Location">
          <Image
            src="/assets/image 21.png"
            alt="Location Icon"
            width={35}
            height={35}
            unoptimized
          />
        </div>
        <div title="Phone">
          <Image
            src="/assets/image 20.png"
            alt="Phone Icon"
            width={35}
            height={35}
            unoptimized
          />
        </div>
        <div title="Email">
          <Image
            src="/assets/image 19.png"
            alt="Email Icon"
            width={35}
            height={35}
            unoptimized
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className={styles.footerBottom}>&copy; All Rights Reserved</div>
    </footer>
  );
}
