/* flow-include

declare module 'file-loader' {
    declare module .exports: any
;
}
declare module 'file-loader/dist/cjs' {
    declare module .exports: any
;
}
declare module 'file-loader/dist/index' {
    declare module .exports: any
;
}
declare module 'file-loader/dist/cjs.js' {
    declare module .exports: $Exports<'file-loader/dist/cjs'>
;
}
declare module 'file-loader/dist/index.js' {
    declare module .exports: $Exports<'file-loader/dist/index'>
;
}

*/
