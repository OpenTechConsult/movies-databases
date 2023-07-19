import { getAll } from "./model.js";


export async function listAction(request, response) {
    const data = await getAll();
    response.send(data);
}
