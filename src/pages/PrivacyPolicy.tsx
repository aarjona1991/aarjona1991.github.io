import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Política de Privacidad
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                        Última actualización: {new Date().toLocaleDateString('es-ES')}
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-8">
                        <p className="text-blue-800 dark:text-blue-200">
                            <strong>Resumen:</strong> Este portfolio personal no recopila datos personales. 
                            Solo utilizamos cookies técnicas esenciales para el funcionamiento del sitio.
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none dark:prose-invert">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            1. Información que Recopilamos
                        </h2>
                        
                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            1.1 Datos Técnicos
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li><strong>Cookies técnicas:</strong> Para recordar tu preferencia de tema (oscuro/claro)</li>
                            <li><strong>Datos de uso anónimos:</strong> Información sobre cómo interactúas con el sitio</li>
                            <li><strong>Información del dispositivo:</strong> Tipo de navegador y sistema operativo para optimizar la experiencia</li>
                        </ul>

                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            1.2 Lo que NO recopilamos
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Nombres, direcciones de correo electrónico o información personal</li>
                            <li>Datos de formularios de contacto (no tenemos formularios)</li>
                            <li>Información de ubicación o datos sensibles</li>
                            <li>Datos de seguimiento para publicidad</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            2. Cómo Utilizamos tu Información
                        </h2>
                        
                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            2.1 Funcionalidad del Sitio
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Recordar tu preferencia de tema (oscuro/claro)</li>
                            <li>Mejorar la experiencia de navegación</li>
                            <li>Optimizar el rendimiento del sitio</li>
                        </ul>

                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            2.2 Análisis Anónimo
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Entender qué páginas son más visitadas</li>
                            <li>Identificar errores técnicos</li>
                            <li>Mejorar la estructura del sitio</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            3. Almacenamiento de Datos
                        </h2>
                        
                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mb-6">
                            <p className="text-green-800 dark:text-green-200">
                                <strong>Almacenamiento Local:</strong> Todos los datos se almacenan únicamente en tu dispositivo 
                                a través del localStorage del navegador. No utilizamos servidores externos para almacenar datos personales.
                            </p>
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            4. Cookies
                        </h2>
                        
                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            4.1 Tipos de Cookies que Utilizamos
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li><strong>Cookies técnicas esenciales:</strong> Para el funcionamiento básico del sitio</li>
                            <li><strong>Cookies de preferencias:</strong> Para recordar tu tema preferido</li>
                        </ul>

                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            4.2 Cookies que NO utilizamos
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Cookies de seguimiento o publicitarias</li>
                            <li>Cookies de redes sociales</li>
                            <li>Cookies de análisis de terceros</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            5. Compartir Información
                        </h2>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            No vendemos, alquilamos ni compartimos tu información personal con terceros. 
                            Los únicos datos que manejamos son técnicos y se procesan localmente en tu dispositivo.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            6. Tus Derechos
                        </h2>
                        
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li><strong>Eliminar datos:</strong> Puedes limpiar el localStorage de tu navegador</li>
                            <li><strong>Deshabilitar cookies:</strong> A través de la configuración de tu navegador</li>
                            <li><strong>Cambiar preferencias:</strong> Puedes cambiar el tema en cualquier momento</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            7. Seguridad
                        </h2>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Implementamos medidas de seguridad estándar para proteger este sitio web. 
                            Utilizamos conexiones seguras (HTTPS) y seguimos las mejores prácticas de desarrollo web.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            8. Cambios en esta Política
                        </h2>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Nos reservamos el derecho de actualizar esta política de privacidad. 
                            Los cambios significativos se notificarán actualizando la fecha en esta página.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            9. Contacto
                        </h2>
                        
                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Si tienes preguntas sobre esta política de privacidad, puedes contactarme:
                            </p>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li><strong>Email:</strong> aarjona1991@gmail.com</li>
                                <li><strong>GitHub:</strong> <a href="https://github.com/aarjona1991" className="text-blue-600 dark:text-blue-400 hover:underline">@aarjona1991</a></li>
                                <li><strong>Portfolio:</strong> <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">aarjona1991.github.io</a></li>
                            </ul>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                Esta política de privacidad es efectiva a partir de {new Date().toLocaleDateString('es-ES')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PrivacyPolicy };
