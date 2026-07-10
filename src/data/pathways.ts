export type Pathway = {
  slug: string
  name: string
  marker: string
  color: string
  summary: string
  focus: string[]
}

export const pathways: Pathway[] = [
  {
    slug: 'environment',
    name: 'Environment',
    marker: 'leaf',
    color: '#2f4a3c',
    summary:
      'Restoration, native ecosystems, and climate resilience work across Oʻahu — from loʻi to invasive species removal.',
    focus: ['Ecosystem restoration', 'Native plant stewardship', 'Climate & sustainability'],
  },
  {
    slug: 'health',
    name: 'Health',
    marker: 'pulse',
    color: '#b5432f',
    summary:
      'Community health access, wellness education, and direct service with local health organizations and clinics.',
    focus: ['Blood drives', 'Wellness education', 'Clinical & community health partners'],
  },
  {
    slug: 'education',
    name: 'Education',
    marker: 'book',
    color: '#1c6b72',
    summary:
      'Tutoring, mentorship, and literacy work supporting keiki and learners across Honolulu classrooms and after-school programs.',
    focus: ['Tutoring & mentorship', 'Literacy programs', 'Youth development'],
  },
  {
    slug: 'arts-history-culture',
    name: 'Arts, History, & Culture',
    marker: 'palette',
    color: '#d9a441',
    summary:
      'Preservation and storytelling projects with museums, cultural sites, and community archives around Hawaiʻi.',
    focus: ['Cultural preservation', 'Oral history', 'Museum & archive partners'],
  },
  {
    slug: 'intercultural-perspectives-identities',
    name: 'Intercultural Perspectives & Identities',
    marker: 'compass',
    color: '#6b4a8a',
    summary:
      'Service with organizations supporting immigrant, refugee, and multicultural communities across Oʻahu.',
    focus: ['Cross-cultural exchange', 'Community identity work', 'Language access'],
  },
  {
    slug: 'bridging-generations',
    name: 'Bridging Generations',
    marker: 'hands',
    color: '#8a5a3c',
    summary:
      'Kūpuna support, intergenerational programming, and service with senior and long-term care communities.',
    focus: ['Kūpuna companionship', 'Intergenerational programs', 'Senior services'],
  },
  {
    slug: 'resilience-neighborhoods',
    name: 'Resilience Neighborhoods',
    marker: 'shield',
    color: '#3c5a8a',
    summary:
      'Disaster preparedness, food security, and neighborhood-level resilience work rooted in Pohukaina and beyond.',
    focus: ['Disaster preparedness', 'Food security', 'Neighborhood partnerships'],
  },
]
