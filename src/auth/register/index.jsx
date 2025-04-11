import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../tools/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Form, Input, Button } from "antd";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        const { firstname, lastname, email, password } = values;
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                firstname,
                lastname,
                email,
            });

            toast.success("Ro‘yxatdan muvaffaqiyatli o‘tdingiz!");
            navigate("/login");
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
                    Ro‘yxatdan o‘tish
                </h2>

                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item
                        label={
                            <span className='text-sm font-medium text-gray-700'>
                                Ismingiz
                            </span>
                        }
                        name='firstname'
                        rules={[
                            {
                                required: true,
                                message: "Iltimos, ismingizni kiriting!",
                            },
                        ]}>
                        <Input
                            placeholder='Ismingiz'
                            className='h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </Form.Item>

                    <Form.Item
                        label={
                            <span className='text-sm font-medium text-gray-700'>
                                Familiyangiz
                            </span>
                        }
                        name='lastname'
                        rules={[
                            {
                                required: true,
                                message: "Iltimos, familiyangizni kiriting!",
                            },
                        ]}>
                        <Input
                            placeholder='Familiyangiz'
                            className='h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </Form.Item>

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
                            Ro‘yxatdan o‘tish
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Register;
