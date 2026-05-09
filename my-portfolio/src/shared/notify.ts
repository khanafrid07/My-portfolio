import { toast } from "react-hot-toast";

const notifySuccess = (msg: string) => { toast.success(msg) }
const notifyError = (msg: string) => { toast.error(msg) }

export { notifyError, notifySuccess }