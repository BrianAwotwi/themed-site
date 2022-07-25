import React from "react";

const guarantees = [
    {
        imgSrc: "https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw07f1fe0f/2021/126-ays-icons/icon-free-shipping.svg",
        title: "Free Shipping",
        comment: "Free shipping on all orders over $50."
    },
    {
        imgSrc: "https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw52addee8/2021/126-ays-icons/icon-easy-returns.svg",
        title: "Easy Return",
        comment: "Changed your mind? Easily return your purchase in-store or via mail."
    },
    {
        imgSrc: "https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw5338640f/2021/126-ays-icons/icon-siv.svg",
        title: "Find in Store",
        comment: "See something you love? Check Store Inventory to find in your local boutique."
    },
    {
        imgSrc: "https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw3d1d2cde/2022/46-clientele/ss-2022-clientele-footer-icon-storeorders.svg",
        title: "Store Orders",
        comment: "Can't find your size? Let us order it for you. Easy store-to-store means you always get what you want."
    },
];

const TrustBadges = () => {
    return (
        <div className="trust">
            {guarantees.map(item => {
                return (
                    <div className="trust-content">
                        <img
                            src={item.imgSrc}
                            alt=""
                        />
                        <span>{item.title}</span>
                        <p>{item.comment}</p>
                        <p>Learn More</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TrustBadges;