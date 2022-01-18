import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

const Home = ({ repositories }) => (
  <div>
    <Link href={'/blog'}>
      <a>Blog</a>
    </Link>
    {repositories?.map(repo => (
      <h3 key={repo.id}>{`Repository ${repo.id}: ${repo.name}`}</h3>
    ))}
  </div>
)

Home.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/samuelcrx/repos')
  const repositories = await response.json()
  
  console.log('Teste de renderização')

  return { repositories }
}

export default Home

