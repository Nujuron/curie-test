import { Table, Tag, Button, Space } from 'antd';
import { Link } from 'react-router-dom';


const dataSource = [
    {
        key: '1',
        title: 'Work',
        status: 'pendiente',
        priority: 'Baja',
        endDate: '21/4/21'
    },
    {
        key: '2',
        title: 'More work',
        status: 'realizada',
        priority: 'Baja',
        endDate: '21/4/21'
    },
    {
        key: '3',
        title: 'Work 3.0',
        status: 'pendiente',
        priority: 'Baja',
        endDate: '21/4/21'
    },
    {
        key: '4',
        title: 'Work Revenge',
        status: 'pendiente',
        priority: 'Baja',
        endDate: '21/4/21'
    },
    {
        key: '5',
        title: 'Re:Work',
        status: 'pendiente',
        priority: 'Baja',
        endDate: '21/4/21'
    },
];

const columns = [
    {
        title: 'Título',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Estado',
        key: 'status',
        dataIndex: 'status',
        render: (status: string) => (
            <Tag color={status === 'pendiente' ? 'gold' : 'green'} key={status}>
                {status.toUpperCase()}
            </Tag>
        ),
    },
    {
        title: 'Prioridad',
        dataIndex: 'priority',
        key: 'priority',
    },
    {
        title: 'Fecha de finalización',
        dataIndex: 'endDate',
        key: 'endDate',
    },
];
const TaskTable = () => {
    return (
        <Space>
            <Button type="primary" size="large">
                <Link to='/new'>
                    Add task
                </Link>
            </Button>
            
            <Table dataSource={dataSource} columns={columns} />
        </Space>
    );
};

export default TaskTable;