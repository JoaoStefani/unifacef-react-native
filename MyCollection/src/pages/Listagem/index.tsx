import style, {Container, Title, TitleBold} from './styles';

import React, {useState} from "react";
import {Header} from "../../components/Header";

import {ButtonCard} from "../../components/ButtonCard";
import {FlatList} from "react-native";
import {Background} from "../../components/Background";

// import {useNavigation} from "@react-navigation/native";


interface ItensProps {
    id: number;
    img: string;
    name: string;
    description: string;
    value: number;
    type: string;
}

export const Listagem: React.FC = () => {
    const [active, setActive] = useState<number>()
    // const navigation = useNavigation<any>()
    return (
        <Background>
            <Header backFalse>
                <Title><TitleBold>My</TitleBold>Collection</Title>
            </Header>
            <Container>
                <FlatList<any>
                    renderItem={({item}) => (
                        <ButtonCard item={item} activeId={active} setActive={setActive} addCart={() => {
                        }} goDetail={(id) => {
                            // navigation.push('Detalhes', {id})
                        }}/>
                    )}
                    keyExtractor={(item) => `${item.id}`}
                    style={style.flatList}
                    numColumns={2}
                    data={[
                        {
                            "id": 1,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/349040/header.jpg?t=1611701005",
                            "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
                            "description": "A última criação da aclamada série STORM leva você para uma aventura intensa e impressionante. Aproveite o sistema de batalha totalmente reformulado e prepare-se para mergulhar nas lutas mais épicas que você já viu na série NARUTO SHIPPUDEN: Ultimate Ninja STORM!",
                            "value": 79,
                            "type": "indie"
                        },
                        {
                            "id": 2,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/851850/header.jpg?t=1639674705",
                            "name": "DRAGON BALL Z: KAKAROT",
                            "description": "Vivencie a história de DRAGON BALL Z desde eventos épicos a missões secundárias bem divertidas, incluindo momentos inéditos que explicam alguns fatos da história de DRAGON BALL revelados pela primeira vez!\n\n\n• Jogue batalhas icônicas do DRAGON BALL Z em uma escala diferente de qualquer outra. Lute em vastos campos de batalha com ambientes destrutíveis e vivencie batalhas épicas com chefes que testarão os limites de suas habilidades de combate. Aumente seu nível de poder e enfrente o desafio!\n\n\n• Não lute apenas como um Lutador Z. Viva como eles! Pesque, voe, coma, treine e lute através das sagas de DRAGON BALL Z, fazendo amigos e construindo relacionamentos com um elenco enorme de personagens.\n\nViva novamente a história de Goku e outros Guerreiros Z em DRAGON BALL Z: KAKAROT! Além das batalhas épicas, sinta como é a vida no mundo de DRAGON BALL Z lutando, pescando, comendo e treinando com Goku, Gohan, Vegeta e outros. Explore novas áreas e aventuras: avance pela história e forme vínculos com outros heróis de DRAGON BALL Z.",
                            "value": 81.68,
                            "type": "indie"
                        },
                        {
                            "id": 3,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg?t=1589281999",
                            "name": "Cuphead",
                            "description": "Cuphead é um jogo de ação e tiros clássico, com enorme ênfase nas batalhas de chefes. Inspirado nas animações infantis da década de 1930, os visuais e efeitos sonoros foram minuciosamente recriados com as mesmíssimas técnicas dessa era, com destaque para desenhos feitos à mão, fundos em aquarela e gravações originais de jazz.\n\nJogue como Cuphead ou Mugman (nos modos um só jogador ou cooperativo) e atravesse mundos estranhos, adquira novas armas, aprenda supergolpes potentes e descubra segredos ocultos, tudo isso enquanto tenta pagar a dívida que você fez com o diabo!",
                            "value": 89.14,
                            "type": "aventura"
                        },
                        {
                            "id": 4,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/731490/header.jpg?t=1568841571",
                            "name": "Crash Bandicoot™ N. Sane Trilogy",
                            "description": "Seu marsupial favorito, Crash Bandicoot™, está de volta! Ele está aprimorado, inspirado e preparado para dançar na coleção de jogos da trilogia insana. Agora você pode jogar Crash Bandicoot como nunca antes. Gire, pule, golpeie e repita conforme você enfrentar as aventuras e os desafios épicos através dos três jogos que deram início a tudo, Crash Bandicoot™, Crash Bandicoot™ 2: Cortex Strikes Back e Crash Bandicoot™: Warped. Reviva todos os seus momentos favoritos de Crash em seu apogeu gráfico em HD totalmente remasterizado e se prepare para colocar um CRASH nos seus golpes!\nCrash Bandicoot™ N. Sane Trilogy Stormy Ascent\nVivencie a notória Stormy Ascent do jogo Crash Bandicoot original. Antes incompleta e nunca lançada, essa fase vai desafiar até os fãs mais veteranos do Crash! Será que você consegue enfrentar degraus que se retraem, assistentes atiradores de frascos, pássaros ferozes, plataformas móveis e espinhos de ferro? Baixe e jogue a fase Stormy Ascent!\nCrash Bandicoot N. Sane Trilogy Future Tense\nJogue a primeira fase NOVA para a trilogia original em quase 20 anos. Inspirado na fase \"Waterfall\" do primeiro jogo de Crash Bandicoot, Future Tense apresenta vários quebra-cabeças da fase original ambientados em um cenário futurista de Crash Bandicoot 3: Warped. Descubra um novo nível de dificuldade para Crash Bandicoot N. Sane Trilogy desviando de foguetes, destruindo robôs e pulando lasers enquanto você sobe por um arranha-céu enorme e futurista.",
                            "value": 10.27,
                            "type": "outros"
                        },
                        {
                            "id": 5,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1618851907",
                            "name": "Red Dead Redemption 2",
                            "description": "Estados Unidos, 1899.\n\nArthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou.\n\nAgora com conteúdo adicional no Modo História e um Modo Foto repleto de recursos, Red Dead Redemption 2 também inclui acesso gratuito ao mundo compartilhado de Red Dead Online. Nele, os jogadores assumem uma diversidade de ofícios para construir suas próprias trajetórias na fronteira, seja perseguindo criminosos procurados como Caçador de Recompensa, estabelecendo um negócio como Mercador, escavando tesouros exóticos como Colecionador ou operando uma destilaria subterrânea como Moonshiner, e muito mais.\n\nCom novas melhorias gráficas e técnicas que tornam o jogo mais imersivo, Red Dead Redemption 2 para PC aproveita ao máximo a potência do PC para dar vida a cada canto deste mundo gigantesco, rico e detalhado, incluindo maiores distâncias de renderização; iluminação global de maior qualidade e oclusão do ambiente para melhorar a iluminação do dia e da noite; melhorias nos reflexos e sombras mais fortes e de maior resolução a todas as distâncias; texturas de árvore tesseladas e melhorias nas texturas de grama e pelo, tornando todas as plantas e animais mais realistas.\n\nRed Dead Redemption 2 para PC também oferece suporte a HDR e a monitores de ponta com resolução 4K ou superior, configurações com vários monitores, widescreen, taxas de quadros mais rápidas, entre outras opções.",
                            "value": 54.93
                        },
                        {
                            "id": 6,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/996580/header.jpg?t=1588789018",
                            "name": "Spyro™ Reignited Trilogy",
                            "description": "O mestre do fogo está de volta! São as mesmas chamuscadas, a mesma atitude quente, mas em alta definição desta vez. Spyro traz de volta o fogo como nunca antes na coleção de jogos Spyro™ Reignited Trilogy. Aumente a temperatura com os três jogos originais: Spyro™ the Dragon, Spyro™ 2: Ripto's Rage e Spyro™: Year of the Dragon. Explore mundos enormes, reencontre personagens espevitados e viva novamente a aventura em toda sua glória remasterizada. Afinal, quando um reino precisa de ajuda, você sabe quem é o dragão a chamar.",
                            "value": 36.4,
                            "type": "indie"
                        },
                        {
                            "id": 7,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/620980/header.jpg?t=1622461922",
                            "name": "Beat Saber",
                            "description": "Beat Saber is an immersive rhythm experience you have never seen before! Enjoy tons of handcrafted levels and swing your way through the pulsing music beats, surrounded by a futuristic world. Use your sabers to slash the beats as they come flying at you – every beat indicates which saber you need to use and the direction you need to match. With Beat Saber you become a dancing superhero!\nFeatures\nFeel the Rhythm: Immerse yourself in the smoothest combination of music beats and visual effects in Beat Saber’s truly unique gameplay.\nHandcrafted Levels & Music: Unlike other rhythm games with generated content, music and levels in Beat Saber are drawn precisely by hand to enhance the music experience.\nCompete in Multiplayer: Challenge your friends or random opponents around the world.\nChallenging Campaign: Get better every day while completing objectives and challenges in the Campaign.\nRise Up the Global Leaderboards: Compete against other Beat Saberists around the world in various difficulties.\nEasy to Learn, Fun to Master: Everyone can understand the basic game mechanics. It's easy for anyone to pick up and play.\nGreat Exercise: Exercise while dancing and slashing the beats, Beat Saber gets you moving.",
                            "value": 56.56
                        },
                        {
                            "id": 8,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/1250410/header.jpg?t=1647979760",
                            "name": "Microsoft Flight Simulator Game of the Year Edition",
                            "description": "A edição de Jogo do Ano (GOTY) do Microsoft Flight Simulator é uma celebração pelo sucesso, críticas positivas e prêmios recebidos, e é, acima de tudo, um agradecimento a todos os nossos fãs, que fizeram do Microsoft Flight Simulator um fenômeno mundial. Sendo a melhor edição já feita, o Microsoft Flight Simulator Jogo do Ano estará disponível em update gratuito para todos que já jogam em PC.\n\nEdição Jogo do Ano\n• Se divirta com 5 novas aeronaves: o Boeing F/A-18 Super Hornet, o VoloCity, o Pilatus PC-6 Porter, o CubCrafters NX-Cub e o Aviat Pitts Special S1S.\n• Conheça 8 aeroportos desenhados à mão na Alemanha, Suíça e Estados Unidos, com sistema meteorológico atualizado, acesso antecipado ao DX12 e um sistema de replay em modo desenvolvedor.\n• Ganhe o céu em 6 novos Voos de Descoberta (Helsinki, Friburgo, Meca, Monument Valley, Singapura e Mount Cook) e em 14 novos tutoriais.\n\nO mundo ao alcance das suas mãos.\n• Paisagens realistas e detalhadas - Mergulhe na beleza e na imensidão do nosso planeta com mais de 37 mil aeroportos, 1,5 bilhão de edifícios, 2 trilhões de árvores, montanhas, estradas, rios e muito mais.\n• Mundo Real - A Terra tem vida pulsante e sempre está em constante mudança, assim como o mundo do Microsoft Flight Simulator, que inclui tráfego ao vivo, clima em tempo real e animais.\n\nCrie asas.\n• Aeronaves - Aprimore suas habilidades de piloto em uma vasta gama de aeronaves, desde aviões leves a jatos comerciais com várias modalidades de voo. Cada aeronave inclui cockpits altamente detalhados e precisos com instrumentação realista.\n• Novo sistema de checagem - De profissional a iniciante, selecione seu nível para um controle total do voo sem instrutores ou para obter uma assistência completa com a checagem e indicações de uso de instrumentos interativas.\n\nTeste suas habilidades.\n• Clima em tempo real - O novo mecanismo de clima em tempo real permite que os jogadores experienciem as condições meteorológicas reais, incluindo velocidade e direção do vento precisas, temperatura, umidade, chuva e muito mais.\n• Novo mecanismo dia e noite - experimente o voo a qualquer hora do dia ou do ano, permitindo VFR noturno, regras de voo visual e navegação.\n• Modelagem aerodinâmica – um sistema de última geração com mais de 1000 superfícies de controle por avião proporciona uma experiência ultrarrealista.\n\nA edição Deluxe inclui tudo o que há no Microsoft Flight Simulator, mais 5 aviões de alta precisão com modelos de voo exclusivos e 5 aeroportos internacionais adicionais feitos à mão.\n\nAeronaves adicionais Deluxe\n• Diamond Aircraft DA40-TDI\n• Diamond Aircraft DV20\n• Textron Aviation Beechcraft Baron G58\n• Textron Aviation Cessna 152 Aerobat\n• Textron Aviation Cessna 172 Skyhawk\n\nAeroportos adicionais feitos à mão Deluxe\n• Amsterdam Airport Schiphol (Holanda)\n• Cairo International Airport (Egito)\n• Cape Town International Airport (África do Sul)\n• O’Hare International Airport (EUA)\n• Adolfo Suárez Madrid–Barajas Airport (Espanha)\n\nA edição Premium Deluxe inclui tudo o que há no Microsoft Flight Simulator Deluxe, mais 5 aviões de alta precisão com modelos de voo exclusivos e 5 aeroportos internacionais adicionais feitos à mão.\n\nAeronaves adicionais Premium Deluxe\n• Boeing 787-10 Dreamliner\n• Cirrus Aircraft SR22\n• Pipistrel Virus SW 121\n• Textron Aviation Cessna Citation Longitude\n• Zlin Aviation Shock Ultra\n\nAeroportos adicionaisPremium Deluxe\n• Denver International Airport (EUA)\n• Dubai International Airport (Emirados Árabes Unidos)\n• Frankfurt Airport (Alemanha)\n• Heathrow Airport (Reino Unido)\n• San Francisco International Airport (EUA)",
                            "value": 14.01,
                            "type": "ação"
                        },
                        {
                            "id": 9,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/1057090/header.jpg?t=1612897638",
                            "name": "Ori and the Will of the Wisps",
                            "description": "ORI AND THE WILL OF THE WISPS É IMPERDÍVEL*:\n• 98/100 GAMESBEAT “… uma obra-prima emocionante e empolgante”\n• 9,5/10 GAMEINFORMER “a história é fantástica e o mundo é de tirar o fôlego”\n• 9/10 IGN “o melhor elogio possível para uma sequência”\n• 9,5/10 DESTRUCTOID “Um marco determinante desta nova década”\n• 4,5/5 WINDOWS CENTRAL “Sensacional e arrebatador…\"\n• 90/100 GAMERS HEROES “Ori and the Will of the Wisps é um jogo apaixonante feito com o coração.”\n• 9/10 PRESS START AUS “o ato final é de encher o coração e o faz explodir com a alegria de viver.”\n• 9/10 AUS GAMERS\n• 9/10 EUROGAMER ITALY\n• 91/100 GAMESTAR.DE\n• 90/100 ATOMIX\n• 5/5 HARDCORE GAMER\n• 9,4/10 VANDAL\n• 9/10 VIDEOGAMER\n• 5/5 DAILY STAR: “uma obra-prima elaborada e emocionante que eleva o gênero Metroidvania\n• 9,2/10 MERISTATION\n• 9/10 GAMESPEW “Ori and the Will of the Wisps deve ser o jogo mais lindo que já joguei.”\n• 9,8/10 THE GAMES MACHINE\n• 4,5/5 SCREEN RANT “Uma sequência espetacular”\n• 9,5/10 EASYALLIES “Esse é um jogo extraordinário e imperdível.”\n• 9,2/10 GAMERSKY\n• 4,5/5 TWINFINITE “Uma aventura Metroidvania mágica”\n• 94/100 COGconnected\n\n*Pontuações e frases de análises referentes às versões do jogo para Windows PC e/ou console. Fonte: Metacritic.com, 17/03/2020\n\nOri, o pequeno espírito, já enfrentou muitos perigos, mas quando um voo fatídico ameaça Kun, a pequena coruja, será necessário mais do que apenas coragem para reunir uma família, curar uma terra despedaçada e descobrir o verdadeiro destino de Ori. Dos criadores do aclamado jogo de ação e plataforma Ori and the Blind Forest, chega a sequência tão esperada. Embarque em uma nova aventura em um vasto mundo cheio de novos amigos e inimigos, trazidos à vida por um deslumbrante trabalho artístico pintado à mão. Com uma trilha sonora original inteiramente orquestrada, Ori and the Will of the Wisps mantém a tradição da Moon Studios de criar jogos de ação e plataforma detalhados e narrativas profundamente emocionantes.",
                            "value": 16.65,
                            "type": "indie"
                        },
                        {
                            "id": 10,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/261570/header.jpg?t=1590605540",
                            "name": "Ori and the Blind Forest",
                            "description": "A floresta de Nibel está morrendo. Após uma poderosa tempestade que iniciou uma série de eventos devastadores, um improvável herói deve fazer uma jornada para encontrar a sua coragem e confrontar um inimigo sombrio para salvar o seu lar. \"Ori and the Blind Forest\" conta a história de um jovem órfão destinado a feitos heróicos através de um jogo de ação e plataforma com um visual impressionante, criado pela Moon Studios para PC. Contando com um trabalho artístico pintado à mão, atuação de personagens meticulosamente animada e uma trilha sonora inteiramente orquestrada, \"Ori and the Blind Forest\" explora uma história profundamente emocional sobre amor e sacrifício, além da esperança que existe em todos nós.",
                            "value": 55.08,
                            "type": "indie"
                        },
                        {
                            "id": 11,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1650550157",
                            "name": "Forza Horizon 5",
                            "description": "Sua maior aventura Horizon te espera! Lidere impressionantes expedições pelo mundo aberto vibrante e em constante evolução nas terras mexicanas. Participe de corridas divertidas e sem limites enquanto pilota centenas dos melhores carros do mundo.\n\nEssa é sua Aventura Horizon\nLidere impressionantes expedições pelo mundo aberto vibrante e em constante evolução nas terras mexicanas. Participe de corridas divertidas e sem limites enquanto pilota centenas dos melhores carros do mundo.\n\nUm Mundo Aberto Diverso\nExplore um mundo de grande contraste e beleza. Descubra desertos vivos, selvas exuberantes, cidades históricas, ruínas escondidas, praias intocadas, desfiladeiros profundos e um imponente vulcão com seu cume coberto de neve.\n\nUm Mundo Aberto Cheio de Aventuras\nMergulhe em uma vasta campanha com centenas de desafios que concedem recompensas por participar de suas atividades favoritas. Conheça novos personagens e decida os resultados das missões de História do Horizon.\n\nUm Mundo Aberto em Evolução\nParticipe de eventos climáticos impressionantes, como vendavais de areia e tempestades tropicais conforme mudam semanalmente as temporadas no México. Volte sempre para o jogo e encontre novos eventos, desafios, colecionáveis, recompensas e novas áreas para explorar. Nenhuma temporada é igual.\n\nUm Mundo Aberto Social\nJunte-se a outros jogadores e entre no Arcade Horizon para participar de desafios acirrados e empolgantes enquanto seu grupo se diverte sem necessidade de menus, telas de carregamento e lobbies. Faça novos amigos no Horizon Open e Passeios do Horizon e compartilhe suas criações com a nova função de presentear.\n\nUm Mundo Aberto Seu\nCrie sua própria diversão com a poderosa ferramenta EventLab, incluindo corridas, desafios, manobras e novos modos de jogo. Personalize seus carros como nunca antes com novas opções, como abrir e fechar o teto de carros conversíveis, pintar as pinças dos freios e muito mais. Use o novo recurso de Entregas de Presente para compartilhar suas criações com a comunidade.\n\nComece hoje sua Aventura Horizon!",
                            "value": 83.74,
                            "type": "ação"
                        },
                        {
                            "id": 12,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/1238810/header.jpg?t=1641312066",
                            "name": "Battlefield V",
                            "description": "Essa é a experiência definitiva de Battlefield V. Entre no maior conflito da humanidade no ar, na terra e no mar com todo o conteúdo de jogo desbloqueado desde o início. Escolha do arsenal completo de armas, veículos e dispositivos. Reviva as batalhas mais acirradas da Segunda Guerra Mundial. Não seja só mais um no campo de batalha com o elenco de Elites e o melhor conteúdo de personalização dos Anos 1 e 2.\n\nBattlefield™ V Edição Definitiva contém o jogo base Battlefield V e o conteúdo da coleção definitiva:\nTodo o conteúdo de jogo (armas, veículos e dispositivos) do lançamento, Anos 1 e 2\nTodos os Elites\n84 variações de uniformes imersivas para os exércitos britânico e alemão para melhorar o mundo aberto da Segunda Guerra Mundial\n8 uniformes de soldado do Ano 2\n2 texturas de arma do Ano 2, aplicáveis para 10 e 4 armas respectivamente\n3 complementos de veículo\n33 itens de Recompensa de Capítulo do Ano 1.\nDESCRIÇÃO DO CONTEÚDO ADULTO\nDescrição dos desenvolvedores sobre o conteúdo:\n\nEste jogo pode conter conteúdo não apropriado para todas as idades ou para visualização no trabalho: Violência frequente ou detalhada, Conteúdo adulto não específico",
                            "value": 78.86
                        },
                        {
                            "id": 13,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1650011214",
                            "name": "Street Fighter V",
                            "description": "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos, cada um com sua história pessoa e desafios de treinamento únicos, e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.\n\nGanhe Fight Money em Ranked Matches, jogue por diversão em Casual Matches, ou convide amigos para um Battle Lounge e veja quem sai no topo! Jogadores do PlayStation 4 e Steam também podem jogar uns contra os outros graças à compatibilidade entre plataformas!\n\nEsta versão de Street Fighter V exibe a tela título de \"\"Arcade Edition\"\" e inclui Arcade Mode, Team Battle Mode e o Extra Battle Mode habilitado online, onde você pode ganhar recompensas, XP e Fight Money! Fight Money pode ser usado para comprar personagens adicionais, trajes, fases e mais!\n\nBaixe a história cinemática \"\"A Shadow Falls\"\" hoje GRÁTIS! M. Bison lança sete Black Moons em órbita, concedendo a ele um poder inimaginável conforme a Terra cai na escuridão.\n\n\nStreet Fighter V: Champion Edition é o pacote definitivo que inclui todo o conteúdo (excluindo trajes de Fighting Chance, trajes de colaboração de marca e do DLC Capcom Pro Tour) do lançamento original e do Street Fighter V: Arcade Edition. Ele também inclui cada personagem, fase e traje lançado após o Arcade Edition. Isso significa 40 personagens, 34 fases e mais de 200 trajes!\n\nV-Trigger 1 e 2\nExecute técnicas poderosas e golpes exclusivos ativando o V-Trigger 1 ou 2 com o personagem de sua escolha! Faça grandes explosões de dano ou consiga aquela vitória de virada tão necessária pressionando simultaneamente soco forte e chute forte quando o seu V-Gauge estiver totalmente cheio.\n\n\nV-Skill 1 e 2\nOs fundamentos vencem partidas e V-Skills são os alicerces da vitória. Cada V-Skill concede ao seu personagem um golpe e/ou habilidade único que ajudará a preencher seu V-Gauge.\n\n\nV-Reversal\nPare o ataque do seu oponente utilizando V-Reversal. O V-Reversal custa um estoque do V-Gauge, mas vale muito a pena, pois pode dar uma oportunidade para você fazer seu próprio ataque.\n\n\nSpecial Attacks e EX Special Attacks\nUm clássico do Street Fighter, os Special Attacks são a chave para uma estratégia eficiente no Street Fighter V: Champion Edition. Use vários Special Attacks para separar os oponentes, impor a sua vontade e aumentar seu Critical Gauge, para causar ainda mais dano. EX Special Attacks são versões mais poderosas de Special Attacks, que custam uma barra de Critical Gauge.\n\n\n\nCritical Art\nO ataque mais devastador do Street Fighter V: Champion Edition é chamado de Critical Art. Um Critical Art pode ser executado desde que o Critical Gauge esteja totalmente cheio.",
                            "value": 9.75
                        },
                        {
                            "id": 14,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/1260320/header.jpg?t=1646804405",
                            "name": "Party Animals",
                            "description": "Lute contra seus amigos como cachorrinhos, gatinhos ou outros bixos fofinhos em PARTY ANIMALS! Dê patadas em seus amigos tanto online quanto em casa. Interaja com nosso mundo sob nosso sistema com física realista. Eu mencionei CACHORRINHOS?",
                            "value": 13.11
                        },
                        {
                            "id": 15,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg?t=1639080161",
                            "name": "Starfield",
                            "description": "Starfield é o primeiro universo novo em 25 anos da Bethesda Game Studios, os premiados criadores de The Elder Scrolls V: Skyrim e Fallout 4. Neste RPG para a nova geração em meio às estrelas, crie o personagem que você quiser e explore com liberdade inigualável enquanto embarca em uma jornada épica para desvendar o maior mistério da humanidad",
                            "value": 65.59,
                            "type": "indie"
                        },
                        {
                            "id": 16,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/1030300/header.jpg?t=1572306963",
                            "name": "Hollow Knight: Silksong",
                            "description": "Play as Hornet, princess-protector of Hallownest, and adventure through a whole new kingdom ruled by silk and song! Captured and brought to this unfamiliar world, Hornet must battle foes and solve mysteries as she ascends on a deadly pilgrimage to the kingdom’s peak.\n\nHollow Knight: Silksong is the epic sequel to Hollow Knight, the award winning action-adventure. As the lethal hunter Hornet, journey to all-new lands, discover new powers, battle vast hordes of bugs and beasts and uncover ancient secrets tied to your nature and your past.\n\n\nGame Features\nDiscover a whole new kingdom! Explore coral forests, mossy grottos, gilded cities and misted moors as you ascend to the shining citadel at the top of the world.\nEngage in lethal acrobatic action! Wield a whole new suite of deadly moves as you dance between foes in deadly, beautiful combat.\nCraft powerful tools! Master an ever-expanding arsenal of weapons, traps, and mechanisms to confound your enemies and explore new heights.\nSolve shocking quests! Hunt down rare beasts, solve ancient mysteries and search for lost treasures to fulfil the wishes of the downtrodden and restore the kingdom’s hope. Prepare for the unexpected!\nFace over 150 all-new foes! Beasts and hunters, assassins and kings, monsters and knights, defeat them all with bravery and skill!\nChallenge Silk Soul mode! Once you conquer the kingdom, test your skills in an all-new mode that spins the game into a unique, challenging experience.\nExperience a stunning orchestral score! Hollow Knight’s award-winning composer, Christopher Larkin, returns to bring melancholy melodies, symphonic strings and heart-thumping, soul strumming boss themes to the adventure.",
                            "value": 62.85,
                            "type": "indie"
                        },
                        {
                            "id": 17,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/1233570/header.jpg?t=1633006812",
                            "name": "Mirror's Edge™ Catalyst",
                            "description": "Acompanhe Faith, uma corredora ousada que luta pela liberdade na cidade de Glass. O que por fora parece ser uma cidade elegante e altamente tecnológica guarda um segredo terrível. Explore cada canto, dos telhados altíssimos e bem iluminados aos túneis escuros do subterrâneo. A cidade é enorme e Faith, no centro de tudo, pode percorrê-la inteira. Na perspectiva em primeira pessoa, combine seus movimentos fluidos e habilidades avançadas de combate para dominar o ambiente da cidade e desvendar a conspiração. Este é Mirror's Edge para a geração atual, elevando o nível de imersão em jogos de ação e aventura.",
                            "value": 9.61,
                            "type": "outros"
                        },
                        {
                            "id": 18,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/221100/header.jpg?t=1643209285",
                            "name": "DayZ",
                            "description": "DayZ é um jogo de sobrevivência extrema em mundo aberto com uma só regra: fique vivo a qualquer custo. Com uma infinidade de ameaças à espreita em cada canto, é mais fácil falar do que fazer...\nDestaques:\nSem pontos de controle ou salvamentos, ao morrer você perde tudo e tem que recomeçar.\nMecânica de sobrevivência complexa e autêntica, que inclui caça, artesanato, construção, preservação da saúde e gerenciamento de recursos.\nInterações imprevisíveis e até emotivas com outros jogadores, que levam a um espectro ilimitado de possibilidades de jogo.\nUm enorme mapa de 230 km² com belas paisagens e marcos com base em locais da vida real.\nAté 60 jogadores tentando sobreviver como for necessário. Faça amigos, mate à primeira vista, sequestre estranhos e domine-os ou seja traído por uma lata de feijão. Tudo é possível.\nUma variedade de ameaças do ambiente que testarão suas habilidades. Clima irregular, perigos da vida selvagem e noites escuras com infectados raivosos.",
                            "value": 7.52
                        },
                        {
                            "id": 19,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/221100/header.jpg?t=1643209285",
                            "name": "DayZ 2",
                            "description": "DayZ 2 é um jogo de sobrevivência extrema em mundo aberto com uma só regra: fique vivo a qualquer custo. Com uma infinidade de ameaças à espreita em cada canto, é mais fácil falar do que fazer...\nDestaques:\nSem pontos de controle ou salvamentos, ao morrer você perde tudo e tem que recomeçar.\nMecânica de sobrevivência complexa e autêntica, que inclui caça, artesanato, construção, preservação da saúde e gerenciamento de recursos.\nInterações imprevisíveis e até emotivas com outros jogadores, que levam a um espectro ilimitado de possibilidades de jogo.\nUm enorme mapa de 230 km² com belas paisagens e marcos com base em locais da vida real.\nAté 60 jogadores tentando sobreviver como for necessário. Faça amigos, mate à primeira vista, sequestre estranhos e domine-os ou seja traído por uma lata de feijão. Tudo é possível.\nUma variedade de ameaças do ambiente que testarão suas habilidades. Clima irregular, perigos da vida selvagem e noites escuras com infectados raivosos.",
                            "value": 8.52
                        },
                        {
                            "id": 20,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1649065890",
                            "name": "Cyberpunk 2077",
                            "description": "Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto ambientado na megalópole de Night City, onde você é um mercenário cyberpunk envolvido em uma intensa luta pela sobrevivência. Com diversas melhorias e conteúdo adicional gratuito, personalize o seu personagem e o seu estilo de jogo conforme aceita trabalhos, construa uma reputação e desbloqueie melhorias. Seus relacionamentos e suas escolhas moldarão a história e o mundo ao seu redor. Aqui nascem as lendas. Qual será a sua?\n\n\n\nCRIE SEU PRÓPRIO CYBERPUNK\nTorne-se um fora-da-lei urbano equipado com melhorias cibernéticas e crie sua lenda nas ruas de Night City.\n\n\n\nEXPLORE A CIDADE DO FUTURO\nNight City está repleta de coisas para fazer, lugares para ver e pessoas para conhecer. Você decide aonde ir, quando ir e como chegar lá.\n\n\n\nCONSTRUA A SUA LENDA\nParticipe de aventuras ousadas e estabeleça relacionamentos com personagens inesquecíveis cujos destinos são moldados pelas escolhas que você faz.\n\n\n\nEQUIPADO COM RECURSOS DE NOVA GERAÇÃO\nExperimente Cyberpunk 2077 com uma série de mudanças e melhorias de jogabilidade e na economia, na cidade, no uso de mapas e muito mais.\n\nCONTEÚDO ADICIONAL INCLUSO\n\nReceba uma coleção de itens gratuitos, incluindo novas armas de fogo e corpo a corpo, personalizações adicionais e muito mais.",
                            "value": 56.5,
                            "type": "outros"
                        },
                        {
                            "id": 21,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1646996408",
                            "name": "The Witcher® 3: Wild Hunt",
                            "description": "The Witcher: Wild Hunt é um RPG de mundo aberto de fantasia cheio de escolhas vitais. Em The Witcher, você joga como um caçador de monstros profissional, Geralt de Rívia, em busca da criança da profecia em um vasto mundo aberto, rico em cidades mercantis, ilhas piratas, passagens perigosas nas montanhas e cavernas esquecidas a serem exploradas.\nCARACTERÍSTICAS PRINCIPAIS\nJOGUE COMO UM MESTRE MERCENÁRIO CAÇADOR DE MONSTROS\nTreinados desde a infância e modificados para ganhar habilidades, força e reflexos sobre-humanos, bruxos são contrapesos no mundo infestado de monstros no qual vivem.\n\nDestrua inimigos sem piedade como um caçador de monstros profissional, armado com várias armas aprimoráveis, poções de mutação e magia de combate.\nCace uma grande variedade de monstros exóticos — de feras selvagens vagando em passagens nas montanhas até astutos predadores sobrenaturais que espreitam nas sombras de cidades densamente povoadas.\nInvista as suas recompensas melhorando seu armamento e compre armaduras personalizadas, ou então gaste seu dinheiro em corridas de cavalos, jogos de cartas, lutas corpo a corpo e outros prazeres que a noite traz.\n\n\nEXPLORE UM MUNDO DE FANTASIA ABERTO E MORALMENTE INDIFERENTE\nConstruído para aventuras sem fim, o enorme mundo aberto de The Witcher define novos padrões em termos de tamanho, profundidade e complexidade.\n\nAtravesse um mundo aberto fantástico: explore ruínas esquecidas, cavernas e naufrágios, negocie com vendedores e ferreiros anões em cidades e cace pelas planícies abertas, montanhas e mares.\nLide com generais traidores, feiticeiras traiçoeiras e realeza corrupta para fornecer serviços sombrios e perigosos.\nTome decisões que desafiam os conceitos de bem e mal e enfrente as vastas consequências.\n\n\nBUSQUE A CRIANÇA DA PROFECIA\nAceite o mais importante dos contratos, o de buscar a criança da profecia, uma chave para salvar ou destruir este mundo.\n\nEm tempos de guerra, busque a criança da profecia, uma arma senciente profetizada por antigas lendas élficas.\nLute contra ferozes governantes, espíritos da natureza desbravada e até mesmo contra uma ameaça do além – todos obcecados em controlar este mundo.\nDefina seu destino em um mundo que pode não merecer ser salvo.\n\n\nTOTALMENTE FEITO PARA A PRÓXIMA GERAÇÃO\nProduzido exclusivamente para hardware de nova geração, a REDengine 3 faz com que o mundo de The Witcher seja repleto de detalhes orgânicos, uma verdadeira fantasia verossímil.\nSistemas de clima dinâmicos e ciclos de dia/noite afetam como os cidadãos das cidades e os monstros selvagens se comportam.\nRepleto de decisões narrativas tanto na trama principal quanto nas secundárias, esse gigantesco mundo aberto é influenciado pelo jogador como nunca antes.",
                            "value": 23.87,
                            "type": "aventura"
                        },
                        {
                            "id": 22,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/209000/header.jpg?t=1634157113",
                            "name": "Batman™: Arkham Origins",
                            "description": "As of December 4, 2016, the online services portion of Batman: Arkham Origins will be retired. We thank those that have joined us to battle over the last 3 years. The Single player campaign may still be played and enjoyed offline. For any questions relating to Batman: Arkham Origins, please contact WB Games customer service http://support.wbgames.com/.\n\nBatman™: Arkham Origins is the next installment in the blockbuster Batman: Arkham videogame franchise. Developed by WB Games Montréal, the game features an expanded Gotham City and introduces an original prequel storyline set several years before the events of Batman: Arkham Asylum and Batman: Arkham City, the first two critically acclaimed games of the franchise. Taking place before the rise of Gotham City’s most dangerous criminals, the game showcases a young and unrefined Batman as he faces a defining moment in his early career as a crime fighter that sets his path to becoming the Dark Knight.\nKey Features:\nThe Arkham Story Begins: Batman: Arkham Origins features a pivotal tale set on Christmas Eve where Batman is hunted by eight of the deadliest assassins from the DC Comics Universe. Players become an early-career Batman as he encounters for the first time many of the characters that shape his future.\nEnhanced Detective Mode: Think like Batman with an all-new Case File system that allows players to analyze seemingly impossible-to-solve crime reconstructions in real time. Combining Batman’s cowl sensors with the Batcomputer, players can digitally recreate crimes and study detailed simulation of the act as it happened.\nGotham City will learn to fear Batman: Take back the sprawling streets of Gotham years before its transformation into Arkham City. Glide above or battle your way through new and ever more dangerous districts in the quest for justice. Prevent crimes in progress, take down gangs of violent new criminals and explore deadly new locations, from the impoverished streets to the penthouses of Gotham’s wealthy.\nGotham’s Most Wanted: The city streets are filled with more than just Black Mask’s assassins. Locate and take down Gotham’s most violent and dangerous criminals to earn unique upgrades.\nLethal New Enemies: Fight new foes such as the Armored Enforcer, the Martial Artist and more – each of which challenge players to approach Batman’s FreeFlow Combat scenarios in different ways. Classic FreeFlow combat is expanded with every new opponent – and with Batman’s abilities to engage them.\nNew Gadgets: Utilize Batman’s signature gadgets or take advantage of powerful new additions such as the Remote Claw, the Concussion Detonator and more. Use the Remote Claw to create new routes by deploying strategic tightropes or directly attack enemies by stringing them up from vantage points. Ready the Concussion Detonator to stun and disorient groups of opponents in close combat.\nNew and Familiar Characters: Experience a fresh take on iconic Batman characters including Black Mask, Penguin, Deathstroke, Bane, Deadshot, Anarky, Captain Gordon, The Joker, Copperhead, Firefly and others yet to be revealed.",
                            "value": 44.48,
                            "type": "aventura"
                        },
                        {
                            "id": 23,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/750920/header.jpg?t=1644931091",
                            "name": "Shadow of the Tomb Raider: Definitive Edition",
                            "description": "Em Shadow of the Tomb Raider Definitive Edition, acompanhe o capítulo final da origem de Lara e testemunhe sua transformação na desbravadora que ela está destinada a ser. Combinando o jogo-base e todas as sete tumbas de desafio de DLC, além de armas, roupas e habilidades extras, Shadow of the Tomb Raider Definitive Edition é a melhor maneira de viver o momento decisivo da vida de Lara.\n\nSobreviva no lugar mais letal da Terra: domine uma selva letal para sobreviver. Explore ambientes submersos cheios de fendas e sistemas de túneis profundos.\n\nTransforme-se em uma com a selva: em desvantagem, Lara precisa usar a selva a seu favor. Ataque e desapareça como um jaguar, use a lama como camuflagem e amedronte seus inimigos para semear o caos.\n\nDescubra tumbas escuras e brutais: as tumbas estão mais assustadoras do que nunca, exigindo técnicas de travessia avançadas para chegar até elas e, uma vez lá dentro, estão cheias de enigmas letais.\n\nRevele a história: descubra uma cidade oculta e explore a maior área já encontrada em um jogo de Tomb Raider.\n\n\nDESCRIÇÃO DO CONTEÚDO ADULTO\nDescrição dos desenvolvedores sobre o conteúdo:\n\nEste jogo pode conter conteúdo não apropriado para todas as idades ou para visualização no trabalho: Violência frequente ou detalhada, Conteúdo adulto não específico",
                            "value": 52.2,
                            "type": "aventura"
                        },
                        {
                            "id": 24,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/601150/header.jpg?t=1643243335",
                            "name": "Devil May Cry 5",
                            "description": "O melhor caçador de demônios está de volta com estilo, no jogo que os fãs de ação estavam esperando. Agora inclui o conteúdo baixável Personagem Jogável: Vergil (também disponível separadamente).\n\nUm novo episódio na lendária série de ação, Devil May Cry 5 traz junto sua clássica mistura de ação turbinada com personagens originais de outro mundo e a mais nova tecnologia de jogos Capcom para trazer uma obra de arte de ação e aventura visualmente inovadora.\n\nVerifique suas compras anteriores para evitar compras duplicadas.\n\nDEVIL MAY CRY 5 DELUXE + VERGIL\nO melhor caçador de demônios está de volta com estilo, no jogo que os fãs de ação estavam esperando.\n\nA Edição Deluxe inclui o jogo completo, Personagem Jogável: Vergil (também disponível separadamente) e os seguintes conteúdos adicionais:\n\n- Armas Devil Breaker: Gerbera GP01, Pasta Breaker, Sweet Surrender, Mega Buster\n- Arma do Dante: Cavaliere R\n- Música de batalha: 3 faixas de cada jogo, incluindo Devil May Cry, Devil May Cry 2, Devil May Cry 3 e Devil May Cry 4\n- Vozes alternativas: Anunciadores de ranking de estilo, chamadas de título\n- Cenas com atores\n\nObs.: Devil Breakers e músicas/vozes/cenas são utilizáveis da missão 2 em diante. A arma de Dante, Cavaliere R, pode ser usada no jogo após obter a Cavaliere. Use a opção Galeria > Jukebox para mudar músicas/vozes e Opções > Personalizar Cenas para mudar as cenas. O áudio das vozes nas cenas com atores é apenas em japonês.\n\nVerifique suas compras anteriores para evitar compras duplicadas.\n\nEDIÇÃO DIGITAL DE LUXO\n\n\nSOBRE ESTE JOGO\nO melhor caçador de demônios está de volta com estilo, no jogo que os fãs de ação estavam esperando.\n\nUm novo episódio na lendária série de ação, Devil May Cry 5 traz junto sua clássica mistura de ação turbinada com personagens originais de outro mundo e a mais nova tecnologia de jogos Capcom para trazer uma obra de arte de ação e aventura visualmente inovadora.",
                            "value": 14.01,
                            "type": "indie"
                        },
                        {
                            "id": 25,
                            "img": "https://cdn.akamai.steamstatic.com/steam/apps/1372880/header.jpg?t=1641323785",
                            "name": "The Day Before",
                            "description": "The Day Before é um MMO de sobrevivência em mundo aberto que se passa nos Estados Unidos durante uma terrível era pós-pandêmica infestada de pessoas infectadas sedentas por carne e sobreviventes que exterminam uns aos outros para garantir comida, armas e veículos.\n\n\nSOBREVIVA A QUALQUER CUSTO\nProcure veículos, casas e arranha-céus abandonados enquanto coleta recursos.\n\n\nENTRE EM LUGARES ONDE NINGUÉM SE ARRISCARIA\nElimine infectados e outros jogadores com armas realistas e torne-se uma lenda do novo mundo.\n\n\nEXPLORE O VASTO MUNDO PÓS-PANDÊMICO\nExplore locais deslumbrantes, porém perigosos, em veículos incrivelmente detalhados.\n\n\nENCONTRE UMA COLÔNIA DE SOBREVIVENTES\nContribua para a restauração da sociedade pré-pandemia antes que seja tarde demais. Venda o que tiver encontrado e se comunique em segurança com outros jogadores na colônia dos sobreviventes.\n",
                            "value": 94.87,
                            "type": "indie"
                        }
                    ]}
                />
            </Container>
        </Background>

    )
}
