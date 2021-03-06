/* Packages */
import React from 'react';


/* Component */
export class Description extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section id="Description" className="Description">
                <section className="Description__description">
                    {/* Embed video, different sizes for different screens*/}
                    <figure className="Description__videoPhone">
                        <iframe width="300" height="168" src="https://www.youtube.com/embed/NyOvFSP_IpQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                        <figcaption>
                            YouTuber <a href="https://www.youtube.com/channel/UC2WHjPDvbE6O328n17ZGcfg">Forrest Knight</a> explains the concept of Open Source CS
                        </figcaption>
                    </figure>

                    <figure className="Description__videoTablet">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/NyOvFSP_IpQ" frameborder="0" allaow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <figcaption>
                            YouTuber <a href="https://www.youtube.com/channel/UC2WHjPDvbE6O328n17ZGcfg" target="_blank" rel="noopener">Forrest Knight</a> explains the concept of Open Source CS
                        </figcaption>
                    </figure>
                    
                    <p>
                        This is a curated list of free courses from reputable universities like MIT, Stanford, and Princeton that satisfy the same requirements as an undergraduate Computer Science degree, minus general education.
                    </p>
                </section>
            </section>
        );
    }
}


export default Description;