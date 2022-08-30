import axios from "axios"
import { Base_url , headers} from "./index"

export const deletedTrip = (tripId) => {
    
    axios
    .delete(`${Base_url}trips/${tripId}`,headers)
    .then(() => {
        alert("Viagem apagada com sucesso!")
    })
    .catch((err) => {
        alert(err.message)
    })
}