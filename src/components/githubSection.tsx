import React from 'react'
import RepoCard from '../components/repoCard'
import Repo from '../types/repos'

function GithubSection({ repos }) {
  return (
    <section>
      <h2 className='text-xl mb-2 font-bold'>
        Projetos pessoais e públicos em meu github!
      </h2>
      <div className='grid grid-cols-3'>
        <div className='bg-gray-900'>
          {/* <img src='https://avatars.githubusercontent.com/u/92729123?v=4' /> */}
          <ul className='gap-2 text-md py-8 font-bold'>
            {repos.map((repo: Repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default GithubSection
