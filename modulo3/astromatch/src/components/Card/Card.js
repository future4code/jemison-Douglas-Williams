import React, { useState, useEffect } from "react";
import { CardContainer } from "./styled";
import {url, serviceHeaders} from "../../constants/index";
import axios from "axios";

function Card () {
    const [profileToChouse, setProfileToChouse] = useState([]);





    const getProfileToChoose = () => {
        axios
          .get(`${url}`, serviceHeaders)
          .then((response) => {
            setProfileToChouse(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      };

      useEffect(() => {
        getProfileToChoose();
      },[]);

    return (
        <CardContainer>
            {profileToChouse.map((profile) => {
                return (
                    <div key={profile.id}>
                        <img src={profile.photo} alt="Foto de perfil" />
                        <p>{profile.name}</p>
                        <p>{profile.age}</p>
                    </div>
                );  
            }
            )}
            
        </CardContainer>
    )
}

export default Card;