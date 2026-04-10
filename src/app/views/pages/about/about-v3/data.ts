const client1 = '/images/client/01.svg';
const client2 = '/images/client/02.svg';
const client3 = '/images/client/03.svg';
const client4 = '/images/client/04.svg';
const client5 = '/images/client/05.svg';
const client6 = '/images/client/06.svg';
const client7 = '/images/client/07.svg';

export const clientData: string[] = [
  client3,
  client7,
  client5,
  client4,
  client1,
  client2,
  client3,
  client6,
];

export type AboutType = {
  title: string;
  description: string;
  icon: string;
};

export const aboutData: AboutType[] = [
  {
    title: 'Innovative Solutions',
    description: `We pride ourselves on crafting innovative software solutions that address real-world challenges and drive digital transformation.`,
    icon: `
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.24609 17.2586V14.6904H14.7461V17.2586C14.7461 19.1706 14.7461 20.1266 14.5249 20.557C14.0158 21.5475 12.7956 21.9314 11.8111 21.4107C11.3833 21.1845 10.836 20.4007 9.74136 18.833C9.60764 18.6415 9.54079 18.5457 9.48641 18.4451C9.36533 18.2209 9.2882 17.9757 9.25914 17.7226C9.24609 17.609 9.24609 17.4922 9.24609 17.2586Z"
            fill="currentColor">
        </path>
        <path
            d="M17.5114 9.84101C19.375 6.88684 20.3067 5.40976 19.9484 4.21191C19.8359 3.83574 19.6441 3.48802 19.386 3.19214C18.5641 2.25 16.8176 2.25 13.3248 2.25H10.6405C7.12482 2.25 5.36697 2.25 4.54466 3.1974C4.28652 3.49482 4.09526 3.84421 3.98384 4.22194C3.6289 5.42518 4.57619 6.90596 6.47077 9.86751L9.23438 14.1875H14.7695L17.5114 9.84101Z"
            fill="currentColor"
            fill-opacity="0.25">
        </path>
        </svg>`,
  },
  {
    title: 'Client-Centric Approach',
    description: `Our client-centric approach ensures that we understand your unique needs and provide
tailored solutions that exceed expectations.`,
    icon: `
<svg width="32" height="32" viewBox="0 0 24 24" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M12 2.5C9.79086 2.5 8 4.41878 8 6.78571C8 6.97115 8.01099 7.15383 8.03232 7.33306C8.28317 9.44152 11 10 12 10C13 10 15.7168 9.44152 15.9677 7.33306C15.989 7.15383 16 6.97115 16 6.78571C16 4.41878 14.2091 2.5 12 2.5Z"
    fill="currentColor">
  </path>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.24989 7.1053C7.24989 7.05966 7.2505 7.01416 7.25173 6.96883C4.2677 7.95454 2.25 9.97184 2.25 12.1034C2.25 14.0748 3.97605 15.8116 6.59627 16.8293L4.46793 18.9716C4.176 19.2655 4.17756 19.7403 4.47141 20.0323C4.76526 20.3242 5.24013 20.3226 5.53207 20.0288L8.20833 17.3349C9.15517 17.5678 10.1784 17.7162 11.25 17.7636V21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21V17.7636C13.8164 17.7164 14.8348 17.5693 15.7777 17.3384L18.4697 20.0303C18.7626 20.3232 19.2374 20.3232 19.5303 20.0303C19.8232 19.7374 19.8232 19.2626 19.5303 18.9697L17.3938 16.8331C20.0196 15.816 21.75 14.0773 21.75 12.1034C21.75 9.97178 19.7322 7.95444 16.748 6.96875C16.7493 7.01411 16.7499 7.05963 16.7499 7.1053C16.7499 7.31546 16.7368 7.5225 16.7115 7.72562C16.4136 10.1152 13.1874 10.7482 11.9999 10.7482C10.8124 10.7482 7.58615 10.1152 7.28826 7.72562C7.26294 7.5225 7.24989 7.31546 7.24989 7.1053Z"
    fill="currentColor"
    fill-opacity="0.25">
  </path>
</svg>`,
  },
  {
    title: 'Experienced Team',
    description: `Our team of experienced professionals is committed to delivering excellence and
quality in every project we undertake.`,
    icon: `
<svg width="32" height="32" viewBox="0 0 24 24" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M3.40004 19.9484C3.41524 20.1895 3.42283 20.3101 3.51172 20.4292C3.53619 20.462 3.58073 20.5066 3.61353 20.5311C3.73269 20.6199 3.85325 20.6275 4.09437 20.6427C5.14741 20.7091 7.28849 20.6474 8.66268 19.2732C9.39454 18.5414 9.77757 17.5685 9.97243 16.6532C10.0108 16.4728 10.03 16.3826 10.0112 16.2835C10.0053 16.2528 9.99478 16.2173 9.98295 16.1883C9.94486 16.0949 9.87386 16.0239 9.73186 15.8819L8.16087 14.3109C8.01887 14.1689 7.94787 14.0979 7.85449 14.0598C7.82551 14.048 7.78998 14.0375 7.75923 14.0316C7.66016 14.0127 7.56997 14.0319 7.38958 14.0703C6.47423 14.2652 5.50139 14.6482 4.76953 15.3801C3.39534 16.7543 3.33368 18.8954 3.40004 19.9484Z"
    fill="currentColor">
  </path>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.02164 6.44822C5.26483 6.54451 3.88965 7.99713 3.88965 9.75657C3.88965 11.5264 5.28055 12.9837 7.04843 13.0663L7.85685 13.104C7.90862 13.1064 7.95762 13.1281 7.99427 13.1647L10.8462 16.0167C10.8829 16.0533 10.9045 16.1023 10.9069 16.1541L10.9447 16.9625C11.0272 18.7304 12.4846 20.1213 14.2544 20.1213C16.0138 20.1213 17.4665 18.7461 17.5627 16.9893L17.7857 12.9211C20.8652 9.28048 20.5871 5.1321 20.4317 3.95598C20.4053 3.75678 20.2527 3.60577 20.0532 3.58128C18.883 3.43754 14.774 3.19885 11.0864 6.22543L7.02164 6.44822ZM14.8799 11.3516C14.8799 12.5942 13.8725 13.6016 12.6299 13.6016C11.3872 13.6016 10.3799 12.5942 10.3799 11.3516C10.3799 10.1089 11.3872 9.10156 12.6299 9.10156C13.8725 9.10156 14.8799 10.1089 14.8799 11.3516Z"
    fill="currentColor"
    fill-opacity="0.25">
  </path>
</svg>`,
  },
];

