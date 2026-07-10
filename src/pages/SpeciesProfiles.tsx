import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

type Species = { name: string; hawaiianName?: string; note: string }

function SpeciesTable({ species }: { species: Species[] }) {
  return (
    <div className="overflow-x-auto border border-kalo/10 rounded-xl">
      <table className="w-full text-sm">
        <thead className="bg-sand-deep text-left">
          <tr>
            <th className="px-5 py-3 font-medium text-kalo">Species</th>
            <th className="px-5 py-3 font-medium text-kalo">Hawaiian name</th>
            <th className="px-5 py-3 font-medium text-kalo">Note</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-kalo/10">
          {species.map((s) => (
            <tr key={s.name}>
              <td className="px-5 py-3 text-ink/85 font-medium">{s.name}</td>
              <td className="px-5 py-3 text-ink/70 italic">{s.hawaiianName ?? '—'}</td>
              <td className="px-5 py-3 text-ink/70">{s.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function NativePlantsListing() {
  const species: Species[] = [
    { name: 'Kalo (taro)', hawaiianName: 'Kalo', note: 'Staple cultivated plant, central to loʻi restoration projects.' },
    { name: 'ʻŌhiʻa lehua', hawaiianName: 'ʻŌhiʻa', note: 'Keystone native forest tree; watch for Rapid ʻŌhiʻa Death protocols on site.' },
    { name: 'Naupaka kahakai', hawaiianName: 'Naupaka', note: 'Coastal native shrub used in dune restoration.' },
    { name: 'Māmaki', hawaiianName: 'Māmaki', note: 'Native shrub, host plant for the Kamehameha butterfly.' },
    { name: 'Hala', hawaiianName: 'Hala', note: 'Coastal tree, leaves used in traditional weaving (lauhala).' },
    { name: 'ʻIlima', hawaiianName: 'ʻIlima', note: 'Low-growing native shrub, official flower of Oʻahu.' },
  ]
  return (
    <div>
      <PageHero
        eyebrow="Resource Library"
        title="Native Hawaiian Plants Listing"
        description="A reference listing of native and endemic Hawaiian plant species used by Environment pathway learners in restoration and loʻi projects."
      />
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16 space-y-8">
        <Link to="/resource-library" className="text-sm text-ocean hover:text-papaya">
          &larr; Back to Resource Library
        </Link>
        <SpeciesTable species={species} />
        <p className="text-sm text-ink/60">
          This is a working reference list, not exhaustive. Ask your pathway coordinator for site-specific
          identification guides before a restoration work day.
        </p>
      </section>
    </div>
  )
}

export function InvasivePlantSpecies() {
  const species: Species[] = [
    { name: 'Miconia', note: 'Fast-spreading forest invader; shallow roots increase landslide risk on cleared slopes.' },
    { name: 'Strawberry guava', note: 'Outcompetes native understory plants; commonly targeted in restoration removal days.' },
    { name: 'Fountain grass', note: 'Fire-adapted invasive grass that increases wildfire risk in dry leeward areas.' },
    { name: 'Ivy gourd', note: 'Aggressive vine that smothers native and cultivated plants alike.' },
  ]
  return (
    <div>
      <PageHero
        eyebrow="Resource Library"
        title="Invasive Plant Species Profiles"
        description="Identification guides used in the field by Environment pathway volunteers to safely identify and remove invasive species."
      />
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16 space-y-8">
        <Link to="/resource-library" className="text-sm text-ocean hover:text-papaya">
          &larr; Back to Resource Library
        </Link>
        <SpeciesTable species={species} />
      </section>
    </div>
  )
}

export function InvasiveAnimalSpecies() {
  const species: Species[] = [
    { name: 'Coqui frog', note: 'Loud invasive amphibian disrupting native insect populations; reportable to DOA.' },
    { name: 'Little fire ant', note: 'Painful sting, harms pets and wildlife; report suspected sightings.' },
    { name: 'Feral pig', note: 'Root and trample native forest understory, accelerating erosion and invasive plant spread.' },
    { name: 'Rose-ringed parakeet', note: 'Damages agricultural crops and competes with native birds for nesting cavities.' },
  ]
  return (
    <div>
      <PageHero
        eyebrow="Resource Library"
        title="Invasive Animal & Insect Species Profiles"
        description="Companion reference to the plant species profiles, covering species that threaten native Hawaiian ecosystems."
      />
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16 space-y-8">
        <Link to="/resource-library" className="text-sm text-ocean hover:text-papaya">
          &larr; Back to Resource Library
        </Link>
        <SpeciesTable species={species} />
      </section>
    </div>
  )
}
