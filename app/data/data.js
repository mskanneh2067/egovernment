import { HiMiniHome } from "react-icons/hi2";
import { GiVote } from "react-icons/gi";
import { FaNewspaper } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";
//Top Menu
export const topMenu = [
    {
        id:1,
        title:"History",
        path:"/history",
        ico:`FiHome`
    },
    {
        id:2,
        title:"Government",
        path:"/gov",
        ico:`FiHome`
    },
    {
        id:3,
        title:"Elections",
        path:"/candidate",
        ico:`FiHome`
    },
    {
        id:4,
        title:"Jobs Board",
        path:"/vote",
        ico:`FiHome`
    },
]

//Menu Data
export const menu = [
    {
        id:1,
        title:"Home",
        path:"/",
        icons:HiMiniHome
    },
    {
        id:2,
        title:"My Government",
        path:"/gov",
        icons:GiVote
    },
    {
        id:3,
        title:"Procurement",
        path:"/procurement",
        icons: FaNewspaper 
    },
    {
        id:4,
        title:"Jobs Board",
        path:"/jobs",
        icons:RiAdvertisementFill
    },
]

