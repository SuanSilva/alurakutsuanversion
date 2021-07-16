import React from 'react';
import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/componentes/ProfileRelations/ProfileRelationsBoxWrapper';

function ProfileSidebar(propriedades) {
    return (
      <Box as="aside">
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}/>
        <hr/>
       
        <p>
          <a className="boxLink"href={`https://github.com/${propriedades.githubUser}`}>
             @{propriedades.githubUser}
          </a>
        </p>
        
        <hr/>
        
        <AlurakutProfileSidebarMenuDefault/>
      </Box>
    )
  }

export default function Home() {
   
    const githubUser= 'SuanSilva';
    const [comunidades,setComunidades]= React.useState(['alurakut']);
    const pessoasFavoritas= [
        'juunegreiros',
        'omariosouto',
        'peas',
        'rafaballerini',
        'marcobrunodev',
        'felipefialho'
    ]
    return (
        <>
        <AlurakutMenu/>
        <MainGrid> 
    { /* <Box style="grid-area: profileArea;"> */}     
        <div className="profileArea" style={{ gridArea: 'profileArea'}}>
            <ProfileSidebar githubUser={githubUser} /> 
        </div>
        <div className="welcomeArea"style={{gridArea:'welcomeArea'}}>
            <Box>
                <h1 ClassName="title">Bem vindo(a)</h1> 
                <OrkutNostalgicIconSet/>
            </Box>

            <Box>
            <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e){
              e.preventDefault();
              //comunidades.push('Alura Stars');
              const comunidadeAtualizadas=[...comunidades,'Alura Stars'];
              setComunidades(comunidadeAtualizadas)
              console.log(comunidades)
               

             } }>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
            
            </Box>
        </div>
        <div className="profileRelationsArea"style={{gridArea:'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>   
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">Comunidades({comunidades.length})</h2>  
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`http://placehold.it/300x300`} />
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




