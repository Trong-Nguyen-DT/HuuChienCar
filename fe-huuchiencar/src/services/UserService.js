import axios from "./customize-axios";

const getAllCustomer = async (accessToken) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.get('user/customers', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in getAllCustomer:', error);
        throw error;
    }
};


const createCustomer = async (accessToken, formData) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.post('user/customers', formData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in createCustomer:', error);
        throw error;
    }
};

const createOrder = async (accessToken, body) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.patch('user/cars', body, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in createCustomer:', error);
        throw error;
    }
};

const updateCustomer = async (accessToken, body) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.put('admin/customers', body, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in createCustomer:', error);
        throw error;
    }
};

const updateImage = async (accessToken, formData) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.patch('admin/customers', formData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data'
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in updateImage:', error);
        throw error;
    }
};


const deleteCustomer = async (accessToken, customerId) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.delete(`admin/customers/${customerId}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in createCustomer:', error);
        throw error;
    }
};

const getAllCar = async (accessToken) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.get('user/cars', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in getAllCar:', error);
        throw error;
    }
};

const createCar = async (accessToken, formData) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.post('user/cars', formData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in createCustomer:', error);
        throw error;
    }
};

const updateCar = async (accessToken, body) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.put('admin/cars', body, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in createCar:', error);
        throw error;
    }
};

const deleteCar = async (accessToken, carId) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.delete(`admin/cars/${carId}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in createCar:', error);
        throw error;
    }
};

const getInfoDashboards = async (accessToken, day, month, year) => {
    try {
        const response = await axios.get('admin/dashboard', {
            params: {
                year: year,
                month: month,
                day: day
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error calling getInfoDashboard API:', error);
        throw error;
    }
};

const getAllHistory = async (accessToken) => {
    try {
        const response = await axios.get('admin/history', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error calling getInfoDashboard API:', error);
        throw error;
    }
};

const getAllContract = async (accessToken) => {
    try {
        const response = await axios.get('user/contracts', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error calling getInfoDashboard API:', error);
        throw error;
    }
};

const getAllHistoryByCar = async (accessToken, carId) => {
    try {
        const response = await axios.get(`admin/history/car/${carId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error calling getInfoDashboard API:', error);
        throw error;
    }
};

const getAllHistoryByCustomer = async (accessToken, customerId) => {
    try {
        const response = await axios.get(`admin/history/customer/${customerId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error calling getInfoDashboard API:', error);
        throw error;
    }
};

const getAllPayouts = async (accessToken) => {
    try {
        const response = await axios.get('admin/payouts', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error calling getInfoDashboard API:', error);
    }
};

const createPayout= async (accessToken, body) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.post('admin/payouts', body, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in createCar:', error);
        throw error;
    }
};

const createContract = async (accessToken, formData) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.post('user/contracts', formData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in createContract:', error);
        throw error;
    }
};

const updateContract= async (accessToken, body) => {
    try {
        if (!accessToken) {
            throw new Error('Missing accessToken');
        }

        const response = await axios.put('admin/contracts', body, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error in createCar:', error);
        throw error;
    }
};



export { getAllCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    getAllCar,
    createCar,
    deleteCar,
    updateCar,
    getInfoDashboards,
    getAllHistory,
    createOrder,
    getAllContract,
    getAllHistoryByCar,
    getAllHistoryByCustomer,
    getAllPayouts,
    createContract,
    updateContract,
    createPayout,
    updateImage};
