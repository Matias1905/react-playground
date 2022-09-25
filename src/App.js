import { useState } from 'react'
import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
  const [users, setUsers] = useState([])
  const [form, handleChange, reset] = useForm({ 
    name: '',
    lastName: '',
    email: ''
  });

  const submit = e => {
    e.preventDefault()
    setUsers([
      ...users,
      form
    ]);
    reset();
  }

  return (
    <div style={{ marginTop: '15%'}}>
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            <Input 
              label="Nombre"
              placeholder="Nombre"
              name="name"
              value={form.name}
              onChange={handleChange}>
            </Input>
            <Input
              label="Apellido"
              placeholder="Apellido"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}>
            </Input>
            <Input
              label="Correo"
              placeholder="Correo"
              name="email"
              value={form.email}
              onChange={handleChange}>
            </Input>
            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
      <Card>
        <ul>
          {users.map((x, i) => 
            <li key={i}>{x.name} {x.lastName}: {x.email}</li>)}
        </ul>
      </Card>
    </Container>
    </div>
  );
}

export default App;
