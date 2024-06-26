import { useState } from "react";
import { getAllHistoryByCar } from "../../services/UserService";
import { toast } from "react-toastify";
import { Button, Modal, Table } from "react-bootstrap";
import styles from './HistoryCar.module.css'

const HistoryCar = ({ car }) => {

    const [historyByCar, setHistoryByCar] = useState([]);
    const [revenue, setRevenue] = useState(null);
    const [showModalHistory, setShowModalHistory] = useState(false);

    const showModalHistoryByCar = () => {
        getAllHistoryByCars(car.id);
        setShowModalHistory(true);
    };

    const handleCloseOrderModal = () => {
        setShowModalHistory(false);
    };

    const getAllHistoryByCars = async (id) => {
        try {
            const response = await getAllHistoryByCar(localStorage.getItem("jwtToken"), id);
            if (response.data) {
                setHistoryByCar(response.data.histories);
                setRevenue(response.data.revenue)
            } else {
                toast.error('Không có dữ liệu trả về từ API. Vui lòng thử lại.');
            }
        } catch (error) {
            console.error('Error:', error);
            for (let i = 0; i < error.response.data.message.length; i++) {
                toast.error(error.response.data.message[i].defaultMessage + '. Vui lòng thử lại.');
            }
        }
    };


    return (
        <div className={styles.historyCar}>
            <button onClick={showModalHistoryByCar}>
                <i className="uil uil-history" style={{ fontSize: '24pt' }}></i>
            </button>
            <Modal className={styles.modalHistory} show={showModalHistory} onHide={handleCloseOrderModal} centered style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Xe</th>
                            <th>Tên khách hàng</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyByCar.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.carName}</td>
                                <td>{item.customerName}</td>
                                <td>{item.totalRevenue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseOrderModal}>
                    <i className="uil uil-lock" style={{ fontSize: '24pt' }}></i>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default HistoryCar;