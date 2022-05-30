import React from "react"
import "../sass/index.scss"
export default function Layout({ children }) {
  return (
    <main style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </main>
  )
}