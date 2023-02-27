import React from 'react';
import Card from './Card'

const cardsData = [
  {
    id: 1,
    title: 'Feeding America',
    description: 'Partner with food banks to hunger',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Feeding_America_logo.svg/640px-Feeding_America_logo.svg.png',
    link: 'https://www.feedingamerica.org/',
  },
  {
    id: 2,
    title: 'United Way Worldwide',
    description: 'Focus on education, health, and financial barriers to solve issues around the world',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/United_Way_Logo.svg/1200px-United_Way_Logo.svg.png',
    link: 'https://www.unitedway.org/',
  },
  {
    id: 3,
    title: 'St. Jude Hospital',
    description: 'Treat childhood cancer and pediatric disease',
    image: 'https://mma.prnewswire.com/media/613525/St_Jude_Childrens_Research_Hospital_Logo.jpg?p=twitter',
    link: 'https://www.stjude.org/',
  },
  {
    id: 4,
    title: 'Direct Relief',
    description: 'Provide medical assitance and disaster relief',
    image: 'https://i0.wp.com/www.directrelief.org/wp-content/uploads/2021/05/Direct-Relief_Logo_Stacked-RGB.png?ssl=1',
    link: 'https://www.directrelief.org/',
  },
  {
    id: 5,
    title: 'Habitat for Humanity',
    description: 'Build and improve homes for low-income families',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Habitat_for_humanity.svg/1200px-Habitat_for_humanity.svg.png',
    link: 'https://www.habitat.org/',
  },
  {
    id: 6,
    title: 'YMCA',
    description: 'Strengthen community through educational facilities, recreational centers, and more',
    image: 'https://assets.indymca.org/wp-content/uploads/2021/05/18183618/ymca_blu_og.png',
    link: 'https://www.ymca.org/',
  },
  {
    id: 7,
    title: 'Boys and Girls Club',
    description: 'Provide afterschool programs and mentorship for youth',
    image: 'https://www.bgca.org/-/media/Images/partners/BGCA_Partner_logo_325x215.ashx',
    link: 'https://www.bgca.org/',
  },
  {
    id: 8,
    title: 'The Nature Conservancy',
    description: 'Fight climate change and combat biodiversity loss',
    image: 'https://www.ecomagazine.com/images/Newsletter/0_2022/Week_3-21-22/NatureConservancy.jpg',
    link: 'https://www.nature.org/en-us/',
  },
  {
    id: 9,
    title: 'American Red Cross',
    description: 'Provide emergency disaster relief',
    image: 'https://www.redcross.org/content/dam/redcross/red-cross-logos/American-Red-Cross_Logo_1200x630.jpg',
    link: 'https://www.redcross.org/',
  },
  {
    id: 10,
    title: 'Teach for America',
    description: 'Provide equitable education for low-income students',
    image: 'https://thenew.org/app/uploads/2020/04/TFA-logo.png',
    link: 'https://www.teachforamerica.org/',
  },
  
];

const CardContainer = () => {
  return (
    <div className="card-container">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardContainer;
