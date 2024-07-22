import Two from "./Two"
import Three from "./Three";
import Four from "./Four"
import Five from "./Five"
function One() {
    return (
        <div>
            return <h1>This is from a component</h1>
            <Two />
            <Three />
            <Four />
            <Five />
        </div>
    );
}

export default One;