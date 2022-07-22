//Iterates through obj
function iterator1(inputArr) {
    
}
// Creates HTML
function generateHTML(data) {
    let special
    let htmlStr = `<!DOCTYPE html>
    <html lang='en'>
    
    <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    
        <title>Employee Information</title>
    </head>
    <header>
        <h1 class="bg-primary text-success text-center">Employee Information</h1>
    </header>`
    for (obj of data) {
        if (obj.github) {
            special = obj.github
        } else if (obj.officeNum) {
            special = obj.officeNum
        } else if (obj.school) {
            special = obj.school
        }

        htmlStr += `<div class="card">
            <h5 class="card-header">${obj.name}</h5>
            <div class="card-body">
                <h5 class="card-title">${obj.getRole()}</h5>
                <h7 class="card-text">${obj.getName()}</h7>
                <p class="card-text">${obj.getId()}</p>
                <p class="card-text">${obj.getEmail()}</p>
                <p class="card-text">${special}</p>
            </div>
        </div>`
    }
    htmlStr += `</body></html>`
    return htmlStr;
}

module.exports = generateHTML;