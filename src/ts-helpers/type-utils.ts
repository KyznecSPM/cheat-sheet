// добавляет тип null к каждому ключу объекта
export type Nullable<T> = {
  [K in keyof T]: T[K] | null
}
// создает union тип из объекта (удобно для создания ActionTypes, спасибо ребятам из Альфа банка https://m.habr.com/ru/company/alfa/blog/452620/)
export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
