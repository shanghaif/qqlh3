import 'mitt';

declare module 'mitt' {

  interface Emitter {
    all: EventHandlerMap;
    on<T = any>(type: EventType, handler: Handler<T>): void;
    on(type: '*', handler: WildcardHandler): void;
    once<T = any>(type: EventType, handler: Handler<T>): void;
    off<T = any>(type: EventType, handler: Handler<T>): void;
    off(type: '*', handler: WildcardHandler): void;
    emit<T = any>(type: EventType, event?: T): void;
    emit(type: '*', event?: any): void;
  }
}
