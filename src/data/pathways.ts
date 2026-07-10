export type Pathway = {
  slug: string
  name: string
  marker: string
  color: string
  summary: string
  focus: string[]
  culturalNote?: { heading: string; values: { term: string; meaning: string }[] }
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
      "Cross-cultural exchange drawing on KCC's diverse student body — from the campus International Café to language tutoring and immigrant-integration work with Project SHINE.",
    focus: ['International Café cultural exchange', 'Peer & public-school language tutoring', 'Project SHINE immigrant integration support'],
  },
  {
    slug: 'bridging-generations',
    name: 'Bridging Generations',
    marker: 'hands',
    color: '#8a5a3c',
    summary:
      'Kūpuna companionship and intergenerational service grounded in Kaʻāmauloa — the unbroken cultural thread connecting ancestors, present-day communities, and future generations.',
    focus: ['Kūpuna companionship & transportation', 'Hospice and long-term care support', 'Intergenerational mentorship'],
    culturalNote: {
      heading: 'Grounded in Kaʻāmauloa — the unbroken thread',
      values: [
        { term: 'Aloha', meaning: 'Compassion and respect for all generations, the foundation of community trust.' },
        { term: 'Mālama', meaning: 'To care for and protect — mālama ʻāina ensures the land sustains future generations.' },
        { term: 'Kuleana', meaning: 'A sacred responsibility to ʻohana and heritage, carrying knowledge forward.' },
        { term: 'Naʻauao', meaning: 'Sharing intellectual wisdom and ancestral knowledge across generations.' },
      ],
    },
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
