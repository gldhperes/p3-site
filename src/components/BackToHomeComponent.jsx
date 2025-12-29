import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BackToHomeComponent = () => {
    return (
        <Link
            id="back-to-home"
            to={'/'}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgb(147, 197, 253)',
                marginBottom: '2rem',
                textDecoration: 'none',
                fontSize: '1rem',
                marginTop: '80px'
            }}>
            <ArrowLeft size={16} />
            Voltar para Home
        </Link>
    )
}

export default BackToHomeComponent
