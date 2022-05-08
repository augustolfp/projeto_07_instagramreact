import Story from "./Story";

export default function Stories() {

    const arrayStories = [
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userName: "9gag",
            userImage: "./resources/UserThumbnails/9gag 1.png"
        },
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userName: "meowed",
            userImage: "./resources/UserThumbnails/meowed 1.png"
        },
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userName: "barked",
            userImage: "./resources/UserThumbnails/barked 1.png"
        },
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userName: "nathanw...",
            userImage: "./resources/UserThumbnails/nathanwpylestrangeplanet 1.png"
        },
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userName: "wawawi...",
            userImage: "./resources/UserThumbnails/wawawiwacomicsa 1.png"
        },
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userName: "respondeai",
            userImage: "./resources/UserThumbnails/respondeai 1.png"
        },
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userName: "filomoderna",
            userImage: "./resources/UserThumbnails/filomoderna 1.png"
        },
        {
            userProfile: "https://findtheinvisiblecow.com/",
            userName: "memeriag...",
            userImage: "./resources/UserThumbnails/memeriagourmet 1.png"
        },
        
    ];

    return(
        <div class="Stories">
            {arrayStories.map(storyObj => <Story {...storyObj} /> )}
        </div>  
    );
}