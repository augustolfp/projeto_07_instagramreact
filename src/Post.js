import IonButton from "./IonButton";

function PostTopBar(props) {
    return(
        <div class="PostTopBar">
        <div>
            <a href={props.userPage} target="_blank">
                <img src={props.userProfilePic} />
                <h3>{props.userName}</h3>
            </a>
        </div>
        <IonButton link="https://findtheinvisiblecow.com/" icon="ellipsis-horizontal" />
    </div>
    );
}

function PostBottomIcons() {
    return(
        <nav class="PostBottomIcons">
            <div>
                <IonButton link="https://findtheinvisiblecow.com/" icon="heart-outline" />
                <IonButton link="https://findtheinvisiblecow.com/" icon="chatbubble-outline" />
                <IonButton link="https://findtheinvisiblecow.com/" icon="navigate-outline" />
            </div>
            <IonButton link="https://findtheinvisiblecow.com/" icon="bookmark-outline" />
        </nav>
    );
}

function PostStats(props) {
    return(
        <div class="PostStats">
            <a href={props.followerProfile} target="_blank"><img src={props.followerPic} /></a>
            <h4>Curtido por <a href={props.followerProfile} target="_blank"><strong>{props.followerName}</strong></a> e <a href="https://findtheinvisiblecow.com/" target="_blank"><strong>outras {props.likesCount} pessoas</strong></a></h4>
        </div>
    );
}

export default function Post(props) {
    return(
        <article>
            <PostTopBar userPage={props.userPage} userProfilePic={props.userProfilePic} userName={props.userName} />
            <img src={props.postImage} alt="" />        
            <div>
                <PostBottomIcons />
                <PostStats followerProfile={props.followerProfile} followerPic={props.followerPic} followerName={props.followerName} likesCount={props.likesCount} />
            </div>
        </article>
    );
}