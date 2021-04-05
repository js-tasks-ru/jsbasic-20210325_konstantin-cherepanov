function ucFirst(str) {
    // ваш код...
    if (str.length) {
        str = str[0].toUpperCase() + str.substring(1);
        return str;
    } else {
        return str = '';
    }
}