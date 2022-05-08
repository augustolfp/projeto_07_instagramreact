import Header from "./Header";
import MobileBottomControls from "./MobileBottomControls";
import Stories from "./Stories";
import Aside from "./Aside";
import Posts from "./Posts";

export default function App() {
    return(
        <div>
            <Header />
            <div class="Content">
                <main>
                    <Stories />
                    <Posts />
                </main>
                <Aside />
            </div>  
            <MobileBottomControls />
        </div>
    );
}