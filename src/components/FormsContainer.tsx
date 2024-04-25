import { useContext, useEffect, useState } from "react";
import appContext from "../context/appContext";
import { Employee } from "./EmployeesList";
import GetSingleForm from "./actionsForms/GetSingleForm";
import DeleteForm from "./actionsForms/DeleteForm";
import AddForm from "./actionsForms/AddForm";
import UpdateForm from "./actionsForms/UpdateForm";
import GetManyForm from "./actionsForms/GetManyForm";
import sendRequest, { RequestObject } from "../services/sendRequest";
import { useToast } from "@chakra-ui/react";

interface Props {
  setListToRender: (list: Employee[]) => void;
}

const FormsContainer = ({ setListToRender }: Props) => {
  const { selectedAction } = useContext(appContext);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const toast = useToast();
  const [requestObject, setRequestObject] = useState<RequestObject>({
    action: "",
  });
  useEffect(() => {
    sendRequest({
      requestObject,
      callback: setListToRender,
      setError,
      setSuccess,
    });
  }, [requestObject, setListToRender]);
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setError("");
    }
    if (success) {
      toast({
        title: "Success",
        description: success,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setSuccess("");
    }
  }, [error, toast, requestObject, success]);
  return (
    <>
      {"Get single" === selectedAction && (
        <GetSingleForm setRequestObject={setRequestObject} />
      )}
      {"Delete" === selectedAction && (
        <DeleteForm setRequestObject={setRequestObject} />
      )}
      {"Add" === selectedAction && (
        <AddForm setRequestObject={setRequestObject} />
      )}
      {"Get many" === selectedAction && (
        <GetManyForm setRequestObject={setRequestObject} />
      )}
      {"Update" === selectedAction && (
        <UpdateForm setRequestObject={setRequestObject} />
      )}
    </>
  );
};

export default FormsContainer;
