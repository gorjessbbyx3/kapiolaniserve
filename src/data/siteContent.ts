export type LeafPage = {
  path: string
  title: string
  section: string
  sectionPath: string
  blurb: string
  body: string[]
  links?: { label: string; href: string }[]
}

export const sections = {
  startHere: { title: 'Service Learners Start Here', path: '/service-learners-start-here' },
  events: { title: 'Events & Opportunities', path: '/events-opportunities' },
  certified: { title: 'Become Certified', path: '/become-certified' },
  library: { title: 'KSSL Resource Library', path: '/resource-library' },
  about: { title: 'About KSSL', path: '/about' },
  students: { title: 'For Students', path: '/for-students' },
  faculty: { title: 'For Faculty', path: '/for-faculty' },
}

export const leafPages: LeafPage[] = [
  // Service Learners Start Here
  {
    path: '/orientation',
    title: 'Orientation',
    section: sections.startHere.title,
    sectionPath: sections.startHere.path,
    blurb: 'What to expect at your first KSSLP orientation session.',
    body: [
      'Orientation is required once per semester and is held over Zoom. You\u2019ll choose a session time that fits your schedule \u2014 sessions typically run Tuesday through Thursday, 10am to 2pm, over a several-week window at the start of the term.',
      'Reminders and scheduling communication come through the KSSLP office email, so keep an eye on your inbox once you register.',
    ],
    links: [{ label: 'Register for an orientation session', href: 'https://docs.google.com/forms/d/e/1FAIpQLSd33h5MbgQhhWdkh97ohZmrNwOm016aS-lLja9x1iBw-gVABg/viewform?usp=dialog' }],
  },
  {
    path: '/registration',
    title: 'Registration',
    section: sections.startHere.title,
    sectionPath: sections.startHere.path,
    blurb: 'How to register for a service-learning course or placement.',
    body: [
      'After orientation, the KSSLP office emails you a Registration & Waiver form. Rename the file "Last Name, First Name \u2013 Registration & Waiver" before returning it.',
      'Choose one main service site to be the primary focus of your hours, forms, and reflection essay \u2014 it should relate to your course and be listed under "Community Site Information" on your form. You\u2019re welcome to volunteer at additional sites if your instructor allows it, but only your main site should anchor your essay.',
      'Your completed form needs three signatures: yours, your main site supervisor\u2019s, and your instructor\u2019s (or instructors\u2019, if more than one course requires KSSLP). Fill out every field, including the small demographic boxes \u2014 that information helps the office track and improve outreach.',
    ],
  },
  {
    path: '/timesheet-evaluation',
    title: 'Timesheet / Evaluation',
    section: sections.startHere.title,
    sectionPath: sections.startHere.path,
    blurb: 'Logging hours and completing your end-of-term evaluation.',
    body: [
      'Log each volunteer session with a brief description of the work and get your site supervisor\u2019s signature.',
      'Once you\u2019ve completed all required hours (a minimum of 20), have your supervisor complete the final evaluation form.',
    ],
  },
  {
    path: '/essay',
    title: 'Reflection Essay',
    section: sections.startHere.title,
    sectionPath: sections.startHere.path,
    blurb: 'Guidelines for the required end-of-term reflection essay.',
    body: [
      'Write a reflection essay connecting your service experience to your course of study.',
      'Your essay must reference at least one of the United Nations Sustainable Development Goals, tying your service back to a global framework for social and environmental progress.',
    ],
  },
  // Events & Opportunities
  {
    path: '/get-involved',
    title: 'Get Involved!',
    section: sections.events.title,
    sectionPath: sections.events.path,
    blurb: 'Ways to plug into KSSLP outside of a course requirement.',
    body: [
      'Not enrolled in a service-learning course? You can still volunteer through KSSLP-affiliated events, campus programs, and community partner opportunities.',
      'Check current openings with Pohukaina Food Pantry, Māla Māunuunu, the KCC Ecology Club, and seasonal community events.',
    ],
  },
  // Become Certified
  {
    path: '/certificate-training-programs',
    title: 'Certificate Training Programs',
    section: sections.certified.title,
    sectionPath: sections.certified.path,
    blurb: 'Training pathways toward a KSSLP service-learning certificate.',
    body: [
      'The certificate recognizes sustained, reflective service across one or more pathways, combining logged hours, training modules, and a capstone reflection.',
      'Training modules cover community engagement ethics, cultural protocol, and pathway-specific orientation.',
    ],
  },
  // Resource Library
  {
    path: '/pohukaina-food-pantry',
    title: 'Pohukaina Food Pantry',
    section: sections.library.title,
    sectionPath: sections.library.path,
    blurb: 'KCC\u2019s on-campus food pantry supporting student food security.',
    body: [
      'Pohukaina Food Pantry provides free groceries and essentials to KCC students facing food insecurity, staffed in part by service learners working the Health and Resilience Neighborhoods pathways.',
      'Open during posted campus hours \u2014 no application required. Contact the KSSLP office for the current schedule and to volunteer a shift.',
    ],
  },
  {
    path: '/knowledge-expansion',
    title: 'Resources for Knowledge Expansion',
    section: sections.library.title,
    sectionPath: sections.library.path,
    blurb: 'Curated readings and tools across the seven pathways.',
    body: ['A growing collection of articles, guides, and toolkits organized by pathway to support deeper learning beyond your service hours.'],
  },
  {
    path: '/service-learning',
    title: 'Service-Learning',
    section: sections.library.title,
    sectionPath: sections.library.path,
    blurb: 'What service-learning means at KCC and how it differs from volunteering.',
    body: ['Service-learning pairs structured community service with academic reflection, so the work you do off campus feeds directly back into what you\u2019re studying.'],
  },
  {
    path: '/disaster-preparedness',
    title: 'Disaster Preparedness',
    section: sections.library.title,
    sectionPath: sections.library.path,
    blurb: 'Household and neighborhood readiness resources for Oʻahu.',
    body: ['Guidance on building a family emergency plan, hurricane and tsunami readiness, and how the Resilience Neighborhoods pathway supports preparedness work locally.'],
  },
  {
    path: '/native-hawaiian-plants-listing',
    title: 'Native Hawaiian Plants Listing',
    section: sections.library.title,
    sectionPath: sections.library.path,
    blurb: 'A reference listing of native and endemic Hawaiian plant species.',
    body: ['Species profiles used by Environment pathway learners working in restoration and loʻi projects across campus and partner sites.'],
  },
  {
    path: '/native-hawaiian-plants-resources',
    title: 'Native Hawaiian Plants Resources',
    section: sections.library.title,
    sectionPath: sections.library.path,
    blurb: 'Further reading and partner organizations for native plant stewardship.',
    body: ['Links to botanical gardens, propagation guides, and community restoration partners across Oʻahu.'],
  },
  {
    path: '/invasive-plant-species',
    title: 'Invasive Plant Species Profiles',
    section: sections.library.title,
    sectionPath: sections.library.path,
    blurb: 'Identification guides for priority invasive plant species.',
    body: ['Profiles used in the field by Environment pathway volunteers to identify and safely remove invasive species during restoration work days.'],
  },
  {
    path: '/invasive-animal-insect-species',
    title: 'Invasive Animal & Insect Species Profiles',
    section: sections.library.title,
    sectionPath: sections.library.path,
    blurb: 'Identification guides for priority invasive animal and insect species.',
    body: ['Companion reference to the plant species profiles, covering species that threaten native Hawaiian ecosystems.'],
  },
  {
    path: '/plastic-pollution',
    title: 'Plastic Pollution World Crisis',
    section: sections.library.title,
    sectionPath: sections.library.path,
    blurb: 'Background on the global and local plastic pollution crisis.',
    body: ['Context and data behind KSSLP\u2019s beach cleanup and waste-reduction service opportunities.'],
  },
  {
    path: '/environmental-asbestos-exposure',
    title: 'Environmental Asbestos Exposure',
    section: sections.library.title,
    sectionPath: sections.library.path,
    blurb: 'Safety background for service sites involving older buildings or soil disturbance.',
    body: ['Reference material on recognizing and avoiding asbestos exposure risk during community restoration and building-adjacent service projects.'],
  },
  {
    path: '/blood-donations',
    title: 'Blood Donations',
    section: sections.library.title,
    sectionPath: sections.library.path,
    blurb: 'Campus blood drive schedule and eligibility info.',
    body: ['KSSLP partners with the Blood Bank of Hawaiʻi to host campus blood drives each semester \u2014 a cornerstone Health pathway activity.'],
  },
  // About
  {
    path: '/mission-vision',
    title: 'Mission & Vision',
    section: sections.about.title,
    sectionPath: sections.about.path,
    blurb: 'What KSSLP stands for and where the program is headed.',
    body: [
      'KSSLP connects Kapiʻolani Community College students to sustained, reciprocal service across Oʻahu\u2019s communities, grounded in sustainability and cultural respect.',
      'The program envisions every KCC student having the opportunity to learn through service before they graduate.',
    ],
  },
  {
    path: '/meet-the-team',
    title: 'Meet the Team',
    section: sections.about.title,
    sectionPath: sections.about.path,
    blurb: 'The staff and faculty coordinators behind KSSLP.',
    body: ['Program staff, faculty pathway coordinators, and student leaders who run KSSLP day to day.'],
  },
  {
    path: '/assessment-reports',
    title: 'Assessment Reports Archive',
    section: sections.about.title,
    sectionPath: sections.about.path,
    blurb: 'Annual program assessment and outcomes reports.',
    body: ['Archive of past KSSLP assessment reports documenting service hours, partner counts, and program outcomes by year.'],
  },
  // For Students
  {
    path: '/service-learner-types',
    title: 'Service Learner Types',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'The different ways students participate in KSSLP.',
    body: [
      'Whether you\u2019re fulfilling a course requirement, pursuing a certificate, or volunteering independently through Get Involved!, this page outlines which track fits you.',
      'Course-linked service learners register through a specific class and complete hours tied to that course\u2019s pathway. Certificate-track learners work across one or more pathways toward a KSSLP certificate. Independent volunteers can join events and opportunities without any course attached.',
    ],
  },
  {
    path: '/student-resources-incentives',
    title: 'Student Resources & Incentives',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'Scholarships, recognition, and support available to service learners.',
    body: [
      'Incentives and support \u2014 including scholarship opportunities, transcript recognition, and certificate pathways \u2014 are available to active service learners in good standing.',
      'Ask the KSSLP office about current scholarship cycles tied to sustained service, and about how logged hours can appear on your academic record.',
    ],
  },
  {
    path: '/mala-maunuunu',
    title: 'Māla Māunuunu',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'KCC\u2019s native and culturally significant plant garden, right behind the Mānele building.',
    body: [
      'Māla Māunuunu is an outdoor classroom for hands-on ʻāina-based learning, cultivating Native Hawaiian and culturally significant plants for lāʻau lapaʻau (Hawaiian medicine) and ancestral farming practice.',
      'Volunteering here means getting dirty \u2014 weeding, mulching, planting, Hawaiian dry-stack stone masonry, preparing Hawaiian medicinal plants, and helping with community events and workdays. The mission is to mālama ʻāina: steward the land through traditional and modern Hawaiian knowledge.',
      'Service hours are available weekly, Monday through Friday, 9am\u20131pm (hours may vary by season), plus periodic Saturday workdays that wrap up with a potluck. Bring closed-toe shoes, a water bottle, and clothes you don\u2019t mind getting dirty.',
    ],
  },
  {
    path: '/kcc-ecology-club',
    title: 'KCC Ecology Club',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'Nā Kiaʻi Honua — Earth Guardians — a student club for environmental service and advocacy.',
    body: [
      'The KCC Ecology Club (Nā Kiaʻi Honua, "Earth Guardians") exists to inspire and educate students in environmental science and ecology through hands-on, community-based projects.',
      'The club organizes restoration work days, campus sustainability initiatives, and Environment pathway service opportunities open to any KCC student.',
    ],
    links: [{ label: 'Visit the Ecology Club site', href: 'https://ecologyclubatkcc.wixsite.com/kccecolgyclub' }, { label: 'Join the Ecology Club (flyer PDF)', href: 'https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/join_ecology_poster.pdf' }],
  },
  {
    path: '/mina',
    title: 'MINA \u2014 M\u0101lama I N\u0101 Ahupua\u02bba',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'An intercollegiate ahupuaʻa stewardship program spanning UH Mānoa and KCC.',
    body: [
      'Mālama I Nā Ahupuaʻa (MINA) is a joint UH Mānoa\u2013KCC service-learning program, established in 1997, where students work alongside elders and cultural stewards to learn traditional land management, preservation, and restoration across Oʻahu\u2019s ahupuaʻa.',
      'MINA runs four semesters a year and welcomes students and ʻohana from any discipline or institution. First-time participants attend upland, midland, and lowland core activities \u2014 invasive species management, reforesting native species, working in loʻi, maintaining heiau, and restoring loko iʻa (fishponds).',
      'A required orientation covers the historical context of the ahupuaʻa system and program logistics before you begin. Most activities run on weekends, 8am to 1pm.',
    ],
    links: [{ label: 'MINA Factsheet (PDF)', href: 'https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/mina_factsheet_fall_2023.pdf' }],
  },
  {
    path: '/policies-students',
    title: 'Policies',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'Program policies for enrolled service learners.',
    body: ['Attendance, safety, and conduct policies that apply to all KSSLP service placements.'],
  },
  {
    path: '/faqs-students',
    title: 'FAQs for Students',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'Answers to common student questions about KSSLP.',
    body: ['Common questions about registering, logging hours, choosing a pathway, and earning your certificate.'],
  },
  // For Faculty
  {
    path: '/policies-faculty',
    title: 'Policies',
    section: sections.faculty.title,
    sectionPath: sections.faculty.path,
    blurb: 'Program policies for faculty embedding service-learning in coursework.',
    body: ['Guidelines for faculty designing a service-learning component, including partner vetting and liability requirements.'],
  },
  {
    path: '/faqs-faculty',
    title: 'FAQs for Faculty',
    section: sections.faculty.title,
    sectionPath: sections.faculty.path,
    blurb: 'Answers to common faculty questions about integrating KSSLP.',
    body: ['Common questions about course integration, evaluation requirements, and coordinating with the KSSLP office.'],
  },
  {
    path: '/faculty-resources',
    title: 'Faculty Resources',
    section: sections.faculty.title,
    sectionPath: sections.faculty.path,
    blurb: 'Syllabus language, rubrics, and planning tools for faculty.',
    body: ['Sample syllabus language, reflection rubrics, and planning templates for embedding service-learning into a course.'],
  },
  // Community partners
  {
    path: '/faqs-community-partners',
    title: 'FAQs for Community Partners',
    section: 'Community Partners',
    sectionPath: '/for-faculty',
    blurb: 'Answers for organizations hosting KSSLP service learners.',
    body: ['Common questions from community organizations about becoming an approved KSSLP partner site, supervising students, and completing evaluations.'],
  },
]
