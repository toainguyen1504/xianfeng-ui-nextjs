import { Form, Input, Button, notification, Alert } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { AiOutlineNotification } from "react-icons/ai";
import { FieldContactFormData } from "./types";

const ContactForm = () => {
  const isUpdating = true;

  const onFinish = (values: FieldContactFormData) => {
    if (isUpdating) {
      notification.info({
        message: "Functionality Update",
        description:
          "This form is currently being updated. For immediate assistance, please contact us via Zalo or WeChat!",
      });
    } else {
      console.log("Success:", values);
      notification.success({
        message: "Submit Successful",
        description: "Your form has been submitted successfully.",
      });
    }
  };

  const onFinishFailed = (
    errorInfo: ValidateErrorEntity<FieldContactFormData>
  ) => {
    if (!isUpdating) {
      console.log("Failed:", errorInfo);
      notification.error({
        message: "Submit Failed",
        description: "Please check the form for errors and try again.",
      });
    }
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
        {isUpdating && (
          <Alert
            message={
              <div className="flex justify-center">
                <div className="flex items-center justify-center font-medium">
                  <span className="mr-2">
                    <AiOutlineNotification className="h-5 w-5" />
                  </span>
                  <span>Notice</span>
                </div>
              </div>
            }
            description="This form is currently being updated. For immediate assistance, please contact us via Zalo or WeChat!"
            type="info"
            showIcon={false}
            className="mb-4"
          />
        )}
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
            <Input disabled={isUpdating} />
          </Form.Item>

          <Form.Item
            label="Mail"
            name="mail"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input disabled={isUpdating} />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
              {
                pattern: /^[+\d]?(?:[\d-.\s()]*)$/,
                message: "Please enter a valid phone number!",
              },
            ]}
          >
            <Input disabled={isUpdating} />
          </Form.Item>

          <Form.Item label="Company" name="company">
            <Input disabled={isUpdating} />
          </Form.Item>

          <Form.Item label="Website" name="website">
            <Input disabled={isUpdating} />
          </Form.Item>

          <Form.Item label="Information" name="information">
            <Input.TextArea
              placeholder="Please leave a message here..."
              rows={4}
              disabled={isUpdating}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full md:w-auto bg-primary px-10"
              disabled={isUpdating}
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
