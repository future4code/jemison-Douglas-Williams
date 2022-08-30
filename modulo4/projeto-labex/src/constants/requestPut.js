import axios from "axios"

import {Base_url} from "./index"

export const decideCandidate = (id, candidateId, booleano) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    };

    const body = {
        approve: booleano,
    };

    axios.put(`${Base_url}trips/${id}/candidates/${candidateId}/decide`,
        body,
        header
    )
        .then(() => {
         
            booleano ?
            window.confirm("Deseja realmente Aprovar esse candidato?")
            : window.confirm("Deseja realmente excluir esse candidato?")

        })
        .catch((err) => {
            alert(err.message);
        });
};
