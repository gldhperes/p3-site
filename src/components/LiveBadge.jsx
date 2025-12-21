import { Radio } from "lucide-react"

const LiveBadge = () => {
    return (
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
    );
}
export default LiveBadge;