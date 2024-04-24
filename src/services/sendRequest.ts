import { Employee } from "../components/EmployeesList";

interface Action {
  method: "GET" | "POST" | "PUT" | "DELETE";
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
}
export interface RequestObject {
  action: string;
  id?: string;
  headers?: HeadersInit;
  body?: string;
  params?: string;
}

const sendRequest = ({ requestObject, callback: setData }: Props) => {
  const { action, body, headers, id, params } = requestObject;
  const baseUrl = "http://localhost:3000/api/v1/employees/";
  const actionsMap: ActionsMap = {
    "Get many": {
      method: "GET",
      url: baseUrl + (params || ""),
    },
    "Get Single": {
      method: "GET",
      url: baseUrl + id,
    },
    Add: {
      method: "POST",
      url: baseUrl,
    },
    Update: {
      method: "PUT",
      url: baseUrl + id,
    },
    Delete: {
      method: "DELETE",
      url: baseUrl + id,
    },
  };
  const method = actionsMap[action].method;
  const url = actionsMap[action].url;
  const options: Options = { method };
  options.headers = headers || { "Content-Type": "application/json" };
  if (body) options.body = body;

  console.log("url: ", url);
  console.log("options: ", options);
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      const list = data.data instanceof Array ? data.data : [];
      setData(list);
    });
};
export default sendRequest;
