function createLink(filename) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}

function createVolta() {
    return `<a href="/">Voltar</a><br>\n`;
}

module.exports = {
    create: createLink,
    voltar: createVolta
};