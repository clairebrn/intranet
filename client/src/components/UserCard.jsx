import React from "react";
import style from "../styles/UserCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";

const UserCard = () => {
  return (
    <div>
      {/* carte user */}
      <div className={style.card_container}>
        <p className={style.animated_font}>
          <span>John</span> Doe
        </p>
        <div>
          <img src="https://picsum.photos/100/100" alt="" />
        </div>
        <p>
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Paris, France
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
          john.doe@email.com
        </p>

        <p>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 01 02 03 04 05
        </p>
        <p>
          <FontAwesomeIcon icon={faBirthdayCake}></FontAwesomeIcon> 17 janvier
          (35ans)
        </p>
      </div>
    </div>
  );
};

export default UserCard;
