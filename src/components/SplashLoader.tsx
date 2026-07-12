import { useEffect, useState } from 'react'

export default function SplashLoader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1500)
    return () => clearTimeout(t)
  }, [])

  if (hidden) return null

  return (
    <div className="loader-screen fixed inset-0 z-[100] bg-kalo-dark flex items-center justify-center">
      <svg width="100" height="116" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className="loader-path"
          d="M60 18
             C 52 12 42 12 35 17
             C 18 28 8 48 9 68
             C 10 94 26 114 60 132
             C 94 114 110 94 111 68
             C 112 48 102 28 85 17
             C 78 12 68 12 60 18 Z"
          stroke="#c9a24b"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}
