import 'package:flutter/material.dart';

class WelcomeBanner extends StatelessWidget {
  final String message;

  const WelcomeBanner({super.key, required this.message});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16.0),
      color: Colors.blueAccent,
      child: Text(
        message,
        style: Theme.of(context)
            .textTheme
            .headlineMedium
            ?.copyWith(color: Colors.white),
        textAlign: TextAlign.center,
      ),
    );
  }
}
