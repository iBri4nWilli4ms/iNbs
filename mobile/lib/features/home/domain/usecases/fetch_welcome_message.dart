import '../entities/welcome_message.dart';

abstract class FetchWelcomeMessage {
  Future<WelcomeMessage> call();
}
