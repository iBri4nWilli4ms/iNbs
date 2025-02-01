# frontend

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the
[online documentation](https://docs.flutter.dev/), which offers tutorials,
samples, guidance on mobile development, and a full API reference.


## Estructura del Proyecto

lib/
├── core/
│   ├── constants/         # Rutas de API, colores, strings
│   ├── network/           # Cliente HTTP, interceptores, manejo de errores
│   ├── utils/             # Funciones y clases reutilizables
│   ├── error/             # Excepciones y manejo de errores
│   └── config/            # Configuración general (tema, rutas)
├── features/              # Módulos por funcionalidad (por servicio)
│   ├── orders/            # Microservicio de gestión de pedidos
│   │   ├── data/          # Comunicación con APIs y repositorios
│   │   ├── domain/        # Casos de uso y entidades
│   │   └── presentation/  # UI y widgets específicos
│   ├── products/          # Microservicio de productos
│   │   ├── data/
│   │   ├── domain/
│   │   └── presentation/
│   └── ...                # Otros microservicios (usuarios, reportes, etc.)
├── app/
│   ├── injection/         # Inyección de dependencias
│   ├── config/            # Inicialización (temas, rutas globales)
│   └── main.dart          # Punto de entrada
└── tests/                 # Pruebas unitarias e integración
    ├── unit/
    ├── integration/
    └── widgets/



orders/
├── data/
│   ├── models/            # Modelos de datos específicos (OrderModel)
│   ├── repositories/      # Implementaciones concretas de repositorios
│   └── datasources/       # Comunicación directa con el API
├── domain/
│   ├── entities/          # Entidades del dominio (Order)
│   ├── usecases/          # Casos de uso (CreateOrder, GetOrders)
│   └── repositories/      # Interfaces abstractas
└── presentation/
    ├── pages/             # Pantallas principales (OrderListPage)
    ├── widgets/           # Widgets reutilizables (OrderCard)
    └── controllers/       # BloC, Provider, o Riverpod
