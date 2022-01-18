import React from 'react'
import 'isomorphic-fetch'

const Home = ({ repositories }) => (
  <div>
    {repositories?.map(repo => (
      <h3 key={repo.id}>{`Repository ${repo.id}: ${repo.name}`}</h3>
    ))}
  </div>
)

Home.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/samuelcrx/repos')
  const repositories = await response.json()
  return { repositories }
}

export default Home

