export const useShuffle = ( data ) => {
    if ( !Array.isArray( data ) ) return []
    let arr = JSON.parse( JSON.stringify( data ) )
    for ( let i = 0; i < arr.length; i++ ) {
        arr.shift( arr.splice( Math.floor( Math.random() * arr.length ),1 ) )
    }
    return arr
}