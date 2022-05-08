export default function Story(props) {
    return(
        <div>
            <div class="StoriesRightArrow">
                <img src="./resources/Setinha.png" alt="" />
            </div>
            <a href={props.userProfile} target="_blank">
                <div class="StoryUserThumbnail">
                    <img src="./resources/UserThumbnails/stories_background 1.png" />
                    <div>
                        <img src={props.userImage} />
                    </div>
                </div>
                <h2>{props.userName}</h2>   
            </a>
        </div>
    );
}