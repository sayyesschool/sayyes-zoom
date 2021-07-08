function get_image(name) {
    return `https://static.sayes.ru/images/${name}`;
}

function get_youtube_image(id) {
    return `https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`;
}

function role_image() {
    return 'aria-hidden="true" aria-role="presentation" draggable="false"';
}

function get_tel_for_href(tel) {
    return 'tel:' + tel.replace("/[^+0-9]/", '');
}

function get_email_for_href(email) {
    return 'mailto:' + email;
}

module.exports = {
    get_image,
    get_youtube_image,
    role_image,
    get_tel_for_href,
    get_email_for_href
};