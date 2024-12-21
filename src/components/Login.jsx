import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({ email: "", password: "" }) 
    const [formEnviado, setFormEnviado] = useState(false) 

  // verificamos los datos antes de enviar el form
  const validarDatos = (e) => {
    e.preventDefault()

    let validar = {
      email: "",
      password: ""
     
    }

    // Validacion email
    if (!email.trim()) {
      validar.email = "Todos los campos son obligatorios"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validar.email = "El email no es válido."
    }

    // Validacion contraseña
    if (!password.trim()) {
      validar.password = "Todos los campos son obligatorios"
    } else if (password.length < 6) {
      validar.password = "La contraseña debe tener al menos 6 caracteres"
    }


    // Actualiza el estado de errores
    setError(validar)

    // Comprueba si hay errores
    const sinErrores = !validar.email && !validar.password 

    if (sinErrores) {
      setFormEnviado(true)
    } else {
      setFormEnviado(false)
    }
  };

return (
    <Form onSubmit={validarDatos} noValidate>
      {formEnviado && (
        <p style={{ color: "green" }}>Formulario enviado con éxito</p>
      ) }

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Ingresa tu email"
          required
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Ingresa tu contraseña"
          required
        />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}
      </Form.Group>
         <div className="d-flex justify-content-center">  
         <Button variant="dark" type="submit">Enviar</Button>
         </div>
    </Form>
  )
}

export default Login

