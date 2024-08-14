import React from "react";

function Welcome() {
    return (
        <p>Welcome</p>
    )
}

export const WelcomeScreen = React.memo(Welcome);