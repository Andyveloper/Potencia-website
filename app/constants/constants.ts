export const COMPANY_COLOR_PRIMARY = '370077'
export const COMPANY_COLOR_SECONDARY = '#FF9238'

// CONTACT US CONSTANTS
export const CONTACT_TITLE = 'GET IN TOUCH'
export const CONTACT_DESCRIPTION =
    "Your company's transformation is only a few clicks away, schedule a free initial consultation"
export const CONTACT_IMAGE = ''

export const CONTACT_INFORMATION = [
  {
    icon: '/images/line-icons-42-64ed4d5890a39.webp',
    title: 'Address',
    description: [
      '7345 W Sand Lake RD',
      'Ste 210 Office 4846',
      'Orlando, FL, 32819, United States'
    ]
  },
  {
    icon: '/images/pngwingcom-64ed59dc4057f.webp',

    title: 'Phone',
    description: ['Sales: +1(321)332-1844']
  },
  {
    icon: '/images/line-icons-41-64ed4d5890f8b.webp',

    title: 'Email',
    description: [
      'support@itpotencia.com',
      'sales@itpotencia.com',
      'accounting@itpotencia.com'
    ]
  }
]

// PRICING CONSTANTS

export const PRICING_HEADER = {
  title: 'CHOOSE A PLAN THAT WORKS FOR YOU!',
  description: 'Explore our range of budget-friendly pricing plans tailored to your needs. Choose the perfect fit and unlock a world of features and value.',
  image: '/images/operations-planning-1-e1667429583964-64ecbd790f532.webp'
}

export const PRICING_FAQ_ELEMENTS = [
  {
    title: 'How long does it take to implement?',
    description: 'Once the subscription is completed, we start the implementation process. The implementation takes approximately 45 days for the SaaS option. For the Enterprise Plan everything will depend on the scope of the application, a project can take 1 month up to 5 months.'
  },
  {
    title: 'Do I have to buy a hosting server?',
    description: 'Aris Software solution is a 100% application that is installed on a server hosted in the cloud, the cost is included in your monthly fee. In the Enterprise Plan is optional, the customer can purchase his own hosting server.'
  },
  {
    title: 'What is the minimum term of use?',
    description: 'Once your monthly billing has started, the minimum term is 12 months. You may terminate the contract at any time after this period by notifying us by e-mail at least one month in advance.'
  },
  {
    title: 'What is included in the Monthly Fee?',
    description: 'This service provides comprehensive coverage, including continuous monitoring and support to ensure ARIS availability, a Service Level Agreement for swift problem resolution, and regular upgrades to keep your ARIS current and future-proof.'
  },
  {
    title: 'Where is my data stored??',
    description: 'In both SaaS and Custom Development the user performs his backup in an option of the application and saves his backup file wherever he wants'
  },
  {
    title: 'Which services are considered additional?',
    description: 'Enhance your experience with our extra offerings. Get tailored configuration services, seamless third-party software integrations, additional post-implementation training, and reliable hosting support.'
  },
  {
    title: 'What is included in the Initial Payment Fee??',
    description: 'The upfront payment, a single occurrence, covers vital aspects including server setup, application integration, and user training. This bundled offering ensures a smooth introduction to maximize your experience.'
  },
  {
    title: 'Is the Aris software scalable?',
    description: 'Yes, by using pre-assembled components and by the type of database used in our developments, all applications are scalable to the growth of your business.You can add components that are not included to upgrade the application'
  }
]

export const PRICING_ELEMENTS = [
  {
    title: 'Plan Starter',
    priceDescription: 0,
    features: ['1 User', 'Support', 'Hosting', 'Upgrades and Updates'],
    recurrence: '/mo/user'
  },
  {
    title: 'Plan Standard',
    priceDescription: 129.99,
    features: ['2 Users minimum', 'Electronic Documents', 'Support', 'Hosting', 'Upgrades and Updates'],
    recurrence: '/mo/user'
  },
  {
    title: 'Plan Professional',
    priceDescription: 119.99,
    features: ['5 Users minimum', 'Electronic Documents', 'Support', 'Hosting', 'Upgrades and Updates'],
    recurrence: '/mo/user'
  },
  {
    title: 'Enterprise',
    priceDescription: 'Quote',
    features: ['Unlimited Users', 'Electronic Documents', 'Support', 'Hosting', 'Upgrades and Updates'],
    recurrence: 'One time payment'
  }
]

