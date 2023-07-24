export function render(movie) {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Movie list</title>
        <link rel="styleshee" href="/style.css" />
    </head>
    <body>
        <form action="/movie/save" method="post">
            <input type="hidden" id="id" name="id" value="${movie.id}"/>
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" value="${movie.title}" />
            </div>
            <div>
                <label for="year">Year:</label>
                <input type="text" id="year" name="year" value="${movie.year}" />
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    </body>
    </html>
    `;
}
