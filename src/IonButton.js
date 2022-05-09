export default function IonButton(props) {
    return(
        <a href={props.link} target="_blank"><ion-icon name={props.icon}></ion-icon></a>
    );
}