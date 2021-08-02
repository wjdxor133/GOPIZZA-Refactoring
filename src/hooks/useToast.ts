import { toast as Toast, ToastPosition } from "react-toastify";

function useToast() {
  const toast = (
    msg: string,
    position: ToastPosition,
    autoClose: number,
    time: number
  ) => {
    setTimeout(() => {
      Toast(msg, {
        position,
        autoClose,
      });
    }, time);
  };

  return { toast };
}

export default useToast;
