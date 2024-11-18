import { useState } from "react"
import { TextField, Button, Box, Typography } from '@mui/material';

function Formulario({rows, setRows}) {
    const [formData, setFormData] = useState({
        id: '',
        nombre: '',
        precio: '',
        categoria: '',
      });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newRow = { ...formData, id: rows.length + 1 };
        setRows((prev) => [...prev, newRow]);
        setFormData({
          id: '',
          nombre: '',
          precio: '',
          categoria: '',
        });
      };
  return (
      <>
        <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={handleSubmit}>
        <Typography variant="h4" align="center">
            Formulario
        </Typography>
          <TextField
            label="Nombre"
            variant="outlined"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Precio"
            variant="outlined"
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Categoría"
            variant="outlined"
            name="categoria"
            value={formData.categoria}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" type="submit"  sx={{marginTop: 3, display: 'block', marginLeft: 'auto',marginRight: 'auto',}}>Agregar</Button>
        </form>
      </Box>
      </>
  )
}

export default Formulario