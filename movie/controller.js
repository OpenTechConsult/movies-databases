import { getAll, remove } from './model.js';
import { render } from './view.js';


export async function listAction(request, response) {
    const data = await getAll();
    const body = render(data);
    response.send(body);
}

export async function removeAction(request, response) {
    const id = parseInt(request.params.id, 10);
    await remove(id);
    response.redirect(request.baseUrl);
}
