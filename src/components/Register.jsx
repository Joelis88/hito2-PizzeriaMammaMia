import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [pwOk, setPwOk] = useState("")
  const [error, setError] = useState({ email: "", password: "", pwOk: "" }) // empiezan sin errores
  const [formEnviado, setFormEnviado] = useState(false) // indica si el formulario fue enviado

  // Se usa para verificar los datos antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault()

    let validar = {
      email: "",
      password: "",
      pwOk: "",
    };

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

    // Validacion contraseña iguales
    if (!pwOk.trim()) {
      validar.pwOk = "Todos los campos son obligatorios"
    } else if (password !== pwOk) {
      validar.pwOk = "Las contraseñas no coinciden"
    }

    // Actualiza el estado de errores
    setError(validar)

    // Comprueba si hay errores
    const sinErrores = !validar.email && !validar.password && !validar.pwOk

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

      <Form.Group>
        <Form.Label>Verificar Password</Form.Label>
        <Form.Control
          type="password"
          name="passwordOk"
          onChange={(e) => setPwOk(e.target.value)}
          value={pwOk}
          placeholder="Repite tu contraseña"
          required
        />
        {error.pwOk && <p style={{ color: "red" }}>{error.pwOk}</p>}
      </Form.Group>
      <div className="d-flex justify-content-center">  
         <Button variant="dark" type="submit">Enviar</Button>
      </div>
    </Form>
  )
}

export default Register
