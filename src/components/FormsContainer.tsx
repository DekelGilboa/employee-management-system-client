import { useContext, useEffect, useState } from "react";
import appContext from "../context/appContext";
import { Employee } from "./EmployeesList";
import GetSingleForm from "./actionsForms/GetSingleForm";
import DeleteForm from "./actionsForms/DeleteForm";
import AddForm from "./actionsForms/AddForm";
import UpdateForm from "./actionsForms/UpdateForm";
import GetManyForm from "./actionsForms/GetManyForm";
import sendRequest, { RequestObject } from "../services/sendRequest";

interface Props {
  setListToRender: (list: Employee[]) => void;
}

const FormsContainer = ({ setListToRender }: Props) => {

  const { selectedAction } = useContext(appContext);
  const [requestObject, setRequestObject] = useState<RequestObject>({
    action: ""
  });
  useEffect(() => {
    sendRequest({ requestObject, callback: setListToRender });
  }, [requestObject, setListToRender]);
  
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
