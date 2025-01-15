import { cn } from "@/lib/utils";
import React from "react";
import styles from "./privacy.module.css";
import { permissions } from "@/constant/faqs";
const Privacy = () => {
  return (
    <div className='min-h-screen  xl:max-w-[1024px] mx-auto pt-[50px] max-xl:px-6  max-w-[768px] pb-2 '>
      <article className={styles.prose}>
        <h1 className='text-[64px] font-bold mb-8 max-sm:text-[40px]'>
          Privacy Policy for CRXEmulator
        </h1>
        <span className='text-xl font-medium'>
          Effective Date: Jan 15, 2025
        </span>
        <span className='text-xl font-medium'>Last Updated: Jan 15, 2025</span>
        <h2 className={cn("mt-[28px]", styles.heading)}>Introduction</h2>
        <p className='pt-6'>
          At CRXEmulator, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines the data we
          collect, how it is used, and your rights concerning your information.
          By using CRXEmulator, you agree to the terms of this Privacy Policy.
          Policy.
        </p>
        <h2 className={cn("mt-[28px]", styles.heading)}>
          Information We Collect
        </h2>
        <p>
          CRXEmulator is designed to operate with minimal data collection.
          However, to ensure functionality and improve our services, we may
          collect the following types of information:
        </p>
        <h3 className={styles.subheading}>1. Non-Personal Information</h3>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>Browser version and type</li>Operating system
          <li className='mt-4'>Operating system</li>
          <li className='mt-4'>
            General usage statistics (e.g., the number of extensions installed
            using CRXEmulator)
          </li>
        </ul>
        <h3 className={styles.subheading}>2. Permissions Access</h3>
        <p>
          CRXEmulator requests permissions only as required by the extensions
          being installed. These permissions are strictly limited to those
          listed in our documentation, such as access to:
        </p>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='  mt-4 '>
            <code className='bg-[#f4f4f4] px-2 rounded-md'>http:///</code> and{" "}
            <code className='bg-[#f4f4f4] px-2 rounded-md'>https:///</code>
          </li>
          {permissions.map((item, i) => (
            <li key={i} className='    mt-3 '>
              <code className='bg-[#f4f4f4] px-2 rounded-md'>{item}</code>
            </li>
          ))}
          <li className='mt-3 '>
            <code className='bg-[#f4f4f4] px-2 rounded-md'>downloads</code>
          </li>
        </ul>
        <p>We do not store or share any data accessed by these permissions.</p>
        <h1 className={styles.heading}>How We Use Your Information</h1>
        <p>
          The information collected by CRXEmulator is used solely for the
          following purposes:
        </p>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>
            To enable and optimize the installation of extensions.
          </li>
          <li className='mt-4'>
            To diagnose issues and improve the performance of the extension.
          </li>
          <li className='mt-4'>
            To ensure compatibility and security for installed extensions.
          </li>
        </ul>
        <h2 className={cn("!mt-[28px]", styles.heading)}>
          How We Protect Your Information
        </h2>
        <p className='!mb-4'>
          We implement industry-standard security measures to protect your
          information from unauthorized access, disclosure, or misuse.
          CRXEmulator does not store sensitive user data, minimizing risks
          associated with data breaches.
        </p>
        <h2 className={cn("!mt-[28px]", styles.heading)}>
          Third-Party Extensions
        </h2>
        <p className='!mb-4'>
          CRXEmulator facilitates the installation of third-party .crx files. We
          are not responsible for the data collection, usage, or privacy
          practices of these third-party extensions. We encourage users to
          review the privacy policies of extensions they install.
        </p>
        <h2 className={cn("!mt-[28px]", styles.heading)}>
          Data Sharing and Disclosure
        </h2>
        <p className='!mb-4'>
          CRXEmulator does not sell, rent, or share your personal data with
          third parties. We may disclose non-personal usage statistics in
          aggregate form to improve our services.
        </p>
        <h2 className={cn("!mt-[28px]", styles.heading)}>Cookies</h2>
        <p className='!mb-4'>
          CRXEmulator does not use cookies or any similar tracking technologies.
        </p>
        <h2 className={cn("!mt-[28px]", styles.heading)}>Your Rights</h2>
        <p className='!mb-4'>
          As a user of CRXEmulator, you have the following rights: Policy.
        </p>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>
            <strong>Access:</strong>You may request access to any non-personal
            data collected during your use of CRXEmulator.
          </li>
          <li className='mt-4'>
            <strong>Deletion:</strong> You can uninstall CRXEmulator at any time
            to stop any further data collection.
          </li>
          <li className='mt-4'>
            <strong> Consent Withdrawal:</strong> By uninstalling the extension,
            you withdraw your consent for CRXEmulator to access permissions
            granted.
          </li>
          <li className='mt-4'>
            <strong>Children&apos;s Privacy</strong> CRXEmulator is not intended
            for use by individuals under the age of 13. We do not knowingly
            collect personal data from children.
          </li>
        </ul>
        <h2 className={cn("!mt-[28px]", styles.heading)}>
          Changes to This Privacy Policy
        </h2>
        <p className='!mb-4'>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the &quot;Last Updated&quot; date will be
          revised accordingly. We encourage you to review this Privacy Policy
          periodically.
        </p>
        <h2 className={cn("!mt-[28px]", styles.heading)}>8. Contact Us</h2>
        <p className='!mb-5'>
          If you have any questions or concerns about this Privacy Policy or
          CRXEmulator’s data practices, please contact us at:
        </p>
        <p className='!mb-5'>Email: support@autorefresh.io</p>
        <p className='!mb-5'>Address: </p>
        <p className='!mb-5'>
          By using CRXEmulator, you acknowledge that you have read and
          understood this Privacy Policy.
        </p>
      </article>
    </div>
  );
};

export default Privacy;
