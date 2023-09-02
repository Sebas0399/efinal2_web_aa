import axios from 'axios'
const url="http://localhost:8081/API/1.0/Autorizacion/tokens/simple"
export const obtenerTokenFachada=async (token)=>{
    return await obtenerToken(token)
}
const obtenerToken=async (token)=>{
    console.log(token)

    return axios.get(url+"/"+token.semilla+"/"+token.vigencia).then(r=>r.data)
}
