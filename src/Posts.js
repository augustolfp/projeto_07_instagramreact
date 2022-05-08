import Post from "./Post";

export default function Posts() {

    const arrayPosts = [
        {
            userPage: "https://findtheinvisiblecow.com/",
            userProfilePic: "./resources/UserThumbnails/meowed 1.png",
            userName: "meowed",
            postImage: "./resources/Content/WhatsApp Image 2022-03-28 at 17.39.35.jpeg",
            followerProfile: "https://findtheinvisiblecow.com/",
            followerPic: "./resources/UserThumbnails/respondeai 1.png",
            followerName: "Respondeaí",
            likesCount: '158000'
        },
        {
            userPage: "https://findtheinvisiblecow.com/",
            userProfilePic: "./resources/UserThumbnails/barked 1.png",
            userName: "barked",
            postImage: "./resources/Content/WhatsApp Image 2022-03-28 at 17.39.36.jpeg",
            followerProfile: "https://findtheinvisiblecow.com/",
            followerPic: "./resources/UserThumbnails/adorableanimals 1.png",
            followerName: "adorable_animals",
            likesCount: '1580080'
        },
        {
            userPage: "https://findtheinvisiblecow.com/",
            userProfilePic: "./resources/UserThumbnails/barked 1.png",
            userName: "barked",
            postImage: "./resources/Content/WhatsApp Image 2022-03-28 at 17.39.37.jpeg",
            followerProfile: "https://findtheinvisiblecow.com/",
            followerPic: "./resources/UserThumbnails/adorableanimals 1.png",
            followerName: "Chimbinha",
            likesCount: '10080'
        },
        {
            userPage: "https://findtheinvisiblecow.com/",
            userProfilePic: "./resources/UserThumbnails/smallcutecats 1.png",
            userName: "barked",
            postImage: "./resources/Content/WhatsApp Image 2022-03-28 at 17.39.39.jpeg",
            followerProfile: "https://findtheinvisiblecow.com/",
            followerPic: "./resources/UserThumbnails/filomoderna 1.png",
            followerName: "Rogerinho do Ingá",
            likesCount: '9080'
        },
        {
            userPage: "https://findtheinvisiblecow.com/",
            userProfilePic: "./resources/UserThumbnails/chibirdart 1.png",
            userName: "barked",
            postImage: "./resources/Content/WhatsApp Image 2022-03-28 at 17.39.39 (1).jpeg",
            followerProfile: "https://findtheinvisiblecow.com/",
            followerPic: "./resources/UserThumbnails/filomoderna 1.png",
            followerName: "tião",
            likesCount: '5674567'
        }
    ];

    const qqcoisa = arrayPosts.map(postObj => <Post {...postObj} />)
    return(
        <div>
            {arrayPosts.map(postObj => <Post {...postObj} />)}
        </div>
    );
}