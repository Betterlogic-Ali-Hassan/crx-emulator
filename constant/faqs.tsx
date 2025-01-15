export const Faqs = [
  {
    id: 1,
    question: "Is CRXEmulator free to use?",
    answer:
      "Yes, CRXEmulator is completely free to use. There are no premium models, subscriptions, or hidden charges.",
  },
  {
    id: 2,
    question: "Do I need to enable Developer Mode to use CRXEmulator?",
    answer:
      "No, CRXEmulator eliminates the need for Developer Mode. It allows you to install .crx files directly through its intuitive interface without requiring advanced configurations.",
  },
  {
    id: 3,
    question: "How does CRXEmulator ensure security?",
    answer:
      "CRXEmulator runs installed extensions in a secure, sandboxed environment. This ensures extensions do not have unrestricted access to browser APIs or your personal data. Additionally, CRXEmulator performs file integrity checks to verify the safety of .crx files before installation.",
  },
  {
    id: 4,
    question: "Can I install any .crx file with CRXEmulator?",
    answer:
      "No, CRXEmulator supports only .crx files that request permissions and APIs within its supported list. If a .crx file requires permissions or APIs outside the supported range, it will not be installed to maintain security and compatibility.",
  },
  {
    id: 5,
    question: "What Chrome APIs are supported by CRXEmulator?",
    answer:
      "CRXEmulator supports the following Chrome APIs to ensure compatibility with most extensions:",
  },
  {
    id: 6,
    question: "How does CRXEmulator handle unsupported extensions?",
    answer:
      "If a .crx file requests permissions or APIs that are not on the supported list, CRXEmulator will display an error message, and the installation process will not proceed. This ensures your browser remains secure and performs optimally.",
  },
  {
    id: 7,
    question: "Does CRXEmulator work across different Chromium-based browsers?",
    answer:
      "Yes, CRXEmulator is designed to work seamlessly on Chromium-based browsers like Chrome, Edge, Brave, and others, providing cross-browser compatibility for extensions.",
  },
];

export const permissions = ["alarms", "storage", "tabs"];
export const supportedChromeAPIs = [
  "chrome.alarms",
  "chrome.action / chrome.browserAction",
  "chrome.downloads",
  "chrome.i18n",
  "chrome.permissions",
  "chrome.runtime",
  "chrome.storage",
  "chrome.tabs",
  "chrome.windows",
];
