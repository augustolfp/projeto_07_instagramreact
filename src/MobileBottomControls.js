import IonButton from "./IonButton";

export default function MobileBottomControls() {
    return(
        <nav class="MobileBottomControls">
            <IonButton link="https://findtheinvisiblecow.com/" icon="home" />
            <IonButton link="https://findtheinvisiblecow.com/" icon="search-outline" />
            <IonButton link="https://findtheinvisiblecow.com/" icon="add-circle-outline" />
            <IonButton link="https://findtheinvisiblecow.com/" icon="heart-outline" />
            <IonButton link="https://findtheinvisiblecow.com/" icon="person-outline" />
        </nav>
    );
}