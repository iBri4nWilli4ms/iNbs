import 'package:flutter/material.dart';
import '../../domain/entities/welcome_message.dart';
import '../../data/repositories/home_repository_impl.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final _repository = HomeRepositoryImpl();
  late Future<WelcomeMessage> _welcomeMessage;

  @override
  void initState() {
    super.initState();
    _welcomeMessage = _repository.call();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Inicio'),
      ),
      body: Center(
        child: FutureBuilder<WelcomeMessage>(
          future: _welcomeMessage,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return const CircularProgressIndicator();
            } else if (snapshot.hasError) {
              return const Text('Error al cargar el mensaje');
            } else if (snapshot.hasData) {
              return Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    snapshot.data!.message,
                    style: Theme.of(context).textTheme.headlineMedium,
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () {
                      // Navegación hacia otra pantalla (productos, por ejemplo).
                      Navigator.pushNamed(context, '/products');
                    },
                    child: const Text('Explorar productos'),
                  ),
                ],
              );
            }
            return const Text('No hay mensaje de bienvenida disponible.');
          },
        ),
      ),
    );
  }
}
