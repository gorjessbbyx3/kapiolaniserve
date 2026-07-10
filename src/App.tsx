import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import PathwaysOverview from './pages/PathwaysOverview'
import PathwayDetail from './pages/PathwayDetail'
import LeafPage from './pages/LeafPage'
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

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
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

        {leafPages.map((p) => (
          <Route key={p.path} path={p.path} element={<LeafPage />} />
        ))}

        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
