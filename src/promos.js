import { useEffect, useState } from "react";
//import { expirationTime } from "./utilities";

const promotions = ['50% Off Select Styles', 'Sign in to unlock exclusive benefits'];

const RenderPromos = () => {
    const [promo, setPromo] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setPromo(!promo) 
        }, 5000)
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <div className="promo">
            <div>{promo && promotions[0]}</div>
            <div>{!promo && promotions[1]}</div>
        </div>
        
    )
}

export default RenderPromos;