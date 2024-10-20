export interface RabbitMQVideoConversionMessage {
    video: {
        sourceFile: string;  // Ruta del archivo de video en el sistema de archivos
        fieldname: string;   // Nombre del campo del formulario
        originalname: string; // Nombre original del archivo
        encoding: string;    // Tipo de codificación del archivo
        mimetype: string;    // Tipo MIME del archivo
        destination: string; // Directorio de destino donde se guarda el archivo
        filename: string;    // Nombre del archivo en el servidor
        path: string;        // Ruta completa del archivo en el servidor
        size: number;        // Tamaño del archivo en bytes
    };
    format: string; // Formato al que se va a convertir (por ejemplo, 'mp3')
}