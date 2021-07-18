import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSidebar(propriedades){
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.UserGithub}.png`} style={{borderRadius: '8px'}}></img>
    </Box>
  )
}

export default function Home() {
  const UserGithub = 'lauridas';
  const pessoasFavoridas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho'];

  return (
    <>
      <AlurakutMenu></AlurakutMenu>
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar UserGithub={UserGithub}></ProfileSidebar>
        </div>
        
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem-Vindo(a)!
            </h1>

            <OrkutNostalgicIconSet>
              
            </OrkutNostalgicIconSet>
          </Box>
        </div>
        
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoridas.length})
            </h2>

            <ul>
              {pessoasFavoridas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`}></img>
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
