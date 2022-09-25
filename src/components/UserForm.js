import Input from './Input'
import useForm from '../hooks/useForm'
import Button from './Button'

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useForm({ 
    name: '',
    lastName: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(form);
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
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
  );
}

export default UserForm;