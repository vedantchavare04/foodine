import React from "react";

function Login(props){
    return <div class={`logpage ${props.blur?"blursome":""}`} >
<form action="" class="form">
    <p>
    Sign in to continue
    </p>
    <input type="String" placeholder="Name" name="name"/>
    <input type="Password" placeholder="pasword" name="password"/>
    <button class="oauthButton">
                    Continue
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
                </button>
</form>
    </div>
}

export default Login;