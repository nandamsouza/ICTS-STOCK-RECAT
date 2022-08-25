import ModalPolitica from "../../components/modal"
import {useState, useEffect} from "react"
import instance from "../../http"

function Politica () {
    const [politicas, setPoliticas] = useState({})
    useEffect(() => {
        instance.get('/policy')
        .then((res) => {
            setPoliticas(res.data)
        })
    }, [])    
   const abrirModal = () => {
    document.getElementById("modalPolitica").classList.add("show");
    document.getElementById("modalPolitica").style.display = "block";
   }
    return (
        <div className="container" style={{"position":"absolute","left":"20%"}}>
            <ModalPolitica />
            <h3>Politica de Estoque</h3>
            <button type="button" className="btn btn-outline-danger btn-sm" style={{"marginBottom":"2%", "marginLeft":"31%", "marginBottom":"5px"}} onClick={ () => abrirModal() }>
                CADASTRAR POLÍTICA DE ESTOQUE
            </button>

            <div className="card" style={{"width":"40rem", "height":"20rem"}}>
                <div className="card-body" style={{"padding":"0rem 0.7rem"}}>
                    <div className="row" style={{"backgroundColor": "#0089B3"}}>
                        <div className="col-4">
                            Ótimo
                        </div>
                        <div className="col-4">
                            Bom
                        </div>
                        <div className="col-4">
                            Crítico
                        </div>
                        <div className="col-4">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <span> {politicas.otimo}</span>
                        </div>
                        <div className="col-4">
                            <span>{politicas.critico} até {politicas.otimo}</span>
                        </div>
                        <div className="col-4">
                        <span> {politicas.critico}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal"></div>
        </div>
    )
}

export default Politica