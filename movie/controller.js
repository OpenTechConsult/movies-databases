import { getAll, remove, get } from './model.js';
import { render } from './view.js';
import { render as form } from './form.js';


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


export async function formAction(request, response) {
    let movie = { id: '', title: '',    year: ''};

    if (request.params.id) {
        movie = await get(parseInt(request.params.id, 10));
    }
    
    const body = form(movie);
    response.send(body);
}   
