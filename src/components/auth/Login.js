import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/Drifting-Apart-logo-fixed.png"
import "./Login.css"


export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    // The user id is saved under the key drifting_user in session Storage. Change below if needed!
                    sessionStorage.setItem("drifting_user", exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
            <nav className="nav_flex">
                <img className="logo" src={logo} alt="Drifting Apart Logo" />
            </nav>
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <section className="form--css">
                <form className="form--login" onSubmit={handleLogin}>
                    <img className="logo-login" src={logo} alt="Drifting Apart Logo" />
                    {/* <h2>Please sign in below</h2> */}
                    <fieldset className="email">
                        <label htmlFor="inputEmail"> </label>
                        <input type="email"
                            id="email"
                            className="form-control"
                            placeholder="Input your email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />
                    </fieldset>
                    <fieldset className="wrap">
                        <button className="button--login" type="submit">
                            Sign in
                        </button>
                    </fieldset>
                    <section className="link--register">
                        <Link to="/register">Register for an account</Link>
                    </section>
                </form>
            </section>
        </main>
    )
}