import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import mockData from './MockData';
import Formulario from './Formulario';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 130 },
  { field: 'precio', headerName: 'Precio', width: 130 },
  { field: 'categoria', headerName: 'Categoria', width: 90 },
];

function App() {
  const [rows, setRows] = useState(mockData)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(mockData)
      setLoading(false)
    }, 1000); 
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress /> 
      </Box>
    );
  }

  return (
    <>
      <Paper sx={{ height: 400, width: '50%', display: 'flex', justifyContent: 'center', margin: 'auto' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
      <Formulario rows={rows} setRows={setRows} />
 
    </>
  );
}

export default App;
