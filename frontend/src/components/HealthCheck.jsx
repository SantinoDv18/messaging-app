import { useState, useEffect } from 'react';
import api from '../api/axiosConfig';

function HealthCheck() {
    const [status, setStatus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHealthStatus = async () => {
            try {
            
                const response = await api.get('/health');
                setStatus(response.data);
                
            } catch (err) {
            
                setError('Error fetching health status');
            
            } finally {
            
                setLoading(false);
            
            }   
        };

        fetchHealthStatus();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) {
        return (
        <div style={{
                    display : 'flex', 
                    alignItems : 'center', 
                    gap : '10px'
                    }}>

            <h2>Backend Health Status: </h2>
            
            <h2 style={{ color: 'red' }}>{error}</h2>
        </div>
        );
    };

    return (
        <div style={{
                    display : 'flex', 
                    alignItems : 'center', 
                    gap : '10px'
                    }}>

            <h2>Backend Health Status: </h2>
            
            <h2 style={{ color: 'green' }}>{status.status}</h2>
        </div>
        );
}

export default HealthCheck;
