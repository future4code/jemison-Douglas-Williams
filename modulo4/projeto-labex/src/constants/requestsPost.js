import axios from "axios"
import {BASE_URL} from "../constants/urls"
import { goToLoginPage } from "../routes/coordinator"


export const sendApplication = (body, id, clear) => {

    axios
      .post(`${BASE_URL}/trips/${id}/apply`, body)
      .then((response) => {
        alert("Aplicação enviada com sucesso!");

        clear();
      })
      .catch((error) => {
        alert("Erro!");
      });

};



export const createTrip = (body, functionClear, getTripsData) =>{
  const header = {
      headers: {
          auth: localStorage.getItem("token")
      }
  }

  axios
  .post(`${BASE_URL}/trips`, body, header)
  .then(() => {
      alert("Viagem criada com sucesso!")
      functionClear()
      getTripsData()
  })
  .catch((err) =>{
      alert("Erro na conexão! Tente novamente")
  })

}



export const lagout = (navigate) =>{
    localStorage.removeItem("token")
    goToLoginPage(navigate)
}// função desloga usuario