// HOME CONSTANTS
interface OurServices {
  image: string
  title: string
  description: string
  link?: string
}
interface CarouselData {
  title: string
  description: string
  image: string
}

export interface FeatureList {
  title: string
  description: string
  elements: string[]
  inverse: boolean
  image: string
}

export const HOME_HEADER =
{
  title: 'SOFTWARE SOLUTIONS FOR FREIGHT FORWARDERS AND WAREHOUSING',
  description: 'We create Custom Software and Logistics Solutions that help integrate all facets of your business, with technology that is 100% scalable to the growth of your business.',
  image: '/images/software-aris-website.webp'
}

export const HOME_OUR_SERVICES: OurServices[] = [
  {
    image: '/images/logistic-software.webp',
    title: 'Logistics Software',
    description:
      'Aris Software offers tailored solutions with a single investment option and SaaS accessibility. It includes mobile apps for iOS and Android and is designed for Freight Forwarders, Courier, WMS, and 3PL services.',
    link: '#'
  },
  {
    image: '/images/consulting.webp',
    title: 'IT Consulting',
    description:
      'The package also encompasses business intelligence and analytics, along with IT services tailored for logistics companies. It further includes the development of marketing websites specifically designed for such businesses.',
    link: '#'
  },
  {
    image: '/images/bulb.webp',
    title: 'Software Integrations',
    description:
      'Seamless integration with third-party software, web services, and APIs is provided. This extends to integration with various modules and report systems as well.',
    link: '#'
  },
  {
    image: '/images/diagram.webp',
    title: 'Launch & Monitor',
    description:
      'The suite includes reporting and dashboard development, facilitating business intelligence and in-depth analysis.',
    link: '#'
  }
]

export const HOME_IMPLEMENTATION_ROADMAP: CarouselData[] = [
  {
    title: 'Discovery Meeting',
    description:
      'Business challenges and requirements to prepare a project scope tailored to the needs of your solution.',
    image: '/images/app-11-1.webp'
  },
  {
    title: 'Feasibility Analysis',
    description:
      'The analysis includes: Client’s objectives, Challenges and risks, Solution brief, Scope of the proposal, Project costs.',
    image: '/images/app-010-1.webp'
  },
  {
    title: 'Kick-off meeting with project manager',
    description:
      'We will confirm the understandings and validate the scope of the proposal to move on to the tasks of assembling your solution.',
    image: '/images/app-12.webp'
  },
  {
    title: 'Assembly',
    description:
      'As each module is assembled, early validations are performed with user testing to ensure a 100% functional and configured solution for your business.',
    image: '/images/app-09.webp'
  },
  {
    title: 'Support',
    description:
      'At the end of the project you receive 12 months of technical support and functional enhancement updates.',
    image: '/images/app-developer-icon-small-07.webp'
  }
]

export const HOME_FEATURE_LIST: FeatureList[] = [
  {
    title: 'Customer Dashboard',
    description:
      'Facilitates the monitoring and management of logistics operations via a collaborative messaging platform for interacting with your customers. The platform encompasses the following features:',
    elements: [
      'Continuous 24/7 updates and consultations.',
      'Fully web-based, eliminating the need for installations.',
      'Enhanced agility in decision-making.',
      'Efficient processing, updates, and document downloads.',
      'Intuitive and user-friendly navigation.'
    ],
    inverse: false,
    image: '/images/images.webp'
  },
  {
    title: 'Commerce & Pricing',
    description:
      'This tool serves as a comprehensive resource furnishing the commercial team with expeditious access to pertinent information and documentation pertaining to customer inquiries:',
    elements: [
      'Allows management of customers and suppliers.',
      'Adaptable to the unique requirements of the company.',
      'Enables real-time access to budgets.',
      'Manage requests for quotations and their approvals.'
    ],
    inverse: true,
    image: '/images/Request-Management.webp'
  }
]

