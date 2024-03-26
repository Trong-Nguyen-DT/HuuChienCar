import { useState } from "react";
import { getAllHistoryByCustomer } from "../../services/UserService";
import { toast } from "react-toastify";
import { Button, Modal, Table } from "react-bootstrap";

const HistoryCustomer = ({ customer }) => {

    const [historyByCustomer, setHistoryByCustomer] = useState([]);
    const [revenue, setRevenue] = useState(null);
    const [showModalHistory, setShowModalHistory] = useState(false);

    const showModalHistoryByCustomer = () => {
        getAllHistoryByCustomers(customer.id);
        setShowModalHistory(true);
    };

    const handleCloseOrderModal = () => {
        setShowModalHistory(false);
    };

    const getAllHistoryByCustomers = async (id) => {
        try {
            const response = await getAllHistoryByCustomer(localStorage.getItem("jwtToken"), id);
            if (response.data) {
                setHistoryByCustomer(response.data.histories);
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
        <>
        <button onClick={showModalHistoryByCustomer}>
                <i className="uil uil-history" style={{ fontSize: '24pt' }}></i>
            </button>
            <Modal show={showModalHistory} onHide={handleCloseOrderModal} centered>
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
                        {historyByCustomer.map((item, index) => (
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
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
     );
}

export default HistoryCustomer;