export type TeamType = {
  image: string;
  name: string;
  role: string;
};

export const teamData: TeamType[] = [
  {
    image: '/images/team/4by4/01.jpg',
    name: 'Emma Watson',
    role: 'Founder',
  },
  {
    image: '/images/team/4by4/02.jpg',
    name: 'Allen Smith',
    role: 'UI/UX designer',
  },
  {
    image: '/images/team/4by4/03.jpg',
    name: 'Jacqueline Miller',
    role: 'Human Resource',
  },
  {
    image: '/images/team/4by4/04.jpg',
    name: 'Frances Guerrero',
    role: 'Software Developer',
  },
  {
    image: '/images/team/4by4/05.jpg',
    name: 'Samuel Bishop',
    role: 'Product designer',
  },
  {
    image: '/images/team/4by4/06.jpg',
    name: 'Amanda Reed',
    role: 'Content writer',
  },
];

export const testimonialData = [
  {
    id: 1,
    rating: 4.5,
    text: "The best Template we've ever used - it's easy to customize and comes with all the features we need. Resolving breakfast am or perfectly.",
    name: 'Amanda Reed',
    role: 'Content writer',
    image: '/images/avatar/05.jpg',
  },
  {
    id: 2,
    rating: 4.5,
    text: 'Mizzle is the perfect theme for businesses that want to create a stylish and functional website.',
    name: 'Dennis Barrett',
    role: 'CEO and Manager of Mizzle',
    image: '/images/avatar/04.jpg',
  },
  {
    id: 3,
    rating: 4.5,
    text: 'StackBros helped us create a stunning website that reflects our brand perfectly.',
    name: 'Samuel Bishop',
    role: 'Manager of Mizzle',
    image: '/images/avatar/01.jpg',
  },
];