export const HOME_FEATURE_LIST_2: FeatureList[] = [
  {
    title: 'Strategic Planning and Operational Oversight',
    description:
      'Exercise authoritative control over your logistics operations while meticulously strategizing each event and activity through an interface reminiscent of an airport-style Dashboard. Articulate and supervise every facet of your operation in a manner akin to your standard business processes:',
    elements: [
      'Configurable operation scheduling.',
      'Comprehensive operations timeline.',
      'Effortless viewing and downloading of transaction documents.',
      'Dynamic real-time control over income and expenses.',
      'Precise access control based on user roles.'
    ],
    inverse: false,
    image: '/images/Tracking2.webp'
  },
  {
    title: 'Administrative and Business Intelligence (BI) Capabilities',
    description:
      'This module stands as a comprehensive component, facilitating the meticulous configuration and execution of all administrative processes intertwined with the logistics operation of your enterprise:',
    elements: [
      'Streamline configuration of diverse transaction types.',
      'Thoroughly define and categorize Products and Services.',
      'Efficiently oversee accounts receivable and payable functions.',
      'Generate comprehensive transaction reports.',
      'Facilitate the creation of detailed customer reports.'
    ],
    inverse: true,
    image: '/images/MultiCurrency-invoicing.webp'
  }
]

// OUR SOLUTIONS COMPONENT CONSTANTS
interface OurSolutions {
  image: string
  title: string
  description: string
}

export const OUR_SOLUTIONS: OurSolutions[] = [
  {
    image: '/images/carlos-muza-hpjSkU2UYSU-unsplash.webp',
    title: 'Our Solution will help you with:',
    description: 'Take a look at what our application can do for you.'

  },
  {
    image: '/images/photo-1496171367470-9ed9a91ea931.webp',
    title: 'Responsive',
    description: 'Aris is an application that can be used from any device: smartphone, tablet, computer, laptop.'

  },
  {
    image: '/images/photo-1536300099515-6c61b290b654.webp',
    title: 'Visibility',
    description: 'Improve communication with your customers by having real-time control of your operations.'

  },
  {
    image: '/images/photo-1631106254201-ffbee2305c5b.webp',
    title: 'Customizable',
    description: '100% configurable to your actual business processes'

  },
  {
    image: '/images/photo-1635859890085-ec8cb5466806.webp',
    title: 'Documents',
    description: 'Control the documentation of your operation and maintain a digital archive associated with the business.'

  },
  {
    image: '/images/pexels-photo-7709208.webp',
    title: 'Support',
    description: 'Support and assistance service for ongoing application support'

  },
  {
    image: '/images/photo-1601933973706-34bd411ffd67.webp',
    title: 'Free Updates',
    description: 'Functional enhancement updates released by Potencia Technologies.'

  }
]

// ARIS SOFTWARE CONSTANTS

export const ARIS_TITLE = 'HOW TO ACQUIRE ARIS SOFTWARE'
export const ARIS_DESCRIPTION =
  'Never before has it been so easy, now you can start the technology upgrade project you have always wanted for your logistics business with Aris Software'
export const ARIS_IMAGE = '/images/software-aris-website-64edfb9f3200d.webp'

export const ARIS_ELEMENTS = [
  {
    title: 'What we cover',
    description:
      'We offer comprehensive configuration, training, and deployment services, along with solution implementation and customization expertise. Enjoy secure transactions with our SSL certificate and accommodate unlimited users. Our flexible payment plan includes an initial 25% payment, followed by interest-free installments over 3, 6, and 9 months for the remaining balance.'
  },
  {
    title: 'Installation',
    description:
      "We begin by gathering crucial insights about your company and operations, which serve as the foundation for your software project. This involves a Kick-off Meeting and tailored customization of the software to align with your specific processes. Following deployment, we offer online training sessions to ensure seamless adoption. Rigorous user testing validates the solution's effectiveness. Embark on this collaborative journey to elevate your operational efficiency."
  },
  {
    title: 'Investment',
    description:
      'Our software projects are all-inclusive, featuring consulting, solution assembly, and continuous evolutionary maintenance. The investment timeline corresponds to the scope of the solution. To provide a general cost overview, we offer approximate ranges javascript. \n For smaller projects, the investment typically falls between USD $18k and $23k. Medium-sized projects usually range from USD $25k to $30k. For more extensive endeavors, such as large projects, the investment typically ranges from USD $30k to $50k. These figures serve as orientative reference points to guide your decision-making process.'
  },
  {
    title: 'Lead Times',
    description:
      'Our swift software assembly employs pre-built components, supported by an agile methodology that validates milestones for desired quality. Project timelines are influenced by scope: typically 3-4 months for small projects, 5-6 months for medium projects, and 8-12 months for large projects. These guidelines aid in planning your software development journey.'
  },
  {
    title: 'Maintenance and Support',
    description:
      'All projects are subscribed to 12 months of technical support and functional enhancement updates. If there are any support requirements with the software during that time, we are there to assist you. \n You can then renew the service for as long as you deem necessary, request our support on demand or perform the maintenance and support of the solution with your IT staff.'
  },
  {
    title: 'Infrastructure & Security',
    description:
      'Our solutions are built using the latest in web service technology. The application is hosted on a virtual server, which can be managed by Potencia or any external provider that is indicated at the time of deployment of the solution.'
  }
]

