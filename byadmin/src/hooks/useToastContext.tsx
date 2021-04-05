import { useCallback } from "react";
import { useToasts } from "react-toast-notifications";

export const useToastContext = () => {
  const { addToast } = useToasts();
  const showSuccessToast = useCallback((children: string) => {
    addToast(children, {
      appearance: "success",
      autoDismiss: true,
    });
  }, []);
  const showErrorToast = useCallback((children: string) => {
    addToast(children, {
      appearance: "error",
      autoDismiss: true,
    });
  }, []);
  return {
    showSuccessToast,
    showErrorToast,
  };
};
