import * as React from 'react'
import { useRouteMatch } from 'react-router-dom'

function About() {
  let match = useRouteMatch<{ id: string }>('/about/:id')

  // Do whatever you want with the match...
  if (match) {
    console.log(match.params.id)
  }

  return <pre>{JSON.stringify(match, null, 4)}</pre>
}
export default About
