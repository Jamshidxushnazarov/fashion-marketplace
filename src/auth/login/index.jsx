import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../tools/firebase";
import { Form, Input, Button } from "antd";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const { email, password } = values;
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Tizimga muvaffaqiyatli kirdingiz!");
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-md'>
                <h2 className='text-2xl font-semibold text-center mb-6 text-gray-800'>
                    Tizimga kirish
                </h2>

                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item
                        label={
                            <span className='text-sm font-medium text-gray-700'>
                                Email
                            </span>
                        }
                        name='email'
                        rules={[
                            { required: true, message: "Emailni kiriting!" },
                            {
                                type: "email",
                                message: "To‘g‘ri email kiriting!",
                            },
                        ]}>
                        <Input
                            placeholder='Email'
                            className='h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </Form.Item>

                    <Form.Item
                        label={
                            <span className='text-sm font-medium text-gray-700'>
                                Parol
                            </span>
                        }
                        name='password'
                        rules={[
                            { required: true, message: "Parolni kiriting!" },
                        ]}>
                        <Input.Password
                            placeholder='Parol'
                            className='h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            loading={loading}
                            className='w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300'>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
