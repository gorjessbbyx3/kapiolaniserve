export type LeafPage = {
  path: string
  title: string
  section: string
  sectionPath: string
  blurb: string
  body: string[]
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
      'Every service learner begins with a required orientation covering program expectations, safety guidelines, and how to log hours through the KSSLP portal.',
      'Sessions run at the start of each semester in ʻIliahi 231. Check the current schedule or contact the office to reserve a seat.',
    ],
  },
  {
    path: '/registration',
    title: 'Registration',
    section: sections.startHere.title,
    sectionPath: sections.startHere.path,
    blurb: 'How to register for a service-learning course or placement.',
    body: [
      'Registration connects your course requirement to an approved community partner placement in the pathway of your choice.',
      'Bring your course syllabus and instructor contact to the KSSLP office, or submit the online registration form once available.',
    ],
  },
  {
    path: '/timesheet-evaluation',
    title: 'Timesheet / Evaluation',
    section: sections.startHere.title,
    sectionPath: sections.startHere.path,
    blurb: 'Logging hours and completing your end-of-term evaluation.',
    body: [
      'Service hours must be logged and signed off by your community partner supervisor throughout the term.',
      'A final evaluation, completed by both the student and the partner site, is required before hours are certified.',
    ],
  },
  {
    path: '/essay',
    title: 'Reflection Essay',
    section: sections.startHere.title,
    sectionPath: sections.startHere.path,
    blurb: 'Guidelines for the required end-of-term reflection essay.',
    body: [
      'The reflection essay asks you to connect your service experience back to your coursework, your pathway, and your own community ties.',
      'Prompts and submission details are provided by your instructor and the KSSLP office each term.',
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
      'Pohukaina Food Pantry provides free groceries and essentials to KCC students facing food insecurity, staffed in part by service learners.',
      'Open during posted campus hours \u2014 no application required.',
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
    path: '/mala-maunuunu',
    title: 'Māla Māunuunu',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'KCC\u2019s campus garden and a hub for Environment pathway service.',
    body: ['Māla Māunuunu is KCC\u2019s student-run campus garden, offering hands-on growing, composting, and food-security service opportunities.'],
  },
  {
    path: '/kcc-ecology-club',
    title: 'KCC Ecology Club',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'A student club for environmental service and advocacy.',
    body: ['The Ecology Club organizes restoration work days, campus sustainability initiatives, and Environment pathway service opportunities for students.'],
  },
  {
    path: '/service-learner-types',
    title: 'Service Learner Types',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'The different ways students participate in KSSLP.',
    body: ['Whether you\u2019re fulfilling a course requirement, pursuing a certificate, or volunteering independently, this page outlines which track fits you.'],
  },
  {
    path: '/student-resources-incentives',
    title: 'Student Resources & Incentives',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'Scholarships, recognition, and support available to service learners.',
    body: ['Incentives and support \u2014 including scholarship opportunities and transcript recognition \u2014 available to active service learners.'],
  },
  {
    path: '/mina',
    title: 'MINA \u2014 M\u0101lama I N\u0101 Ahupua\u02bba',
    section: sections.students.title,
    sectionPath: sections.students.path,
    blurb: 'A cross-campus intercollegiate service-learning gathering.',
    body: ['MINA is organized by community partners, faculty, and student leaders across Kapiʻolani CC and other Hawaiʻi higher-ed institutions to support ahupuaʻa-based stewardship.'],
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
