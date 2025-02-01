import '../../domain/entities/welcome_message.dart';

class WelcomeMessageModel extends WelcomeMessage {
  WelcomeMessageModel(super.message);

  factory WelcomeMessageModel.fromJson(Map<String, dynamic> json) {
    return WelcomeMessageModel(json['message']);
  }

  Map<String, dynamic> toJson() {
    return {'message': message};
  }
}
