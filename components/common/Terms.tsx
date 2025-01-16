import React from "react";
import styles from "./privacy.module.css";
import { cn } from "@/lib/utils";
import { permissions } from "@/constant/faqs";
const Terms = () => {
  return (
    <div className='min-h-screen  xl:max-w-[1024px] mx-auto pt-[50px] max-xl:px-6  max-w-[768px] pb-2 '>
      <article className={styles.prose}>
        <h1 className='text-[64px] font-bold mb-8 max-sm:text-[40px]'>
          Terms of Service for CRXEmulator
        </h1>
        <span className='text-xl font-medium block mb-2'>
          Effective Date: Jan 1, 2025
        </span>
        <span className='text-xl font-medium'>Last Updated: Jan 1, 2025</span>
        <h2 className={cn("!mt-[28px]", styles.heading)}>
          1. Acceptance of Terms
        </h2>
        <p>
          By installing or using CRXEmulator, you agree to comply with and be
          bound by these Terms of Service. If you do not agree to these terms,
          you must not use CRXEmulator.
        </p>
        <h2 className={cn("mt-[28px]", styles.heading)}>
          2. Description of Service
        </h2>
        <p>
          CRXEmulator is a Chrome extension designed to facilitate the
          installation of .crx files on Chromium-based browsers. The service is
          provided &quot;as is&quot; without warranties of any kind, and we
          reserve the right to modify or discontinue the service at any time
          without prior notice.
        </p>
        <h3 className={styles.subheading}>3. User Responsibilities</h3>
        <p>By using CRXEmulator, you agree to:</p>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>Only use the extension for lawful purposes.</li>
          <li className='mt-4'>
            Comply with all applicable local, state, national, and international
            laws and regulations.
          </li>
          <li className='mt-4'>
            Take responsibility for reviewing and understanding the permissions
            and privacy policies of third-party extensions installed using
            CRXEmulator.
          </li>
          <li className='mt-4'>
            Not attempt to reverse-engineer, decompile, or tamper with
            CRXEmulator’s code or functionality.
          </li>
        </ul>
        <h3 className={styles.subheading}>4. Permissions and Access</h3>
        <p>
          CRXEmulator operates by requesting specific permissions from your
          browser. These permissions are strictly limited to enabling the
          functionality of the installed extensions. The permissions include:
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
        <p>
          We are not responsible for how third-party extensions utilize these
          permissions. Users are encouraged to review each extension’s
          permissions before installation.
        </p>
        <h1 className={styles.heading}>5. Third-Party Content</h1>
        <p>
          CRXEmulator facilitates the installation of third-party extensions
          (.crx files). We do not endorse, guarantee, or assume responsibility
          for the content, functionality, or security of third-party extensions.
          Any issues arising from the use of such extensions must be addressed
          with the respective developers or providers.
        </p>

        <h2 className={cn("!mt-[28px]", styles.heading)}>
          6. Limitation of Liability
        </h2>
        <p className='!mb-4'>
          To the fullest extent permitted by law, CRXEmulator and its developers
          shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising from:
        </p>
        <ul className='list-disc pl-[44px] mb-2'>
          <li className='mt-4'>The use or inability to use CRXEmulator.</li>
          <li className='mt-4'>
            The installation or use of third-party extensions.
          </li>
          <li className='mt-4'>
            Data loss or unauthorized access resulting from the use of
            CRXEmulator.
          </li>
        </ul>
        <h2 className={cn("!mt-[28px]", styles.heading)}>
          7. Modification and Termination
        </h2>
        <p className='!mb-4'>
          We reserve the right to modify, suspend, or terminate CRXEmulator or
          any part of its functionality at any time without notice. These Terms
          of Service may also be updated periodically, and continued use of
          CRXEmulator indicates acceptance of the revised terms.
        </p>
        <h2 className={cn("!mt-[28px]", styles.heading)}>8. Indemnification</h2>
        <p className='!mb-4'>
          You agree to indemnify and hold harmless CRXEmulator, its developers,
          and affiliates from any claims, damages, or expenses (including legal
          fees) arising out of your use of CRXEmulator or violations of these
          Terms of Service.
        </p>
        <h2 className={cn("!mt-[28px]", styles.heading)}>
          9. Intellectual Property
        </h2>
        <p className='!mb-4'>
          CRXEmulator, including its design, logo, and underlying code, is the
          intellectual property of BetterLogic Ltd. You may not reproduce,
          modify, or distribute any part of the service without explicit written
          permission.
        </p>
        <h2 className={cn("!mt-[28px]", styles.heading)}>10. Governing Law</h2>
        <p className='!mb-4'>
          These Terms of Service shall be governed by and construed in
          accordance with the laws of the United Kingdom. Any disputes arising
          out of or related to these terms shall be resolved exclusively in the
          courts of London, United Kingdom.
        </p>

        <h2 className={cn("!mt-[28px]", styles.heading)}>
          11. Contact Information
        </h2>
        <p className='!mb-5'>
          For any questions or concerns about these Terms of Service, please
          contact us at:
        </p>
        <p className='!mb-5'>Email: support@crxemulator.com </p>
        <p className='!mb-5'>
          By using CRXEmulator, you acknowledge that you have read, understood,
          and agree to these Terms of Service.
        </p>
      </article>
    </div>
  );
};

export default Terms;
