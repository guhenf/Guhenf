import React from 'react'
import { useEffect, useState } from 'react'

import Repo from '../types/repos'
import RepoCard from '../components/repoCard'
import meImg from '../assets/me.jpeg'
import githubProfile from '../assets/github_profile.jpg'
import { LinkedlnIcon } from '../svg/linkedin.tsx'
import { GithubIcon } from '../svg/github.tsx'

const techs = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'React Hooks',
  'React Forms',
  'Styled Components',
  'TailwindCSS',
  'NodeJS',
  'Express',
  'PostgreSQL',
  'Git',
]

function Main() {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/guhenf/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
  }, [])

  return (
    <section className='flex-grow'>
      <div className='py-8 grid grid-cols-2 w-fit '>
        <img
          src={meImg}
          className='max-w-32 rounded-full row-span-2 mr-6 ring-4 ring-slate-300'
        />
        <p className='text-lg text-right'>guhenf@gmail.com</p>
        <div className='flex gap-4'>
          <a target='_blank' href='https://www.linkedin.com/in/guhenf/'>
            <LinkedlnIcon />
          </a>
          <a target='_blank' href='https://github.com/guhenf'>
            <GithubIcon />
          </a>
        </div>
      </div>

      <div className='leading-relaxed my-6'>
        <p>
          Iniciei meus estudos em Desenvolvimento Web em busca de uma
          recolocação no mercado de trabalho. Desde jovem, tive contato com
          computadores e internet. Antes dessa jornada, trabalhei por mais de 3
          anos na cozinha e por 1 ano e 7 meses com química laboratorial na
          Hyundai Motor Brasil. Sigo empresas que se preocupam com o nosso mundo
          e com as pessoas, sendo sustentáveis, inclusivas e que, por meio da
          Tecnologia e da Educação, buscam transformar o nosso mundo.
        </p>
        <p className='my-2'>
          Em busca de uma carreira mais impactante para o futuro, estou em
          transição de carreira para a área de Desenvolvimento de Sistemas. Para
          firmar essa mudança, estou me graduando em Análise e Desenvolvimento
          de Sistemas pela Faculdade Estácio.
        </p>
        <p>
          Os estudoss me possibilitaram realizar alguns trabalhos. Dentre eles,
          destaco a criação de algumas Landing Pages, ajustes em sites e
          interfaces front-end em projetos de terceiros. Na realização desses
          trabalhos, utilizei e adquiri mais conhecimento sobre as seguintes
          tecnologias:
        </p>

        <ul className='grid grid-rows-5 grid-flow-col list-disc px-6'>
          {techs.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>

      <h2 className='text-xl mb-2 font-bold'>
        Projetos pessoais e públicos em meu github!
      </h2>
      <div className='grid grid-cols-3'>
        <img src={githubProfile} className='w-full rounded-l-lg' />
        <div className='bg-gray-900  grid col-span-2 rounded-r-lg'>
          <ul className='h-full w-full grid gap-2 text-xl py-8'>
            {repos.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Main
