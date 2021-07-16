
import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/componentes/ProfileRelations/ProfileRelationsBoxWrapper';

function ProfileSidebar(propriedades) {
    return (
      <Box>
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}/>
      </Box>
    )
  }

export default function Home() {
    const githubUser= 'SuanSilva';
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
                Bem vindo 
            </Box>
        </div>
        <div className="profileRelationsArea"style={{gridArea:'profileRelationsArearea'}}>
            <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle">
                Amigos
                </h2>
                
            <ul>       
                {pessoasFavoritas.map((itemAtual)=>{
                    return(
                        <a href={`/users/${itemAtual}`} key={itemAtual}>
                        <img src={`https://github.com/${itemAtual}.png`}/>
                        <span>{itemAtual}</span>  
                        </a>   
                    )
                })}
            </ul>  
            </ProfileRelationsBoxWrapper>          
            <Box>
                Comunidades
            </Box>
        </div>    
        </MainGrid>
        </> 
        )
        }




