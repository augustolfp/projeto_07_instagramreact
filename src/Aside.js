function Suggestion(props) {
    return(
        <div class="Suggestions">
            <div>
                <a href={props.userProfile} target="_blank"><img src={props.userImage} /></a>
                <div>
                    <a href={props.userProfile} target="_blank"><h3>{props.userName}</h3></a>
                    <div class="SuggestedUserStatus">Segue você</div>
                </div>
            </div>
            <a href="https://findtheinvisiblecow.com/" target="_blank"><div class="FollowButton">Seguir</div></a>
        </div>
    );
}

function MyUser(props) {
    return(
        <div class="MyUser">
            <div>
                <a href={props.userProfile} target="_blank"><img src={props.userImage} /></a>
                <div>
                    <a href={props.userProfile} target="_blank">
                        <h3>{props.userName}</h3>
                        <h5>{props.userLegalName}</h5>
                    </a>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return(
        <div>
            <div>
                <a href="https://findtheinvisiblecow.com/" target="_blank">
                    <footer>
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                    </footer>
                </a>
                <a href="https://findtheinvisiblecow.com/" target="_blank"><footer>© 2021 INSTAGRAM DO FACEBOOK</footer></a>
            </div>
        </div>
    );
}

function SuggestionHeader() {
    return(
        <div>
            <div id="SugestoesParaVoceText">Sugestões para você</div>
            <a href="https://findtheinvisiblecow.com/" target="_blank"><div id="VerTudoButton">Ver tudo</div></a>
        </div>
    );
}

export default function Aside() {

    const userData = {
        userName: "augustolfp",
        userLegalName: "Augusto",
        userProfile: "https://findtheinvisiblecow.com/",
        userImage: "./resources/UserThumbnails/catanacomics 1.png"
    };

    const suggestionArray = [
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userImage: "./resources/UserThumbnails/badvibesmemes 1.png",
            userName: "bad.vibes.memes"
        },
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userImage: "./resources/UserThumbnails/chibirdart 1.png",
            userName: "chirbirdart"
        },
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userImage: "./resources/UserThumbnails/razoesparaacreditar 1.png",
            userName: "Rogerinho do Ingá"
        },
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userImage: "./resources/UserThumbnails/adorableanimals 1.png",
            userName: "gatineos"
        },
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userImage: "./resources/UserThumbnails/smallcutecats 1.png",
            userName: "smallcutecats"
        }
    ];

    return(
        <aside>
            <MyUser {...userData} />
            <SuggestionHeader />
            {suggestionArray.map(suggestionObj => <Suggestion {...suggestionObj} />)}
            <Footer />
        </aside>
    );
}