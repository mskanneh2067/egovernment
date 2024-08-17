import {menu }from "@/app/data/data.js"
import NavLink from './navLink'


const Mobile = ()=> {


    return (
       
        <div className='mobile-menu'>

        {
            menu.map((e)=>(
                <NavLink item={e} key={e.id} />
                
            ))
        }
        </div>
        
    )
}

export default Mobile