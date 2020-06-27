exports.getModel = name => {
    name = name.substring(1, name.length);
    name = name.substring(0, name.indexOf('/'));
    name = name.charAt(0).toUpperCase() + name.slice(1);
    let path = '../model/' + name

    return require(path);
}

exports.getPath = name => {
    name = name.substring(1, name.length);
    name = name.substring(0, name.indexOf('/'));

    return name;
}