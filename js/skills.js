window.onload = function onLoad() {
    let html_circle = new ProgressBar.Line('#progress-bar-html', {
        color: '#f16524',
        strokeWidth: 0.8,
        trailWidth: 0.1,
        duration: 1500,
        easing: 'easeInOut'
    });

    html_circle.animate(0.8);

    let css_circle = new ProgressBar.Line('#progress-bar-css', {
        color: '#2965f1',
        strokeWidth: 0.8,
        trailWidth: 0.1,
        duration: 1500,
        easing: 'easeInOut'
    });

    css_circle.animate(0.8);

    let php_circle = new ProgressBar.Line('#progress-bar-php', {
        color: '#777bb3',
        strokeWidth: 0.8,
        trailWidth: 0.1,
        duration: 1500,
        easing: 'easeInOut'
    });

    php_circle.animate(0.6);

    let java_circle = new ProgressBar.Line('#progress-bar-java', {
        color: '#0e8ac8',
        strokeWidth: 0.8,
        trailWidth: 0.1,
        duration: 1500,
        easing: 'easeInOut'
    });

    java_circle.animate(0.4);

    let lua_bar = new ProgressBar.Line('#progress-bar-lua', {
        color: '#010080',
        strokeWidth: 0.8,
        trailWidth: 0.1,
        duration: 1500,
        easing: 'easeInOut',
    });

    lua_bar.animate(0.7);  // Number from 0.0 to 1.0
};