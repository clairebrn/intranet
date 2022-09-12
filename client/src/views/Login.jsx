import React from "react";
import style from "../styles/Login.module.css";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className={style.mainContainer}>
{
  /* <form action="">
  <div>
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" />
  </div>
  <div>
    <label htmlFor="passw">Password</label>
    <input type="text" name="passw" id="passw" />
  </div>
  <button type="submit">Login</button>
</form>; */
}
//     </div>
//   );
// };

// export default Login;

const Login = () => {
  return (
    <div className={style.body}>
      <div className={style.post}>
        <div className={style.post_img}>
          <img src="https://picsum.photos/400/200" alt="" />
        </div>

        <div className={style.post_info}>
          <h1 className={style.post_title}>Connexion</h1>

          <div className={style.post_form}>
            <form action="">
              <div className={style.post_label}>
                <label htmlFor="email">Login</label> <br />
                <input type="text" name="email" id="email" />
              </div>
              <div className={style.label}>
                <label htmlFor="passw">Mot de passe</label> <br />
                <input type="text" name="passw" id="passw" />
              </div>
              <button type="submit" className={style.loginBtn}>
                Connexion
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
