var root = './static';

module.exports = {
    root: root,
    es6: {
        src: root + '/_js/modules/**/*.es6',
        dest: root + '/js/modules'
    },
    css: {
        src: root + '/_sass/**/*.scss',
        dest: root + '/css',
        stats: root + '/_stylestats',
        guide: root + '/_styleGuide'
    }
};