export const ARIS_SAAS = [
  {
    title: 'What we cover',
    description:
      'Our comprehensive offerings encompass configuration, training, and deployment services, ensuring seamless integration. We accommodate plans starting from just one user, reflecting our scalability. Dedicated server maintenance and support guarantee sustained performance. Additionally, we prioritize security with an SSL certificate, fortifying your operations.'
  },
  {
    title: 'Investment',
    description:
      'Our services encompass initial set-up, and we offer flexible monthly fee plans tailored to accommodate even a single user, reflecting our commitment to scalability and individualized solutions.'
  },
  {
    title: 'Incorporation and Implementation',
    description:
      'During the onboarding phase, a dedicated consultant collaborates closely to comprehend your requirements and align system configuration with your objectives. This encompasses the delivery of online training sessions. This implementation package includes project management for engaged and smooth implementation, reviewing the current test setup (if applicable), overseeing the data migration plan (including associated services), administering online training sessions for administrators, facilitating user permission and workflow setup, and providing tailored consulting sessions to optimize configuration for key user groups.'
  },
  {
    title: 'Implementation Time',
    description:
      'The implementation process is estimated to be completed within 30 calendar days. Subsequently, the anticipated go-live date is set between 45 to 60 calendar days, marking the transition to active system usage.'
  },
  {
    title: 'Customer Support and Upgrades',
    description:
      'Our comprehensive support framework entails constant monitoring to ensure ARIS availability. Backed by a robust Service Level Agreement, rapid issue resolution is guaranteed; critical concerns initiated via support@itpotencia.com will be addressed within 4 hours. Continuous management is assured through defect fixes, and system upgrades are performed to align with future requirements. Our customer service hotline operates from 8:00 a.m. to 5:00 p.m. Eastern US local time, Monday through Friday, excluding US holidays. This holistic approach guarantees uninterrupted, dependable support for your ARIS system.'
  }
]

export const ARIS_OTHER_SERVICES = [
  {
    title: 'Electronic Invoicement',
    description: 'Integration with tax information technology providers'
  },
  {
    title: 'Incorporation and Implementation',
    description:
      'Our solutions are built upon the foundation of relational databases, facilitating effortless integration with diverse software platforms. Our development methodology hinges on leveraging APIs and Web Services, tapping into those made available by operators or third-party software providers, contingent upon the extent of API exposure. This encompasses a wide spectrum of capabilities: From payment platforms to seamless integration with third-party software, our approach extends to the utilization of web services and APIs, ensuring comprehensive connectivity. Furthermore, our solutions seamlessly integrate with report generators and sophisticated Business Intelligence (BI) tools, enhancing your data-driven decision-making capabilities.'
  },
  {
    title: 'IT Consulting',
    description:
      'We offer a range of services: From business intelligence and analytics to dedicated IT support for logistics firms, as well as strategic logistics marketing and customized website development, we cater to diverse needs.'
  },
  {
    title: 'Infrastructure and Security',
    description:
      'Guarantee the investment of your applications with the infrastructure and security services we offer at Potencia.'
  }
]

