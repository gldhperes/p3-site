import { Radio } from "lucide-react"
import navRoutes from "../../utils/routes"

const LiveComponent = () => {
    return (
        <a
            href={navRoutes.live}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
            }}>

            <div style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "red",
                color: "white",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px 10px",
                borderRadius: "8px",
                gap: "8px",
            }}>
                <Radio />
                Ao vivo

            </div>
        </a>
    )
}

export default LiveComponent