function generateHTML(data, data1) {
    let special 
    if (data1.github) {
      special = data1.github
    } else if (data1.officeNum) {
      special = data1.officeNum
    } else if (data1.school) {
      special = data1.school
    }
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
    </header>
    
    <body>
        <div class="card">
            <h5 class="card-header">${data.name}</h5>
            <div class="card-body">
                <h5 class="card-title">${data.getRole()}</h5>
                <h7 class="card-text">${data.getName()}</h7>
                <p class="card-text">${data.getId()}</p>
                <p class="card-text">${data.getEmail()}</p>
                <p class="card-text">${special}</p>
            </div>
        </div>
    </body>
    
    </html>`
    return htmlStr;
  }
  
  module.exports = generateHTML;