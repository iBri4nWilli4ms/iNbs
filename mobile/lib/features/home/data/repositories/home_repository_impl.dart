// import 'package:flutter/material.dart';

import '../../domain/entities/welcome_message.dart';
import '../../domain/usecases/fetch_welcome_message.dart';

class HomeRepositoryImpl implements FetchWelcomeMessage {
  @override
  Future<WelcomeMessage> call() async {
    // Simulación de datos: en un caso real, aquí harías una petición a una API.
    await Future.delayed(const Duration(seconds: 1));
    return WelcomeMessage('¡Bienvenido a nuestra tienda!');
  }
}