export const ARIS_SOFTWARE_SOLUTIONS = [
  {
    title: 'ARIS CARGO',
    description: [
      'Customer Dashboard',
      'Commercial Module',
      'Operations Module',
      'Administrative Module',
      'Reports',
      'Electronic Documents'
    ],
    image: '/images/cargo-ship-64ed6b05d2316.webp'
  },
  {
    title: 'ARIS COURIER',
    description: [
      'Customer Dashboard',
      'Commercial Module',
      'Shipping Boxes',
      'Assisted Shopping',
      'Operations Module',
      'Administrative Module',
      'Reports',
      'Electronic Documents',
      'Digital Delivery Signature'
    ],
    image: '/images/shipped-64ed6b0649959.webp'
  },
  {
    title: 'ARIS WMS',
    description: [
      'Customer Dashboard',
      'Commercial Module',
      'Operations Module',
      'Warehousing and Inventory',
      'Administrative Module',
      'Reports',
      'Electronic Documents'
    ],
    image: '/images/package-64ed6b05ac62f.webp'
  },
  {
    title: 'ARIS ADMIN & ACCOUNTING',
    description: [
      'Configuration',
      'Revenue Module',
      'Expense Module',
      'Accounting Module',
      'Cash and Banks Module',
      'Reporting Module'
    ],
    image: '/images/user-64ed6b06b0b47.webp'
  },
  {
    title: 'ARIS PAYROLL',
    description: [
      'HR Module',
      'Self-Management Web Portal',
      'News Web Portal',
      'Reporting Module'
    ],
    image: '/images/salary-64ed6b065f0b5.webp'
  }
]

// INFRASTRUCTURE AND SECURITY CONSTANTS

export const INFRASTRUCTURE_PRICING_ELEMENTS = [
  {
    title: 'Hosting',
    priceDescription: 79.99,
    features: ['Server config', 'Support', 'Web Hosting', 'Server administration'],
    recurrence: '/mo'
  },
  {
    title: 'Server Administration',
    priceDescription: 249.99,
    features: ['Update and Maintenance', 'Backup program', 'Server monitoring', 'Optimization', 'Security against cyber-attacks', 'Data protection'],
    recurrence: '/mo/'
  },
  {
    title: 'SSL Security',
    priceDescription: 109.99,
    features: ['Certificate generation', 'Configuration', 'Activation'],
    recurrence: '/year'
  }
]

export const INFRASTRUCTURE_AND_SECURITY = [
  {
    title: 'Server Administration',
    image: '/images/1x-hosting-icon-05-64efe86ec6076.webp',
    description: 'Server administration involves overseeing servers and networks to ensure they work well and safely. This includes routine tasks during business hours and more complex ones outside those times. The server administrator manages, optimizes, monitors, and troubleshoots servers and related parts.'
  },
  {
    title: 'Hosting Services',
    image: '/images/1x-hosting-icon-034-64efefead3488.webp',
    description: 'Hosting service involves renting space on a virtual server to run your application and store its data. This ensures global access to your app and its content anytime. The provider manages server functions and delivers information to user devices.'
  },
  {
    title: 'Safe and Secure',
    image: '/images/1x-hosting-icon-04-64efe86e44e0b.webp',
    description: 'An SSL certificate verifies a website\'s identity and enables secure, encrypted connections. SSL (Secure Sockets Layer) safeguards data between a web server and browser. Without it, hackers can access and expose sensitive business information from the website.'
  },
  {
    title: 'Dedicated Support',
    image: '/images/1x-hosting-big-icon-02-64efe86e3d905.webp',
    description: 'Our specialized team is dedicated to serving the logistics industry by providing valuable assistance for your application. We excel in upgrades, maintenance, and ongoing support, ensuring your system functions seamlessly. Count on us to understand your unique needs and deliver tailored solutions that keep your logistics operations running smoothly.'
  }
]

export const INFRASTRUCTURE_OUR_SERVICES = [
  {
    title: 'Application server maintenance and updating',
    description: '',
    image: '/images/servers-64eff8971e8dc.webp'
  },
  {
    title: 'Backup program',
    description: '',
    image: '/images/cloud-64eff8963dcaa.webp'
  },
  {
    title: 'Server monitoring',
    description: '',
    image: '/images/database-storage-64eff896ab884.webp'
  },
  {
    title: 'Performance optimization',
    description: '',
    image: '/images/database-management-64eff8963cac9.webp'
  },
  {
    title: 'Implementation of security barriers against cyber-attacks',
    description: '',
    image: '/images/hacker-64eff896ce254.webp'
  }
]
