/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model appointment
 *
 */
export type appointment = $Result.DefaultSelection<Prisma.$appointmentPayload>;
/**
 * Model healthcare_provider
 *
 */
export type healthcare_provider = $Result.DefaultSelection<Prisma.$healthcare_providerPayload>;
/**
 * Model insurance_provider
 *
 */
export type insurance_provider = $Result.DefaultSelection<Prisma.$insurance_providerPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model patient
 *
 */
export type patient = $Result.DefaultSelection<Prisma.$patientPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **appointment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   */
  get appointment(): Prisma.appointmentDelegate<ExtArgs>;

  /**
   * `prisma.healthcare_provider`: Exposes CRUD operations for the **healthcare_provider** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Healthcare_providers
   * const healthcare_providers = await prisma.healthcare_provider.findMany()
   * ```
   */
  get healthcare_provider(): Prisma.healthcare_providerDelegate<ExtArgs>;

  /**
   * `prisma.insurance_provider`: Exposes CRUD operations for the **insurance_provider** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Insurance_providers
   * const insurance_providers = await prisma.insurance_provider.findMany()
   * ```
   */
  get insurance_provider(): Prisma.insurance_providerDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **patient** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Patients
   * const patients = await prisma.patient.findMany()
   * ```
   */
  get patient(): Prisma.patientDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    appointment: 'appointment';
    healthcare_provider: 'healthcare_provider';
    insurance_provider: 'insurance_provider';
    organization: 'organization';
    patient: 'patient';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'appointment' | 'healthcare_provider' | 'insurance_provider' | 'organization' | 'patient' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      appointment: {
        payload: Prisma.$appointmentPayload<ExtArgs>;
        fields: Prisma.appointmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.appointmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.appointmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findFirst: {
            args: Prisma.appointmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.appointmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findMany: {
            args: Prisma.appointmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[];
          };
          create: {
            args: Prisma.appointmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          createMany: {
            args: Prisma.appointmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.appointmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          update: {
            args: Prisma.appointmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          deleteMany: {
            args: Prisma.appointmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.appointmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.appointmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAppointment>;
          };
          groupBy: {
            args: Prisma.appointmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.appointmentCountArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number;
          };
        };
      };
      healthcare_provider: {
        payload: Prisma.$healthcare_providerPayload<ExtArgs>;
        fields: Prisma.healthcare_providerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.healthcare_providerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.healthcare_providerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          findFirst: {
            args: Prisma.healthcare_providerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.healthcare_providerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          findMany: {
            args: Prisma.healthcare_providerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>[];
          };
          create: {
            args: Prisma.healthcare_providerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          createMany: {
            args: Prisma.healthcare_providerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.healthcare_providerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          update: {
            args: Prisma.healthcare_providerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          deleteMany: {
            args: Prisma.healthcare_providerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.healthcare_providerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.healthcare_providerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$healthcare_providerPayload>;
          };
          aggregate: {
            args: Prisma.Healthcare_providerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHealthcare_provider>;
          };
          groupBy: {
            args: Prisma.healthcare_providerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Healthcare_providerGroupByOutputType>[];
          };
          count: {
            args: Prisma.healthcare_providerCountArgs<ExtArgs>;
            result: $Utils.Optional<Healthcare_providerCountAggregateOutputType> | number;
          };
        };
      };
      insurance_provider: {
        payload: Prisma.$insurance_providerPayload<ExtArgs>;
        fields: Prisma.insurance_providerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.insurance_providerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.insurance_providerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          findFirst: {
            args: Prisma.insurance_providerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.insurance_providerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          findMany: {
            args: Prisma.insurance_providerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>[];
          };
          create: {
            args: Prisma.insurance_providerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          createMany: {
            args: Prisma.insurance_providerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.insurance_providerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          update: {
            args: Prisma.insurance_providerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          deleteMany: {
            args: Prisma.insurance_providerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.insurance_providerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.insurance_providerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          aggregate: {
            args: Prisma.Insurance_providerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInsurance_provider>;
          };
          groupBy: {
            args: Prisma.insurance_providerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Insurance_providerGroupByOutputType>[];
          };
          count: {
            args: Prisma.insurance_providerCountArgs<ExtArgs>;
            result: $Utils.Optional<Insurance_providerCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      patient: {
        payload: Prisma.$patientPayload<ExtArgs>;
        fields: Prisma.patientFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.patientFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.patientFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          findFirst: {
            args: Prisma.patientFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.patientFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          findMany: {
            args: Prisma.patientFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[];
          };
          create: {
            args: Prisma.patientCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          createMany: {
            args: Prisma.patientCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.patientDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          update: {
            args: Prisma.patientUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          deleteMany: {
            args: Prisma.patientDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.patientUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.patientUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePatient>;
          };
          groupBy: {
            args: Prisma.patientGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PatientGroupByOutputType>[];
          };
          count: {
            args: Prisma.patientCountArgs<ExtArgs>;
            result: $Utils.Optional<PatientCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type Healthcare_providerCountOutputType
   */

  export type Healthcare_providerCountOutputType = {
    appointment: number;
    patient: number;
  };

  export type Healthcare_providerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    appointment?: boolean | Healthcare_providerCountOutputTypeCountAppointmentArgs;
    patient?: boolean | Healthcare_providerCountOutputTypeCountPatientArgs;
  };

  // Custom InputTypes

  /**
   * Healthcare_providerCountOutputType without action
   */
  export type Healthcare_providerCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Healthcare_providerCountOutputType
     */
    select?: Healthcare_providerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Healthcare_providerCountOutputType without action
   */
  export type Healthcare_providerCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * Healthcare_providerCountOutputType without action
   */
  export type Healthcare_providerCountOutputTypeCountPatientArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: patientWhereInput;
  };

  /**
   * Count Type Insurance_providerCountOutputType
   */

  export type Insurance_providerCountOutputType = {
    patient: number;
  };

  export type Insurance_providerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    patient?: boolean | Insurance_providerCountOutputTypeCountPatientArgs;
  };

  // Custom InputTypes

  /**
   * Insurance_providerCountOutputType without action
   */
  export type Insurance_providerCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance_providerCountOutputType
     */
    select?: Insurance_providerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Insurance_providerCountOutputType without action
   */
  export type Insurance_providerCountOutputTypeCountPatientArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: patientWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    healthcare_provider: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    healthcare_provider?: boolean | OrganizationCountOutputTypeCountHealthcare_providerArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountHealthcare_providerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: healthcare_providerWhereInput;
  };

  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointment: number;
  };

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | PatientCountOutputTypeCountAppointmentArgs;
  };

  // Custom InputTypes

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    healthcare_provider: number;
    patient: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    healthcare_provider?: boolean | UserCountOutputTypeCountHealthcare_providerArgs;
    patient?: boolean | UserCountOutputTypeCountPatientArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHealthcare_providerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: healthcare_providerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: patientWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  export type AppointmentMinAggregateOutputType = {
    id: string | null;
    patient_id: string | null;
    healthcare_provider_id: string | null;
    appointment_date: Date | null;
    reason_for_visit: string | null;
    appointment_status: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentMaxAggregateOutputType = {
    id: string | null;
    patient_id: string | null;
    healthcare_provider_id: string | null;
    appointment_date: Date | null;
    reason_for_visit: string | null;
    appointment_status: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentCountAggregateOutputType = {
    id: number;
    patient_id: number;
    healthcare_provider_id: number;
    appointment_date: number;
    reason_for_visit: number;
    appointment_status: number;
    notes: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AppointmentMinAggregateInputType = {
    id?: true;
    patient_id?: true;
    healthcare_provider_id?: true;
    appointment_date?: true;
    reason_for_visit?: true;
    appointment_status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentMaxAggregateInputType = {
    id?: true;
    patient_id?: true;
    healthcare_provider_id?: true;
    appointment_date?: true;
    reason_for_visit?: true;
    appointment_status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentCountAggregateInputType = {
    id?: true;
    patient_id?: true;
    healthcare_provider_id?: true;
    appointment_date?: true;
    reason_for_visit?: true;
    appointment_status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment to aggregate.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned appointments
     **/
    _count?: true | AppointmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppointmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppointmentMaxAggregateInputType;
  };

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>;
  };

  export type appointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithAggregationInput | appointmentOrderByWithAggregationInput[];
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum;
    having?: appointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
  };

  export type AppointmentGroupByOutputType = {
    id: string;
    patient_id: string;
    healthcare_provider_id: string;
    appointment_date: Date | null;
    reason_for_visit: string | null;
    appointment_status: string | null;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  type GetAppointmentGroupByPayload<T extends appointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AppointmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
          : GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
      }
    >
  >;

  export type appointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        patient_id?: boolean;
        healthcare_provider_id?: boolean;
        appointment_date?: boolean;
        reason_for_visit?: boolean;
        appointment_status?: boolean;
        notes?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        healthcare_provider?: boolean | healthcare_providerDefaultArgs<ExtArgs>;
        patient?: boolean | patientDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['appointment']
    >;

  export type appointmentSelectScalar = {
    id?: boolean;
    patient_id?: boolean;
    healthcare_provider_id?: boolean;
    appointment_date?: boolean;
    reason_for_visit?: boolean;
    appointment_status?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type appointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    healthcare_provider?: boolean | healthcare_providerDefaultArgs<ExtArgs>;
    patient?: boolean | patientDefaultArgs<ExtArgs>;
  };

  export type $appointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'appointment';
    objects: {
      healthcare_provider: Prisma.$healthcare_providerPayload<ExtArgs>;
      patient: Prisma.$patientPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        patient_id: string;
        healthcare_provider_id: string;
        appointment_date: Date | null;
        reason_for_visit: string | null;
        appointment_status: string | null;
        notes: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['appointment']
    >;
    composites: {};
  };

  type appointmentGetPayload<S extends boolean | null | undefined | appointmentDefaultArgs> = $Result.GetResult<
    Prisma.$appointmentPayload,
    S
  >;

  type appointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    appointmentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AppointmentCountAggregateInputType | true;
  };

  export interface appointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointment']; meta: { name: 'appointment' } };
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {appointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends appointmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Appointment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {appointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends appointmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends appointmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends appointmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     *
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends appointmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Appointment.
     * @param {appointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     *
     **/
    create<T extends appointmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentCreateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Appointments.
     *     @param {appointmentCreateManyArgs} args - Arguments to create many Appointments.
     *     @example
     *     // Create many Appointments
     *     const appointment = await prisma.appointment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends appointmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Appointment.
     * @param {appointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     *
     **/
    delete<T extends appointmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentDeleteArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Appointment.
     * @param {appointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends appointmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Appointments.
     * @param {appointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends appointmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends appointmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Appointment.
     * @param {appointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     **/
    upsert<T extends appointmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpsertArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
     **/
    count<T extends appointmentCountArgs>(
      args?: Subset<T, appointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AppointmentAggregateArgs>(
      args: Subset<T, AppointmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends appointmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentGroupByArgs['orderBy'] }
        : { orderBy?: appointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, appointmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the appointment model
     */
    readonly fields: appointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    healthcare_provider<T extends healthcare_providerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, healthcare_providerDefaultArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    patient<T extends patientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, patientDefaultArgs<ExtArgs>>,
    ): Prisma__patientClient<
      $Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the appointment model
   */
  interface appointmentFieldRefs {
    readonly id: FieldRef<'appointment', 'String'>;
    readonly patient_id: FieldRef<'appointment', 'String'>;
    readonly healthcare_provider_id: FieldRef<'appointment', 'String'>;
    readonly appointment_date: FieldRef<'appointment', 'DateTime'>;
    readonly reason_for_visit: FieldRef<'appointment', 'String'>;
    readonly appointment_status: FieldRef<'appointment', 'String'>;
    readonly notes: FieldRef<'appointment', 'String'>;
    readonly created_at: FieldRef<'appointment', 'DateTime'>;
    readonly updated_at: FieldRef<'appointment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * appointment findUnique
   */
  export type appointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findUniqueOrThrow
   */
  export type appointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findFirst
   */
  export type appointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findFirstOrThrow
   */
  export type appointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findMany
   */
  export type appointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment create
   */
  export type appointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a appointment.
     */
    data: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
  };

  /**
   * appointment createMany
   */
  export type appointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * appointment update
   */
  export type appointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a appointment.
     */
    data: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
    /**
     * Choose, which appointment to update.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment updateMany
   */
  export type appointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>;
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment upsert
   */
  export type appointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the appointment to update in case it exists.
     */
    where: appointmentWhereUniqueInput;
    /**
     * In case the appointment found by the `where` argument doesn't exist, create a new appointment with this data.
     */
    create: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
    /**
     * In case the appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
  };

  /**
   * appointment delete
   */
  export type appointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter which appointment to delete.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment deleteMany
   */
  export type appointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment without action
   */
  export type appointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
  };

  /**
   * Model healthcare_provider
   */

  export type AggregateHealthcare_provider = {
    _count: Healthcare_providerCountAggregateOutputType | null;
    _avg: Healthcare_providerAvgAggregateOutputType | null;
    _sum: Healthcare_providerSumAggregateOutputType | null;
    _min: Healthcare_providerMinAggregateOutputType | null;
    _max: Healthcare_providerMaxAggregateOutputType | null;
  };

  export type Healthcare_providerAvgAggregateOutputType = {
    years_of_experience: number | null;
  };

  export type Healthcare_providerSumAggregateOutputType = {
    years_of_experience: number | null;
  };

  export type Healthcare_providerMinAggregateOutputType = {
    id: string | null;
    specialty: string | null;
    license_number: string | null;
    years_of_experience: number | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Healthcare_providerMaxAggregateOutputType = {
    id: string | null;
    specialty: string | null;
    license_number: string | null;
    years_of_experience: number | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Healthcare_providerCountAggregateOutputType = {
    id: number;
    specialty: number;
    license_number: number;
    years_of_experience: number;
    user_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Healthcare_providerAvgAggregateInputType = {
    years_of_experience?: true;
  };

  export type Healthcare_providerSumAggregateInputType = {
    years_of_experience?: true;
  };

  export type Healthcare_providerMinAggregateInputType = {
    id?: true;
    specialty?: true;
    license_number?: true;
    years_of_experience?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Healthcare_providerMaxAggregateInputType = {
    id?: true;
    specialty?: true;
    license_number?: true;
    years_of_experience?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Healthcare_providerCountAggregateInputType = {
    id?: true;
    specialty?: true;
    license_number?: true;
    years_of_experience?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Healthcare_providerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which healthcare_provider to aggregate.
     */
    where?: healthcare_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of healthcare_providers to fetch.
     */
    orderBy?: healthcare_providerOrderByWithRelationInput | healthcare_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: healthcare_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` healthcare_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` healthcare_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned healthcare_providers
     **/
    _count?: true | Healthcare_providerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Healthcare_providerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Healthcare_providerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Healthcare_providerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Healthcare_providerMaxAggregateInputType;
  };

  export type GetHealthcare_providerAggregateType<T extends Healthcare_providerAggregateArgs> = {
    [P in keyof T & keyof AggregateHealthcare_provider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthcare_provider[P]>
      : GetScalarType<T[P], AggregateHealthcare_provider[P]>;
  };

  export type healthcare_providerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: healthcare_providerWhereInput;
    orderBy?: healthcare_providerOrderByWithAggregationInput | healthcare_providerOrderByWithAggregationInput[];
    by: Healthcare_providerScalarFieldEnum[] | Healthcare_providerScalarFieldEnum;
    having?: healthcare_providerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Healthcare_providerCountAggregateInputType | true;
    _avg?: Healthcare_providerAvgAggregateInputType;
    _sum?: Healthcare_providerSumAggregateInputType;
    _min?: Healthcare_providerMinAggregateInputType;
    _max?: Healthcare_providerMaxAggregateInputType;
  };

  export type Healthcare_providerGroupByOutputType = {
    id: string;
    specialty: string | null;
    license_number: string | null;
    years_of_experience: number | null;
    user_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Healthcare_providerCountAggregateOutputType | null;
    _avg: Healthcare_providerAvgAggregateOutputType | null;
    _sum: Healthcare_providerSumAggregateOutputType | null;
    _min: Healthcare_providerMinAggregateOutputType | null;
    _max: Healthcare_providerMaxAggregateOutputType | null;
  };

  type GetHealthcare_providerGroupByPayload<T extends healthcare_providerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Healthcare_providerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Healthcare_providerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Healthcare_providerGroupByOutputType[P]>
          : GetScalarType<T[P], Healthcare_providerGroupByOutputType[P]>;
      }
    >
  >;

  export type healthcare_providerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        specialty?: boolean;
        license_number?: boolean;
        years_of_experience?: boolean;
        user_id?: boolean;
        organization_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        appointment?: boolean | healthcare_provider$appointmentArgs<ExtArgs>;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        patient?: boolean | healthcare_provider$patientArgs<ExtArgs>;
        _count?: boolean | Healthcare_providerCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['healthcare_provider']
    >;

  export type healthcare_providerSelectScalar = {
    id?: boolean;
    specialty?: boolean;
    license_number?: boolean;
    years_of_experience?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type healthcare_providerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | healthcare_provider$appointmentArgs<ExtArgs>;
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    patient?: boolean | healthcare_provider$patientArgs<ExtArgs>;
    _count?: boolean | Healthcare_providerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $healthcare_providerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'healthcare_provider';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      patient: Prisma.$patientPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        specialty: string | null;
        license_number: string | null;
        years_of_experience: number | null;
        user_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['healthcare_provider']
    >;
    composites: {};
  };

  type healthcare_providerGetPayload<S extends boolean | null | undefined | healthcare_providerDefaultArgs> =
    $Result.GetResult<Prisma.$healthcare_providerPayload, S>;

  type healthcare_providerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    healthcare_providerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Healthcare_providerCountAggregateInputType | true;
  };

  export interface healthcare_providerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['healthcare_provider'];
      meta: { name: 'healthcare_provider' };
    };
    /**
     * Find zero or one Healthcare_provider that matches the filter.
     * @param {healthcare_providerFindUniqueArgs} args - Arguments to find a Healthcare_provider
     * @example
     * // Get one Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends healthcare_providerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerFindUniqueArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Healthcare_provider that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {healthcare_providerFindUniqueOrThrowArgs} args - Arguments to find a Healthcare_provider
     * @example
     * // Get one Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends healthcare_providerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Healthcare_provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerFindFirstArgs} args - Arguments to find a Healthcare_provider
     * @example
     * // Get one Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends healthcare_providerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerFindFirstArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Healthcare_provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerFindFirstOrThrowArgs} args - Arguments to find a Healthcare_provider
     * @example
     * // Get one Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends healthcare_providerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Healthcare_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Healthcare_providers
     * const healthcare_providers = await prisma.healthcare_provider.findMany()
     *
     * // Get first 10 Healthcare_providers
     * const healthcare_providers = await prisma.healthcare_provider.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const healthcare_providerWithIdOnly = await prisma.healthcare_provider.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends healthcare_providerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Healthcare_provider.
     * @param {healthcare_providerCreateArgs} args - Arguments to create a Healthcare_provider.
     * @example
     * // Create one Healthcare_provider
     * const Healthcare_provider = await prisma.healthcare_provider.create({
     *   data: {
     *     // ... data to create a Healthcare_provider
     *   }
     * })
     *
     **/
    create<T extends healthcare_providerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerCreateArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Healthcare_providers.
     *     @param {healthcare_providerCreateManyArgs} args - Arguments to create many Healthcare_providers.
     *     @example
     *     // Create many Healthcare_providers
     *     const healthcare_provider = await prisma.healthcare_provider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends healthcare_providerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Healthcare_provider.
     * @param {healthcare_providerDeleteArgs} args - Arguments to delete one Healthcare_provider.
     * @example
     * // Delete one Healthcare_provider
     * const Healthcare_provider = await prisma.healthcare_provider.delete({
     *   where: {
     *     // ... filter to delete one Healthcare_provider
     *   }
     * })
     *
     **/
    delete<T extends healthcare_providerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerDeleteArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Healthcare_provider.
     * @param {healthcare_providerUpdateArgs} args - Arguments to update one Healthcare_provider.
     * @example
     * // Update one Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends healthcare_providerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerUpdateArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Healthcare_providers.
     * @param {healthcare_providerDeleteManyArgs} args - Arguments to filter Healthcare_providers to delete.
     * @example
     * // Delete a few Healthcare_providers
     * const { count } = await prisma.healthcare_provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends healthcare_providerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, healthcare_providerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Healthcare_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Healthcare_providers
     * const healthcare_provider = await prisma.healthcare_provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends healthcare_providerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Healthcare_provider.
     * @param {healthcare_providerUpsertArgs} args - Arguments to update or create a Healthcare_provider.
     * @example
     * // Update or create a Healthcare_provider
     * const healthcare_provider = await prisma.healthcare_provider.upsert({
     *   create: {
     *     // ... data to create a Healthcare_provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Healthcare_provider we want to update
     *   }
     * })
     **/
    upsert<T extends healthcare_providerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, healthcare_providerUpsertArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Healthcare_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerCountArgs} args - Arguments to filter Healthcare_providers to count.
     * @example
     * // Count the number of Healthcare_providers
     * const count = await prisma.healthcare_provider.count({
     *   where: {
     *     // ... the filter for the Healthcare_providers we want to count
     *   }
     * })
     **/
    count<T extends healthcare_providerCountArgs>(
      args?: Subset<T, healthcare_providerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Healthcare_providerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Healthcare_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Healthcare_providerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Healthcare_providerAggregateArgs>(
      args: Subset<T, Healthcare_providerAggregateArgs>,
    ): Prisma.PrismaPromise<GetHealthcare_providerAggregateType<T>>;

    /**
     * Group by Healthcare_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {healthcare_providerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends healthcare_providerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: healthcare_providerGroupByArgs['orderBy'] }
        : { orderBy?: healthcare_providerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, healthcare_providerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHealthcare_providerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the healthcare_provider model
     */
    readonly fields: healthcare_providerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for healthcare_provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__healthcare_providerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends healthcare_provider$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, healthcare_provider$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    patient<T extends healthcare_provider$patientArgs<ExtArgs> = {}>(
      args?: Subset<T, healthcare_provider$patientArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the healthcare_provider model
   */
  interface healthcare_providerFieldRefs {
    readonly id: FieldRef<'healthcare_provider', 'String'>;
    readonly specialty: FieldRef<'healthcare_provider', 'String'>;
    readonly license_number: FieldRef<'healthcare_provider', 'String'>;
    readonly years_of_experience: FieldRef<'healthcare_provider', 'Int'>;
    readonly user_id: FieldRef<'healthcare_provider', 'String'>;
    readonly organization_id: FieldRef<'healthcare_provider', 'String'>;
    readonly created_at: FieldRef<'healthcare_provider', 'DateTime'>;
    readonly updated_at: FieldRef<'healthcare_provider', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * healthcare_provider findUnique
   */
  export type healthcare_providerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter, which healthcare_provider to fetch.
     */
    where: healthcare_providerWhereUniqueInput;
  };

  /**
   * healthcare_provider findUniqueOrThrow
   */
  export type healthcare_providerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter, which healthcare_provider to fetch.
     */
    where: healthcare_providerWhereUniqueInput;
  };

  /**
   * healthcare_provider findFirst
   */
  export type healthcare_providerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter, which healthcare_provider to fetch.
     */
    where?: healthcare_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of healthcare_providers to fetch.
     */
    orderBy?: healthcare_providerOrderByWithRelationInput | healthcare_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for healthcare_providers.
     */
    cursor?: healthcare_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` healthcare_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` healthcare_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of healthcare_providers.
     */
    distinct?: Healthcare_providerScalarFieldEnum | Healthcare_providerScalarFieldEnum[];
  };

  /**
   * healthcare_provider findFirstOrThrow
   */
  export type healthcare_providerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter, which healthcare_provider to fetch.
     */
    where?: healthcare_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of healthcare_providers to fetch.
     */
    orderBy?: healthcare_providerOrderByWithRelationInput | healthcare_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for healthcare_providers.
     */
    cursor?: healthcare_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` healthcare_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` healthcare_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of healthcare_providers.
     */
    distinct?: Healthcare_providerScalarFieldEnum | Healthcare_providerScalarFieldEnum[];
  };

  /**
   * healthcare_provider findMany
   */
  export type healthcare_providerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter, which healthcare_providers to fetch.
     */
    where?: healthcare_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of healthcare_providers to fetch.
     */
    orderBy?: healthcare_providerOrderByWithRelationInput | healthcare_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing healthcare_providers.
     */
    cursor?: healthcare_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` healthcare_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` healthcare_providers.
     */
    skip?: number;
    distinct?: Healthcare_providerScalarFieldEnum | Healthcare_providerScalarFieldEnum[];
  };

  /**
   * healthcare_provider create
   */
  export type healthcare_providerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * The data needed to create a healthcare_provider.
     */
    data: XOR<healthcare_providerCreateInput, healthcare_providerUncheckedCreateInput>;
  };

  /**
   * healthcare_provider createMany
   */
  export type healthcare_providerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many healthcare_providers.
     */
    data: healthcare_providerCreateManyInput | healthcare_providerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * healthcare_provider update
   */
  export type healthcare_providerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * The data needed to update a healthcare_provider.
     */
    data: XOR<healthcare_providerUpdateInput, healthcare_providerUncheckedUpdateInput>;
    /**
     * Choose, which healthcare_provider to update.
     */
    where: healthcare_providerWhereUniqueInput;
  };

  /**
   * healthcare_provider updateMany
   */
  export type healthcare_providerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update healthcare_providers.
     */
    data: XOR<healthcare_providerUpdateManyMutationInput, healthcare_providerUncheckedUpdateManyInput>;
    /**
     * Filter which healthcare_providers to update
     */
    where?: healthcare_providerWhereInput;
  };

  /**
   * healthcare_provider upsert
   */
  export type healthcare_providerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * The filter to search for the healthcare_provider to update in case it exists.
     */
    where: healthcare_providerWhereUniqueInput;
    /**
     * In case the healthcare_provider found by the `where` argument doesn't exist, create a new healthcare_provider with this data.
     */
    create: XOR<healthcare_providerCreateInput, healthcare_providerUncheckedCreateInput>;
    /**
     * In case the healthcare_provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<healthcare_providerUpdateInput, healthcare_providerUncheckedUpdateInput>;
  };

  /**
   * healthcare_provider delete
   */
  export type healthcare_providerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    /**
     * Filter which healthcare_provider to delete.
     */
    where: healthcare_providerWhereUniqueInput;
  };

  /**
   * healthcare_provider deleteMany
   */
  export type healthcare_providerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which healthcare_providers to delete
     */
    where?: healthcare_providerWhereInput;
  };

  /**
   * healthcare_provider.appointment
   */
  export type healthcare_provider$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the appointment
       */
      select?: appointmentSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: appointmentInclude<ExtArgs> | null;
      where?: appointmentWhereInput;
      orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
      cursor?: appointmentWhereUniqueInput;
      take?: number;
      skip?: number;
      distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
    };

  /**
   * healthcare_provider.patient
   */
  export type healthcare_provider$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    where?: patientWhereInput;
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    cursor?: patientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * healthcare_provider without action
   */
  export type healthcare_providerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
  };

  /**
   * Model insurance_provider
   */

  export type AggregateInsurance_provider = {
    _count: Insurance_providerCountAggregateOutputType | null;
    _min: Insurance_providerMinAggregateOutputType | null;
    _max: Insurance_providerMaxAggregateOutputType | null;
  };

  export type Insurance_providerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    phone_number: string | null;
    website: string | null;
    coverage_details: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Insurance_providerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    phone_number: string | null;
    website: string | null;
    coverage_details: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Insurance_providerCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    phone_number: number;
    website: number;
    coverage_details: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Insurance_providerMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    website?: true;
    coverage_details?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Insurance_providerMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    website?: true;
    coverage_details?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Insurance_providerCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    website?: true;
    coverage_details?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Insurance_providerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insurance_provider to aggregate.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned insurance_providers
     **/
    _count?: true | Insurance_providerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Insurance_providerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Insurance_providerMaxAggregateInputType;
  };

  export type GetInsurance_providerAggregateType<T extends Insurance_providerAggregateArgs> = {
    [P in keyof T & keyof AggregateInsurance_provider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsurance_provider[P]>
      : GetScalarType<T[P], AggregateInsurance_provider[P]>;
  };

  export type insurance_providerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: insurance_providerWhereInput;
    orderBy?: insurance_providerOrderByWithAggregationInput | insurance_providerOrderByWithAggregationInput[];
    by: Insurance_providerScalarFieldEnum[] | Insurance_providerScalarFieldEnum;
    having?: insurance_providerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Insurance_providerCountAggregateInputType | true;
    _min?: Insurance_providerMinAggregateInputType;
    _max?: Insurance_providerMaxAggregateInputType;
  };

  export type Insurance_providerGroupByOutputType = {
    id: string;
    name: string;
    address: string | null;
    phone_number: string | null;
    website: string | null;
    coverage_details: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Insurance_providerCountAggregateOutputType | null;
    _min: Insurance_providerMinAggregateOutputType | null;
    _max: Insurance_providerMaxAggregateOutputType | null;
  };

  type GetInsurance_providerGroupByPayload<T extends insurance_providerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Insurance_providerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Insurance_providerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Insurance_providerGroupByOutputType[P]>
          : GetScalarType<T[P], Insurance_providerGroupByOutputType[P]>;
      }
    >
  >;

  export type insurance_providerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        address?: boolean;
        phone_number?: boolean;
        website?: boolean;
        coverage_details?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        patient?: boolean | insurance_provider$patientArgs<ExtArgs>;
        _count?: boolean | Insurance_providerCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['insurance_provider']
    >;

  export type insurance_providerSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
    phone_number?: boolean;
    website?: boolean;
    coverage_details?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type insurance_providerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | insurance_provider$patientArgs<ExtArgs>;
    _count?: boolean | Insurance_providerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $insurance_providerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'insurance_provider';
    objects: {
      patient: Prisma.$patientPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        address: string | null;
        phone_number: string | null;
        website: string | null;
        coverage_details: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['insurance_provider']
    >;
    composites: {};
  };

  type insurance_providerGetPayload<S extends boolean | null | undefined | insurance_providerDefaultArgs> =
    $Result.GetResult<Prisma.$insurance_providerPayload, S>;

  type insurance_providerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    insurance_providerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Insurance_providerCountAggregateInputType | true;
  };

  export interface insurance_providerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['insurance_provider'];
      meta: { name: 'insurance_provider' };
    };
    /**
     * Find zero or one Insurance_provider that matches the filter.
     * @param {insurance_providerFindUniqueArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends insurance_providerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerFindUniqueArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Insurance_provider that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {insurance_providerFindUniqueOrThrowArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends insurance_providerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Insurance_provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindFirstArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends insurance_providerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindFirstArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Insurance_provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindFirstOrThrowArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends insurance_providerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Insurance_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insurance_providers
     * const insurance_providers = await prisma.insurance_provider.findMany()
     *
     * // Get first 10 Insurance_providers
     * const insurance_providers = await prisma.insurance_provider.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const insurance_providerWithIdOnly = await prisma.insurance_provider.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends insurance_providerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Insurance_provider.
     * @param {insurance_providerCreateArgs} args - Arguments to create a Insurance_provider.
     * @example
     * // Create one Insurance_provider
     * const Insurance_provider = await prisma.insurance_provider.create({
     *   data: {
     *     // ... data to create a Insurance_provider
     *   }
     * })
     *
     **/
    create<T extends insurance_providerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerCreateArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Insurance_providers.
     *     @param {insurance_providerCreateManyArgs} args - Arguments to create many Insurance_providers.
     *     @example
     *     // Create many Insurance_providers
     *     const insurance_provider = await prisma.insurance_provider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends insurance_providerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Insurance_provider.
     * @param {insurance_providerDeleteArgs} args - Arguments to delete one Insurance_provider.
     * @example
     * // Delete one Insurance_provider
     * const Insurance_provider = await prisma.insurance_provider.delete({
     *   where: {
     *     // ... filter to delete one Insurance_provider
     *   }
     * })
     *
     **/
    delete<T extends insurance_providerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerDeleteArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Insurance_provider.
     * @param {insurance_providerUpdateArgs} args - Arguments to update one Insurance_provider.
     * @example
     * // Update one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends insurance_providerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpdateArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Insurance_providers.
     * @param {insurance_providerDeleteManyArgs} args - Arguments to filter Insurance_providers to delete.
     * @example
     * // Delete a few Insurance_providers
     * const { count } = await prisma.insurance_provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends insurance_providerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Insurance_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insurance_providers
     * const insurance_provider = await prisma.insurance_provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends insurance_providerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Insurance_provider.
     * @param {insurance_providerUpsertArgs} args - Arguments to update or create a Insurance_provider.
     * @example
     * // Update or create a Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.upsert({
     *   create: {
     *     // ... data to create a Insurance_provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insurance_provider we want to update
     *   }
     * })
     **/
    upsert<T extends insurance_providerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpsertArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Insurance_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerCountArgs} args - Arguments to filter Insurance_providers to count.
     * @example
     * // Count the number of Insurance_providers
     * const count = await prisma.insurance_provider.count({
     *   where: {
     *     // ... the filter for the Insurance_providers we want to count
     *   }
     * })
     **/
    count<T extends insurance_providerCountArgs>(
      args?: Subset<T, insurance_providerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Insurance_providerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Insurance_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Insurance_providerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Insurance_providerAggregateArgs>(
      args: Subset<T, Insurance_providerAggregateArgs>,
    ): Prisma.PrismaPromise<GetInsurance_providerAggregateType<T>>;

    /**
     * Group by Insurance_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends insurance_providerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: insurance_providerGroupByArgs['orderBy'] }
        : { orderBy?: insurance_providerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, insurance_providerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInsurance_providerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the insurance_provider model
     */
    readonly fields: insurance_providerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for insurance_provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__insurance_providerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    patient<T extends insurance_provider$patientArgs<ExtArgs> = {}>(
      args?: Subset<T, insurance_provider$patientArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the insurance_provider model
   */
  interface insurance_providerFieldRefs {
    readonly id: FieldRef<'insurance_provider', 'String'>;
    readonly name: FieldRef<'insurance_provider', 'String'>;
    readonly address: FieldRef<'insurance_provider', 'String'>;
    readonly phone_number: FieldRef<'insurance_provider', 'String'>;
    readonly website: FieldRef<'insurance_provider', 'String'>;
    readonly coverage_details: FieldRef<'insurance_provider', 'String'>;
    readonly created_at: FieldRef<'insurance_provider', 'DateTime'>;
    readonly updated_at: FieldRef<'insurance_provider', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * insurance_provider findUnique
   */
  export type insurance_providerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider findUniqueOrThrow
   */
  export type insurance_providerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider findFirst
   */
  export type insurance_providerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of insurance_providers.
     */
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider findFirstOrThrow
   */
  export type insurance_providerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of insurance_providers.
     */
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider findMany
   */
  export type insurance_providerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_providers to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider create
   */
  export type insurance_providerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The data needed to create a insurance_provider.
     */
    data: XOR<insurance_providerCreateInput, insurance_providerUncheckedCreateInput>;
  };

  /**
   * insurance_provider createMany
   */
  export type insurance_providerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many insurance_providers.
     */
    data: insurance_providerCreateManyInput | insurance_providerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * insurance_provider update
   */
  export type insurance_providerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The data needed to update a insurance_provider.
     */
    data: XOR<insurance_providerUpdateInput, insurance_providerUncheckedUpdateInput>;
    /**
     * Choose, which insurance_provider to update.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider updateMany
   */
  export type insurance_providerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update insurance_providers.
     */
    data: XOR<insurance_providerUpdateManyMutationInput, insurance_providerUncheckedUpdateManyInput>;
    /**
     * Filter which insurance_providers to update
     */
    where?: insurance_providerWhereInput;
  };

  /**
   * insurance_provider upsert
   */
  export type insurance_providerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The filter to search for the insurance_provider to update in case it exists.
     */
    where: insurance_providerWhereUniqueInput;
    /**
     * In case the insurance_provider found by the `where` argument doesn't exist, create a new insurance_provider with this data.
     */
    create: XOR<insurance_providerCreateInput, insurance_providerUncheckedCreateInput>;
    /**
     * In case the insurance_provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<insurance_providerUpdateInput, insurance_providerUncheckedUpdateInput>;
  };

  /**
   * insurance_provider delete
   */
  export type insurance_providerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter which insurance_provider to delete.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider deleteMany
   */
  export type insurance_providerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insurance_providers to delete
     */
    where?: insurance_providerWhereInput;
  };

  /**
   * insurance_provider.patient
   */
  export type insurance_provider$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    where?: patientWhereInput;
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    cursor?: patientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * insurance_provider without action
   */
  export type insurance_providerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        tenant_id?: boolean;
        healthcare_provider?: boolean | organization$healthcare_providerArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    healthcare_provider?: boolean | organization$healthcare_providerArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      healthcare_provider: Prisma.$healthcare_providerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    healthcare_provider<T extends organization$healthcare_providerArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$healthcare_providerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.healthcare_provider
   */
  export type organization$healthcare_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the healthcare_provider
       */
      select?: healthcare_providerSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: healthcare_providerInclude<ExtArgs> | null;
      where?: healthcare_providerWhereInput;
      orderBy?: healthcare_providerOrderByWithRelationInput | healthcare_providerOrderByWithRelationInput[];
      cursor?: healthcare_providerWhereUniqueInput;
      take?: number;
      skip?: number;
      distinct?: Healthcare_providerScalarFieldEnum | Healthcare_providerScalarFieldEnum[];
    };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
  };

  export type PatientMinAggregateOutputType = {
    id: string | null;
    medical_history: string | null;
    insurance_provider_id: string | null;
    user_id: string | null;
    preferred_healthcare_provider_id: string | null;
    emergency_contact: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PatientMaxAggregateOutputType = {
    id: string | null;
    medical_history: string | null;
    insurance_provider_id: string | null;
    user_id: string | null;
    preferred_healthcare_provider_id: string | null;
    emergency_contact: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PatientCountAggregateOutputType = {
    id: number;
    medical_history: number;
    insurance_provider_id: number;
    user_id: number;
    preferred_healthcare_provider_id: number;
    emergency_contact: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PatientMinAggregateInputType = {
    id?: true;
    medical_history?: true;
    insurance_provider_id?: true;
    user_id?: true;
    preferred_healthcare_provider_id?: true;
    emergency_contact?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PatientMaxAggregateInputType = {
    id?: true;
    medical_history?: true;
    insurance_provider_id?: true;
    user_id?: true;
    preferred_healthcare_provider_id?: true;
    emergency_contact?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PatientCountAggregateInputType = {
    id?: true;
    medical_history?: true;
    insurance_provider_id?: true;
    user_id?: true;
    preferred_healthcare_provider_id?: true;
    emergency_contact?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient to aggregate.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned patients
     **/
    _count?: true | PatientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PatientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PatientMaxAggregateInputType;
  };

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
    [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>;
  };

  export type patientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientWhereInput;
    orderBy?: patientOrderByWithAggregationInput | patientOrderByWithAggregationInput[];
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum;
    having?: patientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientCountAggregateInputType | true;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
  };

  export type PatientGroupByOutputType = {
    id: string;
    medical_history: string | null;
    insurance_provider_id: string;
    user_id: string;
    preferred_healthcare_provider_id: string;
    emergency_contact: string | null;
    created_at: Date;
    updated_at: Date;
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
  };

  type GetPatientGroupByPayload<T extends patientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PatientGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
          : GetScalarType<T[P], PatientGroupByOutputType[P]>;
      }
    >
  >;

  export type patientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      medical_history?: boolean;
      insurance_provider_id?: boolean;
      user_id?: boolean;
      preferred_healthcare_provider_id?: boolean;
      emergency_contact?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      appointment?: boolean | patient$appointmentArgs<ExtArgs>;
      insurance_provider?: boolean | insurance_providerDefaultArgs<ExtArgs>;
      healthcare_provider?: boolean | healthcare_providerDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['patient']
  >;

  export type patientSelectScalar = {
    id?: boolean;
    medical_history?: boolean;
    insurance_provider_id?: boolean;
    user_id?: boolean;
    preferred_healthcare_provider_id?: boolean;
    emergency_contact?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type patientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | patient$appointmentArgs<ExtArgs>;
    insurance_provider?: boolean | insurance_providerDefaultArgs<ExtArgs>;
    healthcare_provider?: boolean | healthcare_providerDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $patientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'patient';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      insurance_provider: Prisma.$insurance_providerPayload<ExtArgs>;
      healthcare_provider: Prisma.$healthcare_providerPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        medical_history: string | null;
        insurance_provider_id: string;
        user_id: string;
        preferred_healthcare_provider_id: string;
        emergency_contact: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['patient']
    >;
    composites: {};
  };

  type patientGetPayload<S extends boolean | null | undefined | patientDefaultArgs> = $Result.GetResult<
    Prisma.$patientPayload,
    S
  >;

  type patientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    patientFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PatientCountAggregateInputType | true;
  };

  export interface patientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patient']; meta: { name: 'patient' } };
    /**
     * Find zero or one Patient that matches the filter.
     * @param {patientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends patientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, patientFindUniqueArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Patient that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {patientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends patientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__patientClient<
      $Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends patientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindFirstArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends patientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     *
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends patientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Patient.
     * @param {patientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     *
     **/
    create<T extends patientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, patientCreateArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Patients.
     *     @param {patientCreateManyArgs} args - Arguments to create many Patients.
     *     @example
     *     // Create many Patients
     *     const patient = await prisma.patient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends patientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Patient.
     * @param {patientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     *
     **/
    delete<T extends patientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, patientDeleteArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Patient.
     * @param {patientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends patientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpdateArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Patients.
     * @param {patientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends patientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends patientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Patient.
     * @param {patientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     **/
    upsert<T extends patientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpsertArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
     **/
    count<T extends patientCountArgs>(
      args?: Subset<T, patientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PatientAggregateArgs>(
      args: Subset<T, PatientAggregateArgs>,
    ): Prisma.PrismaPromise<GetPatientAggregateType<T>>;

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends patientGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientGroupByArgs['orderBy'] }
        : { orderBy?: patientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, patientGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the patient model
     */
    readonly fields: patientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends patient$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, patient$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    insurance_provider<T extends insurance_providerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, insurance_providerDefaultArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    healthcare_provider<T extends healthcare_providerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, healthcare_providerDefaultArgs<ExtArgs>>,
    ): Prisma__healthcare_providerClient<
      $Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the patient model
   */
  interface patientFieldRefs {
    readonly id: FieldRef<'patient', 'String'>;
    readonly medical_history: FieldRef<'patient', 'String'>;
    readonly insurance_provider_id: FieldRef<'patient', 'String'>;
    readonly user_id: FieldRef<'patient', 'String'>;
    readonly preferred_healthcare_provider_id: FieldRef<'patient', 'String'>;
    readonly emergency_contact: FieldRef<'patient', 'String'>;
    readonly created_at: FieldRef<'patient', 'DateTime'>;
    readonly updated_at: FieldRef<'patient', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * patient findUnique
   */
  export type patientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient findUniqueOrThrow
   */
  export type patientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient findFirst
   */
  export type patientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient findFirstOrThrow
   */
  export type patientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient findMany
   */
  export type patientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patients to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient create
   */
  export type patientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The data needed to create a patient.
     */
    data: XOR<patientCreateInput, patientUncheckedCreateInput>;
  };

  /**
   * patient createMany
   */
  export type patientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * patient update
   */
  export type patientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The data needed to update a patient.
     */
    data: XOR<patientUpdateInput, patientUncheckedUpdateInput>;
    /**
     * Choose, which patient to update.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient updateMany
   */
  export type patientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>;
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput;
  };

  /**
   * patient upsert
   */
  export type patientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The filter to search for the patient to update in case it exists.
     */
    where: patientWhereUniqueInput;
    /**
     * In case the patient found by the `where` argument doesn't exist, create a new patient with this data.
     */
    create: XOR<patientCreateInput, patientUncheckedCreateInput>;
    /**
     * In case the patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientUpdateInput, patientUncheckedUpdateInput>;
  };

  /**
   * patient delete
   */
  export type patientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter which patient to delete.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient deleteMany
   */
  export type patientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientWhereInput;
  };

  /**
   * patient.appointment
   */
  export type patient$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * patient without action
   */
  export type patientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      healthcare_provider?: boolean | user$healthcare_providerArgs<ExtArgs>;
      patient?: boolean | user$patientArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    healthcare_provider?: boolean | user$healthcare_providerArgs<ExtArgs>;
    patient?: boolean | user$patientArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      healthcare_provider: Prisma.$healthcare_providerPayload<ExtArgs>[];
      patient: Prisma.$patientPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    healthcare_provider<T extends user$healthcare_providerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$healthcare_providerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$healthcare_providerPayload<ExtArgs>, T, 'findMany'> | Null>;

    patient<T extends user$patientArgs<ExtArgs> = {}>(
      args?: Subset<T, user$patientArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.healthcare_provider
   */
  export type user$healthcare_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the healthcare_provider
     */
    select?: healthcare_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: healthcare_providerInclude<ExtArgs> | null;
    where?: healthcare_providerWhereInput;
    orderBy?: healthcare_providerOrderByWithRelationInput | healthcare_providerOrderByWithRelationInput[];
    cursor?: healthcare_providerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Healthcare_providerScalarFieldEnum | Healthcare_providerScalarFieldEnum[];
  };

  /**
   * user.patient
   */
  export type user$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    where?: patientWhereInput;
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    cursor?: patientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AppointmentScalarFieldEnum: {
    id: 'id';
    patient_id: 'patient_id';
    healthcare_provider_id: 'healthcare_provider_id';
    appointment_date: 'appointment_date';
    reason_for_visit: 'reason_for_visit';
    appointment_status: 'appointment_status';
    notes: 'notes';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];

  export const Healthcare_providerScalarFieldEnum: {
    id: 'id';
    specialty: 'specialty';
    license_number: 'license_number';
    years_of_experience: 'years_of_experience';
    user_id: 'user_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Healthcare_providerScalarFieldEnum =
    (typeof Healthcare_providerScalarFieldEnum)[keyof typeof Healthcare_providerScalarFieldEnum];

  export const Insurance_providerScalarFieldEnum: {
    id: 'id';
    name: 'name';
    address: 'address';
    phone_number: 'phone_number';
    website: 'website';
    coverage_details: 'coverage_details';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Insurance_providerScalarFieldEnum =
    (typeof Insurance_providerScalarFieldEnum)[keyof typeof Insurance_providerScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const PatientScalarFieldEnum: {
    id: 'id';
    medical_history: 'medical_history';
    insurance_provider_id: 'insurance_provider_id';
    user_id: 'user_id';
    preferred_healthcare_provider_id: 'preferred_healthcare_provider_id';
    emergency_contact: 'emergency_contact';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type appointmentWhereInput = {
    AND?: appointmentWhereInput | appointmentWhereInput[];
    OR?: appointmentWhereInput[];
    NOT?: appointmentWhereInput | appointmentWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    patient_id?: UuidFilter<'appointment'> | string;
    healthcare_provider_id?: UuidFilter<'appointment'> | string;
    appointment_date?: DateTimeNullableFilter<'appointment'> | Date | string | null;
    reason_for_visit?: StringNullableFilter<'appointment'> | string | null;
    appointment_status?: StringNullableFilter<'appointment'> | string | null;
    notes?: StringNullableFilter<'appointment'> | string | null;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
    healthcare_provider?: XOR<Healthcare_providerRelationFilter, healthcare_providerWhereInput>;
    patient?: XOR<PatientRelationFilter, patientWhereInput>;
  };

  export type appointmentOrderByWithRelationInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    healthcare_provider_id?: SortOrder;
    appointment_date?: SortOrderInput | SortOrder;
    reason_for_visit?: SortOrderInput | SortOrder;
    appointment_status?: SortOrderInput | SortOrder;
    notes?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    healthcare_provider?: healthcare_providerOrderByWithRelationInput;
    patient?: patientOrderByWithRelationInput;
  };

  export type appointmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: appointmentWhereInput | appointmentWhereInput[];
      OR?: appointmentWhereInput[];
      NOT?: appointmentWhereInput | appointmentWhereInput[];
      patient_id?: UuidFilter<'appointment'> | string;
      healthcare_provider_id?: UuidFilter<'appointment'> | string;
      appointment_date?: DateTimeNullableFilter<'appointment'> | Date | string | null;
      reason_for_visit?: StringNullableFilter<'appointment'> | string | null;
      appointment_status?: StringNullableFilter<'appointment'> | string | null;
      notes?: StringNullableFilter<'appointment'> | string | null;
      created_at?: DateTimeFilter<'appointment'> | Date | string;
      updated_at?: DateTimeFilter<'appointment'> | Date | string;
      healthcare_provider?: XOR<Healthcare_providerRelationFilter, healthcare_providerWhereInput>;
      patient?: XOR<PatientRelationFilter, patientWhereInput>;
    },
    'id'
  >;

  export type appointmentOrderByWithAggregationInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    healthcare_provider_id?: SortOrder;
    appointment_date?: SortOrderInput | SortOrder;
    reason_for_visit?: SortOrderInput | SortOrder;
    appointment_status?: SortOrderInput | SortOrder;
    notes?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: appointmentCountOrderByAggregateInput;
    _max?: appointmentMaxOrderByAggregateInput;
    _min?: appointmentMinOrderByAggregateInput;
  };

  export type appointmentScalarWhereWithAggregatesInput = {
    AND?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    OR?: appointmentScalarWhereWithAggregatesInput[];
    NOT?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'appointment'> | string;
    patient_id?: UuidWithAggregatesFilter<'appointment'> | string;
    healthcare_provider_id?: UuidWithAggregatesFilter<'appointment'> | string;
    appointment_date?: DateTimeNullableWithAggregatesFilter<'appointment'> | Date | string | null;
    reason_for_visit?: StringNullableWithAggregatesFilter<'appointment'> | string | null;
    appointment_status?: StringNullableWithAggregatesFilter<'appointment'> | string | null;
    notes?: StringNullableWithAggregatesFilter<'appointment'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
  };

  export type healthcare_providerWhereInput = {
    AND?: healthcare_providerWhereInput | healthcare_providerWhereInput[];
    OR?: healthcare_providerWhereInput[];
    NOT?: healthcare_providerWhereInput | healthcare_providerWhereInput[];
    id?: UuidFilter<'healthcare_provider'> | string;
    specialty?: StringNullableFilter<'healthcare_provider'> | string | null;
    license_number?: StringNullableFilter<'healthcare_provider'> | string | null;
    years_of_experience?: IntNullableFilter<'healthcare_provider'> | number | null;
    user_id?: UuidFilter<'healthcare_provider'> | string;
    organization_id?: UuidFilter<'healthcare_provider'> | string;
    created_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
    updated_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    patient?: PatientListRelationFilter;
  };

  export type healthcare_providerOrderByWithRelationInput = {
    id?: SortOrder;
    specialty?: SortOrderInput | SortOrder;
    license_number?: SortOrderInput | SortOrder;
    years_of_experience?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    patient?: patientOrderByRelationAggregateInput;
  };

  export type healthcare_providerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: healthcare_providerWhereInput | healthcare_providerWhereInput[];
      OR?: healthcare_providerWhereInput[];
      NOT?: healthcare_providerWhereInput | healthcare_providerWhereInput[];
      specialty?: StringNullableFilter<'healthcare_provider'> | string | null;
      license_number?: StringNullableFilter<'healthcare_provider'> | string | null;
      years_of_experience?: IntNullableFilter<'healthcare_provider'> | number | null;
      user_id?: UuidFilter<'healthcare_provider'> | string;
      organization_id?: UuidFilter<'healthcare_provider'> | string;
      created_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
      updated_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      patient?: PatientListRelationFilter;
    },
    'id'
  >;

  export type healthcare_providerOrderByWithAggregationInput = {
    id?: SortOrder;
    specialty?: SortOrderInput | SortOrder;
    license_number?: SortOrderInput | SortOrder;
    years_of_experience?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: healthcare_providerCountOrderByAggregateInput;
    _avg?: healthcare_providerAvgOrderByAggregateInput;
    _max?: healthcare_providerMaxOrderByAggregateInput;
    _min?: healthcare_providerMinOrderByAggregateInput;
    _sum?: healthcare_providerSumOrderByAggregateInput;
  };

  export type healthcare_providerScalarWhereWithAggregatesInput = {
    AND?: healthcare_providerScalarWhereWithAggregatesInput | healthcare_providerScalarWhereWithAggregatesInput[];
    OR?: healthcare_providerScalarWhereWithAggregatesInput[];
    NOT?: healthcare_providerScalarWhereWithAggregatesInput | healthcare_providerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'healthcare_provider'> | string;
    specialty?: StringNullableWithAggregatesFilter<'healthcare_provider'> | string | null;
    license_number?: StringNullableWithAggregatesFilter<'healthcare_provider'> | string | null;
    years_of_experience?: IntNullableWithAggregatesFilter<'healthcare_provider'> | number | null;
    user_id?: UuidWithAggregatesFilter<'healthcare_provider'> | string;
    organization_id?: UuidWithAggregatesFilter<'healthcare_provider'> | string;
    created_at?: DateTimeWithAggregatesFilter<'healthcare_provider'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'healthcare_provider'> | Date | string;
  };

  export type insurance_providerWhereInput = {
    AND?: insurance_providerWhereInput | insurance_providerWhereInput[];
    OR?: insurance_providerWhereInput[];
    NOT?: insurance_providerWhereInput | insurance_providerWhereInput[];
    id?: UuidFilter<'insurance_provider'> | string;
    name?: StringFilter<'insurance_provider'> | string;
    address?: StringNullableFilter<'insurance_provider'> | string | null;
    phone_number?: StringNullableFilter<'insurance_provider'> | string | null;
    website?: StringNullableFilter<'insurance_provider'> | string | null;
    coverage_details?: StringNullableFilter<'insurance_provider'> | string | null;
    created_at?: DateTimeFilter<'insurance_provider'> | Date | string;
    updated_at?: DateTimeFilter<'insurance_provider'> | Date | string;
    patient?: PatientListRelationFilter;
  };

  export type insurance_providerOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    coverage_details?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    patient?: patientOrderByRelationAggregateInput;
  };

  export type insurance_providerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: insurance_providerWhereInput | insurance_providerWhereInput[];
      OR?: insurance_providerWhereInput[];
      NOT?: insurance_providerWhereInput | insurance_providerWhereInput[];
      name?: StringFilter<'insurance_provider'> | string;
      address?: StringNullableFilter<'insurance_provider'> | string | null;
      phone_number?: StringNullableFilter<'insurance_provider'> | string | null;
      website?: StringNullableFilter<'insurance_provider'> | string | null;
      coverage_details?: StringNullableFilter<'insurance_provider'> | string | null;
      created_at?: DateTimeFilter<'insurance_provider'> | Date | string;
      updated_at?: DateTimeFilter<'insurance_provider'> | Date | string;
      patient?: PatientListRelationFilter;
    },
    'id'
  >;

  export type insurance_providerOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    coverage_details?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: insurance_providerCountOrderByAggregateInput;
    _max?: insurance_providerMaxOrderByAggregateInput;
    _min?: insurance_providerMinOrderByAggregateInput;
  };

  export type insurance_providerScalarWhereWithAggregatesInput = {
    AND?: insurance_providerScalarWhereWithAggregatesInput | insurance_providerScalarWhereWithAggregatesInput[];
    OR?: insurance_providerScalarWhereWithAggregatesInput[];
    NOT?: insurance_providerScalarWhereWithAggregatesInput | insurance_providerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'insurance_provider'> | string;
    name?: StringWithAggregatesFilter<'insurance_provider'> | string;
    address?: StringNullableWithAggregatesFilter<'insurance_provider'> | string | null;
    phone_number?: StringNullableWithAggregatesFilter<'insurance_provider'> | string | null;
    website?: StringNullableWithAggregatesFilter<'insurance_provider'> | string | null;
    coverage_details?: StringNullableWithAggregatesFilter<'insurance_provider'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'insurance_provider'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'insurance_provider'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    tenant_id?: StringFilter<'organization'> | string;
    healthcare_provider?: Healthcare_providerListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    healthcare_provider?: healthcare_providerOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      tenant_id?: StringFilter<'organization'> | string;
      healthcare_provider?: Healthcare_providerListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type patientWhereInput = {
    AND?: patientWhereInput | patientWhereInput[];
    OR?: patientWhereInput[];
    NOT?: patientWhereInput | patientWhereInput[];
    id?: UuidFilter<'patient'> | string;
    medical_history?: StringNullableFilter<'patient'> | string | null;
    insurance_provider_id?: UuidFilter<'patient'> | string;
    user_id?: UuidFilter<'patient'> | string;
    preferred_healthcare_provider_id?: UuidFilter<'patient'> | string;
    emergency_contact?: StringNullableFilter<'patient'> | string | null;
    created_at?: DateTimeFilter<'patient'> | Date | string;
    updated_at?: DateTimeFilter<'patient'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    insurance_provider?: XOR<Insurance_providerRelationFilter, insurance_providerWhereInput>;
    healthcare_provider?: XOR<Healthcare_providerRelationFilter, healthcare_providerWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type patientOrderByWithRelationInput = {
    id?: SortOrder;
    medical_history?: SortOrderInput | SortOrder;
    insurance_provider_id?: SortOrder;
    user_id?: SortOrder;
    preferred_healthcare_provider_id?: SortOrder;
    emergency_contact?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    insurance_provider?: insurance_providerOrderByWithRelationInput;
    healthcare_provider?: healthcare_providerOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type patientWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: patientWhereInput | patientWhereInput[];
      OR?: patientWhereInput[];
      NOT?: patientWhereInput | patientWhereInput[];
      medical_history?: StringNullableFilter<'patient'> | string | null;
      insurance_provider_id?: UuidFilter<'patient'> | string;
      user_id?: UuidFilter<'patient'> | string;
      preferred_healthcare_provider_id?: UuidFilter<'patient'> | string;
      emergency_contact?: StringNullableFilter<'patient'> | string | null;
      created_at?: DateTimeFilter<'patient'> | Date | string;
      updated_at?: DateTimeFilter<'patient'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      insurance_provider?: XOR<Insurance_providerRelationFilter, insurance_providerWhereInput>;
      healthcare_provider?: XOR<Healthcare_providerRelationFilter, healthcare_providerWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type patientOrderByWithAggregationInput = {
    id?: SortOrder;
    medical_history?: SortOrderInput | SortOrder;
    insurance_provider_id?: SortOrder;
    user_id?: SortOrder;
    preferred_healthcare_provider_id?: SortOrder;
    emergency_contact?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: patientCountOrderByAggregateInput;
    _max?: patientMaxOrderByAggregateInput;
    _min?: patientMinOrderByAggregateInput;
  };

  export type patientScalarWhereWithAggregatesInput = {
    AND?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[];
    OR?: patientScalarWhereWithAggregatesInput[];
    NOT?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'patient'> | string;
    medical_history?: StringNullableWithAggregatesFilter<'patient'> | string | null;
    insurance_provider_id?: UuidWithAggregatesFilter<'patient'> | string;
    user_id?: UuidWithAggregatesFilter<'patient'> | string;
    preferred_healthcare_provider_id?: UuidWithAggregatesFilter<'patient'> | string;
    emergency_contact?: StringNullableWithAggregatesFilter<'patient'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'patient'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'patient'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    healthcare_provider?: Healthcare_providerListRelationFilter;
    patient?: PatientListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    healthcare_provider?: healthcare_providerOrderByRelationAggregateInput;
    patient?: patientOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      healthcare_provider?: Healthcare_providerListRelationFilter;
      patient?: PatientListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type appointmentCreateInput = {
    id?: string;
    appointment_date?: Date | string | null;
    reason_for_visit?: string | null;
    appointment_status?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    healthcare_provider: healthcare_providerCreateNestedOneWithoutAppointmentInput;
    patient: patientCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateInput = {
    id?: string;
    patient_id: string;
    healthcare_provider_id: string;
    appointment_date?: Date | string | null;
    reason_for_visit?: string | null;
    appointment_status?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason_for_visit?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_status?: NullableStringFieldUpdateOperationsInput | string | null;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    healthcare_provider?: healthcare_providerUpdateOneRequiredWithoutAppointmentNestedInput;
    patient?: patientUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason_for_visit?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_status?: NullableStringFieldUpdateOperationsInput | string | null;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyInput = {
    id?: string;
    patient_id: string;
    healthcare_provider_id: string;
    appointment_date?: Date | string | null;
    reason_for_visit?: string | null;
    appointment_status?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason_for_visit?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_status?: NullableStringFieldUpdateOperationsInput | string | null;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason_for_visit?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_status?: NullableStringFieldUpdateOperationsInput | string | null;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type healthcare_providerCreateInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutHealthcare_providerInput;
    organization: organizationCreateNestedOneWithoutHealthcare_providerInput;
    user: userCreateNestedOneWithoutHealthcare_providerInput;
    patient?: patientCreateNestedManyWithoutHealthcare_providerInput;
  };

  export type healthcare_providerUncheckedCreateInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutHealthcare_providerInput;
    patient?: patientUncheckedCreateNestedManyWithoutHealthcare_providerInput;
  };

  export type healthcare_providerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutHealthcare_providerNestedInput;
    organization?: organizationUpdateOneRequiredWithoutHealthcare_providerNestedInput;
    user?: userUpdateOneRequiredWithoutHealthcare_providerNestedInput;
    patient?: patientUpdateManyWithoutHealthcare_providerNestedInput;
  };

  export type healthcare_providerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutHealthcare_providerNestedInput;
    patient?: patientUncheckedUpdateManyWithoutHealthcare_providerNestedInput;
  };

  export type healthcare_providerCreateManyInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type healthcare_providerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type healthcare_providerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerCreateInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    coverage_details?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    patient?: patientCreateNestedManyWithoutInsurance_providerInput;
  };

  export type insurance_providerUncheckedCreateInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    coverage_details?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    patient?: patientUncheckedCreateNestedManyWithoutInsurance_providerInput;
  };

  export type insurance_providerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    coverage_details?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: patientUpdateManyWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    coverage_details?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: patientUncheckedUpdateManyWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerCreateManyInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    coverage_details?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type insurance_providerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    coverage_details?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    coverage_details?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    healthcare_provider?: healthcare_providerCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    healthcare_provider?: healthcare_providerUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider?: healthcare_providerUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider?: healthcare_providerUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type patientCreateInput = {
    id?: string;
    medical_history?: string | null;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutPatientInput;
    insurance_provider: insurance_providerCreateNestedOneWithoutPatientInput;
    healthcare_provider: healthcare_providerCreateNestedOneWithoutPatientInput;
    user: userCreateNestedOneWithoutPatientInput;
  };

  export type patientUncheckedCreateInput = {
    id?: string;
    medical_history?: string | null;
    insurance_provider_id: string;
    user_id: string;
    preferred_healthcare_provider_id: string;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput;
  };

  export type patientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutPatientNestedInput;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutPatientNestedInput;
    healthcare_provider?: healthcare_providerUpdateOneRequiredWithoutPatientNestedInput;
    user?: userUpdateOneRequiredWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    preferred_healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput;
  };

  export type patientCreateManyInput = {
    id?: string;
    medical_history?: string | null;
    insurance_provider_id: string;
    user_id: string;
    preferred_healthcare_provider_id: string;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    preferred_healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    healthcare_provider?: healthcare_providerCreateNestedManyWithoutUserInput;
    patient?: patientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    healthcare_provider?: healthcare_providerUncheckedCreateNestedManyWithoutUserInput;
    patient?: patientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    healthcare_provider?: healthcare_providerUpdateManyWithoutUserNestedInput;
    patient?: patientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    healthcare_provider?: healthcare_providerUncheckedUpdateManyWithoutUserNestedInput;
    patient?: patientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type Healthcare_providerRelationFilter = {
    is?: healthcare_providerWhereInput;
    isNot?: healthcare_providerWhereInput;
  };

  export type PatientRelationFilter = {
    is?: patientWhereInput;
    isNot?: patientWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type appointmentCountOrderByAggregateInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    healthcare_provider_id?: SortOrder;
    appointment_date?: SortOrder;
    reason_for_visit?: SortOrder;
    appointment_status?: SortOrder;
    notes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    healthcare_provider_id?: SortOrder;
    appointment_date?: SortOrder;
    reason_for_visit?: SortOrder;
    appointment_status?: SortOrder;
    notes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMinOrderByAggregateInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    healthcare_provider_id?: SortOrder;
    appointment_date?: SortOrder;
    reason_for_visit?: SortOrder;
    appointment_status?: SortOrder;
    notes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type AppointmentListRelationFilter = {
    every?: appointmentWhereInput;
    some?: appointmentWhereInput;
    none?: appointmentWhereInput;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type PatientListRelationFilter = {
    every?: patientWhereInput;
    some?: patientWhereInput;
    none?: patientWhereInput;
  };

  export type appointmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type patientOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type healthcare_providerCountOrderByAggregateInput = {
    id?: SortOrder;
    specialty?: SortOrder;
    license_number?: SortOrder;
    years_of_experience?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type healthcare_providerAvgOrderByAggregateInput = {
    years_of_experience?: SortOrder;
  };

  export type healthcare_providerMaxOrderByAggregateInput = {
    id?: SortOrder;
    specialty?: SortOrder;
    license_number?: SortOrder;
    years_of_experience?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type healthcare_providerMinOrderByAggregateInput = {
    id?: SortOrder;
    specialty?: SortOrder;
    license_number?: SortOrder;
    years_of_experience?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type healthcare_providerSumOrderByAggregateInput = {
    years_of_experience?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type insurance_providerCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    website?: SortOrder;
    coverage_details?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type insurance_providerMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    website?: SortOrder;
    coverage_details?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type insurance_providerMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    website?: SortOrder;
    coverage_details?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type Healthcare_providerListRelationFilter = {
    every?: healthcare_providerWhereInput;
    some?: healthcare_providerWhereInput;
    none?: healthcare_providerWhereInput;
  };

  export type healthcare_providerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type Insurance_providerRelationFilter = {
    is?: insurance_providerWhereInput;
    isNot?: insurance_providerWhereInput;
  };

  export type patientCountOrderByAggregateInput = {
    id?: SortOrder;
    medical_history?: SortOrder;
    insurance_provider_id?: SortOrder;
    user_id?: SortOrder;
    preferred_healthcare_provider_id?: SortOrder;
    emergency_contact?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patientMaxOrderByAggregateInput = {
    id?: SortOrder;
    medical_history?: SortOrder;
    insurance_provider_id?: SortOrder;
    user_id?: SortOrder;
    preferred_healthcare_provider_id?: SortOrder;
    emergency_contact?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patientMinOrderByAggregateInput = {
    id?: SortOrder;
    medical_history?: SortOrder;
    insurance_provider_id?: SortOrder;
    user_id?: SortOrder;
    preferred_healthcare_provider_id?: SortOrder;
    emergency_contact?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type healthcare_providerCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<
      healthcare_providerCreateWithoutAppointmentInput,
      healthcare_providerUncheckedCreateWithoutAppointmentInput
    >;
    connectOrCreate?: healthcare_providerCreateOrConnectWithoutAppointmentInput;
    connect?: healthcare_providerWhereUniqueInput;
  };

  export type patientCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: patientCreateOrConnectWithoutAppointmentInput;
    connect?: patientWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type healthcare_providerUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<
      healthcare_providerCreateWithoutAppointmentInput,
      healthcare_providerUncheckedCreateWithoutAppointmentInput
    >;
    connectOrCreate?: healthcare_providerCreateOrConnectWithoutAppointmentInput;
    upsert?: healthcare_providerUpsertWithoutAppointmentInput;
    connect?: healthcare_providerWhereUniqueInput;
    update?: XOR<
      XOR<
        healthcare_providerUpdateToOneWithWhereWithoutAppointmentInput,
        healthcare_providerUpdateWithoutAppointmentInput
      >,
      healthcare_providerUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type patientUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: patientCreateOrConnectWithoutAppointmentInput;
    upsert?: patientUpsertWithoutAppointmentInput;
    connect?: patientWhereUniqueInput;
    update?: XOR<
      XOR<patientUpdateToOneWithWhereWithoutAppointmentInput, patientUpdateWithoutAppointmentInput>,
      patientUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type appointmentCreateNestedManyWithoutHealthcare_providerInput = {
    create?:
      | XOR<appointmentCreateWithoutHealthcare_providerInput, appointmentUncheckedCreateWithoutHealthcare_providerInput>
      | appointmentCreateWithoutHealthcare_providerInput[]
      | appointmentUncheckedCreateWithoutHealthcare_providerInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutHealthcare_providerInput
      | appointmentCreateOrConnectWithoutHealthcare_providerInput[];
    createMany?: appointmentCreateManyHealthcare_providerInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type organizationCreateNestedOneWithoutHealthcare_providerInput = {
    create?: XOR<
      organizationCreateWithoutHealthcare_providerInput,
      organizationUncheckedCreateWithoutHealthcare_providerInput
    >;
    connectOrCreate?: organizationCreateOrConnectWithoutHealthcare_providerInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutHealthcare_providerInput = {
    create?: XOR<userCreateWithoutHealthcare_providerInput, userUncheckedCreateWithoutHealthcare_providerInput>;
    connectOrCreate?: userCreateOrConnectWithoutHealthcare_providerInput;
    connect?: userWhereUniqueInput;
  };

  export type patientCreateNestedManyWithoutHealthcare_providerInput = {
    create?:
      | XOR<patientCreateWithoutHealthcare_providerInput, patientUncheckedCreateWithoutHealthcare_providerInput>
      | patientCreateWithoutHealthcare_providerInput[]
      | patientUncheckedCreateWithoutHealthcare_providerInput[];
    connectOrCreate?:
      | patientCreateOrConnectWithoutHealthcare_providerInput
      | patientCreateOrConnectWithoutHealthcare_providerInput[];
    createMany?: patientCreateManyHealthcare_providerInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type appointmentUncheckedCreateNestedManyWithoutHealthcare_providerInput = {
    create?:
      | XOR<appointmentCreateWithoutHealthcare_providerInput, appointmentUncheckedCreateWithoutHealthcare_providerInput>
      | appointmentCreateWithoutHealthcare_providerInput[]
      | appointmentUncheckedCreateWithoutHealthcare_providerInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutHealthcare_providerInput
      | appointmentCreateOrConnectWithoutHealthcare_providerInput[];
    createMany?: appointmentCreateManyHealthcare_providerInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type patientUncheckedCreateNestedManyWithoutHealthcare_providerInput = {
    create?:
      | XOR<patientCreateWithoutHealthcare_providerInput, patientUncheckedCreateWithoutHealthcare_providerInput>
      | patientCreateWithoutHealthcare_providerInput[]
      | patientUncheckedCreateWithoutHealthcare_providerInput[];
    connectOrCreate?:
      | patientCreateOrConnectWithoutHealthcare_providerInput
      | patientCreateOrConnectWithoutHealthcare_providerInput[];
    createMany?: patientCreateManyHealthcare_providerInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type appointmentUpdateManyWithoutHealthcare_providerNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutHealthcare_providerInput, appointmentUncheckedCreateWithoutHealthcare_providerInput>
      | appointmentCreateWithoutHealthcare_providerInput[]
      | appointmentUncheckedCreateWithoutHealthcare_providerInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutHealthcare_providerInput
      | appointmentCreateOrConnectWithoutHealthcare_providerInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutHealthcare_providerInput
      | appointmentUpsertWithWhereUniqueWithoutHealthcare_providerInput[];
    createMany?: appointmentCreateManyHealthcare_providerInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutHealthcare_providerInput
      | appointmentUpdateWithWhereUniqueWithoutHealthcare_providerInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutHealthcare_providerInput
      | appointmentUpdateManyWithWhereWithoutHealthcare_providerInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type organizationUpdateOneRequiredWithoutHealthcare_providerNestedInput = {
    create?: XOR<
      organizationCreateWithoutHealthcare_providerInput,
      organizationUncheckedCreateWithoutHealthcare_providerInput
    >;
    connectOrCreate?: organizationCreateOrConnectWithoutHealthcare_providerInput;
    upsert?: organizationUpsertWithoutHealthcare_providerInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<
        organizationUpdateToOneWithWhereWithoutHealthcare_providerInput,
        organizationUpdateWithoutHealthcare_providerInput
      >,
      organizationUncheckedUpdateWithoutHealthcare_providerInput
    >;
  };

  export type userUpdateOneRequiredWithoutHealthcare_providerNestedInput = {
    create?: XOR<userCreateWithoutHealthcare_providerInput, userUncheckedCreateWithoutHealthcare_providerInput>;
    connectOrCreate?: userCreateOrConnectWithoutHealthcare_providerInput;
    upsert?: userUpsertWithoutHealthcare_providerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutHealthcare_providerInput, userUpdateWithoutHealthcare_providerInput>,
      userUncheckedUpdateWithoutHealthcare_providerInput
    >;
  };

  export type patientUpdateManyWithoutHealthcare_providerNestedInput = {
    create?:
      | XOR<patientCreateWithoutHealthcare_providerInput, patientUncheckedCreateWithoutHealthcare_providerInput>
      | patientCreateWithoutHealthcare_providerInput[]
      | patientUncheckedCreateWithoutHealthcare_providerInput[];
    connectOrCreate?:
      | patientCreateOrConnectWithoutHealthcare_providerInput
      | patientCreateOrConnectWithoutHealthcare_providerInput[];
    upsert?:
      | patientUpsertWithWhereUniqueWithoutHealthcare_providerInput
      | patientUpsertWithWhereUniqueWithoutHealthcare_providerInput[];
    createMany?: patientCreateManyHealthcare_providerInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?:
      | patientUpdateWithWhereUniqueWithoutHealthcare_providerInput
      | patientUpdateWithWhereUniqueWithoutHealthcare_providerInput[];
    updateMany?:
      | patientUpdateManyWithWhereWithoutHealthcare_providerInput
      | patientUpdateManyWithWhereWithoutHealthcare_providerInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type appointmentUncheckedUpdateManyWithoutHealthcare_providerNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutHealthcare_providerInput, appointmentUncheckedCreateWithoutHealthcare_providerInput>
      | appointmentCreateWithoutHealthcare_providerInput[]
      | appointmentUncheckedCreateWithoutHealthcare_providerInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutHealthcare_providerInput
      | appointmentCreateOrConnectWithoutHealthcare_providerInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutHealthcare_providerInput
      | appointmentUpsertWithWhereUniqueWithoutHealthcare_providerInput[];
    createMany?: appointmentCreateManyHealthcare_providerInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutHealthcare_providerInput
      | appointmentUpdateWithWhereUniqueWithoutHealthcare_providerInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutHealthcare_providerInput
      | appointmentUpdateManyWithWhereWithoutHealthcare_providerInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type patientUncheckedUpdateManyWithoutHealthcare_providerNestedInput = {
    create?:
      | XOR<patientCreateWithoutHealthcare_providerInput, patientUncheckedCreateWithoutHealthcare_providerInput>
      | patientCreateWithoutHealthcare_providerInput[]
      | patientUncheckedCreateWithoutHealthcare_providerInput[];
    connectOrCreate?:
      | patientCreateOrConnectWithoutHealthcare_providerInput
      | patientCreateOrConnectWithoutHealthcare_providerInput[];
    upsert?:
      | patientUpsertWithWhereUniqueWithoutHealthcare_providerInput
      | patientUpsertWithWhereUniqueWithoutHealthcare_providerInput[];
    createMany?: patientCreateManyHealthcare_providerInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?:
      | patientUpdateWithWhereUniqueWithoutHealthcare_providerInput
      | patientUpdateWithWhereUniqueWithoutHealthcare_providerInput[];
    updateMany?:
      | patientUpdateManyWithWhereWithoutHealthcare_providerInput
      | patientUpdateManyWithWhereWithoutHealthcare_providerInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type patientCreateNestedManyWithoutInsurance_providerInput = {
    create?:
      | XOR<patientCreateWithoutInsurance_providerInput, patientUncheckedCreateWithoutInsurance_providerInput>
      | patientCreateWithoutInsurance_providerInput[]
      | patientUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | patientCreateOrConnectWithoutInsurance_providerInput
      | patientCreateOrConnectWithoutInsurance_providerInput[];
    createMany?: patientCreateManyInsurance_providerInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type patientUncheckedCreateNestedManyWithoutInsurance_providerInput = {
    create?:
      | XOR<patientCreateWithoutInsurance_providerInput, patientUncheckedCreateWithoutInsurance_providerInput>
      | patientCreateWithoutInsurance_providerInput[]
      | patientUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | patientCreateOrConnectWithoutInsurance_providerInput
      | patientCreateOrConnectWithoutInsurance_providerInput[];
    createMany?: patientCreateManyInsurance_providerInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type patientUpdateManyWithoutInsurance_providerNestedInput = {
    create?:
      | XOR<patientCreateWithoutInsurance_providerInput, patientUncheckedCreateWithoutInsurance_providerInput>
      | patientCreateWithoutInsurance_providerInput[]
      | patientUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | patientCreateOrConnectWithoutInsurance_providerInput
      | patientCreateOrConnectWithoutInsurance_providerInput[];
    upsert?:
      | patientUpsertWithWhereUniqueWithoutInsurance_providerInput
      | patientUpsertWithWhereUniqueWithoutInsurance_providerInput[];
    createMany?: patientCreateManyInsurance_providerInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?:
      | patientUpdateWithWhereUniqueWithoutInsurance_providerInput
      | patientUpdateWithWhereUniqueWithoutInsurance_providerInput[];
    updateMany?:
      | patientUpdateManyWithWhereWithoutInsurance_providerInput
      | patientUpdateManyWithWhereWithoutInsurance_providerInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type patientUncheckedUpdateManyWithoutInsurance_providerNestedInput = {
    create?:
      | XOR<patientCreateWithoutInsurance_providerInput, patientUncheckedCreateWithoutInsurance_providerInput>
      | patientCreateWithoutInsurance_providerInput[]
      | patientUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | patientCreateOrConnectWithoutInsurance_providerInput
      | patientCreateOrConnectWithoutInsurance_providerInput[];
    upsert?:
      | patientUpsertWithWhereUniqueWithoutInsurance_providerInput
      | patientUpsertWithWhereUniqueWithoutInsurance_providerInput[];
    createMany?: patientCreateManyInsurance_providerInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?:
      | patientUpdateWithWhereUniqueWithoutInsurance_providerInput
      | patientUpdateWithWhereUniqueWithoutInsurance_providerInput[];
    updateMany?:
      | patientUpdateManyWithWhereWithoutInsurance_providerInput
      | patientUpdateManyWithWhereWithoutInsurance_providerInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type healthcare_providerCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          healthcare_providerCreateWithoutOrganizationInput,
          healthcare_providerUncheckedCreateWithoutOrganizationInput
        >
      | healthcare_providerCreateWithoutOrganizationInput[]
      | healthcare_providerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutOrganizationInput
      | healthcare_providerCreateOrConnectWithoutOrganizationInput[];
    createMany?: healthcare_providerCreateManyOrganizationInputEnvelope;
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
  };

  export type healthcare_providerUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          healthcare_providerCreateWithoutOrganizationInput,
          healthcare_providerUncheckedCreateWithoutOrganizationInput
        >
      | healthcare_providerCreateWithoutOrganizationInput[]
      | healthcare_providerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutOrganizationInput
      | healthcare_providerCreateOrConnectWithoutOrganizationInput[];
    createMany?: healthcare_providerCreateManyOrganizationInputEnvelope;
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
  };

  export type healthcare_providerUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          healthcare_providerCreateWithoutOrganizationInput,
          healthcare_providerUncheckedCreateWithoutOrganizationInput
        >
      | healthcare_providerCreateWithoutOrganizationInput[]
      | healthcare_providerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutOrganizationInput
      | healthcare_providerCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | healthcare_providerUpsertWithWhereUniqueWithoutOrganizationInput
      | healthcare_providerUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: healthcare_providerCreateManyOrganizationInputEnvelope;
    set?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    disconnect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    delete?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    update?:
      | healthcare_providerUpdateWithWhereUniqueWithoutOrganizationInput
      | healthcare_providerUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | healthcare_providerUpdateManyWithWhereWithoutOrganizationInput
      | healthcare_providerUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: healthcare_providerScalarWhereInput | healthcare_providerScalarWhereInput[];
  };

  export type healthcare_providerUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          healthcare_providerCreateWithoutOrganizationInput,
          healthcare_providerUncheckedCreateWithoutOrganizationInput
        >
      | healthcare_providerCreateWithoutOrganizationInput[]
      | healthcare_providerUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutOrganizationInput
      | healthcare_providerCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | healthcare_providerUpsertWithWhereUniqueWithoutOrganizationInput
      | healthcare_providerUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: healthcare_providerCreateManyOrganizationInputEnvelope;
    set?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    disconnect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    delete?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    update?:
      | healthcare_providerUpdateWithWhereUniqueWithoutOrganizationInput
      | healthcare_providerUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | healthcare_providerUpdateManyWithWhereWithoutOrganizationInput
      | healthcare_providerUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: healthcare_providerScalarWhereInput | healthcare_providerScalarWhereInput[];
  };

  export type appointmentCreateNestedManyWithoutPatientInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type insurance_providerCreateNestedOneWithoutPatientInput = {
    create?: XOR<insurance_providerCreateWithoutPatientInput, insurance_providerUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: insurance_providerCreateOrConnectWithoutPatientInput;
    connect?: insurance_providerWhereUniqueInput;
  };

  export type healthcare_providerCreateNestedOneWithoutPatientInput = {
    create?: XOR<healthcare_providerCreateWithoutPatientInput, healthcare_providerUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: healthcare_providerCreateOrConnectWithoutPatientInput;
    connect?: healthcare_providerWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPatientInput = {
    create?: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: userCreateOrConnectWithoutPatientInput;
    connect?: userWhereUniqueInput;
  };

  export type appointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutPatientNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutPatientInput
      | appointmentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutPatientInput
      | appointmentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutPatientInput
      | appointmentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type insurance_providerUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<insurance_providerCreateWithoutPatientInput, insurance_providerUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: insurance_providerCreateOrConnectWithoutPatientInput;
    upsert?: insurance_providerUpsertWithoutPatientInput;
    connect?: insurance_providerWhereUniqueInput;
    update?: XOR<
      XOR<insurance_providerUpdateToOneWithWhereWithoutPatientInput, insurance_providerUpdateWithoutPatientInput>,
      insurance_providerUncheckedUpdateWithoutPatientInput
    >;
  };

  export type healthcare_providerUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<healthcare_providerCreateWithoutPatientInput, healthcare_providerUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: healthcare_providerCreateOrConnectWithoutPatientInput;
    upsert?: healthcare_providerUpsertWithoutPatientInput;
    connect?: healthcare_providerWhereUniqueInput;
    update?: XOR<
      XOR<healthcare_providerUpdateToOneWithWhereWithoutPatientInput, healthcare_providerUpdateWithoutPatientInput>,
      healthcare_providerUncheckedUpdateWithoutPatientInput
    >;
  };

  export type userUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: userCreateOrConnectWithoutPatientInput;
    upsert?: userUpsertWithoutPatientInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPatientInput, userUpdateWithoutPatientInput>,
      userUncheckedUpdateWithoutPatientInput
    >;
  };

  export type appointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutPatientInput
      | appointmentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutPatientInput
      | appointmentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutPatientInput
      | appointmentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type healthcare_providerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>
      | healthcare_providerCreateWithoutUserInput[]
      | healthcare_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutUserInput
      | healthcare_providerCreateOrConnectWithoutUserInput[];
    createMany?: healthcare_providerCreateManyUserInputEnvelope;
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
  };

  export type patientCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type healthcare_providerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>
      | healthcare_providerCreateWithoutUserInput[]
      | healthcare_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutUserInput
      | healthcare_providerCreateOrConnectWithoutUserInput[];
    createMany?: healthcare_providerCreateManyUserInputEnvelope;
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
  };

  export type patientUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type healthcare_providerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>
      | healthcare_providerCreateWithoutUserInput[]
      | healthcare_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutUserInput
      | healthcare_providerCreateOrConnectWithoutUserInput[];
    upsert?:
      | healthcare_providerUpsertWithWhereUniqueWithoutUserInput
      | healthcare_providerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: healthcare_providerCreateManyUserInputEnvelope;
    set?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    disconnect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    delete?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    update?:
      | healthcare_providerUpdateWithWhereUniqueWithoutUserInput
      | healthcare_providerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | healthcare_providerUpdateManyWithWhereWithoutUserInput
      | healthcare_providerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: healthcare_providerScalarWhereInput | healthcare_providerScalarWhereInput[];
  };

  export type patientUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    upsert?: patientUpsertWithWhereUniqueWithoutUserInput | patientUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?: patientUpdateWithWhereUniqueWithoutUserInput | patientUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: patientUpdateManyWithWhereWithoutUserInput | patientUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type healthcare_providerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>
      | healthcare_providerCreateWithoutUserInput[]
      | healthcare_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | healthcare_providerCreateOrConnectWithoutUserInput
      | healthcare_providerCreateOrConnectWithoutUserInput[];
    upsert?:
      | healthcare_providerUpsertWithWhereUniqueWithoutUserInput
      | healthcare_providerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: healthcare_providerCreateManyUserInputEnvelope;
    set?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    disconnect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    delete?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    connect?: healthcare_providerWhereUniqueInput | healthcare_providerWhereUniqueInput[];
    update?:
      | healthcare_providerUpdateWithWhereUniqueWithoutUserInput
      | healthcare_providerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | healthcare_providerUpdateManyWithWhereWithoutUserInput
      | healthcare_providerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: healthcare_providerScalarWhereInput | healthcare_providerScalarWhereInput[];
  };

  export type patientUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>
      | patientCreateWithoutUserInput[]
      | patientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: patientCreateOrConnectWithoutUserInput | patientCreateOrConnectWithoutUserInput[];
    upsert?: patientUpsertWithWhereUniqueWithoutUserInput | patientUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: patientCreateManyUserInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?: patientUpdateWithWhereUniqueWithoutUserInput | patientUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: patientUpdateManyWithWhereWithoutUserInput | patientUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type healthcare_providerCreateWithoutAppointmentInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutHealthcare_providerInput;
    user: userCreateNestedOneWithoutHealthcare_providerInput;
    patient?: patientCreateNestedManyWithoutHealthcare_providerInput;
  };

  export type healthcare_providerUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    patient?: patientUncheckedCreateNestedManyWithoutHealthcare_providerInput;
  };

  export type healthcare_providerCreateOrConnectWithoutAppointmentInput = {
    where: healthcare_providerWhereUniqueInput;
    create: XOR<
      healthcare_providerCreateWithoutAppointmentInput,
      healthcare_providerUncheckedCreateWithoutAppointmentInput
    >;
  };

  export type patientCreateWithoutAppointmentInput = {
    id?: string;
    medical_history?: string | null;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    insurance_provider: insurance_providerCreateNestedOneWithoutPatientInput;
    healthcare_provider: healthcare_providerCreateNestedOneWithoutPatientInput;
    user: userCreateNestedOneWithoutPatientInput;
  };

  export type patientUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    medical_history?: string | null;
    insurance_provider_id: string;
    user_id: string;
    preferred_healthcare_provider_id: string;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientCreateOrConnectWithoutAppointmentInput = {
    where: patientWhereUniqueInput;
    create: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
  };

  export type healthcare_providerUpsertWithoutAppointmentInput = {
    update: XOR<
      healthcare_providerUpdateWithoutAppointmentInput,
      healthcare_providerUncheckedUpdateWithoutAppointmentInput
    >;
    create: XOR<
      healthcare_providerCreateWithoutAppointmentInput,
      healthcare_providerUncheckedCreateWithoutAppointmentInput
    >;
    where?: healthcare_providerWhereInput;
  };

  export type healthcare_providerUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: healthcare_providerWhereInput;
    data: XOR<
      healthcare_providerUpdateWithoutAppointmentInput,
      healthcare_providerUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type healthcare_providerUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutHealthcare_providerNestedInput;
    user?: userUpdateOneRequiredWithoutHealthcare_providerNestedInput;
    patient?: patientUpdateManyWithoutHealthcare_providerNestedInput;
  };

  export type healthcare_providerUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: patientUncheckedUpdateManyWithoutHealthcare_providerNestedInput;
  };

  export type patientUpsertWithoutAppointmentInput = {
    update: XOR<patientUpdateWithoutAppointmentInput, patientUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
    where?: patientWhereInput;
  };

  export type patientUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: patientWhereInput;
    data: XOR<patientUpdateWithoutAppointmentInput, patientUncheckedUpdateWithoutAppointmentInput>;
  };

  export type patientUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutPatientNestedInput;
    healthcare_provider?: healthcare_providerUpdateOneRequiredWithoutPatientNestedInput;
    user?: userUpdateOneRequiredWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    preferred_healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateWithoutHealthcare_providerInput = {
    id?: string;
    appointment_date?: Date | string | null;
    reason_for_visit?: string | null;
    appointment_status?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    patient: patientCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutHealthcare_providerInput = {
    id?: string;
    patient_id: string;
    appointment_date?: Date | string | null;
    reason_for_visit?: string | null;
    appointment_status?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutHealthcare_providerInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<
      appointmentCreateWithoutHealthcare_providerInput,
      appointmentUncheckedCreateWithoutHealthcare_providerInput
    >;
  };

  export type appointmentCreateManyHealthcare_providerInputEnvelope = {
    data: appointmentCreateManyHealthcare_providerInput | appointmentCreateManyHealthcare_providerInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutHealthcare_providerInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationUncheckedCreateWithoutHealthcare_providerInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationCreateOrConnectWithoutHealthcare_providerInput = {
    where: organizationWhereUniqueInput;
    create: XOR<
      organizationCreateWithoutHealthcare_providerInput,
      organizationUncheckedCreateWithoutHealthcare_providerInput
    >;
  };

  export type userCreateWithoutHealthcare_providerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    patient?: patientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutHealthcare_providerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    patient?: patientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutHealthcare_providerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutHealthcare_providerInput, userUncheckedCreateWithoutHealthcare_providerInput>;
  };

  export type patientCreateWithoutHealthcare_providerInput = {
    id?: string;
    medical_history?: string | null;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutPatientInput;
    insurance_provider: insurance_providerCreateNestedOneWithoutPatientInput;
    user: userCreateNestedOneWithoutPatientInput;
  };

  export type patientUncheckedCreateWithoutHealthcare_providerInput = {
    id?: string;
    medical_history?: string | null;
    insurance_provider_id: string;
    user_id: string;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput;
  };

  export type patientCreateOrConnectWithoutHealthcare_providerInput = {
    where: patientWhereUniqueInput;
    create: XOR<patientCreateWithoutHealthcare_providerInput, patientUncheckedCreateWithoutHealthcare_providerInput>;
  };

  export type patientCreateManyHealthcare_providerInputEnvelope = {
    data: patientCreateManyHealthcare_providerInput | patientCreateManyHealthcare_providerInput[];
    skipDuplicates?: boolean;
  };

  export type appointmentUpsertWithWhereUniqueWithoutHealthcare_providerInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<
      appointmentUpdateWithoutHealthcare_providerInput,
      appointmentUncheckedUpdateWithoutHealthcare_providerInput
    >;
    create: XOR<
      appointmentCreateWithoutHealthcare_providerInput,
      appointmentUncheckedCreateWithoutHealthcare_providerInput
    >;
  };

  export type appointmentUpdateWithWhereUniqueWithoutHealthcare_providerInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<
      appointmentUpdateWithoutHealthcare_providerInput,
      appointmentUncheckedUpdateWithoutHealthcare_providerInput
    >;
  };

  export type appointmentUpdateManyWithWhereWithoutHealthcare_providerInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutHealthcare_providerInput>;
  };

  export type appointmentScalarWhereInput = {
    AND?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    OR?: appointmentScalarWhereInput[];
    NOT?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    patient_id?: UuidFilter<'appointment'> | string;
    healthcare_provider_id?: UuidFilter<'appointment'> | string;
    appointment_date?: DateTimeNullableFilter<'appointment'> | Date | string | null;
    reason_for_visit?: StringNullableFilter<'appointment'> | string | null;
    appointment_status?: StringNullableFilter<'appointment'> | string | null;
    notes?: StringNullableFilter<'appointment'> | string | null;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
  };

  export type organizationUpsertWithoutHealthcare_providerInput = {
    update: XOR<
      organizationUpdateWithoutHealthcare_providerInput,
      organizationUncheckedUpdateWithoutHealthcare_providerInput
    >;
    create: XOR<
      organizationCreateWithoutHealthcare_providerInput,
      organizationUncheckedCreateWithoutHealthcare_providerInput
    >;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutHealthcare_providerInput = {
    where?: organizationWhereInput;
    data: XOR<
      organizationUpdateWithoutHealthcare_providerInput,
      organizationUncheckedUpdateWithoutHealthcare_providerInput
    >;
  };

  export type organizationUpdateWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutHealthcare_providerInput = {
    update: XOR<userUpdateWithoutHealthcare_providerInput, userUncheckedUpdateWithoutHealthcare_providerInput>;
    create: XOR<userCreateWithoutHealthcare_providerInput, userUncheckedCreateWithoutHealthcare_providerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutHealthcare_providerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutHealthcare_providerInput, userUncheckedUpdateWithoutHealthcare_providerInput>;
  };

  export type userUpdateWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: patientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: patientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type patientUpsertWithWhereUniqueWithoutHealthcare_providerInput = {
    where: patientWhereUniqueInput;
    update: XOR<patientUpdateWithoutHealthcare_providerInput, patientUncheckedUpdateWithoutHealthcare_providerInput>;
    create: XOR<patientCreateWithoutHealthcare_providerInput, patientUncheckedCreateWithoutHealthcare_providerInput>;
  };

  export type patientUpdateWithWhereUniqueWithoutHealthcare_providerInput = {
    where: patientWhereUniqueInput;
    data: XOR<patientUpdateWithoutHealthcare_providerInput, patientUncheckedUpdateWithoutHealthcare_providerInput>;
  };

  export type patientUpdateManyWithWhereWithoutHealthcare_providerInput = {
    where: patientScalarWhereInput;
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyWithoutHealthcare_providerInput>;
  };

  export type patientScalarWhereInput = {
    AND?: patientScalarWhereInput | patientScalarWhereInput[];
    OR?: patientScalarWhereInput[];
    NOT?: patientScalarWhereInput | patientScalarWhereInput[];
    id?: UuidFilter<'patient'> | string;
    medical_history?: StringNullableFilter<'patient'> | string | null;
    insurance_provider_id?: UuidFilter<'patient'> | string;
    user_id?: UuidFilter<'patient'> | string;
    preferred_healthcare_provider_id?: UuidFilter<'patient'> | string;
    emergency_contact?: StringNullableFilter<'patient'> | string | null;
    created_at?: DateTimeFilter<'patient'> | Date | string;
    updated_at?: DateTimeFilter<'patient'> | Date | string;
  };

  export type patientCreateWithoutInsurance_providerInput = {
    id?: string;
    medical_history?: string | null;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutPatientInput;
    healthcare_provider: healthcare_providerCreateNestedOneWithoutPatientInput;
    user: userCreateNestedOneWithoutPatientInput;
  };

  export type patientUncheckedCreateWithoutInsurance_providerInput = {
    id?: string;
    medical_history?: string | null;
    user_id: string;
    preferred_healthcare_provider_id: string;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput;
  };

  export type patientCreateOrConnectWithoutInsurance_providerInput = {
    where: patientWhereUniqueInput;
    create: XOR<patientCreateWithoutInsurance_providerInput, patientUncheckedCreateWithoutInsurance_providerInput>;
  };

  export type patientCreateManyInsurance_providerInputEnvelope = {
    data: patientCreateManyInsurance_providerInput | patientCreateManyInsurance_providerInput[];
    skipDuplicates?: boolean;
  };

  export type patientUpsertWithWhereUniqueWithoutInsurance_providerInput = {
    where: patientWhereUniqueInput;
    update: XOR<patientUpdateWithoutInsurance_providerInput, patientUncheckedUpdateWithoutInsurance_providerInput>;
    create: XOR<patientCreateWithoutInsurance_providerInput, patientUncheckedCreateWithoutInsurance_providerInput>;
  };

  export type patientUpdateWithWhereUniqueWithoutInsurance_providerInput = {
    where: patientWhereUniqueInput;
    data: XOR<patientUpdateWithoutInsurance_providerInput, patientUncheckedUpdateWithoutInsurance_providerInput>;
  };

  export type patientUpdateManyWithWhereWithoutInsurance_providerInput = {
    where: patientScalarWhereInput;
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyWithoutInsurance_providerInput>;
  };

  export type healthcare_providerCreateWithoutOrganizationInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutHealthcare_providerInput;
    user: userCreateNestedOneWithoutHealthcare_providerInput;
    patient?: patientCreateNestedManyWithoutHealthcare_providerInput;
  };

  export type healthcare_providerUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutHealthcare_providerInput;
    patient?: patientUncheckedCreateNestedManyWithoutHealthcare_providerInput;
  };

  export type healthcare_providerCreateOrConnectWithoutOrganizationInput = {
    where: healthcare_providerWhereUniqueInput;
    create: XOR<
      healthcare_providerCreateWithoutOrganizationInput,
      healthcare_providerUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type healthcare_providerCreateManyOrganizationInputEnvelope = {
    data: healthcare_providerCreateManyOrganizationInput | healthcare_providerCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type healthcare_providerUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: healthcare_providerWhereUniqueInput;
    update: XOR<
      healthcare_providerUpdateWithoutOrganizationInput,
      healthcare_providerUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      healthcare_providerCreateWithoutOrganizationInput,
      healthcare_providerUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type healthcare_providerUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: healthcare_providerWhereUniqueInput;
    data: XOR<
      healthcare_providerUpdateWithoutOrganizationInput,
      healthcare_providerUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type healthcare_providerUpdateManyWithWhereWithoutOrganizationInput = {
    where: healthcare_providerScalarWhereInput;
    data: XOR<
      healthcare_providerUpdateManyMutationInput,
      healthcare_providerUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type healthcare_providerScalarWhereInput = {
    AND?: healthcare_providerScalarWhereInput | healthcare_providerScalarWhereInput[];
    OR?: healthcare_providerScalarWhereInput[];
    NOT?: healthcare_providerScalarWhereInput | healthcare_providerScalarWhereInput[];
    id?: UuidFilter<'healthcare_provider'> | string;
    specialty?: StringNullableFilter<'healthcare_provider'> | string | null;
    license_number?: StringNullableFilter<'healthcare_provider'> | string | null;
    years_of_experience?: IntNullableFilter<'healthcare_provider'> | number | null;
    user_id?: UuidFilter<'healthcare_provider'> | string;
    organization_id?: UuidFilter<'healthcare_provider'> | string;
    created_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
    updated_at?: DateTimeFilter<'healthcare_provider'> | Date | string;
  };

  export type appointmentCreateWithoutPatientInput = {
    id?: string;
    appointment_date?: Date | string | null;
    reason_for_visit?: string | null;
    appointment_status?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    healthcare_provider: healthcare_providerCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutPatientInput = {
    id?: string;
    healthcare_provider_id: string;
    appointment_date?: Date | string | null;
    reason_for_visit?: string | null;
    appointment_status?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutPatientInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>;
  };

  export type appointmentCreateManyPatientInputEnvelope = {
    data: appointmentCreateManyPatientInput | appointmentCreateManyPatientInput[];
    skipDuplicates?: boolean;
  };

  export type insurance_providerCreateWithoutPatientInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    coverage_details?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type insurance_providerUncheckedCreateWithoutPatientInput = {
    id?: string;
    name: string;
    address?: string | null;
    phone_number?: string | null;
    website?: string | null;
    coverage_details?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type insurance_providerCreateOrConnectWithoutPatientInput = {
    where: insurance_providerWhereUniqueInput;
    create: XOR<insurance_providerCreateWithoutPatientInput, insurance_providerUncheckedCreateWithoutPatientInput>;
  };

  export type healthcare_providerCreateWithoutPatientInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutHealthcare_providerInput;
    organization: organizationCreateNestedOneWithoutHealthcare_providerInput;
    user: userCreateNestedOneWithoutHealthcare_providerInput;
  };

  export type healthcare_providerUncheckedCreateWithoutPatientInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutHealthcare_providerInput;
  };

  export type healthcare_providerCreateOrConnectWithoutPatientInput = {
    where: healthcare_providerWhereUniqueInput;
    create: XOR<healthcare_providerCreateWithoutPatientInput, healthcare_providerUncheckedCreateWithoutPatientInput>;
  };

  export type userCreateWithoutPatientInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    healthcare_provider?: healthcare_providerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPatientInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    healthcare_provider?: healthcare_providerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPatientInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
  };

  export type appointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutPatientInput, appointmentUncheckedUpdateWithoutPatientInput>;
    create: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutPatientInput, appointmentUncheckedUpdateWithoutPatientInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutPatientInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutPatientInput>;
  };

  export type insurance_providerUpsertWithoutPatientInput = {
    update: XOR<insurance_providerUpdateWithoutPatientInput, insurance_providerUncheckedUpdateWithoutPatientInput>;
    create: XOR<insurance_providerCreateWithoutPatientInput, insurance_providerUncheckedCreateWithoutPatientInput>;
    where?: insurance_providerWhereInput;
  };

  export type insurance_providerUpdateToOneWithWhereWithoutPatientInput = {
    where?: insurance_providerWhereInput;
    data: XOR<insurance_providerUpdateWithoutPatientInput, insurance_providerUncheckedUpdateWithoutPatientInput>;
  };

  export type insurance_providerUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    coverage_details?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    coverage_details?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type healthcare_providerUpsertWithoutPatientInput = {
    update: XOR<healthcare_providerUpdateWithoutPatientInput, healthcare_providerUncheckedUpdateWithoutPatientInput>;
    create: XOR<healthcare_providerCreateWithoutPatientInput, healthcare_providerUncheckedCreateWithoutPatientInput>;
    where?: healthcare_providerWhereInput;
  };

  export type healthcare_providerUpdateToOneWithWhereWithoutPatientInput = {
    where?: healthcare_providerWhereInput;
    data: XOR<healthcare_providerUpdateWithoutPatientInput, healthcare_providerUncheckedUpdateWithoutPatientInput>;
  };

  export type healthcare_providerUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutHealthcare_providerNestedInput;
    organization?: organizationUpdateOneRequiredWithoutHealthcare_providerNestedInput;
    user?: userUpdateOneRequiredWithoutHealthcare_providerNestedInput;
  };

  export type healthcare_providerUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutHealthcare_providerNestedInput;
  };

  export type userUpsertWithoutPatientInput = {
    update: XOR<userUpdateWithoutPatientInput, userUncheckedUpdateWithoutPatientInput>;
    create: XOR<userCreateWithoutPatientInput, userUncheckedCreateWithoutPatientInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPatientInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPatientInput, userUncheckedUpdateWithoutPatientInput>;
  };

  export type userUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    healthcare_provider?: healthcare_providerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    healthcare_provider?: healthcare_providerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type healthcare_providerCreateWithoutUserInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutHealthcare_providerInput;
    organization: organizationCreateNestedOneWithoutHealthcare_providerInput;
    patient?: patientCreateNestedManyWithoutHealthcare_providerInput;
  };

  export type healthcare_providerUncheckedCreateWithoutUserInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutHealthcare_providerInput;
    patient?: patientUncheckedCreateNestedManyWithoutHealthcare_providerInput;
  };

  export type healthcare_providerCreateOrConnectWithoutUserInput = {
    where: healthcare_providerWhereUniqueInput;
    create: XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>;
  };

  export type healthcare_providerCreateManyUserInputEnvelope = {
    data: healthcare_providerCreateManyUserInput | healthcare_providerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type patientCreateWithoutUserInput = {
    id?: string;
    medical_history?: string | null;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutPatientInput;
    insurance_provider: insurance_providerCreateNestedOneWithoutPatientInput;
    healthcare_provider: healthcare_providerCreateNestedOneWithoutPatientInput;
  };

  export type patientUncheckedCreateWithoutUserInput = {
    id?: string;
    medical_history?: string | null;
    insurance_provider_id: string;
    preferred_healthcare_provider_id: string;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput;
  };

  export type patientCreateOrConnectWithoutUserInput = {
    where: patientWhereUniqueInput;
    create: XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>;
  };

  export type patientCreateManyUserInputEnvelope = {
    data: patientCreateManyUserInput | patientCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type healthcare_providerUpsertWithWhereUniqueWithoutUserInput = {
    where: healthcare_providerWhereUniqueInput;
    update: XOR<healthcare_providerUpdateWithoutUserInput, healthcare_providerUncheckedUpdateWithoutUserInput>;
    create: XOR<healthcare_providerCreateWithoutUserInput, healthcare_providerUncheckedCreateWithoutUserInput>;
  };

  export type healthcare_providerUpdateWithWhereUniqueWithoutUserInput = {
    where: healthcare_providerWhereUniqueInput;
    data: XOR<healthcare_providerUpdateWithoutUserInput, healthcare_providerUncheckedUpdateWithoutUserInput>;
  };

  export type healthcare_providerUpdateManyWithWhereWithoutUserInput = {
    where: healthcare_providerScalarWhereInput;
    data: XOR<healthcare_providerUpdateManyMutationInput, healthcare_providerUncheckedUpdateManyWithoutUserInput>;
  };

  export type patientUpsertWithWhereUniqueWithoutUserInput = {
    where: patientWhereUniqueInput;
    update: XOR<patientUpdateWithoutUserInput, patientUncheckedUpdateWithoutUserInput>;
    create: XOR<patientCreateWithoutUserInput, patientUncheckedCreateWithoutUserInput>;
  };

  export type patientUpdateWithWhereUniqueWithoutUserInput = {
    where: patientWhereUniqueInput;
    data: XOR<patientUpdateWithoutUserInput, patientUncheckedUpdateWithoutUserInput>;
  };

  export type patientUpdateManyWithWhereWithoutUserInput = {
    where: patientScalarWhereInput;
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyWithoutUserInput>;
  };

  export type appointmentCreateManyHealthcare_providerInput = {
    id?: string;
    patient_id: string;
    appointment_date?: Date | string | null;
    reason_for_visit?: string | null;
    appointment_status?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientCreateManyHealthcare_providerInput = {
    id?: string;
    medical_history?: string | null;
    insurance_provider_id: string;
    user_id: string;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason_for_visit?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_status?: NullableStringFieldUpdateOperationsInput | string | null;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: patientUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason_for_visit?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_status?: NullableStringFieldUpdateOperationsInput | string | null;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason_for_visit?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_status?: NullableStringFieldUpdateOperationsInput | string | null;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientUpdateWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutPatientNestedInput;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutPatientNestedInput;
    user?: userUpdateOneRequiredWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateManyWithoutHealthcare_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientCreateManyInsurance_providerInput = {
    id?: string;
    medical_history?: string | null;
    user_id: string;
    preferred_healthcare_provider_id: string;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutPatientNestedInput;
    healthcare_provider?: healthcare_providerUpdateOneRequiredWithoutPatientNestedInput;
    user?: userUpdateOneRequiredWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    preferred_healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateManyWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    preferred_healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type healthcare_providerCreateManyOrganizationInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type healthcare_providerUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutHealthcare_providerNestedInput;
    user?: userUpdateOneRequiredWithoutHealthcare_providerNestedInput;
    patient?: patientUpdateManyWithoutHealthcare_providerNestedInput;
  };

  export type healthcare_providerUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutHealthcare_providerNestedInput;
    patient?: patientUncheckedUpdateManyWithoutHealthcare_providerNestedInput;
  };

  export type healthcare_providerUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyPatientInput = {
    id?: string;
    healthcare_provider_id: string;
    appointment_date?: Date | string | null;
    reason_for_visit?: string | null;
    appointment_status?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason_for_visit?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_status?: NullableStringFieldUpdateOperationsInput | string | null;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    healthcare_provider?: healthcare_providerUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason_for_visit?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_status?: NullableStringFieldUpdateOperationsInput | string | null;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason_for_visit?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_status?: NullableStringFieldUpdateOperationsInput | string | null;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type healthcare_providerCreateManyUserInput = {
    id?: string;
    specialty?: string | null;
    license_number?: string | null;
    years_of_experience?: number | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientCreateManyUserInput = {
    id?: string;
    medical_history?: string | null;
    insurance_provider_id: string;
    preferred_healthcare_provider_id: string;
    emergency_contact?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type healthcare_providerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutHealthcare_providerNestedInput;
    organization?: organizationUpdateOneRequiredWithoutHealthcare_providerNestedInput;
    patient?: patientUpdateManyWithoutHealthcare_providerNestedInput;
  };

  export type healthcare_providerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutHealthcare_providerNestedInput;
    patient?: patientUncheckedUpdateManyWithoutHealthcare_providerNestedInput;
  };

  export type healthcare_providerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialty?: NullableStringFieldUpdateOperationsInput | string | null;
    license_number?: NullableStringFieldUpdateOperationsInput | string | null;
    years_of_experience?: NullableIntFieldUpdateOperationsInput | number | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutPatientNestedInput;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutPatientNestedInput;
    healthcare_provider?: healthcare_providerUpdateOneRequiredWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    preferred_healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    preferred_healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    emergency_contact?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use Healthcare_providerCountOutputTypeDefaultArgs instead
   */
  export type Healthcare_providerCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Healthcare_providerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Insurance_providerCountOutputTypeDefaultArgs instead
   */
  export type Insurance_providerCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Insurance_providerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PatientCountOutputTypeDefaultArgs instead
   */
  export type PatientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    PatientCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use appointmentDefaultArgs instead
   */
  export type appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    appointmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use healthcare_providerDefaultArgs instead
   */
  export type healthcare_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    healthcare_providerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use insurance_providerDefaultArgs instead
   */
  export type insurance_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    insurance_providerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use patientDefaultArgs instead
   */
  export type patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    patientDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
