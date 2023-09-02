import axios from "axios";
const url="http://localhost:8082/API/1.0/Inscripcion/estudiantes"
export const guardarEstudianteFachada=async (estudiante)=>{
    await guardarEstudiante(estudiante)
}
const guardarEstudiante=async (estudiante)=>{
    const headers={
        "Authorization":"Bearer "+estudiante.token
    }
    axios.post(url,estudiante,{headers:headers}).then(r=>r.data)
}


export const getAllEstudiantesFachada=async (token)=>{
   return await getAllEstudiantes(token)
}
const getAllEstudiantes=async (token)=>{
    const headers={
        "Authorization":"Bearer "+token
    }
   return axios.get(url,{headers:headers}).then(r=>r.data)
}
