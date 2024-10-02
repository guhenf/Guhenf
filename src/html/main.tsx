import React, { useEffect, useState } from 'react'

import GithubSection from '../components/GithubSection'
import meImg from '../assets/me.jpeg'
import { LinkedlnIcon } from '../svg/linkedin.tsx'
import { GithubIcon } from '../svg/github.tsx'
import Repo from '../types/repos.ts'

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
    <main className='flex-grow'>
      <section className='py-8 grid grid-cols-2 w-fit '>
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
      </section>

      <section className='leading-relaxed my-6'>
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
      </section>
      <GithubSection repos={repos} />
    </main>
  )
}

export default Main
