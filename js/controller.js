document.body.onkeydown = function( e ) {
    var keys = {
        'ArrowLeft': 'left',
        'ArrowRight': 'right',
        'ArrowDown': 'down',
        " ": 'rotate',
        "Enter": 'drop'
    };

    if ( typeof keys[ e.key ] != 'undefined' ) {
        keyPress( keys[ e.key ] );
        render();
    }
};
