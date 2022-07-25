import React from "react";

const story = [
    {imgSrc: 'https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw131fd7fa/ss22-06-12-hp-slot4-a.jpg', title: 'Retro Sport Edit'},
    {imgSrc: 'https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dwa72f0216/ss22-06-09-hp-slot4-a.jpg', title: 'Skipping Class With Ruby Lyn'},
    {imgSrc: 'https://www.aritzia.com/on/demandware.static/-/Library-Sites-Aritzia_Shared/default/dw8034889f/ss22-06-09-hp-slot4-b.jpg', title: 'Tna Swim & Sol'}
];

const Stories = () => {
    return (
        <div className="stories">
            {story.map(item => {
                return (
                    <div>
                        <img
                            src={item.imgSrc}
                            alt="" 
                        />
                        <h1>{item.title}</h1>
                        <p>View Story</p>
                    </div>
                )
            })}
        </div>
    )
};

export default Stories;