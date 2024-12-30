import { Form, Input, Button } from "antd";
import { FieldContactFormData } from "./types";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
const ContactForm = () => {
  const onFinish = (values: FieldContactFormData) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (
    errorInfo: ValidateErrorEntity<FieldContactFormData>
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col md:flex-row lg:px-12 my-10">
      <div className="w-full md:w-2/5 lg:w-3/10 bg-gray-100 p-8 lg:p-12 flex flex-col justify-center items-center text-center space-y-4">
        <h1 className="text-3xl font-bold">Contact us for better results</h1>
        <div className="w-0.5 h-12 bg-black"></div>
        <div>
          <p className="text-lg mb-2">service@xianfeng.vn</p>
          <p className="text-lg">Ho Chi Minh</p>
        </div>
      </div>

      <div className="w-full md:w-3/5 lg:w-7/10 bg-white p-8 lg:p-12 flex justify-center items-center">
        <Form
          name="contact"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="w-full"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mail"
            name="mail"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Company" name="company">
            <Input />
          </Form.Item>

          <Form.Item label="Website" name="website">
            <Input />
          </Form.Item>

          <Form.Item label="Information" name="information">
            <Input.TextArea
              placeholder="Please leave a message here..."
              rows={4}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full md:w-auto bg-primary px-10"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
