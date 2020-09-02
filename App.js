import React from "react"

import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
            <img src="https://i.pinimg.com/originals/ce/62/5f/ce625fb4c1685ecfa4a068eb6112b37e.jpg"/>
            
            <Joke 
                question="What's the best thing about Switzerland?" 
                punchLine="I don't know, but the flag is a big plus!"
            />
            <img src="https://www.eda.admin.ch/content/dam/PRS-Web/bilder/1.6.6.jpg/_jcr_content/renditions/original" />
            
            <Joke 
                question="Did you hear about the mathematician who's afraid of negative numbers?" 
                punchLine="He'll stop at nothing to avoid them!"
            />
            <img src="https://www.onlinemathlearning.com/image-files/integer-number-line.png" />
            
            <Joke 
                question="Hear about the new restaurant called Karma?" 
                punchLine="There’s no menu: You get what you deserve."
            />
            <img src="https://donstravels.com/wp-content/uploads/2019/06/no-menu.jpg" />
            
            <Joke 
                question="Did you hear about the actor who fell through the floorboards?" 
                punchLine="He was just going through a stage."
            />
            <img src="https://i.insider.com/512aed0e69beddb468000004?width=400&format=gif" />
            
            <Joke 
                question="Did you hear about the claustrophobic astronaut?" 
                punchLine="He just needed a little space."
            />
            <img src="https://pbs.twimg.com/media/DyHpPBKU8AAv3Ds.jpg" />
            
        </div>
    )
}

export default App
