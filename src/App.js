import React, { useState } from 'react';
import * as yup from 'yup';
import './App.css';


function App() {

  //formData guarda la informacion que se ingresa en los formularios
  //serFormData actualiza la nueva informacion que se agrega
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    cedula: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const schema = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio'),
    apellido: yup.string().required('El apellido es obligatorio'),
    email: yup.string().email('Ingrese un correo electrónico válido').required('El correo es obligatorio'),
    cedula: yup.string().test('cedula', 'Cédula no válida', function (value) {
      // La función de validación personalizada para la cédula
     // return validarCedula(value);
    }).required('Agregar la cedula es obligatorio'),
  });



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(formData, { abortEarly: false });
      // Si la validación es exitosa, enviar los datos al servidor
      //sendFormDataToServer();
      console.log('Enviando datos')
    } catch (error) {
      // Manejar errores de validación
      console.error('Errores de validación:', error.errors);
  };

    const formData = {
      name: e.target.name.value,
      apellido: e.target.apellido.value,
      email: e.target.email.value,
      cedula: e.target.cedula.value,
    };
  //console.log('Formulario enviado:', formData);
    // Agregar lógica para enviar los datos a un servidor
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Cédula:
          <input
            type="text"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;

//dudas
//porque si pongo arriba del form me aparecen datos como mi nobre, ,mail mio y daranega?
