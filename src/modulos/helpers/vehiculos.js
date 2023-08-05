import axios from "axios";

export const todosVehiculoFachada=async ()=>{
    return await todosVehiculo()
}

export const buscarVehiculosPlacaFachada=async ()=>{
    return await buscarVehiculosPlaca()
}

const todosVehiculo=async ()=>{
    const list=await axios.put('http://localhost:8081/API/V1.0/vehiculo/vehiculos/todos').then(r=>r.data)
    return list
}

const buscarVehiculosPlaca=async (placa)=>{
    const vehi=await axios.put(`http://localhost:8081/API/V1.0/vehiculo/vehiculos/${placa}`).then(r=>r.data)
    return vehi
}