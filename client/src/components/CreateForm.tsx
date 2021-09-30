import { Form, Input, Button, Select, DatePicker, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 6 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 6 },
};

const CreateForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div style={{marginTop: '20px'}}>
        <Form {...layout} layout="vertical" form={form} name="new-task" onFinish={onFinish}>
            <Form.Item name="Título" label="Título" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="Estado" label="Estado" rules={[{ required: true }]}>
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    <Option value="pending">Pendiente</Option>
                    <Option value="done">Realizada</Option>
                    <Option value="cancelled">Cancelada</Option>
                </Select>
            </Form.Item>
            <Form.Item name="Prioridad" label="Prioridad" rules={[{ required: true }]}>
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    <Option value="high">Alta</Option>
                    <Option value="medium">Media</Option>
                    <Option value="low">Baja</Option>
                </Select>
            </Form.Item>
            <Form.Item name="Fecha" label="Fecha de finalización" rules={[{ required: true }]}>
                <DatePicker />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Space>
                    <Button htmlType="button">
                        <Link to="/">
                            Cancel
                        </Link>
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Space>
            </Form.Item>
        </Form>
        </div>
    );
};

export default CreateForm;