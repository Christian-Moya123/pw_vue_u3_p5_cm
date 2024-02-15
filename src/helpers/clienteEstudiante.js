import axios from "axios";

const consultarEstudainte = (id) => {
    const data = axios.get(`http://localhost:8082/API/Matricula/v1.0/estudiantes/self/${id}`).then(r => r.data)
    console.log(data);
    return data;

}

const insertarEstudainte = (body)=>{

    axios.post("http://localhost:8082/API/Matricula/v1.0/estudiantes", body).then(r => r.data);
    console.log(body)
}

export const consultarEstudainteFachada = async (id) => {
    return await consultarEstudainte(id)

}

export const insertarFachada = async (body) =>{
    await insertarEstudainte(body);
}