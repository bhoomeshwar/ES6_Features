// ES5

function defaultEs5Function(height, color, url) {
    height = height || 50;
    color = color || 'red';
    url = url || 'http://google.com';

    console.log('height', height);
    console.log('color: ', color);
    console.log('url: ',url);
}

defaultEs5Function();

// ES6
function defaultEs6Function(height = 50, color = 'red', url = 'http://google.com') {
    console.log('height', height);
    console.log('color: ', color);
    console.log('url: ',url);
}

defaultEs6Function(10, 'blue', 'test.com');
defaultEs6Function();
