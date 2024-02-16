import axios from "axios";

const consultarEstudainte = (id) => {
    const data = axios.get(`http://localhost:8082/API/Matricula/v1.0/estudiantes/self/${id}`).then(r => r.data)
    console.log(data);
    return data;

}

const insertarEstudainte = (body) => {

    axios.post("http://localhost:8082/API/Matricula/v1.0/estudiantes", body).then(r => r.data);
    console.log(body)
}

const actualizarEstudiante = (id, body) => {
    const data = axios.put(`http://localhost:8082/API/Matricula/v1.0/estudiantes/${id}`, body).then(r => r.data);
    console.log(data)

}

const eliminarEstudiante = (id)=>{
    const data =   axios.delete(`http://localhost:8082/API/Matricula/v1.0/estudiantes/${id}`).then(r => r.data);
    console.log(data)
}


export const eliminarFachada = async(id) =>{
    return await eliminarEstudiante(id);

}

export const consultarEstudainteFachada = async (id) => {
    return await consultarEstudainte(id)

}

export const insertarFachada = async (body) => {
    await insertarEstudainte(body);
}


export const actualizarFachadaEstudiante = async (id, body) => {
    return await actualizarEstudiante(id, body);
}