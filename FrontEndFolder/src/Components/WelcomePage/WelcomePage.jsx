import securityImage from "../../assets/otp-security.png" 

function WelcomePage() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <h1>Welcome To Our page</h1>
     <img src={securityImage} alt="image" style={{width:"50vw"}} />
    </div>
  )
}

export default WelcomePage
