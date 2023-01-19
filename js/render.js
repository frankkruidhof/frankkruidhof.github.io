var canvas = document.getElementsByTagName( 'canvas' )[ 0 ];
var ctx = canvas.getContext( '2d' );
var W = 300, H = 600;
var BLOCK_W = W / COLS, BLOCK_H = H / ROWS;
const IbcImg = new Image(); // Create new img element
IbcImg.src = "image/ibc.png"; // Set source path
const BackgroundImg = new Image();
BackgroundImg.src = "image/terrein.png";

// draw a single square at (x, y)
function drawBlock( x, y ) {
    ctx.drawImage(IbcImg, BLOCK_W * x - 8, BLOCK_H * y - 8, BLOCK_W * 1.8, BLOCK_H * 1.8);
}

// draws the board and the moving shape
function render() {
    ctx.clearRect( 0, 0, W, H );
    ctx.drawImage(BackgroundImg, 0, 0);

    ctx.strokeStyle = 'black';
    for ( var x = 0; x < COLS; ++x ) {
        for ( var y = 0; y < ROWS; ++y ) {
            if ( board[ y ][ x ] ) {
                ctx.fillStyle = colors[ board[ y ][ x ] - 1 ];
                drawBlock( x, y );
            }
        }
    }

    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'black';
    for ( var y = 0; y < 4; ++y ) {
        for ( var x = 0; x < 4; ++x ) {
            if ( current[ y ][ x ] ) {
                ctx.fillStyle = colors[ current[ y ][ x ] - 1 ];
                drawBlock( currentX + x, currentY + y );
            }
        }
    }
}