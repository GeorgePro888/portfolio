import ayla from '/public/image/ayla.jpg';
import madaussie from '/public/image/madaussie.png';
import electricbikes from '/public/image/electricbikes.png';
import technical from '/public/image/technical.png';
import schbet from '/public/image/schbet.png';
import blockchain from '/public/image/blockchain.png';

export const projectsData = [
    {
        id: 1,
        name: 'Mad Aussie',
        description: "Its not one site, I developed 3 sites together and it was in Laravel. Mad Aussie was little complex project but executed successfully in the end.",
        tools: ['Laravel'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'www.madaussie.com.au',
        image: madaussie,
    },
    {
        id: 2,
        name: 'Electric Bikes I A2B',
        description: 'This website for an electric bike company was completed using PHP + graphic design skills in Adobe Photoshop.',
        tools: ['PHP', 'Tailwind CSS', "Tailwind CSS"],
        role: 'Full Stack Developer',
        code: '',
        demo: 'http://www.wearea2b.com/us',
        image: electricbikes,
    },
    {
        id: 3,
        name: 'Technical Development Company',
        description: 'We built this site using WordPress for the Technical Development Company. We built the necessary template and plugins ourselves. Elementor was used to design the templates.',
        tools: ['WordPress'],
        code: '',
        role: 'Web Developer',
        demo: '',
        image: technical,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'SchBet-Betting Site',
        description: "SCHBET is a betting site and having betting terminology, it developed in Laravel framework and having betting functionality and with very good UI.",
        tools: ['Laravel', 'HTML5', 'CSS3'],
        code: '',
        demo: 'https://SCHBET.com',
        image: schbet,
        role: 'Full Stack Developer',
    },
    {
        id: 6,
        name: 'Blockchain development',
        description: "This portfolio item showcases a cutting-edge decentralized finance(DeFi) platform, meticulously developed to revolutionize the traditional financial ecosystem by leveraging blockchain technology.",
        tools: ['Smart Contracts', 'Web3.js', 'Ethereum', ],
        code: '',
        demo: '',
        image: blockchain,
        role: 'Full Stack and Blockchain Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },