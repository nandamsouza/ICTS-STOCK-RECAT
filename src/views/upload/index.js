import React, { useState } from 'react';
import instance from '../../http';
import Swal from 'sweetalert2'

function Upload () { 
    const [file, setFile] = useState('')
    function handleChange(event) {
        setFile(event.target.files[0])
    }

    const enviar = async () => {
        Swal.showLoading()
        const formData = new FormData();
        formData.append("file", file);
        try {
          const response = await instance.post('/file', formData , {
            headers: { "Content-Type": "multipart/form-data" },
          });
          Swal.close()
          Swal.fire({
              icon: 'success',
              title: 'Salvo!',
            })           
          console.log(response)
        } catch(error) {
          Swal.close()
          Swal.fire({
              icon: 'error',
              title: error,
            }) 
          console.log(error)
        }
    }
    return (
        <div className="Container text-center">
            <h3 style={{"color":"grey"}}>Upload do Arquivo</h3>
            <p>Estoque Principal</p>
               <input type="file" id='div-upload' onChange={handleChange}></input>
            <br/>
            <button type="button" className="btn btn-light btn-sm" >Cancelar</button>
            <button type="button" className="btn btn-danger btn-sm" onClick={enviar}>Enviar Arquivos</button>
        </div>
    )
}

export default Upload