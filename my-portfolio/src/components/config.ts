import htmlImg from "../assets/techImgs/html.svg";
import cssImg from "../assets/techImgs/css-alt.svg";
import jsImg from "../assets/techImgs/javascript.svg";
import reactImg from "../assets/techImgs/react.svg";
import tailwindImg from "../assets/techImgs/Tailwind CSS.svg";
import reduxImg from "../assets/techImgs/redux.svg";
import ts from "../assets/techImgs/ts.svg"


//Backend Imgs
import nodeImg from "../assets/techImgs/node-dot-js.svg";
import expressImg from "../assets/techImgs/express.svg";
import mongodbImg from "../assets/techImgs/mongodb.svg";
import mysqlImg from "../assets/techImgs/mysql.svg";
import restApi from "../assets/techImgs/node-dot-js.svg"
import stripeImg from "../assets/techImgs/stripe-v2-svgrepo-com.svg"

//DevTools

import GitImg from "../assets/techImgs/git.svg";
import npmImg from "../assets/techImgs/npm.svg";
import postmanImg from "../assets/techImgs/postman.svg";
import vsCode from "../assets/techImgs/vscode (2).svg";
import vercelImg from "../assets/techImgs/vercel-icon-svgrepo-com.svg";
import githubImg from "../assets/techImgs/github.svg";


type techInfo = {
    name: string;
    icon: string;
}

const frontendSkill: techInfo[] = [
    {
        name: "HTML",
        icon: htmlImg
    },
    {
        name: "CSS",
        icon: cssImg
    },
    {
        name: "React",
        icon: reactImg
    },
    {
        name: "Redux Toolkit",
        icon: reduxImg
    },
    {
        name: "TypeScript",
        icon: ts
    },
    {
        name: "JavaScript",
        icon: jsImg
    },
    {
        name: "Tailwind",
        icon: tailwindImg
    },



]

const BackendSkills: techInfo[] = [
    {
        name: "Node.js",
        icon: nodeImg
    },
    {
        name: "Express.js",
        icon: expressImg
    },
    {
        name: "MongoDB",
        icon: mongodbImg
    },
    {
        name: "MySQL",
        icon: mysqlImg
    },
    {
        name: "REST API",
        icon: restApi
    },
    {
        name: "Stripe",
        icon: stripeImg
    }
]
const DevTools: techInfo[] = [
    {
        name: "Git",
        icon: GitImg
    },
    {
        name: "npm",
        icon: npmImg
    },
    {
        name: "Postman",
        icon: postmanImg
    },
    {
        name: "VS Code",
        icon: vsCode
    },
    {
        name: "Vercel",
        icon: vercelImg
    },
    {
        name: "GitHub",
        icon: githubImg
    },

]


export { frontendSkill, BackendSkills, DevTools, type techInfo }
