import 'package:flutter/material.dart';
import '../../features/home/presentation/pages/home_page.dart'; // Página inicial.

class AppRoutes {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/':
        return MaterialPageRoute(
            builder: (_) => const HomePage()); // Página inicial.
      // Define más rutas aquí:
      // case '/profile':
      //   return MaterialPageRoute(builder: (_) => const ProfilePage());
      default:
        return MaterialPageRoute(
          builder: (_) => Scaffold(
            body: Center(
              child: Text('404 - Página no encontrada'),
            ),
          ),
        );
    }
  }
}
