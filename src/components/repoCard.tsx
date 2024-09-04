import React from 'react'
import Repo from '../types/repos'

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <li key={repo.name} className='text-center'>
      <a target='_blank' href={repo.html_url}>
        {repo.name}
      </a>
      {/* <p>{repo.description}</p> */}
    </li>
  )
}

export default RepoCard
