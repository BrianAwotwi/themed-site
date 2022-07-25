import React from "react"

const ShopCategories = [
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_04_a08_76953_27087_on_a.jpg", category: "Dresses"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_01_a03_66139_1275_on_a.jpg", category: "T-Shirts & Tops"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_04_a06_77775_11420_on_a.jpg", category: "Pants"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_04_a02_95683_24827_on_d.jpg", category: "Shirts & Blouses"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_01_a26_99336_3030_on_a.jpg", category: "Shorts"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_02_a04_99293_23374_on_c.jpg", category: "Jackets & Coats"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_03_a01_101488_2377_on_a.jpg", category: "Activewear"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_01_a01_75719_1275_on_a.jpg", category: "Bodysuits"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_03_a26_79996_19451_on_a.jpg", category: "Sweatsuits"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_07_a08_101619_23858_on_a.jpg", category: "Jumpsuits & Rompers"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_01_a07_99838_3634_on_a.jpg", category: "Skirts"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_04_a03_80872_24830_on_a.jpg", category: "Sweaters"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_01_a04_92189_1564_on_b.jpg", category: "Shirt Jackets"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_10_a06_84950_25606_on_a.jpg", category: "Denim"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_01_a24_99011_1274_on_c.jpg", category: "Swimwear"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_03_n02_97787_25615_on_a.jpg", category: "Accessories"},
    {imgSrc: "https://aritzia.scene7.com/is/image/Aritzia/large/s22_01_a04_83232_18290_on_a.jpg", category: "Blazers"}
]

const ShopCarousel = () => {
    return (
        <div className="swiper">
            {ShopCategories.map(item => {
                return (
                    <div>
                        <img
                            src={item.imgSrc}
                            alt="" />
                        <p>{item.category}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ShopCarousel;