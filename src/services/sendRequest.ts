import { Employee } from "../components/EmployeesList";
import { GET, POST, PUT, DELETE, BASE_URL } from "../utils/constants";

interface Action {
  method: typeof GET | typeof POST | typeof PUT | typeof DELETE;
  url: string;
}

interface ActionsMap {
  [actionName: string]: Action;
}

interface Options {
  method: string;
  headers?: HeadersInit;
  body?: string;
}
interface Props {
  callback: (data: Employee[]) => void;
  requestObject: RequestObject;
  setError?: (error: string) => void;
  setSuccess?: (success: string) => void;
}
export interface RequestObject {
  action: string;
  id?: string;
  headers?: HeadersInit;
  body?: string;
  params?: string;
}

const sendRequest = ({
  requestObject,
  callback: setData,
  setError,
  setSuccess,
}: Props) => {
  const { action, body, headers, id, params } = requestObject;
  if (!action) return;

  const actionsMap: ActionsMap = {
    "Get many": {
      method: GET,
      url: BASE_URL + (params || ""),
    },
    "Get single": {
      method: GET,
      url: BASE_URL + id,
    },
    Add: {
      method: POST,
      url: BASE_URL,
    },
    Update: {
      method: PUT,
      url: BASE_URL + id,
    },
    Delete: {
      method: DELETE,
      url: BASE_URL + id,
    },
  };
  const method = actionsMap[action].method;
  const url = actionsMap[action].url;
  const options: Options = { method };
  options.headers = headers || { "Content-Type": "application/json" };
  if (body) options.body = body;
  console.log(url, options);
  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (!(data.data instanceof Array))
        return setError && setError(data?.msg || "Error");
      const success =
        data?.msg && data?.data.length > 0
          ? data.msg
          : data?.data.length === 0
          ? "There is no match"
          : "Success";
      setSuccess && setSuccess(success);
      setData(data?.data || []);
    });
};
export default sendRequest;
