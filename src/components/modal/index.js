import React, { useState } from 'react';
import instance from '../../http'
import Swal from 'sweetalert2'

function ModalPolitica () {
    const [otimo, setOtimo] = useState(0)
    const [critico, setCritico] = useState(0)

    const fecharModal = () => {
        document.getElementById("modalPolitica").classList.add("hide");
        document.getElementById("modalPolitica").style.display = "none";
    }

    const Otimo = (event) => { 
        setOtimo(event.target.value)
    }

    const Critico = (event) => { 
        setCritico(event.target.value)
    }    

    const salvar = async () => {
        Swal.showLoading()
        await instance.post('/policy',  {otimo, critico}).then(res=>{
            Swal.close()
            Swal.fire({
                icon: 'success',
                title: 'Salvo!',
              })            
            console.log(res)
            fecharModal()
        })
    }

    return (
    <div className="modal fade" id="modalPolitica" tabIndex="-1" aria-labelledby="modalPoliticaLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="modalPoliticaLabel">Cadastrar</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ () => fecharModal() }></button>
            </div>
            <div className="modal-body">
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Ótimo
                    </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword" value={otimo} onChange={ Otimo } />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Crítico
                    </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword" value={critico} onChange={ Critico } />
                    </div>
                </div>                
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={ () => fecharModal() }>
                    Cancelar
                </button>
                <button type="button" className="btn btn-primary" onClick={ () => salvar()}>
                    Salvar
                </button>
            </div>
            </div>
        </div>
    </div>        
    )
}

export default ModalPolitica