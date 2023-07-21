export function render(movies) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Movie list</title>
            <link rel="stylesheet" href="style.css"/>
        </head>
        <body>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                </thead>
                </tbody>
                    ${movies
                        .map(
                            movie => `
                                <tr>
                                    <td>${movie.id}</td>
                                    <td>${movie.title}</td>
                                    <td><a href="/movie/delete/${movie.id}">delete</a></td>
                                </tr>`
                        ).join('')}
                </tbody>
            </table>
        </body>
    </html>
    `;
}
