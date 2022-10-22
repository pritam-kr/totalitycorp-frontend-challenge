import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProcider = ({ children }) => {
  const [user, setUser] = useState({

    posts: [{
        name: "Anshul Rustaggi",
        bio: "Developer Evangelist with over 300K followers on social",
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQFR-qwU6T6i1w/profile-displayphoto-shrink_100_100/0/1638960423926?e=1671667200&v=beta&t=bb1MSUd9dn94wYVZE2HjBMdWFrOzV2m3mr_J7tFo6V4",

        description: "We are named one of the companies that highly value their employees with extravagant gifts. Proud and honoured to make it to CNBC’s list! We have always strived to create such an organizational atmosphere that values and appreciates its employees. Check out the article here 👇🏼" ,

        image: "https://media-exp1.licdn.com/dms/image/sync/C4D27AQEemozg3tcZFw/articleshare-shrink_800/0/1666353644549?e=1667044800&v=beta&t=zCJiunKpsnFYJ1klsTQybK7Fkrwm3bMMcG3t219zxUY",
        
    }, 
    {
      name: "Anshul Rustaggi",
      bio: "Developer Evangelist with over 300K followers on social",
      avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHcwiPmkN0_fA/profile-displayphoto-shrink_100_100/0/1644676197893?e=1671667200&v=beta&t=OoMCyfwejqokhqGu0hO8FajWJZLZh4fW0fyMkiBNahw",

      description: "We are named one of the companies that highly value their employees with extravagant gifts. Proud and honoured to make it to CNBC’s list! We have always strived to create such an organizational atmosphere that values and appreciates its employees. Check out the article here 👇🏼" ,

      image: "https://media-exp1.licdn.com/dms/image/sync/C4D27AQEemozg3tcZFw/articleshare-shrink_800/0/1666353644549?e=1667044800&v=beta&t=zCJiunKpsnFYJ1klsTQybK7Fkrwm3bMMcG3t219zxUY",
      
  },
  {
    name: "Anshul Rustaggi",
    bio: "Developer Evangelist with over 300K followers on social",
    avatar: "https://media-exp1.licdn.com/dms/image/D5603AQGlONd_ohvpzg/profile-displayphoto-shrink_100_100/0/1661713659488?e=1671667200&v=beta&t=_fXfzLR_avddPOGwTSr_1XTJ6dlwy13c5Ra6ByDNlK0",

    description: "We are named one of the companies that highly value their employees with extravagant gifts. Proud and honoured to make it to CNBC’s list! We have always strived to create such an organizational atmosphere that values and appreciates its employees. Check out the article here 👇🏼" ,

    image: "https://media-exp1.licdn.com/dms/image/sync/C4D27AQEemozg3tcZFw/articleshare-shrink_800/0/1666353644549?e=1667044800&v=beta&t=zCJiunKpsnFYJ1klsTQybK7Fkrwm3bMMcG3t219zxUY",
    
}],


    userInfo: {
      name: "Pritam Kumar",
      bio: "Front-end Developer Intern at Ringover • Talks about JavaScript, ReactJs, TypeScript",
      coverImg: "",
      avatar: "",
      profileView: 489,
      impressionOnPost: 900,
    },

    recet: [
      { title: "All things Javascript: Node.js" },
      { title: "LetsGrowMore" },
      { title: "The Sparks Foundation" },
      { title: "JavaScript Webinar" },
    ],

    grpups: [
      { title: "neogcamp" },
      { title: "Webdevelopement" },
      { title: "The Sparks Foundation" },
    ],

    linkedinNews: [
      {
        title: "UK PM Truss resigns after six weeks",
        time: "16h ago • 87,792 readers",
      },
      {
        title: "UK PM Truss resigns after six weeks",
        time: "16h ago • 87,792 readers",
      },
      {
        title: "UK PM Truss resigns after six weeks",
        time: "16h ago • 87,792 readers",
      },
      {
        title: "UK PM Truss resigns after six weeks",
        time: "16h ago • 87,792 readers",
      },
      {
        title: "UK PM Truss resigns after six weeks",
        time: "16h ago • 87,792 readers",
      },
    ],
  });

  return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
