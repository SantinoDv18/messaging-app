import { useState, useEffect } from 'react';
import api from '../api/axiosConfig';

// Componente que verifica el estado del backend (endpoint /health)
function HealthCheck() {

    // Estado para guardar la respuesta del backend
    const [status, setStatus] = useState([]);

    // Estado para controlar si está cargando
    const [loading, setLoading] = useState(true);

    // Estado para manejar errores
    const [error, setError] = useState(null);

    // useEffect se ejecuta cuando el componente se monta
    useEffect(() => {

        // Función async para hacer la petición al backend
        const fetchHealthStatus = async () => {
            try {
                // Petición GET a /health usando Axios
                const response = await api.get('/health');

                // Guardar respuesta en el estado
                setStatus(response.data);

            } catch (err) {

                // Si ocurre un error, guardar mensaje
                setError('Error fetching health status');

            } finally {

                // Finaliza la carga (tanto éxito como error)
                setLoading(false);
            }   
        };

        // Ejecutar la función
        fetchHealthStatus();

    }, []); // [] → se ejecuta solo una vez al montar el componente


    // Mientras carga
    if (loading) return <p>Loading...</p>;

    // Si hay error
    if (error) {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <h2>Backend Health Status: </h2>
                <h2 style={{ color: 'red' }}>{error}</h2>
            </div>
        );
    }

    // Si todo sale bien
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        }}>
            <h2>Backend Health Status: </h2>
            <h2 style={{ color: 'green' }}>
                {status.status}
            </h2>
        </div>
    );
}

// Exportación del componente
export default HealthCheck;