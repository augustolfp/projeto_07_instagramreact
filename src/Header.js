import IonButton from "./IonButton";

function DesktopHeader() {
    return(
        <div class="DesktopHeader">
            <a href="https://www.youtube.com" target="_blank" class="PageLogo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div></div>
                <img src="./resources/images/logo.png" />
            </a>           
            <div class="SearchBar">
                <p>Pesquisar</p>
            </div>  
            <nav>
                <IonButton link="https://findtheinvisiblecow.com/" icon="navigate-outline"/>
                <IonButton link="https://findtheinvisiblecow.com/" icon="compass-outline"/>
                <IonButton link="https://findtheinvisiblecow.com/" icon="heart-outline"/>
                <IonButton link="https://findtheinvisiblecow.com/" icon="person-outline"/>
            </nav>
        </div>
    );
}

function MobileHeader() {
    return(
        <div class="MobileHeader">
            <IonButton link="https://findtheinvisiblecow.com/" icon="logo-instagram" />
            <a href="https://findtheinvisiblecow.com/" target="_blank"><img src="./resources/images/logo.png" /></a>
            <IonButton link="https://findtheinvisiblecow.com/" icon="navigate-outline"/>
        </div>
    );
}

export default function Header() {
    return(
        <header>
            <DesktopHeader />
            <MobileHeader />
        </header>
    );
}