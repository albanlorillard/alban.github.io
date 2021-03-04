import './App.scss';

function AboutPages() {
    return (
        <div className="App">
            <header>
                <h1>&lt;Alban/&gt;</h1>
                <nav className="externalNavigation">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/albanlorillard/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/albanlorillard" target="_blank">Github</a></li>
                        <li><a href="https://twitter.com/alban_lorillard" target="_blank">Twitter</a></li>
                    </ul>
                </nav>
            </header>
            <nav className="internalNavigation">
                <ul>
                    <li> &gt; A propos </li>
                    <li>Articles</li>
                    <li>Ressources</li>
                </ul>
            </nav>
            <main>
                <div className="slide1">
                    <h1>Alban Lorillard</h1>
                    <h2>Ingénieur logiciel @<a href="https://ouitalk.oui.sncf/le-groupe/qui-sommes-nous" target="_blank">E-Voyageur SNCF</a></h2>
                    <p>
                        <ul>
                            <li>Diplômé en ingénierie informatique à <a href="https://polytech.univ-nantes.fr/" target="_blank">Polytech Nantes</a> - Bac+5</li>
                            <li>Diplômé en innovation et transformation numérique à l'<a href="https://www.disruptcampusnantes.com/" target="_blank">Université de Nantes</a> - Bac+5</li>
                        </ul>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default AboutPages;
