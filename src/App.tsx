import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import PathwaysOverview from './pages/PathwaysOverview'
import PathwayDetail from './pages/PathwayDetail'
import LeafPage from './pages/LeafPage'
import NotFound from './pages/NotFound'
import { leafPages } from './data/siteContent'
import {
  StartHere,
  EventsOpportunities,
  BecomeCertified,
  ResourceLibrary,
  About,
  ForStudents,
  ForFaculty,
} from './pages/sections'
import { FAQStudents, FAQFaculty, FAQPartners } from './pages/FAQs'
import { PoliciesStudents, PoliciesFaculty } from './pages/Policies'
import { NativePlantsListing, InvasivePlantSpecies, InvasiveAnimalSpecies } from './pages/SpeciesProfiles'
import { MissionVision, MeetTheTeam } from './pages/AboutDetail'
import SplashLoader from './components/SplashLoader'

// Paths with a dedicated, hand-built page — excluded from the generic LeafPage loop below
const customPaths = new Set([
  '/faqs-students',
  '/faqs-faculty',
  '/faqs-community-partners',
  '/policies-students',
  '/policies-faculty',
  '/native-hawaiian-plants-listing',
  '/invasive-plant-species',
  '/invasive-animal-insect-species',
  '/mission-vision',
  '/meet-the-team',
])

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <Layout>
      <SplashLoader />
      <ScrollToTop />
      <div key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pathways" element={<PathwaysOverview />} />
          <Route path="/pathways/:slug" element={<PathwayDetail />} />

          <Route path="/service-learners-start-here" element={<StartHere />} />
          <Route path="/events-opportunities" element={<EventsOpportunities />} />
          <Route path="/become-certified" element={<BecomeCertified />} />
          <Route path="/resource-library" element={<ResourceLibrary />} />
          <Route path="/about" element={<About />} />
          <Route path="/for-students" element={<ForStudents />} />
          <Route path="/for-faculty" element={<ForFaculty />} />

          <Route path="/faqs-students" element={<FAQStudents />} />
          <Route path="/faqs-faculty" element={<FAQFaculty />} />
          <Route path="/faqs-community-partners" element={<FAQPartners />} />
          <Route path="/policies-students" element={<PoliciesStudents />} />
          <Route path="/policies-faculty" element={<PoliciesFaculty />} />
          <Route path="/native-hawaiian-plants-listing" element={<NativePlantsListing />} />
          <Route path="/invasive-plant-species" element={<InvasivePlantSpecies />} />
          <Route path="/invasive-animal-insect-species" element={<InvasiveAnimalSpecies />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />

          {leafPages
            .filter((p) => !customPaths.has(p.path))
            .map((p) => (
              <Route key={p.path} path={p.path} element={<LeafPage />} />
            ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Layout>
  )
}
