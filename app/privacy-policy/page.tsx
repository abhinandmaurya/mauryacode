// app/privacy-policy/page.tsx or wherever your route lives
export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-32 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          <strong>Last updated:</strong> April 12, 2025
        </p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Maurya Codesphere ("Company", "we", "our", or "us"). This
          Privacy Policy explains how we collect, use, and disclose information
          when you visit our website or interact with our ads, including those
          on platforms like Facebook.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect personal data that you provide directly to us when you:
        </p>
        <ul>
          <li>Submit a contact form</li>
          <li>Request a quote or consultation</li>
          <li>Interact with our ads or social media pages</li>
          <li>Sign up for updates or newsletters</li>
        </ul>
        <p>This may include:</p>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Service interest details</li>
          <li>Any message you submit</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and manage our services</li>
          <li>To respond to inquiries or service requests</li>
          <li>To personalize your experience</li>
          <li>To send marketing or promotional communications</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>4. Facebook Pixel & Third-Party Tools</h2>
        <p>
          We use the Facebook Pixel and similar technologies to measure ad
          performance, optimize campaigns, and deliver relevant content. These
          tools may collect data such as your IP address, browser type, and
          interaction behavior.
        </p>
        <p>
          You can manage your Facebook ad preferences and opt out of
          personalized ads via your Facebook settings:{" "}
          <a
            href="https://www.facebook.com/ads/preferences/"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook.com/ads/preferences
          </a>
          .
        </p>

        <h2>5. Cookies & Tracking</h2>
        <p>
          We use cookies and tracking technologies to enhance your browsing
          experience and analyze usage. You may configure your browser to reject
          cookies, but some features may not function as intended.
        </p>

        <h2>6. Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with
          trusted third-party service providers, such as analytics and CRM
          platforms, who help us operate our business. These parties are bound
          by confidentiality agreements.
        </p>

        <h2>7. Data Security</h2>
        <p>
          We implement industry-standard measures to protect your data. However,
          no method of online transmission or storage is completely secure.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          You may have rights under applicable privacy laws, including the right
          to:
        </p>
        <ul>
          <li>Access, update, or delete your personal data</li>
          <li>Withdraw consent or object to processing</li>
          <li>Request data portability</li>
          <li>Complain to a data protection authority</li>
        </ul>
        <p>
          If you wish to exercise any of these rights, please contact us using
          the details below.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices
          or legal requirements. Updates will be posted on this page with a
          revised "Last updated" date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please
          contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> mauryacodesphere@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> +91 9408609309
          </li>
          <li>
            <strong>Address:</strong> 123 Tech Street, Suite 456, San Francisco,
            CA 94105, USA
          </li>
        </ul>
      </div>
    </div>
  );
}
