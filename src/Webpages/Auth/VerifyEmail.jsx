import React from 'react'

function VerifyEmail() {
    return (
        <div>
                <p>Hello,</p>
                <p>Thank you for signing up for our service. To complete your registration, please click the "Verify" button below to verify your email address:</p> 
                <div > <a href="{{ verification_link }}" >Verify</a> </div> <p>If you did not create an account or did not request this verification, please disregard this email.</p>
                <p>Thank you for choosing our service!</p>
                <p>Best regards,<br />Superstar</p>
        </div>
    )
}

export default VerifyEmail