import 'package:flutter/material.dart';

class AppTheme {
  static ThemeData get light => ThemeData(
        brightness: Brightness.light, // Asegúrate de establecer esto
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.blue,
          brightness: Brightness.light, // Coherencia con ThemeData
        ),
        useMaterial3: true,
        textTheme: const TextTheme(
          headlineMedium: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
        ),
      );

  static ThemeData get dark => ThemeData(
        brightness: Brightness.dark, // Asegúrate de establecer esto
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.blueGrey,
          brightness: Brightness.dark, // Coherencia con ThemeData
        ),
        useMaterial3: true,
      );
}
