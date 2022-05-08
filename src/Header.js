export default function Header() {
    return(
        <header>
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
                <a href="https://findtheinvisiblecow.com/" target="_blank"><ion-icon name="navigate-outline"></ion-icon></a>
                <a href="https://findtheinvisiblecow.com/" target="_blank"><ion-icon name="compass-outline"></ion-icon></a>
                <a href="https://findtheinvisiblecow.com/" target="_blank"><ion-icon name="heart-outline"></ion-icon></a>
                <a href="https://findtheinvisiblecow.com/" target="_blank"><ion-icon name="person-outline"></ion-icon></a>
            </nav>
        </div>
        <div class="MobileHeader">
            <a href="https://findtheinvisiblecow.com/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="https://findtheinvisiblecow.com/" target="_blank"><img src="./resources/images/logo.png" /></a>
            <a href="https://findtheinvisiblecow.com/" target="_blank"><ion-icon name="navigate-outline"></ion-icon></a>
        </div>
    </header>
    );
}