import navRoutes from "../utils/routes"
import LiveBadge from "./LiveBadge"


const LiveComponent = () => {
    return (
        <a
            href={navRoutes.live}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
            }}>

           <LiveBadge />
        </a>
    )
}

export default LiveComponent