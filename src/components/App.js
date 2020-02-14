import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Result from './result/Result';

const birdsData = [
  {
    family: 'Ночные птицы',
    data: [
      {
        id: 1,
        name: 'Козодой обыкновенный',
        species: 'Caprimulgus europaeus',
        description: 'Редкий гнездящийся вид. Длина тела до 28 см, длина хвоста до 12 см, масса 90–110 г. Неяркое, серовато-бурое оперение козодоя прекрасно маскирует его на фоне коры деревьев.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/kozodoy.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'http://kino-server.myjino.ru/mp3/kozodoy-obyknovennyy-golos-1570-onbird.ru.mp3',
      },
      {
        id: 2,
        name: 'Филин',
        species: 'Bubo bubo',
        description: 'Крупная хищная птица (размах крыльев — до 2 м, масса — более 4 кг), ведущая ночной образ жизни. Окраска от темно-рыжей до золотисто-охристой, с резкими продольными черными пестринами, на боках и брюхе темный поперечный рисунок. На голове перьевые ушки.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/filin.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
      },
      {
        id: 3,
        name: 'Сплюшка',
        species: 'Otus scops',
        description: 'Сплюшка - длина тела 16-20 см, масса 60-130 г, размах крыльев 50 см. Окраска серо-коричневая, с белыми пятнами на плечевых перьях, темными пестринами и тонким струйчатым рисунком; как и у многих видов рода, существуют серая и коричневая (рыжая) цветовые фазы. Радужина желтая, реже оранжевая.',
        image: 'https://web-zoopark.ru/wp-content/uploads/2018/06/10-116.jpg',
        audio: 'http://kino-server.myjino.ru/mp3/splyushka-golos-239-onbird.ru.mp3',
      },
      {
        id: 4,
        name: 'Воробьиный сыч',
        species: 'Glaucidium passerinum',
        description: 'Характеризуются маленьким размером тела, короткими крыльями и длинным хвостом. Лицевой диск развит слабо, «ушек» нет, глаза небольшие с желтой радужиной, клюв светлый. Верхняя часть тела обычно буроватого или ржавчатого цвета, покрытая светлыми отметинами или более тёмными поперечными полосами, нижняя — светлая, с продольными или поперечными полосками.',
        image: 'http://storage.onbird.ru/bird/avatar/big%20vorobinyy-sych%20(onbird.ru).jpg',
        audio: 'http://kino-server.myjino.ru/mp3/sych-vorobinyy-golos-1273-onbird.ru.mp3',
      },
      {
        id: 5,
        name: 'Белая сова',
        species: 'Bubo scandiacus',
        description: 'Белая сова - это одна из самых крупных сов. Величиной она почти с филина. Длина тела достигает 56-65см, размах крыльев 150-160см, масса тела 780–2950г, причем самки крупнее самцов.',
        image: 'https://cs8.pikabu.ru/post_img/2016/02/01/7/1454323334242734163.jpg',
        audio: 'http://kino-server.myjino.ru/mp3/sova-belaya-golos-1276-onbird.ru.mp3',
      },
      {
        id: 6,
        name: 'Неясыть',
        species: 'Strix occidentalis',
        description: 'Хищная птица семейства совиных, распространённая на западе Северной Америки. Длина тела неясыти 43 см, размах крыльев — до 115 см, масса примерно 600 г. Серо-чёрная сова с белыми пятнами, тёмным лицевым диском; клюв жёлтый.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tawny_wiki.jpg/800px-Tawny_wiki.jpg',
        audio: 'http://kino-server.myjino.ru/mp3/neyasyt-seraya-golos-2262-onbird.ru.mp3',
      },
    ],
  },
  {
    family: 'Перелетные птицы',
    data: [
      {
        id: 1,
        name: 'Зарянка',
        species: 'Erithacus rubecula',
        description: 'Птица семейства дроздовых отряда воробьиных.Длина около 15 см. У взрослых зарянок спинка бурая, брюшко белое, зоб и грудь рыжие; у молодых окраска пятнистая. Птица относительно длинноногая, передвигается прыжками.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/malinovka.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/zaryanka_malin.mp3',
      },
      {
        id: 2,
        name: 'Жаворонок',
        species: 'Alauda arvensis',
            description: 'Птица размером немного крупнее воробья. Окраска у жаворонков под цвет пожухлой травы и бурой земли — серо- или буровато-охристая с густыми бурыми продольными пестринами.',
        image: 'https://factum-info.net/images/1_Fakty/1_Chelovek/34_2_skylark-1.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
      },
      {
        id: 3,
        name: 'Белая трясогузка ',
        species: 'Motacilla alba',
        description: 'Одна из самых полезных птиц — она уничтожает насекомых-вредителей, которых ловит прямо в воздухе, или находит на земле.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/belaya_tryasoguzka.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/b_trjaso.mp3',
      },
      {
        id: 4,
        name: 'Кукушка',
        species: 'Cuculus canorus',
        description: 'Кукует только самец, сидя на возвышении какой-нибудь горизонтальной ветки, или в полете. Во время пения самец опускает крылья, приподнимая и распуская хвост.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/kukushka.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/kukushka.mp3',
      },
      {
        id: 5,
        name: 'Чибис',
        species: 'Vanellus vanellus',
        description: 'Типичный обитатель приречных лугов, полей и болот без кочек и высокотравья в пределах степной и лесостепной зон, подтайги и южной тайги. Гнездится на травянистых болотах, пастбищах и полях.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/chibis.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/chibis.mp3',
      },
      {
        id: 6,
        name: 'Соловей обыкновенный',
        species: 'Luscinia luscinia',
        description: 'Влаголюбивая птица. Любимыми местами обитания соловьев являются поросшие ивовыми и другими кустами долины рек, полевые болота и всякого рода кустарники вблизи проточной или стоячей воды, а также большие сады и глухие парки.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/solovey.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/solovey.mp3',
      },
    ],
  },
  {
    family: 'Зимующие птицы',
    data: [
      {
        id: 1,
        name: 'Снегирь',
        species: 'Pyrrhula pyrrhula',
        description: 'Снегирь — доверчивая и общительная птица. Если кто-нибудь из стаи попался в ловушку, остальные спешат на помощь. Часто содержится в клетках как красивая певчая птица.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/snegir.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/snegir.mp3',
      },
      {
        id: 2,
        name: 'Поползень ',
        species: 'Sittidae',
        description: 'Распространены в Европе, Северо-Западной Африке, Азии, включая Филиппины и Зондские острова, и в Северной Америке. Живут оседло или кочуют. Древесные птицы, лишь немногие живут на скалах.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/popolzen.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/popolzen.mp3',
      },
      {
        id: 3,
        name: 'Свиристель ',
        species: 'Bombycilla garrulus',
        description: 'Очень красивая птица размером со скворца. Длина тела 15–18 см. Оперение густое и мягкое в буровато-серых с красноватым тонах. На голове большой хохолок. Крылья буро-черные с желтыми и белыми полосками, хвост, горло и полоска через глаз черные. ',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/sviristel.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/sveristel.mp3',
      },
      {
        id: 4,
        name: 'Домовый воробей',
        species: 'Passer domesticus',
        description: 'Одна из самых известных птиц страны, живущая по соседству с человеком. Длина тела до 16 см, масса 23–35 г. Общая окраска оперения у воробья коричневато-бурая сверху, беловатая снизу. Щёки белые, ушная область бледно-серая. Крылья с желтовато-белой поперечной полосой. ',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/vorobey_domoviy.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/vorobey_dimoviy.mp3',
      },
      {
        id: 5,
        name: 'Лазоревка',
        species: 'Parus coeruleus',
        description: ' Обитает в лиственных и смешанных лесах, а также в садах и парках. Густых лесов избегает, поселяется охотнее всего на опушках. Летом питаются исключительно насекомыми, которых собирают на листьях.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/lazorevka.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/lazorevka.mp3',
      },
      {
        id: 6,
        name: 'Дятел',
        species: 'Dendrocopos',
        description: 'Это самый распространенный дятел, населяющий большую часть лесов страны, включая смешанные и лиственные леса. Несколько крупнее скворца. Длина тела — 23–26 см, масса — 70–100 г. В окраске преобладают черные и белые тона, у самцов — красный затылок. На голове у молодых самцов красная шапочка.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/bol_pestr_dyatel.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/bolshoy_pestr_dyatel.mp3',
      },
    ],
  },
  {
    family: 'Птицы водоемов',
    data: [
      {
        id: 1,
        name: 'Аист белый',
        species: 'Ciconiidae',
        description: 'Семейство птиц отряда голенастых. Голосовые связки у аиста не развиты, они не имеют голоса. 11 родов, объединяющих 17 видов (марабу, ябиру и др.). Распространены главным образом в тропической, субтропической и умеренных зонах. ',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/aist.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/beliy_aist.mp3',
      },
      {
        id: 2,
        name: 'Варакушка ',
        species: 'Luscinia svecica',
        description: 'Птица семейства дроздовых отряда воробьиных. Длина тела около 15 см. Масса самцов — 15-23 г, самок 13-21 г. У самца спина буроватая, хвост рыжий с чёрным, горло и зоб синие с рыжим или белым пятном. Это пятно может быть белым, или только окружено белым. Самка окрашена менее ярко — без синего и рыжего цветов. Клюв черный, ноги буро-черные.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/varakushka.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/varakushka.mp3',
      },
      {
        id: 3,
        name: 'Бекас ',
        species: 'Gallinago gallinago',
        description: 'Бекас — птица с очень длинным, прямым и острым клювом, буровато-ржавого окраса, длиной до 29 см и весом до 140 г. Размах крыльев 40–45 см. Темя черное с охристой продольной полосой, крыло снизу белое, сверху с белой полосой по заднему краю. Центр брюха белый, без пестрин.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/bekas.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/bekas.mp3',
      },
      {
        id: 4,
        name: 'Беркут ',
        species: 'Aquila chrysaetus',
        description: 'Населяет обширные верховые болота и леса по их окраинам. Везде редок. Огромные гнёзда (в некоторые из них может вместиться лошадь) строит на деревьях, устраивая их в развилке крупных ветвей у ствола. Сторительный материал — толстые сучья деревьев, внутри гнездо выстилается травой и шерстью.',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/berkut.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/berkut.mp3',
      },
      {
          id: 5,
          name: 'Соловей обыкновенный',
          species: 'Luscinia luscinia',
          description: 'Влаголюбивая птица. Любимыми местами обитания соловьев являются поросшие ивовыми и другими кустами долины рек, полевые болота и всякого рода кустарники вблизи проточной или стоячей воды, а также большие сады и глухие парки.',
          image: 'https://ptici.info/assets/components/phpthumbof/cache/solovey.18176db1094c57fa245ab89941e7a0fb.jpg',
          audio: 'https://ptici.info/audio/solovey.mp3',
      },
      {
        id: 6,
        name: 'Крапивник',
        species: 'Troglodytes troglodytes',
        description: 'Крапивник — одна из самых мелких птиц нашей страны, почти вдвое мельче воробья – его длина составляет всего 9–10,5 см. Внешне похож на мягкий пушистый шарик, отчего его часто называют «орешек»',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/krapivnik.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/krapivnik.mp3',
      },
    ],
  },
  {
    family: 'Экзотические птицы',
    data: [
      {
        id: 1,
        name: 'Турако',
        species: 'Tauraco',
        description: 'Турако — род птиц из семейства тураковых. Турако населяют преимущественно кроны деревьев в лесистых областях и саваннах Африки и питаются среди прочего молодыми побегами, насекомыми, ягодами и плодами. ',
        image: 'https://animalreader.ru/wp-content/uploads/2015/05/turako-animalreader.ru-004.jpg',
        audio: 'https://www.xeno-canto.org/345104/download',
      },
      {
        id: 2,
        name: 'Какаду',
        species: 'Cacatuidae',
        description: 'Какаду – это попугай с незаурядной внешностью, внушительными размерами тела и своеобразным поведением.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Citron-crested_Cockatoo.jpg',
        audio: 'https://www.xeno-canto.org/446593/download',
      },
      {
        id: 3,
        name: 'Жако',
        species: 'Psittacus erithacus',
        description: 'Жако - птица высокоинтеллектуальная, социальная и, отчасти, эгоцентричная. Найти подход к жако иногда трудно, но не невозможно. Разгневанный или испуганный жако кричит очень громко, вплоть до «закладывания ушей»',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Psittacus_erithacus_qtl1.jpg/398px-Psittacus_erithacus_qtl1.jpg',
        audio: 'http://www.xeno-canto.org/492834/download',
      },
      {
        id: 4,
        name: 'Тукан',
        species: 'Ramphastos toco',
        description: 'Туканы — одни из самых ярких тропических птиц, обитающих в Америке. Их наиболее примечательной чертой является огромный клюв, размеры которого, порой, почти соизмеримы с размерами самой птицы. Эти крупнейшие представители отряда дятлообразных известны своей доверчивостью и сообразительностью. Они легко приручаются и хорошо себя чувствуют в неволе.',
        image: 'https://simple-fauna.ru/wp-content/uploads/2016/11/tukan.jpg',
        audio: 'https://www.xeno-canto.org/506060/download',
      },
      {
        id: 5,
        name: 'Колибри',
        species: 'Trochilidae',
        description: 'Колибри – это семейство мелких птиц. Известно более 330 видов колибри. Живут они преимущественно в Северной и Южной Америке.',
        image: 'https://i.pinimg.com/originals/f3/97/9c/f3979cab3c7001a9e6580a33e12772f7.jpg',
        audio: 'https://www.xeno-canto.org/469239/download',
      },
      {
        id: 6,
        name: 'Птица носорог',
        species: 'Bucerotidae',
        description: 'Пти́цы-носоро́ги — семейство птиц из одноимённого отряда. Включает 57 видов, обитающих в Африке и Юго-Восточной Азии, на островах Тихого и Индийского океанов; 10 из них являются эндемиками южной Африки.',
        image: 'https://cs6.pikabu.ru/post_img/2014/03/19/8/1395231384_1047024265.jpg',
        audio: 'https://www.xeno-canto.org/460480/download',
      },
    ],
  },
  {
    family: 'Домашние птицы',
    data: [
      {
        id: 1,
        name: 'Утка',
        species: 'Anas platyrhynchos',
        description: 'У́тка — представитель птиц из нескольких родов семейства утиных: пеганки, нырковые утки, савки, речные утки, утки-пароходы, мускусные утки и крохали; всего более 110 видов.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Muscovy_Duck_-_Cairina_moschata_2.jpg',
        audio: 'http://www.xeno-canto.org/525303/download',
      },
      {
        id: 2,
        name: 'Перепел',
        species: 'Coturnix coturnix',
        description: 'В прошлом перепел водился почти повсюду, но в наше время он встречается все реже, а регионах интенсивного земледелия почти исчез. Наблюдать за этой птицей очень трудно, поэтому о ее жизни и повадках известно немногое.',
        image: 'https://image.jimcdn.com/app/cms/image/transf/none/path/s3974dcc17bc4f3da/image/id8e335525c6dbe68/version/1503471164/image.jpg',
        audio: 'http://www.xeno-canto.org/500401/download',
      },
      {
        id: 3,
        name: 'Индейка',
        species: 'Meleagris gallopavo',
        description: 'Инде́йки — род фазановых из отряда курообразных, включающий два вида крупных птиц, которые водятся в лесах Америки от центральных и восточных штатов США на юг до Гватемалы.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Male_north_american_turkey_supersaturated.jpg',
        audio: 'http://www.xeno-canto.org/370486/download',
      },
      {
        id: 4,
        name: 'Курица',
        species: 'Gallus gallus',
        description: 'Самая многочисленная и распространённая домашняя птица, которая является одомашненной формой банкивской джунглевой курицы. Летает плохо, недалеко. За длительную историю одомашнивания человеком выведено большое количество разнообразных пород кур.',
        image: 'https://www.8lap.ru/upload/iblock/2ca/2ca12770bdcc27f94dac0821eb1aa508.jpg',
        audio: 'http://www.xeno-canto.org/103543/download',
      },
      {
        id: 5,
        name: 'Цесарка',
        species: 'Numida meleagris',
        description:'Цесарка – птица «царская», сочетающая декоративную привлекательность и редкие диетические качества.',
        image: 'https://givnost.ru/wp-content/uploads/2019/01/cesarka-ptica-opisanie-osobennosti-vidy-obraz-zhizni-i-sreda-obitaniya-cesarki-1.jpg',
        audio: 'http://www.xeno-canto.org/507927/download',
      },
      {
        id: 6,
        name: 'Серый гусь',
        species: 'Anser anser',
        description: 'Серый гусь получил свое название благодаря своему оперению — серовато-бурое с волнистым рисунком на шее и брюхе. Перья крыльев окаймлены белым цветом. Наиболее ярко серый гусь окрашен в зимний и весенний периоды жизни. ',
        image: 'https://ptici.info/assets/components/phpthumbof/cache/seriy_gus.18176db1094c57fa245ab89941e7a0fb.jpg',
        audio: 'https://ptici.info/audio/seriy_gus.mp3',
      },
    ],
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      stage: 0,
      stageScore: 5,
      maxScore: birdsData.length * 5,
      numberOfRightOption: 2,
      isAnswerRight: false,
      isGameOver: false,
    };
  }

  lastStage = () => {
    if (this.state.stage < birdsData.length - 1) {
      this.setState((prevState) => ({
        stage: prevState.stage + 1,
        isAnswerRight: false,
      }));
    } else {
      this.setState({
        isGameOver: true,
      });
    }
  };

  updateStageScore = (isAnswerRight) => {
    if (!this.state.isAnswerRight) {
      if (isAnswerRight) {
        this.setState((prevState) => ({
          score: prevState.score + prevState.stageScore,
          isAnswerRight: true,
        }));
      } else {
        this.setState((prevState) => ({
          stageScore: prevState.stageScore - 1,
        }));
      }
    }
  };

  newGame = () => {
    this.setState({
      score: 0,
      stage: 0,
      isAnswerRight: false,
      isGameOver: false,
      numberOfRightOption: 3,

    });
  };


  render() {
    const {
      score, maxScore, stage, numberOfRightOption, isGameOver,
    } = this.state;
    return (
      <>
        <Header score={score} stage={stage} data={birdsData} />
        {
          (numberOfRightOption && !isGameOver)
          && (
          <Main
            key={stage}
            data={birdsData[this.state.stage].data}
            numberOfRightOption={numberOfRightOption}
            handleButtonClick={this.lastStage}
            handleAnswerClick={this.updateStageScore}
          />
          )
        }
        {
          isGameOver
          && <Result score={score} maxScore={maxScore} handleButtonClick={this.newGame} />
        }
      </>
    );
  }
}
