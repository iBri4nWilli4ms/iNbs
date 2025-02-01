import 'package:get_it/get_it.dart';

final GetIt serviceLocator = GetIt.instance;

void setupDependencies() {
  // Registrar servicios:
  // serviceLocator.registerLazySingleton<AuthService>(() => AuthServiceImpl());

  // Registrar repositorios:
  // serviceLocator.registerLazySingleton<UserRepository>(() => UserRepositoryImpl());

  // Registrar casos de uso:
  // serviceLocator.registerLazySingleton<GetUserUseCase>(() => GetUserUseCase(serviceLocator()));

  // Otros...
}
