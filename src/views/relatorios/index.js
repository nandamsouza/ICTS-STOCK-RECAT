import {useState, useEffect} from "react"
import instance from "../../http"

function Relatorio () {
    const [items, setItems] = useState([])
    const [politicas, setPoliticas] = useState({})
    useEffect(() => {
        instance.get('/file')
        .then((res) => {
            setItems(res.data)
        })

        instance.get('/policy')
        .then((res) => {
            setPoliticas(res.data)
            console.log(politicas.critico, politicas.otimo)
        })        
    }, [])

    const getStatus = (vol) => {
        vol = Number.parseFloat(vol)
        if (vol < politicas.critico)
            return 'Crítico'
        else if (vol > politicas.otimo) {
            return 'Ótimo'
        } else {
            return 'Bom'
        }
     }
    return(
        <div className="container" style={{"position":"absolute","left":"20%"}}>
            <h3>Relatórios</h3>
            <br />
            <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger" style={{"width":"10%", "textAlign": "center"}}>
               Resumo
            </div>
            <div className="card">
                <div className="card-body"style={{"overflowY": "scroll","height":"300px"}}>
                    <div className="Container-table">
                    <table  className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Data</th>
                            <th scope="col">Open</th>
                            <th scope="col">High</th>
                            <th scope="col">Low</th>
                            <th scope="col">Close</th>
                            <th scope="col">Volume</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                items?.map((i, idx) => {
                                    return ( 
                                    <tr key={idx}>
                                        <th scope="row">{idx+1}</th>
                                        <td>{i.Date}</td>
                                        <td>{i.Open}</td>
                                        <td>{i.High}</td>
                                        <td>{i.Low}</td>
                                        <td>{i.Close}</td>
                                        <td>{i.Volume}</td>
                                        <td>{getStatus(i.Volume)}</td>
                                    </tr>
                                    )
                                })
                            }

                    </tbody>
                </table>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Relatorio