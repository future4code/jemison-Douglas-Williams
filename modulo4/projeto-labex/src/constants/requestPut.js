import axios from "axios"

import {BASE_URL} from "../constants/urls"

export const decideCandidate = (id, candidateId, booleano, getTripsDetail) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    };

    const body = {
        approve: booleano,
    };

    axios.put(`${BASE_URL}/trips/${id}/candidates/${candidateId}/decide`,
        body,
        header
    )
        .then(() => {
         
            booleano ?
            window.confirm("Deseja realmente Aprovar esse candidato?")
            : window.confirm("Deseja realmente excluir esse candidato?")

            getTripsDetail();
        })
        .catch((err) => {
            alert(err.message);
        });
};
