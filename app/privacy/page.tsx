import { LegalDocument } from "@/components/legal-document"

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: `
        <p>According to the applicable data protection legislation, with particular reference to Regulation (EU) No. 2016/679 (General Data Protection Regulation, "GDPR") and the United Kingdom ("UK") GDPR (as defined in the UK Data Protection Act 2018) (together the "Privacy Legislation"), Chai Research Corp., a Delaware-registered corporation (File Number 6527981) with its registered office at 209 Hamilton Ave Ste 3, Palo Alto, CA 94301, U.S.A., in its capacity as data controller ("Company", "Data Controller", "Chai" or "we/our"), intends to inform you about the processing of your personal data in the context of your use of the Chai mobile applications (the "APP") and the related services ("Services").</p>
        <p>This privacy policy is an integral part of our End-User License Agreement ("EULA"). By using the APP, you confirm your full acceptance of the EULA and acknowledge the contents of this policy. The policy applies to all individuals who install, use the APP and access its Services ("user" or "you").</p>
      `,
    },
    {
      id: "data-processed",
      title: "Data That Will Be Processed",
      content: `
        <p>The use of our APP and Services involves the collection and processing of personal data. The categories of personal data collected are outlined below. Some data is required in order for you to create an account on and access the APP (your e-mail and information from linked accounts such as Google, Apple, Facebook), others are requested only if you decide to activate certain advanced features. As for the sources of your personal data, some information is provided directly by you, other personal data is collected automatically when you interact with us through the APP.</p>
        <p>The APP only collects personal data strictly necessary for the provision of the Services offered and the purposes described in this policy. In particular:</p>
        <h3>Account Data:</h3>
        <p>To access the APP, you need to create a personal account through Google, Facebook, or Apple authentication services. We will only process the email address and essential information associated with the selected account, which are necessary to create your profile. In any case, the information associated with your account can be updated at any time in the "Profile" section of the APP.</p>
        <h3>Use of the APP:</h3>
        <p>While using the APP, you can interact with pre-existing chatbots (which may have been created by us or other users of the APP) or create new ones (which you can keep private or make available to other users). During chats, you might voluntarily share personal data, including sensitive information. We encourage you not to provide unnecessary information, especially regarding third parties. Conversation data will be stored in our systems as outlined in this policy. Additionally, your messages and other data may be used to optimize your chatbot interaction experience and improve the chatbot for all users.</p>
        <h3>Notifications:</h3>
        <p>The APP sends push notifications only with the user's consent. Additionally, the app sends in-app messages. These may include service updates, system announcements, or changes to the EULA and this Privacy Policy.</p>
        <h3>Support and assistance:</h3>
        <p>Users can contact us via email at hello@chai.ml. We will only process data voluntarily provided by the user to respond to support requests, encouraging users to limit the information to what is strictly necessary.</p>
        <h3>Subscription plans:</h3>
        <p>The APP offers paid subscription plans. For use of the paid subscription plans, we process the data necessary to manage the subscription.</p>
        <h3>Usage Data:</h3>
        <p>While using the APP, we automatically collect technical information related to your device and connection, such as the IP address, access time, browser type, operating system, internet service provider, and other technical parameters. We also use essential cookies and similar technologies to enable login and ensure the proper functioning of the Services. Additionally, to resolve technical malfunctions, we log activities associated with your user ID (e.g., login times, chatbot openings, message submissions).</p>
      `,
    },
    {
      id: "purposes",
      title: "Purposes and Lawful Basis of the Processing",
      content: `
        <p>The data processing activities described above are carried out exclusively for the purpose of:</p>
        <h3>Registration, creation, and management of your personal account:</h3>
        <p>To access the APP, regardless of the subscription plan you choose, it is necessary to create a personal account. For this purpose, we require only your e-mail address and the data from linked accounts (Google, Apple, or Facebook). Without this information, we will not be able to process your registration or allow you to use the APP. The lawful basis for processing your personal data for this purpose is the performance of (pre)contractual measures.</p>
        <p>Lawful basis: Art. 6(1)(b) of the GDPR / UK GDPR.</p>
        <h3>Use of the APP:</h3>
        <p>We process the personal data provided during registration or subsequently (e.g., identifying data, in-app messages, logs) to enable you to interact with chatbots by sending and receiving text messages, create new chatbots, manage your in-app purchases, and ensure the proper functioning of the APP, including all technical and organizational activities necessary for the provision of the Services. Additionally, we use your data to process and manage support requests in relation to any issues encountered while accessing or using the APP. These processing activities are carried out to fulfill our contractual obligations towards you.</p>
        <p>Lawful basis: Art. 6(1)(b) of the GDPR / UK GDPR.</p>
        <h3>Model improvement:</h3>
        <p>We use personal data derived from your in-app conversations with chatbots to enhance and fine tune the artificial intelligence models on which these chatbots operate. Before we use any conversation data in this way, we remove personal identifiers. This means that only the information you provided in the conversation with a chatbot itself is used for this purpose. This processing aims to optimize the APP's functionality, ensuring increasingly accurate, personalized, and consistent performance aligned with your expectations. By processing your data, we can provide more engaging conversations, improve interaction quality, and better align chatbot outputs with your needs. This processing is based on our legitimate interest in keeping the APP up-to-date, functional, and competitive in a constantly evolving market.</p>
        <p>Lawful basis: Art. 6(1)(f) of the GDPR / UK GDPR.</p>
        <h3>Marketing and advertisement:</h3>
        <p>We use personal data to send you advertisements if you have a free subscription, based on your consent. If you downloaded the APP through an advertisement, we may also share certain information, such as your usage patterns, with our advertising partners to evaluate the performance of their campaigns and ensure accurate attribution. This processing is based on our legitimate interest in ensuring the effectiveness and competitiveness of our business.</p>
        <p>Lawful basis: Art. 6(1)(a) and Art. 6(1)(f) of the GDPR / UK GDPR.</p>
        <p>In addition, we may also process your data collected through the APP, if needed, in order to:</p>
        <p>(i) comply with legal requirements, or orders, decisions and measures issued by competent authorities, based on Art. 6(1)(c) of the GDPR / UK GDPR, and</p>
        <p>(ii) to establish, exercise or defend our rights before competent courts, according to Art. 6(1)(f) of the GDPR / UK GDPR.</p>
      `,
    },
    {
      id: "data-access",
      title: "Who Can Access Your Data",
      content: `
        <p>Your personal data will be accessible only by specifically authorized staff acting under the authority of the Data Controller, duly instructed to process the data, with particular regard to the protection of your rights and our security standards.</p>
        <p>Data will also be shared with the Company's suppliers involved in various ways in the provision and operation of the APP, as data processors, in accordance with the instructions and security safeguards dictated by Chai.</p>
        <p>Finally, your data may also be disclosed to third parties to fulfill legal obligations and/or requests made by competent authorities.</p>
      `,
    },
    {
      id: "data-duration",
      title: "Duration of Data Processing",
      content: `
        <p>The data collected through your use of the APP will not be processed for a longer period than is necessary to achieve the purposes described above, not exceeding, in any case, the duration of the account and five (5) years following its deletion.</p>
        <p>In some instances, a longer retention timeframe may be necessary to enable Chai to defend and enforce its rights in the context of legal claims, disputes or proceedings brought against the Company, or in order to comply with applicable laws or orders by competent authorities.</p>
      `,
    },
    {
      id: "international-transfers",
      title: "International Data Transfers",
      content: `
        <p>The data collected by the APP will be processed and stored in the United States, where Chai has its registered office.</p>
        <p>In particular for the provision of the Services, personal data can also be transferred to US data processors. These transfers will be based, if applicable and amongst other potentially applicable data transfer mechanisms (e.g. EU/UK United States Data Privacy Framework), on the Standard Contractual Clauses adopted by the European Commission and the UK International Data Transfer Addendum (or International Data Transfer Agreement) issued by the Information Commissioner's Office under Art. 46 of the GDPR / UK GDPR. These provisions ensure that your data is subject to protection standards and security guarantees equivalent to those provided within the European Economic Area (EEA) and UK.</p>
      `,
    },
    {
      id: "data-rights",
      title: "Data Subjects' Rights",
      content: `
        <p>If you are a citizen of the EU or the UK, the rights outlined below are available to you under applicable privacy legislation:</p>
        <h3>Access:</h3>
        <p>You have the right to know whether your data is being processed and, if so, to receive a copy of that personal data and information about the purposes of the processing, the categories of data involved, the recipients to whom the data may be disclosed, the applicable retention period, and the existence of any automated decision-making processes.</p>
        <h3>Rectification:</h3>
        <p>You have the right to request, without undue delay, the correction and updating of any inaccurate personal data concerning you.</p>
        <h3>Erasure:</h3>
        <p>You may request the deletion of your data, subject to specific exceptions, if:</p>
        <ul>
          <li>The data is no longer necessary for the purposes for which it was collected or otherwise processed;</li>
          <li>You have withdrawn consent for a specific processing activity, and no other lawful basis exists;</li>
          <li>You have objected to a specific processing activity for reasons related to your particular situation (see the "Objection" right below), and no overriding legitimate grounds exist to continue the processing;</li>
          <li>The data has been unlawfully processed; or</li>
          <li>The data must be deleted to comply with a legal obligation to which we are subject.</li>
        </ul>
        <h3>Restriction of processing:</h3>
        <p>You have the right to request the suspension of data processing in the following cases:</p>
        <ul>
          <li>You contest the accuracy of your data, for the time necessary for us to verify its accuracy;</li>
          <li>The processing is unlawful, but you object to the deletion of your data and instead request a restriction of its use;</li>
          <li>Your data is no longer necessary for the purposes identified above, but you require it to establish, exercise, or defend a legal claim; or</li>
          <li>You have objected to one or more processing activities, and we are still verifying whether legitimate grounds exist for continuing the processing.</li>
        </ul>
        <h3>Data portability:</h3>
        <p>You may request to receive the personal data you have provided to us in a structured, commonly used, and machine-readable format and/or request its transfer directly to another controller.</p>
        <h3>Objection:</h3>
        <p>You may object, on grounds relating to your particular situation, to the processing of your data based on our legitimate interests. Processing will cease unless:</p>
        <ul>
          <li>There are compelling legitimate grounds overriding your interests, rights, and freedoms, or</li>
          <li>The data is necessary for the establishment, exercise, or defense of legal claims.</li>
        </ul>
        <h3>Withdrawal of consent:</h3>
        <p>You may withdraw your previously given consent at any time, without affecting the lawfulness of processing carried out prior to such withdrawal.</p>
        <h3>Complaint:</h3>
        <p>You have the right to file a complaint with your local data protection authority if you believe that we have not complied with applicable Privacy Legislation. This does not prejudice your right to seek administrative or judicial remedies.</p>
        <p>To exercise your rights and/or request any information or clarification regarding the processing of your data by Chai, you may contact the Data Controller or the appointed Data Protection Officer (DPO) at any time using the following contact details:</p>
        <p>E-mail: hello@chai-research.com</p>
        <p>Postal address: 209 Hamilton Ave Ste 3, Palo Alto, CA 94301, U.S.A.</p>
        <p>DPO e-mail: dpo@chai-research.com</p>
      `,
    },
  ]

  return <LegalDocument title="Privacy Policy" lastUpdated="January 21st, 2025" sections={sections} />
}

