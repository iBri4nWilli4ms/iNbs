import 'package:flutter/material.dart';
import '../core/config/routes.dart'; // Archivo donde defines las rutas.
import '../shared/themes/app_theme.dart'; // Archivo de tema global (si lo tienes).

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Tu Proyecto', // Cambia este título por el nombre de tu app.
      debugShowCheckedModeBanner: false, // Desactiva el banner de debug.
      theme:
          AppTheme.light, // Tema claro definido en el archivo `app_theme.dart`.
      darkTheme: AppTheme.dark, // Tema oscuro (opcional).
      themeMode: ThemeMode.system, // Usa el modo del sistema (claro/oscuro).
      initialRoute: '/', // Ruta inicial.
      onGenerateRoute: AppRoutes.generateRoute, // Manejador de rutas dinámico.
    );
  }
}
