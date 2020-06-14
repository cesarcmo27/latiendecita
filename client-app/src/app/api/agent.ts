import axios, { AxiosResponse } from 'axios';
import { IEmpleado } from './../models/empleado';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response:AxiosResponse) => (response.data);

const request = {
    get: (url: string) =>axios.get(url).then(responseBody),
    post: (url:string , body:{}) => axios.post(url,body).then(responseBody),
    put: (url:string , body:{}) => axios.put(url,body).then(responseBody),
    del: (url: string) =>axios.delete(url).then(responseBody)
}


const Empleados = {
    list   : () : Promise<IEmpleado[]> => request.get('/empleado'),
    details: (id: string)         => request.get(`/empleado/${id}`),
    create : (empleado: IEmpleado)=> request.post('/empleado',empleado),
    update : (empleado: IEmpleado)=> request.put(`/empleado/${empleado.id}`,empleado),
    delete :  (id: string)        => request.del(`/empleado/${id}`)
}


export default {
    Empleados
}