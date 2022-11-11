export const consoleDebug = (info: unknown) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(info);
    }
};
//solo en produccion quiero que muestres por consola las cosas cuando llamo a console.debug
