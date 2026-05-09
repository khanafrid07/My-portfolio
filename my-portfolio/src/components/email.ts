import emailjs from "@emailjs/browser";
import { notifySuccess } from "../shared/notify.js";

const sendMail = async (
    name: string,
    email: string,
    message: string
) => {
    try {
        await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
                from_name: name,
                from_email: email,
                message: message,
            },
            import.meta.env.VITE_PUBLIC_KEY
        );

        notifySuccess("Message Sent Successfully");

    } catch (err) {
        console.log(err);
    }
};

export default sendMail;