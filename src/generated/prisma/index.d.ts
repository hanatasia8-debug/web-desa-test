
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model NewsCategory
 * 
 */
export type NewsCategory = $Result.DefaultSelection<Prisma.$NewsCategoryPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model Umkm
 * 
 */
export type Umkm = $Result.DefaultSelection<Prisma.$UmkmPayload>
/**
 * Model UmkmProduct
 * 
 */
export type UmkmProduct = $Result.DefaultSelection<Prisma.$UmkmProductPayload>
/**
 * Model VillagePotential
 * 
 */
export type VillagePotential = $Result.DefaultSelection<Prisma.$VillagePotentialPayload>
/**
 * Model PublicFacility
 * 
 */
export type PublicFacility = $Result.DefaultSelection<Prisma.$PublicFacilityPayload>
/**
 * Model VillageProfile
 * 
 */
export type VillageProfile = $Result.DefaultSelection<Prisma.$VillageProfilePayload>
/**
 * Model RevisionHistory
 * 
 */
export type RevisionHistory = $Result.DefaultSelection<Prisma.$RevisionHistoryPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  VILLAGE_ADMIN: 'VILLAGE_ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ContentStatus: {
  DRAFT: 'DRAFT',
  PENDING_REVIEW: 'PENDING_REVIEW',
  REVISION_REQUESTED: 'REVISION_REQUESTED',
  PUBLISHED: 'PUBLISHED',
  REJECTED: 'REJECTED',
  ARCHIVED: 'ARCHIVED'
};

export type ContentStatus = (typeof ContentStatus)[keyof typeof ContentStatus]


export const UmkmCategory: {
  KULINER: 'KULINER',
  FASHION: 'FASHION',
  PERTANIAN_PETERNAKAN: 'PERTANIAN_PETERNAKAN',
  KERAJINAN_SOUVENIR: 'KERAJINAN_SOUVENIR',
  JASA: 'JASA',
  PERDAGANGAN: 'PERDAGANGAN'
};

export type UmkmCategory = (typeof UmkmCategory)[keyof typeof UmkmCategory]


export const PotentialCategory: {
  PERTANIAN: 'PERTANIAN',
  PERKEBUNAN: 'PERKEBUNAN',
  PETERNAKAN: 'PETERNAKAN',
  PERIKANAN: 'PERIKANAN',
  PARIWISATA: 'PARIWISATA',
  KEBUDAYAAN: 'KEBUDAYAAN',
  KERAJINAN: 'KERAJINAN',
  SUMBER_DAYA_ALAM: 'SUMBER_DAYA_ALAM'
};

export type PotentialCategory = (typeof PotentialCategory)[keyof typeof PotentialCategory]


export const FacilityCategory: {
  KANTOR_DESA: 'KANTOR_DESA',
  SEKOLAH: 'SEKOLAH',
  TEMPAT_IBADAH: 'TEMPAT_IBADAH',
  FASILITAS_KESEHATAN: 'FASILITAS_KESEHATAN',
  DESTINASI_WISATA: 'DESTINASI_WISATA',
  FASILITAS_UMUM: 'FASILITAS_UMUM'
};

export type FacilityCategory = (typeof FacilityCategory)[keyof typeof FacilityCategory]


export const ActionType: {
  SUBMIT: 'SUBMIT',
  APPROVE: 'APPROVE',
  REJECT: 'REJECT',
  REQUEST_REVISION: 'REQUEST_REVISION',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export type ActionType = (typeof ActionType)[keyof typeof ActionType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ContentStatus = $Enums.ContentStatus

export const ContentStatus: typeof $Enums.ContentStatus

export type UmkmCategory = $Enums.UmkmCategory

export const UmkmCategory: typeof $Enums.UmkmCategory

export type PotentialCategory = $Enums.PotentialCategory

export const PotentialCategory: typeof $Enums.PotentialCategory

export type FacilityCategory = $Enums.FacilityCategory

export const FacilityCategory: typeof $Enums.FacilityCategory

export type ActionType = $Enums.ActionType

export const ActionType: typeof $Enums.ActionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsCategory`: Exposes CRUD operations for the **NewsCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsCategories
    * const newsCategories = await prisma.newsCategory.findMany()
    * ```
    */
  get newsCategory(): Prisma.NewsCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.umkm`: Exposes CRUD operations for the **Umkm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Umkms
    * const umkms = await prisma.umkm.findMany()
    * ```
    */
  get umkm(): Prisma.UmkmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.umkmProduct`: Exposes CRUD operations for the **UmkmProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UmkmProducts
    * const umkmProducts = await prisma.umkmProduct.findMany()
    * ```
    */
  get umkmProduct(): Prisma.UmkmProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.villagePotential`: Exposes CRUD operations for the **VillagePotential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VillagePotentials
    * const villagePotentials = await prisma.villagePotential.findMany()
    * ```
    */
  get villagePotential(): Prisma.VillagePotentialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicFacility`: Exposes CRUD operations for the **PublicFacility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicFacilities
    * const publicFacilities = await prisma.publicFacility.findMany()
    * ```
    */
  get publicFacility(): Prisma.PublicFacilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.villageProfile`: Exposes CRUD operations for the **VillageProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VillageProfiles
    * const villageProfiles = await prisma.villageProfile.findMany()
    * ```
    */
  get villageProfile(): Prisma.VillageProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revisionHistory`: Exposes CRUD operations for the **RevisionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevisionHistories
    * const revisionHistories = await prisma.revisionHistory.findMany()
    * ```
    */
  get revisionHistory(): Prisma.RevisionHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    NewsCategory: 'NewsCategory',
    News: 'News',
    Umkm: 'Umkm',
    UmkmProduct: 'UmkmProduct',
    VillagePotential: 'VillagePotential',
    PublicFacility: 'PublicFacility',
    VillageProfile: 'VillageProfile',
    RevisionHistory: 'RevisionHistory',
    AuditLog: 'AuditLog',
    Banner: 'Banner',
    Settings: 'Settings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "newsCategory" | "news" | "umkm" | "umkmProduct" | "villagePotential" | "publicFacility" | "villageProfile" | "revisionHistory" | "auditLog" | "banner" | "settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      NewsCategory: {
        payload: Prisma.$NewsCategoryPayload<ExtArgs>
        fields: Prisma.NewsCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          findFirst: {
            args: Prisma.NewsCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          findMany: {
            args: Prisma.NewsCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>[]
          }
          create: {
            args: Prisma.NewsCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          createMany: {
            args: Prisma.NewsCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>[]
          }
          delete: {
            args: Prisma.NewsCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          update: {
            args: Prisma.NewsCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          deleteMany: {
            args: Prisma.NewsCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>[]
          }
          upsert: {
            args: Prisma.NewsCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsCategoryPayload>
          }
          aggregate: {
            args: Prisma.NewsCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsCategory>
          }
          groupBy: {
            args: Prisma.NewsCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCategoryCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      Umkm: {
        payload: Prisma.$UmkmPayload<ExtArgs>
        fields: Prisma.UmkmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UmkmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UmkmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmPayload>
          }
          findFirst: {
            args: Prisma.UmkmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UmkmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmPayload>
          }
          findMany: {
            args: Prisma.UmkmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmPayload>[]
          }
          create: {
            args: Prisma.UmkmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmPayload>
          }
          createMany: {
            args: Prisma.UmkmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UmkmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmPayload>[]
          }
          delete: {
            args: Prisma.UmkmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmPayload>
          }
          update: {
            args: Prisma.UmkmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmPayload>
          }
          deleteMany: {
            args: Prisma.UmkmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UmkmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UmkmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmPayload>[]
          }
          upsert: {
            args: Prisma.UmkmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmPayload>
          }
          aggregate: {
            args: Prisma.UmkmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUmkm>
          }
          groupBy: {
            args: Prisma.UmkmGroupByArgs<ExtArgs>
            result: $Utils.Optional<UmkmGroupByOutputType>[]
          }
          count: {
            args: Prisma.UmkmCountArgs<ExtArgs>
            result: $Utils.Optional<UmkmCountAggregateOutputType> | number
          }
        }
      }
      UmkmProduct: {
        payload: Prisma.$UmkmProductPayload<ExtArgs>
        fields: Prisma.UmkmProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UmkmProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UmkmProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmProductPayload>
          }
          findFirst: {
            args: Prisma.UmkmProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UmkmProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmProductPayload>
          }
          findMany: {
            args: Prisma.UmkmProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmProductPayload>[]
          }
          create: {
            args: Prisma.UmkmProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmProductPayload>
          }
          createMany: {
            args: Prisma.UmkmProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UmkmProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmProductPayload>[]
          }
          delete: {
            args: Prisma.UmkmProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmProductPayload>
          }
          update: {
            args: Prisma.UmkmProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmProductPayload>
          }
          deleteMany: {
            args: Prisma.UmkmProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UmkmProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UmkmProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmProductPayload>[]
          }
          upsert: {
            args: Prisma.UmkmProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UmkmProductPayload>
          }
          aggregate: {
            args: Prisma.UmkmProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUmkmProduct>
          }
          groupBy: {
            args: Prisma.UmkmProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<UmkmProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.UmkmProductCountArgs<ExtArgs>
            result: $Utils.Optional<UmkmProductCountAggregateOutputType> | number
          }
        }
      }
      VillagePotential: {
        payload: Prisma.$VillagePotentialPayload<ExtArgs>
        fields: Prisma.VillagePotentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VillagePotentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePotentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VillagePotentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePotentialPayload>
          }
          findFirst: {
            args: Prisma.VillagePotentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePotentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VillagePotentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePotentialPayload>
          }
          findMany: {
            args: Prisma.VillagePotentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePotentialPayload>[]
          }
          create: {
            args: Prisma.VillagePotentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePotentialPayload>
          }
          createMany: {
            args: Prisma.VillagePotentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VillagePotentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePotentialPayload>[]
          }
          delete: {
            args: Prisma.VillagePotentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePotentialPayload>
          }
          update: {
            args: Prisma.VillagePotentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePotentialPayload>
          }
          deleteMany: {
            args: Prisma.VillagePotentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VillagePotentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VillagePotentialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePotentialPayload>[]
          }
          upsert: {
            args: Prisma.VillagePotentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillagePotentialPayload>
          }
          aggregate: {
            args: Prisma.VillagePotentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillagePotential>
          }
          groupBy: {
            args: Prisma.VillagePotentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillagePotentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.VillagePotentialCountArgs<ExtArgs>
            result: $Utils.Optional<VillagePotentialCountAggregateOutputType> | number
          }
        }
      }
      PublicFacility: {
        payload: Prisma.$PublicFacilityPayload<ExtArgs>
        fields: Prisma.PublicFacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicFacilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicFacilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFacilityPayload>
          }
          findFirst: {
            args: Prisma.PublicFacilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicFacilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFacilityPayload>
          }
          findMany: {
            args: Prisma.PublicFacilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFacilityPayload>[]
          }
          create: {
            args: Prisma.PublicFacilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFacilityPayload>
          }
          createMany: {
            args: Prisma.PublicFacilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicFacilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFacilityPayload>[]
          }
          delete: {
            args: Prisma.PublicFacilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFacilityPayload>
          }
          update: {
            args: Prisma.PublicFacilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFacilityPayload>
          }
          deleteMany: {
            args: Prisma.PublicFacilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicFacilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicFacilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFacilityPayload>[]
          }
          upsert: {
            args: Prisma.PublicFacilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFacilityPayload>
          }
          aggregate: {
            args: Prisma.PublicFacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicFacility>
          }
          groupBy: {
            args: Prisma.PublicFacilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicFacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicFacilityCountArgs<ExtArgs>
            result: $Utils.Optional<PublicFacilityCountAggregateOutputType> | number
          }
        }
      }
      VillageProfile: {
        payload: Prisma.$VillageProfilePayload<ExtArgs>
        fields: Prisma.VillageProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VillageProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VillageProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageProfilePayload>
          }
          findFirst: {
            args: Prisma.VillageProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VillageProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageProfilePayload>
          }
          findMany: {
            args: Prisma.VillageProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageProfilePayload>[]
          }
          create: {
            args: Prisma.VillageProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageProfilePayload>
          }
          createMany: {
            args: Prisma.VillageProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VillageProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageProfilePayload>[]
          }
          delete: {
            args: Prisma.VillageProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageProfilePayload>
          }
          update: {
            args: Prisma.VillageProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageProfilePayload>
          }
          deleteMany: {
            args: Prisma.VillageProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VillageProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VillageProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageProfilePayload>[]
          }
          upsert: {
            args: Prisma.VillageProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VillageProfilePayload>
          }
          aggregate: {
            args: Prisma.VillageProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillageProfile>
          }
          groupBy: {
            args: Prisma.VillageProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillageProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.VillageProfileCountArgs<ExtArgs>
            result: $Utils.Optional<VillageProfileCountAggregateOutputType> | number
          }
        }
      }
      RevisionHistory: {
        payload: Prisma.$RevisionHistoryPayload<ExtArgs>
        fields: Prisma.RevisionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevisionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevisionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHistoryPayload>
          }
          findFirst: {
            args: Prisma.RevisionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevisionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHistoryPayload>
          }
          findMany: {
            args: Prisma.RevisionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHistoryPayload>[]
          }
          create: {
            args: Prisma.RevisionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHistoryPayload>
          }
          createMany: {
            args: Prisma.RevisionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RevisionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHistoryPayload>[]
          }
          delete: {
            args: Prisma.RevisionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHistoryPayload>
          }
          update: {
            args: Prisma.RevisionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RevisionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevisionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RevisionHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHistoryPayload>[]
          }
          upsert: {
            args: Prisma.RevisionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionHistoryPayload>
          }
          aggregate: {
            args: Prisma.RevisionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevisionHistory>
          }
          groupBy: {
            args: Prisma.RevisionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevisionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevisionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RevisionHistoryCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    newsCategory?: NewsCategoryOmit
    news?: NewsOmit
    umkm?: UmkmOmit
    umkmProduct?: UmkmProductOmit
    villagePotential?: VillagePotentialOmit
    publicFacility?: PublicFacilityOmit
    villageProfile?: VillageProfileOmit
    revisionHistory?: RevisionHistoryOmit
    auditLog?: AuditLogOmit
    banner?: BannerOmit
    settings?: SettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    newsCreated: number
    auditLogs: number
    revisions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsCreated?: boolean | UserCountOutputTypeCountNewsCreatedArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    revisions?: boolean | UserCountOutputTypeCountRevisionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionHistoryWhereInput
  }


  /**
   * Count Type NewsCategoryCountOutputType
   */

  export type NewsCategoryCountOutputType = {
    news: number
  }

  export type NewsCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsCategoryCountOutputTypeCountNewsArgs
  }

  // Custom InputTypes
  /**
   * NewsCategoryCountOutputType without action
   */
  export type NewsCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategoryCountOutputType
     */
    select?: NewsCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCategoryCountOutputType without action
   */
  export type NewsCategoryCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }


  /**
   * Count Type UmkmCountOutputType
   */

  export type UmkmCountOutputType = {
    products: number
  }

  export type UmkmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | UmkmCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * UmkmCountOutputType without action
   */
  export type UmkmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmCountOutputType
     */
    select?: UmkmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UmkmCountOutputType without action
   */
  export type UmkmCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UmkmProductWhereInput
  }


  /**
   * Count Type VillagePotentialCountOutputType
   */

  export type VillagePotentialCountOutputType = {
    umkms: number
  }

  export type VillagePotentialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    umkms?: boolean | VillagePotentialCountOutputTypeCountUmkmsArgs
  }

  // Custom InputTypes
  /**
   * VillagePotentialCountOutputType without action
   */
  export type VillagePotentialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotentialCountOutputType
     */
    select?: VillagePotentialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VillagePotentialCountOutputType without action
   */
  export type VillagePotentialCountOutputTypeCountUmkmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UmkmWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    fullName: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    fullName: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    newsCreated?: boolean | User$newsCreatedArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    revisions?: boolean | User$revisionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "fullName" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsCreated?: boolean | User$newsCreatedArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    revisions?: boolean | User$revisionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      newsCreated: Prisma.$NewsPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      revisions: Prisma.$RevisionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      fullName: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    newsCreated<T extends User$newsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$newsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    revisions<T extends User$revisionsArgs<ExtArgs> = {}>(args?: Subset<T, User$revisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.newsCreated
   */
  export type User$newsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.revisions
   */
  export type User$revisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryInclude<ExtArgs> | null
    where?: RevisionHistoryWhereInput
    orderBy?: RevisionHistoryOrderByWithRelationInput | RevisionHistoryOrderByWithRelationInput[]
    cursor?: RevisionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisionHistoryScalarFieldEnum | RevisionHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model NewsCategory
   */

  export type AggregateNewsCategory = {
    _count: NewsCategoryCountAggregateOutputType | null
    _min: NewsCategoryMinAggregateOutputType | null
    _max: NewsCategoryMaxAggregateOutputType | null
  }

  export type NewsCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type NewsCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type NewsCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    _all: number
  }


  export type NewsCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type NewsCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type NewsCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    _all?: true
  }

  export type NewsCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsCategory to aggregate.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsCategories
    **/
    _count?: true | NewsCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsCategoryMaxAggregateInputType
  }

  export type GetNewsCategoryAggregateType<T extends NewsCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsCategory[P]>
      : GetScalarType<T[P], AggregateNewsCategory[P]>
  }




  export type NewsCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsCategoryWhereInput
    orderBy?: NewsCategoryOrderByWithAggregationInput | NewsCategoryOrderByWithAggregationInput[]
    by: NewsCategoryScalarFieldEnum[] | NewsCategoryScalarFieldEnum
    having?: NewsCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCategoryCountAggregateInputType | true
    _min?: NewsCategoryMinAggregateInputType
    _max?: NewsCategoryMaxAggregateInputType
  }

  export type NewsCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    _count: NewsCategoryCountAggregateOutputType | null
    _min: NewsCategoryMinAggregateOutputType | null
    _max: NewsCategoryMaxAggregateOutputType | null
  }

  type GetNewsCategoryGroupByPayload<T extends NewsCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], NewsCategoryGroupByOutputType[P]>
        }
      >
    >


  export type NewsCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    news?: boolean | NewsCategory$newsArgs<ExtArgs>
    _count?: boolean | NewsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsCategory"]>

  export type NewsCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsCategory"]>

  export type NewsCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsCategory"]>

  export type NewsCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }

  export type NewsCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt", ExtArgs["result"]["newsCategory"]>
  export type NewsCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsCategory$newsArgs<ExtArgs>
    _count?: boolean | NewsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsCategory"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
    }, ExtArgs["result"]["newsCategory"]>
    composites: {}
  }

  type NewsCategoryGetPayload<S extends boolean | null | undefined | NewsCategoryDefaultArgs> = $Result.GetResult<Prisma.$NewsCategoryPayload, S>

  type NewsCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCategoryCountAggregateInputType | true
    }

  export interface NewsCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsCategory'], meta: { name: 'NewsCategory' } }
    /**
     * Find zero or one NewsCategory that matches the filter.
     * @param {NewsCategoryFindUniqueArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsCategoryFindUniqueArgs>(args: SelectSubset<T, NewsCategoryFindUniqueArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsCategoryFindUniqueOrThrowArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindFirstArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsCategoryFindFirstArgs>(args?: SelectSubset<T, NewsCategoryFindFirstArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindFirstOrThrowArgs} args - Arguments to find a NewsCategory
     * @example
     * // Get one NewsCategory
     * const newsCategory = await prisma.newsCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsCategories
     * const newsCategories = await prisma.newsCategory.findMany()
     * 
     * // Get first 10 NewsCategories
     * const newsCategories = await prisma.newsCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsCategoryWithIdOnly = await prisma.newsCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsCategoryFindManyArgs>(args?: SelectSubset<T, NewsCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsCategory.
     * @param {NewsCategoryCreateArgs} args - Arguments to create a NewsCategory.
     * @example
     * // Create one NewsCategory
     * const NewsCategory = await prisma.newsCategory.create({
     *   data: {
     *     // ... data to create a NewsCategory
     *   }
     * })
     * 
     */
    create<T extends NewsCategoryCreateArgs>(args: SelectSubset<T, NewsCategoryCreateArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsCategories.
     * @param {NewsCategoryCreateManyArgs} args - Arguments to create many NewsCategories.
     * @example
     * // Create many NewsCategories
     * const newsCategory = await prisma.newsCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCategoryCreateManyArgs>(args?: SelectSubset<T, NewsCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsCategories and returns the data saved in the database.
     * @param {NewsCategoryCreateManyAndReturnArgs} args - Arguments to create many NewsCategories.
     * @example
     * // Create many NewsCategories
     * const newsCategory = await prisma.newsCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsCategories and only return the `id`
     * const newsCategoryWithIdOnly = await prisma.newsCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsCategory.
     * @param {NewsCategoryDeleteArgs} args - Arguments to delete one NewsCategory.
     * @example
     * // Delete one NewsCategory
     * const NewsCategory = await prisma.newsCategory.delete({
     *   where: {
     *     // ... filter to delete one NewsCategory
     *   }
     * })
     * 
     */
    delete<T extends NewsCategoryDeleteArgs>(args: SelectSubset<T, NewsCategoryDeleteArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsCategory.
     * @param {NewsCategoryUpdateArgs} args - Arguments to update one NewsCategory.
     * @example
     * // Update one NewsCategory
     * const newsCategory = await prisma.newsCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsCategoryUpdateArgs>(args: SelectSubset<T, NewsCategoryUpdateArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsCategories.
     * @param {NewsCategoryDeleteManyArgs} args - Arguments to filter NewsCategories to delete.
     * @example
     * // Delete a few NewsCategories
     * const { count } = await prisma.newsCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsCategoryDeleteManyArgs>(args?: SelectSubset<T, NewsCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsCategories
     * const newsCategory = await prisma.newsCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsCategoryUpdateManyArgs>(args: SelectSubset<T, NewsCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsCategories and returns the data updated in the database.
     * @param {NewsCategoryUpdateManyAndReturnArgs} args - Arguments to update many NewsCategories.
     * @example
     * // Update many NewsCategories
     * const newsCategory = await prisma.newsCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsCategories and only return the `id`
     * const newsCategoryWithIdOnly = await prisma.newsCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsCategory.
     * @param {NewsCategoryUpsertArgs} args - Arguments to update or create a NewsCategory.
     * @example
     * // Update or create a NewsCategory
     * const newsCategory = await prisma.newsCategory.upsert({
     *   create: {
     *     // ... data to create a NewsCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsCategory we want to update
     *   }
     * })
     */
    upsert<T extends NewsCategoryUpsertArgs>(args: SelectSubset<T, NewsCategoryUpsertArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryCountArgs} args - Arguments to filter NewsCategories to count.
     * @example
     * // Count the number of NewsCategories
     * const count = await prisma.newsCategory.count({
     *   where: {
     *     // ... the filter for the NewsCategories we want to count
     *   }
     * })
    **/
    count<T extends NewsCategoryCountArgs>(
      args?: Subset<T, NewsCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsCategoryAggregateArgs>(args: Subset<T, NewsCategoryAggregateArgs>): Prisma.PrismaPromise<GetNewsCategoryAggregateType<T>>

    /**
     * Group by NewsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCategoryGroupByArgs} args - Group by arguments.
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
      T extends NewsCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsCategoryGroupByArgs['orderBy'] }
        : { orderBy?: NewsCategoryGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsCategory model
   */
  readonly fields: NewsCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsCategory$newsArgs<ExtArgs> = {}>(args?: Subset<T, NewsCategory$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsCategory model
   */
  interface NewsCategoryFieldRefs {
    readonly id: FieldRef<"NewsCategory", 'String'>
    readonly name: FieldRef<"NewsCategory", 'String'>
    readonly slug: FieldRef<"NewsCategory", 'String'>
    readonly createdAt: FieldRef<"NewsCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsCategory findUnique
   */
  export type NewsCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory findUniqueOrThrow
   */
  export type NewsCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory findFirst
   */
  export type NewsCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsCategories.
     */
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory findFirstOrThrow
   */
  export type NewsCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategory to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsCategories.
     */
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory findMany
   */
  export type NewsCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which NewsCategories to fetch.
     */
    where?: NewsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsCategories to fetch.
     */
    orderBy?: NewsCategoryOrderByWithRelationInput | NewsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsCategories.
     */
    cursor?: NewsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsCategories.
     */
    distinct?: NewsCategoryScalarFieldEnum | NewsCategoryScalarFieldEnum[]
  }

  /**
   * NewsCategory create
   */
  export type NewsCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsCategory.
     */
    data: XOR<NewsCategoryCreateInput, NewsCategoryUncheckedCreateInput>
  }

  /**
   * NewsCategory createMany
   */
  export type NewsCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsCategories.
     */
    data: NewsCategoryCreateManyInput | NewsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsCategory createManyAndReturn
   */
  export type NewsCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many NewsCategories.
     */
    data: NewsCategoryCreateManyInput | NewsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsCategory update
   */
  export type NewsCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsCategory.
     */
    data: XOR<NewsCategoryUpdateInput, NewsCategoryUncheckedUpdateInput>
    /**
     * Choose, which NewsCategory to update.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory updateMany
   */
  export type NewsCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsCategories.
     */
    data: XOR<NewsCategoryUpdateManyMutationInput, NewsCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NewsCategories to update
     */
    where?: NewsCategoryWhereInput
    /**
     * Limit how many NewsCategories to update.
     */
    limit?: number
  }

  /**
   * NewsCategory updateManyAndReturn
   */
  export type NewsCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * The data used to update NewsCategories.
     */
    data: XOR<NewsCategoryUpdateManyMutationInput, NewsCategoryUncheckedUpdateManyInput>
    /**
     * Filter which NewsCategories to update
     */
    where?: NewsCategoryWhereInput
    /**
     * Limit how many NewsCategories to update.
     */
    limit?: number
  }

  /**
   * NewsCategory upsert
   */
  export type NewsCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsCategory to update in case it exists.
     */
    where: NewsCategoryWhereUniqueInput
    /**
     * In case the NewsCategory found by the `where` argument doesn't exist, create a new NewsCategory with this data.
     */
    create: XOR<NewsCategoryCreateInput, NewsCategoryUncheckedCreateInput>
    /**
     * In case the NewsCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsCategoryUpdateInput, NewsCategoryUncheckedUpdateInput>
  }

  /**
   * NewsCategory delete
   */
  export type NewsCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
    /**
     * Filter which NewsCategory to delete.
     */
    where: NewsCategoryWhereUniqueInput
  }

  /**
   * NewsCategory deleteMany
   */
  export type NewsCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsCategories to delete
     */
    where?: NewsCategoryWhereInput
    /**
     * Limit how many NewsCategories to delete.
     */
    limit?: number
  }

  /**
   * NewsCategory.news
   */
  export type NewsCategory$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * NewsCategory without action
   */
  export type NewsCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCategory
     */
    select?: NewsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsCategory
     */
    omit?: NewsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsCategoryInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    authorId: string | null
    title: string | null
    slug: string | null
    summary: string | null
    coverImage: string | null
    coverCaption: string | null
    status: $Enums.ContentStatus | null
    submitterName: string | null
    submitterEmail: string | null
    submitterPhone: string | null
    revisionToken: string | null
    adminFeedback: string | null
    publishedAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    authorId: string | null
    title: string | null
    slug: string | null
    summary: string | null
    coverImage: string | null
    coverCaption: string | null
    status: $Enums.ContentStatus | null
    submitterName: string | null
    submitterEmail: string | null
    submitterPhone: string | null
    revisionToken: string | null
    adminFeedback: string | null
    publishedAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    categoryId: number
    authorId: number
    title: number
    slug: number
    summary: number
    coverImage: number
    coverCaption: number
    contentSections: number
    status: number
    submitterName: number
    submitterEmail: number
    submitterPhone: number
    revisionToken: number
    adminFeedback: number
    publishedAt: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    categoryId?: true
    authorId?: true
    title?: true
    slug?: true
    summary?: true
    coverImage?: true
    coverCaption?: true
    status?: true
    submitterName?: true
    submitterEmail?: true
    submitterPhone?: true
    revisionToken?: true
    adminFeedback?: true
    publishedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    categoryId?: true
    authorId?: true
    title?: true
    slug?: true
    summary?: true
    coverImage?: true
    coverCaption?: true
    status?: true
    submitterName?: true
    submitterEmail?: true
    submitterPhone?: true
    revisionToken?: true
    adminFeedback?: true
    publishedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    categoryId?: true
    authorId?: true
    title?: true
    slug?: true
    summary?: true
    coverImage?: true
    coverCaption?: true
    contentSections?: true
    status?: true
    submitterName?: true
    submitterEmail?: true
    submitterPhone?: true
    revisionToken?: true
    adminFeedback?: true
    publishedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    categoryId: string
    authorId: string | null
    title: string
    slug: string
    summary: string
    coverImage: string
    coverCaption: string
    contentSections: JsonValue
    status: $Enums.ContentStatus
    submitterName: string | null
    submitterEmail: string | null
    submitterPhone: string | null
    revisionToken: string | null
    adminFeedback: string | null
    publishedAt: Date | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    authorId?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    coverImage?: boolean
    coverCaption?: boolean
    contentSections?: boolean
    status?: boolean
    submitterName?: boolean
    submitterEmail?: boolean
    submitterPhone?: boolean
    revisionToken?: boolean
    adminFeedback?: boolean
    publishedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    author?: boolean | News$authorArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    authorId?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    coverImage?: boolean
    coverCaption?: boolean
    contentSections?: boolean
    status?: boolean
    submitterName?: boolean
    submitterEmail?: boolean
    submitterPhone?: boolean
    revisionToken?: boolean
    adminFeedback?: boolean
    publishedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    author?: boolean | News$authorArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    authorId?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    coverImage?: boolean
    coverCaption?: boolean
    contentSections?: boolean
    status?: boolean
    submitterName?: boolean
    submitterEmail?: boolean
    submitterPhone?: boolean
    revisionToken?: boolean
    adminFeedback?: boolean
    publishedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    author?: boolean | News$authorArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    categoryId?: boolean
    authorId?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    coverImage?: boolean
    coverCaption?: boolean
    contentSections?: boolean
    status?: boolean
    submitterName?: boolean
    submitterEmail?: boolean
    submitterPhone?: boolean
    revisionToken?: boolean
    adminFeedback?: boolean
    publishedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "authorId" | "title" | "slug" | "summary" | "coverImage" | "coverCaption" | "contentSections" | "status" | "submitterName" | "submitterEmail" | "submitterPhone" | "revisionToken" | "adminFeedback" | "publishedAt" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    author?: boolean | News$authorArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    author?: boolean | News$authorArgs<ExtArgs>
  }
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsCategoryDefaultArgs<ExtArgs>
    author?: boolean | News$authorArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      category: Prisma.$NewsCategoryPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      authorId: string | null
      title: string
      slug: string
      summary: string
      coverImage: string
      coverCaption: string
      contentSections: Prisma.JsonValue
      status: $Enums.ContentStatus
      submitterName: string | null
      submitterEmail: string | null
      submitterPhone: string | null
      revisionToken: string | null
      adminFeedback: string | null
      publishedAt: Date | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends NewsCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsCategoryDefaultArgs<ExtArgs>>): Prisma__NewsCategoryClient<$Result.GetResult<Prisma.$NewsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends News$authorArgs<ExtArgs> = {}>(args?: Subset<T, News$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly categoryId: FieldRef<"News", 'String'>
    readonly authorId: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly slug: FieldRef<"News", 'String'>
    readonly summary: FieldRef<"News", 'String'>
    readonly coverImage: FieldRef<"News", 'String'>
    readonly coverCaption: FieldRef<"News", 'String'>
    readonly contentSections: FieldRef<"News", 'Json'>
    readonly status: FieldRef<"News", 'ContentStatus'>
    readonly submitterName: FieldRef<"News", 'String'>
    readonly submitterEmail: FieldRef<"News", 'String'>
    readonly submitterPhone: FieldRef<"News", 'String'>
    readonly revisionToken: FieldRef<"News", 'String'>
    readonly adminFeedback: FieldRef<"News", 'String'>
    readonly publishedAt: FieldRef<"News", 'DateTime'>
    readonly deletedAt: FieldRef<"News", 'DateTime'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News.author
   */
  export type News$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model Umkm
   */

  export type AggregateUmkm = {
    _count: UmkmCountAggregateOutputType | null
    _avg: UmkmAvgAggregateOutputType | null
    _sum: UmkmSumAggregateOutputType | null
    _min: UmkmMinAggregateOutputType | null
    _max: UmkmMaxAggregateOutputType | null
  }

  export type UmkmAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UmkmSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UmkmMinAggregateOutputType = {
    id: string | null
    potentialId: string | null
    name: string | null
    slug: string | null
    ownerName: string | null
    category: $Enums.UmkmCategory | null
    description: string | null
    whatsappNumber: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    logo: string | null
    status: $Enums.ContentStatus | null
    submitterEmail: string | null
    revisionToken: string | null
    adminFeedback: string | null
    publishedAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UmkmMaxAggregateOutputType = {
    id: string | null
    potentialId: string | null
    name: string | null
    slug: string | null
    ownerName: string | null
    category: $Enums.UmkmCategory | null
    description: string | null
    whatsappNumber: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    logo: string | null
    status: $Enums.ContentStatus | null
    submitterEmail: string | null
    revisionToken: string | null
    adminFeedback: string | null
    publishedAt: Date | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UmkmCountAggregateOutputType = {
    id: number
    potentialId: number
    name: number
    slug: number
    ownerName: number
    category: number
    description: number
    whatsappNumber: number
    address: number
    latitude: number
    longitude: number
    logo: number
    gallery: number
    status: number
    submitterEmail: number
    revisionToken: number
    adminFeedback: number
    publishedAt: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UmkmAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UmkmSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UmkmMinAggregateInputType = {
    id?: true
    potentialId?: true
    name?: true
    slug?: true
    ownerName?: true
    category?: true
    description?: true
    whatsappNumber?: true
    address?: true
    latitude?: true
    longitude?: true
    logo?: true
    status?: true
    submitterEmail?: true
    revisionToken?: true
    adminFeedback?: true
    publishedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UmkmMaxAggregateInputType = {
    id?: true
    potentialId?: true
    name?: true
    slug?: true
    ownerName?: true
    category?: true
    description?: true
    whatsappNumber?: true
    address?: true
    latitude?: true
    longitude?: true
    logo?: true
    status?: true
    submitterEmail?: true
    revisionToken?: true
    adminFeedback?: true
    publishedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UmkmCountAggregateInputType = {
    id?: true
    potentialId?: true
    name?: true
    slug?: true
    ownerName?: true
    category?: true
    description?: true
    whatsappNumber?: true
    address?: true
    latitude?: true
    longitude?: true
    logo?: true
    gallery?: true
    status?: true
    submitterEmail?: true
    revisionToken?: true
    adminFeedback?: true
    publishedAt?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UmkmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Umkm to aggregate.
     */
    where?: UmkmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Umkms to fetch.
     */
    orderBy?: UmkmOrderByWithRelationInput | UmkmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UmkmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Umkms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Umkms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Umkms
    **/
    _count?: true | UmkmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UmkmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UmkmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UmkmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UmkmMaxAggregateInputType
  }

  export type GetUmkmAggregateType<T extends UmkmAggregateArgs> = {
        [P in keyof T & keyof AggregateUmkm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUmkm[P]>
      : GetScalarType<T[P], AggregateUmkm[P]>
  }




  export type UmkmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UmkmWhereInput
    orderBy?: UmkmOrderByWithAggregationInput | UmkmOrderByWithAggregationInput[]
    by: UmkmScalarFieldEnum[] | UmkmScalarFieldEnum
    having?: UmkmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UmkmCountAggregateInputType | true
    _avg?: UmkmAvgAggregateInputType
    _sum?: UmkmSumAggregateInputType
    _min?: UmkmMinAggregateInputType
    _max?: UmkmMaxAggregateInputType
  }

  export type UmkmGroupByOutputType = {
    id: string
    potentialId: string | null
    name: string
    slug: string
    ownerName: string
    category: $Enums.UmkmCategory
    description: string
    whatsappNumber: string
    address: string
    latitude: number
    longitude: number
    logo: string
    gallery: JsonValue
    status: $Enums.ContentStatus
    submitterEmail: string | null
    revisionToken: string | null
    adminFeedback: string | null
    publishedAt: Date | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UmkmCountAggregateOutputType | null
    _avg: UmkmAvgAggregateOutputType | null
    _sum: UmkmSumAggregateOutputType | null
    _min: UmkmMinAggregateOutputType | null
    _max: UmkmMaxAggregateOutputType | null
  }

  type GetUmkmGroupByPayload<T extends UmkmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UmkmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UmkmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UmkmGroupByOutputType[P]>
            : GetScalarType<T[P], UmkmGroupByOutputType[P]>
        }
      >
    >


  export type UmkmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    potentialId?: boolean
    name?: boolean
    slug?: boolean
    ownerName?: boolean
    category?: boolean
    description?: boolean
    whatsappNumber?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    logo?: boolean
    gallery?: boolean
    status?: boolean
    submitterEmail?: boolean
    revisionToken?: boolean
    adminFeedback?: boolean
    publishedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    potential?: boolean | Umkm$potentialArgs<ExtArgs>
    products?: boolean | Umkm$productsArgs<ExtArgs>
    _count?: boolean | UmkmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["umkm"]>

  export type UmkmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    potentialId?: boolean
    name?: boolean
    slug?: boolean
    ownerName?: boolean
    category?: boolean
    description?: boolean
    whatsappNumber?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    logo?: boolean
    gallery?: boolean
    status?: boolean
    submitterEmail?: boolean
    revisionToken?: boolean
    adminFeedback?: boolean
    publishedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    potential?: boolean | Umkm$potentialArgs<ExtArgs>
  }, ExtArgs["result"]["umkm"]>

  export type UmkmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    potentialId?: boolean
    name?: boolean
    slug?: boolean
    ownerName?: boolean
    category?: boolean
    description?: boolean
    whatsappNumber?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    logo?: boolean
    gallery?: boolean
    status?: boolean
    submitterEmail?: boolean
    revisionToken?: boolean
    adminFeedback?: boolean
    publishedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    potential?: boolean | Umkm$potentialArgs<ExtArgs>
  }, ExtArgs["result"]["umkm"]>

  export type UmkmSelectScalar = {
    id?: boolean
    potentialId?: boolean
    name?: boolean
    slug?: boolean
    ownerName?: boolean
    category?: boolean
    description?: boolean
    whatsappNumber?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    logo?: boolean
    gallery?: boolean
    status?: boolean
    submitterEmail?: boolean
    revisionToken?: boolean
    adminFeedback?: boolean
    publishedAt?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UmkmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "potentialId" | "name" | "slug" | "ownerName" | "category" | "description" | "whatsappNumber" | "address" | "latitude" | "longitude" | "logo" | "gallery" | "status" | "submitterEmail" | "revisionToken" | "adminFeedback" | "publishedAt" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["umkm"]>
  export type UmkmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    potential?: boolean | Umkm$potentialArgs<ExtArgs>
    products?: boolean | Umkm$productsArgs<ExtArgs>
    _count?: boolean | UmkmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UmkmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    potential?: boolean | Umkm$potentialArgs<ExtArgs>
  }
  export type UmkmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    potential?: boolean | Umkm$potentialArgs<ExtArgs>
  }

  export type $UmkmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Umkm"
    objects: {
      potential: Prisma.$VillagePotentialPayload<ExtArgs> | null
      products: Prisma.$UmkmProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      potentialId: string | null
      name: string
      slug: string
      ownerName: string
      category: $Enums.UmkmCategory
      description: string
      whatsappNumber: string
      address: string
      latitude: number
      longitude: number
      logo: string
      gallery: Prisma.JsonValue
      status: $Enums.ContentStatus
      submitterEmail: string | null
      revisionToken: string | null
      adminFeedback: string | null
      publishedAt: Date | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["umkm"]>
    composites: {}
  }

  type UmkmGetPayload<S extends boolean | null | undefined | UmkmDefaultArgs> = $Result.GetResult<Prisma.$UmkmPayload, S>

  type UmkmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UmkmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UmkmCountAggregateInputType | true
    }

  export interface UmkmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Umkm'], meta: { name: 'Umkm' } }
    /**
     * Find zero or one Umkm that matches the filter.
     * @param {UmkmFindUniqueArgs} args - Arguments to find a Umkm
     * @example
     * // Get one Umkm
     * const umkm = await prisma.umkm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UmkmFindUniqueArgs>(args: SelectSubset<T, UmkmFindUniqueArgs<ExtArgs>>): Prisma__UmkmClient<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Umkm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UmkmFindUniqueOrThrowArgs} args - Arguments to find a Umkm
     * @example
     * // Get one Umkm
     * const umkm = await prisma.umkm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UmkmFindUniqueOrThrowArgs>(args: SelectSubset<T, UmkmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UmkmClient<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Umkm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmFindFirstArgs} args - Arguments to find a Umkm
     * @example
     * // Get one Umkm
     * const umkm = await prisma.umkm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UmkmFindFirstArgs>(args?: SelectSubset<T, UmkmFindFirstArgs<ExtArgs>>): Prisma__UmkmClient<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Umkm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmFindFirstOrThrowArgs} args - Arguments to find a Umkm
     * @example
     * // Get one Umkm
     * const umkm = await prisma.umkm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UmkmFindFirstOrThrowArgs>(args?: SelectSubset<T, UmkmFindFirstOrThrowArgs<ExtArgs>>): Prisma__UmkmClient<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Umkms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Umkms
     * const umkms = await prisma.umkm.findMany()
     * 
     * // Get first 10 Umkms
     * const umkms = await prisma.umkm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const umkmWithIdOnly = await prisma.umkm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UmkmFindManyArgs>(args?: SelectSubset<T, UmkmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Umkm.
     * @param {UmkmCreateArgs} args - Arguments to create a Umkm.
     * @example
     * // Create one Umkm
     * const Umkm = await prisma.umkm.create({
     *   data: {
     *     // ... data to create a Umkm
     *   }
     * })
     * 
     */
    create<T extends UmkmCreateArgs>(args: SelectSubset<T, UmkmCreateArgs<ExtArgs>>): Prisma__UmkmClient<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Umkms.
     * @param {UmkmCreateManyArgs} args - Arguments to create many Umkms.
     * @example
     * // Create many Umkms
     * const umkm = await prisma.umkm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UmkmCreateManyArgs>(args?: SelectSubset<T, UmkmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Umkms and returns the data saved in the database.
     * @param {UmkmCreateManyAndReturnArgs} args - Arguments to create many Umkms.
     * @example
     * // Create many Umkms
     * const umkm = await prisma.umkm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Umkms and only return the `id`
     * const umkmWithIdOnly = await prisma.umkm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UmkmCreateManyAndReturnArgs>(args?: SelectSubset<T, UmkmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Umkm.
     * @param {UmkmDeleteArgs} args - Arguments to delete one Umkm.
     * @example
     * // Delete one Umkm
     * const Umkm = await prisma.umkm.delete({
     *   where: {
     *     // ... filter to delete one Umkm
     *   }
     * })
     * 
     */
    delete<T extends UmkmDeleteArgs>(args: SelectSubset<T, UmkmDeleteArgs<ExtArgs>>): Prisma__UmkmClient<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Umkm.
     * @param {UmkmUpdateArgs} args - Arguments to update one Umkm.
     * @example
     * // Update one Umkm
     * const umkm = await prisma.umkm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UmkmUpdateArgs>(args: SelectSubset<T, UmkmUpdateArgs<ExtArgs>>): Prisma__UmkmClient<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Umkms.
     * @param {UmkmDeleteManyArgs} args - Arguments to filter Umkms to delete.
     * @example
     * // Delete a few Umkms
     * const { count } = await prisma.umkm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UmkmDeleteManyArgs>(args?: SelectSubset<T, UmkmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Umkms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Umkms
     * const umkm = await prisma.umkm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UmkmUpdateManyArgs>(args: SelectSubset<T, UmkmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Umkms and returns the data updated in the database.
     * @param {UmkmUpdateManyAndReturnArgs} args - Arguments to update many Umkms.
     * @example
     * // Update many Umkms
     * const umkm = await prisma.umkm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Umkms and only return the `id`
     * const umkmWithIdOnly = await prisma.umkm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UmkmUpdateManyAndReturnArgs>(args: SelectSubset<T, UmkmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Umkm.
     * @param {UmkmUpsertArgs} args - Arguments to update or create a Umkm.
     * @example
     * // Update or create a Umkm
     * const umkm = await prisma.umkm.upsert({
     *   create: {
     *     // ... data to create a Umkm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Umkm we want to update
     *   }
     * })
     */
    upsert<T extends UmkmUpsertArgs>(args: SelectSubset<T, UmkmUpsertArgs<ExtArgs>>): Prisma__UmkmClient<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Umkms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmCountArgs} args - Arguments to filter Umkms to count.
     * @example
     * // Count the number of Umkms
     * const count = await prisma.umkm.count({
     *   where: {
     *     // ... the filter for the Umkms we want to count
     *   }
     * })
    **/
    count<T extends UmkmCountArgs>(
      args?: Subset<T, UmkmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UmkmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Umkm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UmkmAggregateArgs>(args: Subset<T, UmkmAggregateArgs>): Prisma.PrismaPromise<GetUmkmAggregateType<T>>

    /**
     * Group by Umkm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmGroupByArgs} args - Group by arguments.
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
      T extends UmkmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UmkmGroupByArgs['orderBy'] }
        : { orderBy?: UmkmGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UmkmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUmkmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Umkm model
   */
  readonly fields: UmkmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Umkm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UmkmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    potential<T extends Umkm$potentialArgs<ExtArgs> = {}>(args?: Subset<T, Umkm$potentialArgs<ExtArgs>>): Prisma__VillagePotentialClient<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends Umkm$productsArgs<ExtArgs> = {}>(args?: Subset<T, Umkm$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Umkm model
   */
  interface UmkmFieldRefs {
    readonly id: FieldRef<"Umkm", 'String'>
    readonly potentialId: FieldRef<"Umkm", 'String'>
    readonly name: FieldRef<"Umkm", 'String'>
    readonly slug: FieldRef<"Umkm", 'String'>
    readonly ownerName: FieldRef<"Umkm", 'String'>
    readonly category: FieldRef<"Umkm", 'UmkmCategory'>
    readonly description: FieldRef<"Umkm", 'String'>
    readonly whatsappNumber: FieldRef<"Umkm", 'String'>
    readonly address: FieldRef<"Umkm", 'String'>
    readonly latitude: FieldRef<"Umkm", 'Float'>
    readonly longitude: FieldRef<"Umkm", 'Float'>
    readonly logo: FieldRef<"Umkm", 'String'>
    readonly gallery: FieldRef<"Umkm", 'Json'>
    readonly status: FieldRef<"Umkm", 'ContentStatus'>
    readonly submitterEmail: FieldRef<"Umkm", 'String'>
    readonly revisionToken: FieldRef<"Umkm", 'String'>
    readonly adminFeedback: FieldRef<"Umkm", 'String'>
    readonly publishedAt: FieldRef<"Umkm", 'DateTime'>
    readonly deletedAt: FieldRef<"Umkm", 'DateTime'>
    readonly createdAt: FieldRef<"Umkm", 'DateTime'>
    readonly updatedAt: FieldRef<"Umkm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Umkm findUnique
   */
  export type UmkmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmInclude<ExtArgs> | null
    /**
     * Filter, which Umkm to fetch.
     */
    where: UmkmWhereUniqueInput
  }

  /**
   * Umkm findUniqueOrThrow
   */
  export type UmkmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmInclude<ExtArgs> | null
    /**
     * Filter, which Umkm to fetch.
     */
    where: UmkmWhereUniqueInput
  }

  /**
   * Umkm findFirst
   */
  export type UmkmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmInclude<ExtArgs> | null
    /**
     * Filter, which Umkm to fetch.
     */
    where?: UmkmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Umkms to fetch.
     */
    orderBy?: UmkmOrderByWithRelationInput | UmkmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Umkms.
     */
    cursor?: UmkmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Umkms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Umkms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Umkms.
     */
    distinct?: UmkmScalarFieldEnum | UmkmScalarFieldEnum[]
  }

  /**
   * Umkm findFirstOrThrow
   */
  export type UmkmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmInclude<ExtArgs> | null
    /**
     * Filter, which Umkm to fetch.
     */
    where?: UmkmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Umkms to fetch.
     */
    orderBy?: UmkmOrderByWithRelationInput | UmkmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Umkms.
     */
    cursor?: UmkmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Umkms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Umkms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Umkms.
     */
    distinct?: UmkmScalarFieldEnum | UmkmScalarFieldEnum[]
  }

  /**
   * Umkm findMany
   */
  export type UmkmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmInclude<ExtArgs> | null
    /**
     * Filter, which Umkms to fetch.
     */
    where?: UmkmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Umkms to fetch.
     */
    orderBy?: UmkmOrderByWithRelationInput | UmkmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Umkms.
     */
    cursor?: UmkmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Umkms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Umkms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Umkms.
     */
    distinct?: UmkmScalarFieldEnum | UmkmScalarFieldEnum[]
  }

  /**
   * Umkm create
   */
  export type UmkmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmInclude<ExtArgs> | null
    /**
     * The data needed to create a Umkm.
     */
    data: XOR<UmkmCreateInput, UmkmUncheckedCreateInput>
  }

  /**
   * Umkm createMany
   */
  export type UmkmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Umkms.
     */
    data: UmkmCreateManyInput | UmkmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Umkm createManyAndReturn
   */
  export type UmkmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * The data used to create many Umkms.
     */
    data: UmkmCreateManyInput | UmkmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Umkm update
   */
  export type UmkmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmInclude<ExtArgs> | null
    /**
     * The data needed to update a Umkm.
     */
    data: XOR<UmkmUpdateInput, UmkmUncheckedUpdateInput>
    /**
     * Choose, which Umkm to update.
     */
    where: UmkmWhereUniqueInput
  }

  /**
   * Umkm updateMany
   */
  export type UmkmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Umkms.
     */
    data: XOR<UmkmUpdateManyMutationInput, UmkmUncheckedUpdateManyInput>
    /**
     * Filter which Umkms to update
     */
    where?: UmkmWhereInput
    /**
     * Limit how many Umkms to update.
     */
    limit?: number
  }

  /**
   * Umkm updateManyAndReturn
   */
  export type UmkmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * The data used to update Umkms.
     */
    data: XOR<UmkmUpdateManyMutationInput, UmkmUncheckedUpdateManyInput>
    /**
     * Filter which Umkms to update
     */
    where?: UmkmWhereInput
    /**
     * Limit how many Umkms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Umkm upsert
   */
  export type UmkmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmInclude<ExtArgs> | null
    /**
     * The filter to search for the Umkm to update in case it exists.
     */
    where: UmkmWhereUniqueInput
    /**
     * In case the Umkm found by the `where` argument doesn't exist, create a new Umkm with this data.
     */
    create: XOR<UmkmCreateInput, UmkmUncheckedCreateInput>
    /**
     * In case the Umkm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UmkmUpdateInput, UmkmUncheckedUpdateInput>
  }

  /**
   * Umkm delete
   */
  export type UmkmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmInclude<ExtArgs> | null
    /**
     * Filter which Umkm to delete.
     */
    where: UmkmWhereUniqueInput
  }

  /**
   * Umkm deleteMany
   */
  export type UmkmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Umkms to delete
     */
    where?: UmkmWhereInput
    /**
     * Limit how many Umkms to delete.
     */
    limit?: number
  }

  /**
   * Umkm.potential
   */
  export type Umkm$potentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillagePotentialInclude<ExtArgs> | null
    where?: VillagePotentialWhereInput
  }

  /**
   * Umkm.products
   */
  export type Umkm$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductInclude<ExtArgs> | null
    where?: UmkmProductWhereInput
    orderBy?: UmkmProductOrderByWithRelationInput | UmkmProductOrderByWithRelationInput[]
    cursor?: UmkmProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UmkmProductScalarFieldEnum | UmkmProductScalarFieldEnum[]
  }

  /**
   * Umkm without action
   */
  export type UmkmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmInclude<ExtArgs> | null
  }


  /**
   * Model UmkmProduct
   */

  export type AggregateUmkmProduct = {
    _count: UmkmProductCountAggregateOutputType | null
    _avg: UmkmProductAvgAggregateOutputType | null
    _sum: UmkmProductSumAggregateOutputType | null
    _min: UmkmProductMinAggregateOutputType | null
    _max: UmkmProductMaxAggregateOutputType | null
  }

  export type UmkmProductAvgAggregateOutputType = {
    price: number | null
  }

  export type UmkmProductSumAggregateOutputType = {
    price: number | null
  }

  export type UmkmProductMinAggregateOutputType = {
    id: string | null
    umkmId: string | null
    productName: string | null
    price: number | null
    productPhoto: string | null
  }

  export type UmkmProductMaxAggregateOutputType = {
    id: string | null
    umkmId: string | null
    productName: string | null
    price: number | null
    productPhoto: string | null
  }

  export type UmkmProductCountAggregateOutputType = {
    id: number
    umkmId: number
    productName: number
    price: number
    productPhoto: number
    _all: number
  }


  export type UmkmProductAvgAggregateInputType = {
    price?: true
  }

  export type UmkmProductSumAggregateInputType = {
    price?: true
  }

  export type UmkmProductMinAggregateInputType = {
    id?: true
    umkmId?: true
    productName?: true
    price?: true
    productPhoto?: true
  }

  export type UmkmProductMaxAggregateInputType = {
    id?: true
    umkmId?: true
    productName?: true
    price?: true
    productPhoto?: true
  }

  export type UmkmProductCountAggregateInputType = {
    id?: true
    umkmId?: true
    productName?: true
    price?: true
    productPhoto?: true
    _all?: true
  }

  export type UmkmProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UmkmProduct to aggregate.
     */
    where?: UmkmProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UmkmProducts to fetch.
     */
    orderBy?: UmkmProductOrderByWithRelationInput | UmkmProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UmkmProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UmkmProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UmkmProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UmkmProducts
    **/
    _count?: true | UmkmProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UmkmProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UmkmProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UmkmProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UmkmProductMaxAggregateInputType
  }

  export type GetUmkmProductAggregateType<T extends UmkmProductAggregateArgs> = {
        [P in keyof T & keyof AggregateUmkmProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUmkmProduct[P]>
      : GetScalarType<T[P], AggregateUmkmProduct[P]>
  }




  export type UmkmProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UmkmProductWhereInput
    orderBy?: UmkmProductOrderByWithAggregationInput | UmkmProductOrderByWithAggregationInput[]
    by: UmkmProductScalarFieldEnum[] | UmkmProductScalarFieldEnum
    having?: UmkmProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UmkmProductCountAggregateInputType | true
    _avg?: UmkmProductAvgAggregateInputType
    _sum?: UmkmProductSumAggregateInputType
    _min?: UmkmProductMinAggregateInputType
    _max?: UmkmProductMaxAggregateInputType
  }

  export type UmkmProductGroupByOutputType = {
    id: string
    umkmId: string
    productName: string
    price: number | null
    productPhoto: string | null
    _count: UmkmProductCountAggregateOutputType | null
    _avg: UmkmProductAvgAggregateOutputType | null
    _sum: UmkmProductSumAggregateOutputType | null
    _min: UmkmProductMinAggregateOutputType | null
    _max: UmkmProductMaxAggregateOutputType | null
  }

  type GetUmkmProductGroupByPayload<T extends UmkmProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UmkmProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UmkmProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UmkmProductGroupByOutputType[P]>
            : GetScalarType<T[P], UmkmProductGroupByOutputType[P]>
        }
      >
    >


  export type UmkmProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    umkmId?: boolean
    productName?: boolean
    price?: boolean
    productPhoto?: boolean
    umkm?: boolean | UmkmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["umkmProduct"]>

  export type UmkmProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    umkmId?: boolean
    productName?: boolean
    price?: boolean
    productPhoto?: boolean
    umkm?: boolean | UmkmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["umkmProduct"]>

  export type UmkmProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    umkmId?: boolean
    productName?: boolean
    price?: boolean
    productPhoto?: boolean
    umkm?: boolean | UmkmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["umkmProduct"]>

  export type UmkmProductSelectScalar = {
    id?: boolean
    umkmId?: boolean
    productName?: boolean
    price?: boolean
    productPhoto?: boolean
  }

  export type UmkmProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "umkmId" | "productName" | "price" | "productPhoto", ExtArgs["result"]["umkmProduct"]>
  export type UmkmProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    umkm?: boolean | UmkmDefaultArgs<ExtArgs>
  }
  export type UmkmProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    umkm?: boolean | UmkmDefaultArgs<ExtArgs>
  }
  export type UmkmProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    umkm?: boolean | UmkmDefaultArgs<ExtArgs>
  }

  export type $UmkmProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UmkmProduct"
    objects: {
      umkm: Prisma.$UmkmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      umkmId: string
      productName: string
      price: number | null
      productPhoto: string | null
    }, ExtArgs["result"]["umkmProduct"]>
    composites: {}
  }

  type UmkmProductGetPayload<S extends boolean | null | undefined | UmkmProductDefaultArgs> = $Result.GetResult<Prisma.$UmkmProductPayload, S>

  type UmkmProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UmkmProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UmkmProductCountAggregateInputType | true
    }

  export interface UmkmProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UmkmProduct'], meta: { name: 'UmkmProduct' } }
    /**
     * Find zero or one UmkmProduct that matches the filter.
     * @param {UmkmProductFindUniqueArgs} args - Arguments to find a UmkmProduct
     * @example
     * // Get one UmkmProduct
     * const umkmProduct = await prisma.umkmProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UmkmProductFindUniqueArgs>(args: SelectSubset<T, UmkmProductFindUniqueArgs<ExtArgs>>): Prisma__UmkmProductClient<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UmkmProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UmkmProductFindUniqueOrThrowArgs} args - Arguments to find a UmkmProduct
     * @example
     * // Get one UmkmProduct
     * const umkmProduct = await prisma.umkmProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UmkmProductFindUniqueOrThrowArgs>(args: SelectSubset<T, UmkmProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UmkmProductClient<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UmkmProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmProductFindFirstArgs} args - Arguments to find a UmkmProduct
     * @example
     * // Get one UmkmProduct
     * const umkmProduct = await prisma.umkmProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UmkmProductFindFirstArgs>(args?: SelectSubset<T, UmkmProductFindFirstArgs<ExtArgs>>): Prisma__UmkmProductClient<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UmkmProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmProductFindFirstOrThrowArgs} args - Arguments to find a UmkmProduct
     * @example
     * // Get one UmkmProduct
     * const umkmProduct = await prisma.umkmProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UmkmProductFindFirstOrThrowArgs>(args?: SelectSubset<T, UmkmProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__UmkmProductClient<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UmkmProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UmkmProducts
     * const umkmProducts = await prisma.umkmProduct.findMany()
     * 
     * // Get first 10 UmkmProducts
     * const umkmProducts = await prisma.umkmProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const umkmProductWithIdOnly = await prisma.umkmProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UmkmProductFindManyArgs>(args?: SelectSubset<T, UmkmProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UmkmProduct.
     * @param {UmkmProductCreateArgs} args - Arguments to create a UmkmProduct.
     * @example
     * // Create one UmkmProduct
     * const UmkmProduct = await prisma.umkmProduct.create({
     *   data: {
     *     // ... data to create a UmkmProduct
     *   }
     * })
     * 
     */
    create<T extends UmkmProductCreateArgs>(args: SelectSubset<T, UmkmProductCreateArgs<ExtArgs>>): Prisma__UmkmProductClient<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UmkmProducts.
     * @param {UmkmProductCreateManyArgs} args - Arguments to create many UmkmProducts.
     * @example
     * // Create many UmkmProducts
     * const umkmProduct = await prisma.umkmProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UmkmProductCreateManyArgs>(args?: SelectSubset<T, UmkmProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UmkmProducts and returns the data saved in the database.
     * @param {UmkmProductCreateManyAndReturnArgs} args - Arguments to create many UmkmProducts.
     * @example
     * // Create many UmkmProducts
     * const umkmProduct = await prisma.umkmProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UmkmProducts and only return the `id`
     * const umkmProductWithIdOnly = await prisma.umkmProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UmkmProductCreateManyAndReturnArgs>(args?: SelectSubset<T, UmkmProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UmkmProduct.
     * @param {UmkmProductDeleteArgs} args - Arguments to delete one UmkmProduct.
     * @example
     * // Delete one UmkmProduct
     * const UmkmProduct = await prisma.umkmProduct.delete({
     *   where: {
     *     // ... filter to delete one UmkmProduct
     *   }
     * })
     * 
     */
    delete<T extends UmkmProductDeleteArgs>(args: SelectSubset<T, UmkmProductDeleteArgs<ExtArgs>>): Prisma__UmkmProductClient<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UmkmProduct.
     * @param {UmkmProductUpdateArgs} args - Arguments to update one UmkmProduct.
     * @example
     * // Update one UmkmProduct
     * const umkmProduct = await prisma.umkmProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UmkmProductUpdateArgs>(args: SelectSubset<T, UmkmProductUpdateArgs<ExtArgs>>): Prisma__UmkmProductClient<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UmkmProducts.
     * @param {UmkmProductDeleteManyArgs} args - Arguments to filter UmkmProducts to delete.
     * @example
     * // Delete a few UmkmProducts
     * const { count } = await prisma.umkmProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UmkmProductDeleteManyArgs>(args?: SelectSubset<T, UmkmProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UmkmProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UmkmProducts
     * const umkmProduct = await prisma.umkmProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UmkmProductUpdateManyArgs>(args: SelectSubset<T, UmkmProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UmkmProducts and returns the data updated in the database.
     * @param {UmkmProductUpdateManyAndReturnArgs} args - Arguments to update many UmkmProducts.
     * @example
     * // Update many UmkmProducts
     * const umkmProduct = await prisma.umkmProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UmkmProducts and only return the `id`
     * const umkmProductWithIdOnly = await prisma.umkmProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UmkmProductUpdateManyAndReturnArgs>(args: SelectSubset<T, UmkmProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UmkmProduct.
     * @param {UmkmProductUpsertArgs} args - Arguments to update or create a UmkmProduct.
     * @example
     * // Update or create a UmkmProduct
     * const umkmProduct = await prisma.umkmProduct.upsert({
     *   create: {
     *     // ... data to create a UmkmProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UmkmProduct we want to update
     *   }
     * })
     */
    upsert<T extends UmkmProductUpsertArgs>(args: SelectSubset<T, UmkmProductUpsertArgs<ExtArgs>>): Prisma__UmkmProductClient<$Result.GetResult<Prisma.$UmkmProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UmkmProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmProductCountArgs} args - Arguments to filter UmkmProducts to count.
     * @example
     * // Count the number of UmkmProducts
     * const count = await prisma.umkmProduct.count({
     *   where: {
     *     // ... the filter for the UmkmProducts we want to count
     *   }
     * })
    **/
    count<T extends UmkmProductCountArgs>(
      args?: Subset<T, UmkmProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UmkmProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UmkmProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UmkmProductAggregateArgs>(args: Subset<T, UmkmProductAggregateArgs>): Prisma.PrismaPromise<GetUmkmProductAggregateType<T>>

    /**
     * Group by UmkmProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UmkmProductGroupByArgs} args - Group by arguments.
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
      T extends UmkmProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UmkmProductGroupByArgs['orderBy'] }
        : { orderBy?: UmkmProductGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UmkmProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUmkmProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UmkmProduct model
   */
  readonly fields: UmkmProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UmkmProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UmkmProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    umkm<T extends UmkmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UmkmDefaultArgs<ExtArgs>>): Prisma__UmkmClient<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UmkmProduct model
   */
  interface UmkmProductFieldRefs {
    readonly id: FieldRef<"UmkmProduct", 'String'>
    readonly umkmId: FieldRef<"UmkmProduct", 'String'>
    readonly productName: FieldRef<"UmkmProduct", 'String'>
    readonly price: FieldRef<"UmkmProduct", 'Int'>
    readonly productPhoto: FieldRef<"UmkmProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UmkmProduct findUnique
   */
  export type UmkmProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductInclude<ExtArgs> | null
    /**
     * Filter, which UmkmProduct to fetch.
     */
    where: UmkmProductWhereUniqueInput
  }

  /**
   * UmkmProduct findUniqueOrThrow
   */
  export type UmkmProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductInclude<ExtArgs> | null
    /**
     * Filter, which UmkmProduct to fetch.
     */
    where: UmkmProductWhereUniqueInput
  }

  /**
   * UmkmProduct findFirst
   */
  export type UmkmProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductInclude<ExtArgs> | null
    /**
     * Filter, which UmkmProduct to fetch.
     */
    where?: UmkmProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UmkmProducts to fetch.
     */
    orderBy?: UmkmProductOrderByWithRelationInput | UmkmProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UmkmProducts.
     */
    cursor?: UmkmProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UmkmProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UmkmProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UmkmProducts.
     */
    distinct?: UmkmProductScalarFieldEnum | UmkmProductScalarFieldEnum[]
  }

  /**
   * UmkmProduct findFirstOrThrow
   */
  export type UmkmProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductInclude<ExtArgs> | null
    /**
     * Filter, which UmkmProduct to fetch.
     */
    where?: UmkmProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UmkmProducts to fetch.
     */
    orderBy?: UmkmProductOrderByWithRelationInput | UmkmProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UmkmProducts.
     */
    cursor?: UmkmProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UmkmProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UmkmProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UmkmProducts.
     */
    distinct?: UmkmProductScalarFieldEnum | UmkmProductScalarFieldEnum[]
  }

  /**
   * UmkmProduct findMany
   */
  export type UmkmProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductInclude<ExtArgs> | null
    /**
     * Filter, which UmkmProducts to fetch.
     */
    where?: UmkmProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UmkmProducts to fetch.
     */
    orderBy?: UmkmProductOrderByWithRelationInput | UmkmProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UmkmProducts.
     */
    cursor?: UmkmProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UmkmProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UmkmProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UmkmProducts.
     */
    distinct?: UmkmProductScalarFieldEnum | UmkmProductScalarFieldEnum[]
  }

  /**
   * UmkmProduct create
   */
  export type UmkmProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductInclude<ExtArgs> | null
    /**
     * The data needed to create a UmkmProduct.
     */
    data: XOR<UmkmProductCreateInput, UmkmProductUncheckedCreateInput>
  }

  /**
   * UmkmProduct createMany
   */
  export type UmkmProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UmkmProducts.
     */
    data: UmkmProductCreateManyInput | UmkmProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UmkmProduct createManyAndReturn
   */
  export type UmkmProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * The data used to create many UmkmProducts.
     */
    data: UmkmProductCreateManyInput | UmkmProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UmkmProduct update
   */
  export type UmkmProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductInclude<ExtArgs> | null
    /**
     * The data needed to update a UmkmProduct.
     */
    data: XOR<UmkmProductUpdateInput, UmkmProductUncheckedUpdateInput>
    /**
     * Choose, which UmkmProduct to update.
     */
    where: UmkmProductWhereUniqueInput
  }

  /**
   * UmkmProduct updateMany
   */
  export type UmkmProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UmkmProducts.
     */
    data: XOR<UmkmProductUpdateManyMutationInput, UmkmProductUncheckedUpdateManyInput>
    /**
     * Filter which UmkmProducts to update
     */
    where?: UmkmProductWhereInput
    /**
     * Limit how many UmkmProducts to update.
     */
    limit?: number
  }

  /**
   * UmkmProduct updateManyAndReturn
   */
  export type UmkmProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * The data used to update UmkmProducts.
     */
    data: XOR<UmkmProductUpdateManyMutationInput, UmkmProductUncheckedUpdateManyInput>
    /**
     * Filter which UmkmProducts to update
     */
    where?: UmkmProductWhereInput
    /**
     * Limit how many UmkmProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UmkmProduct upsert
   */
  export type UmkmProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductInclude<ExtArgs> | null
    /**
     * The filter to search for the UmkmProduct to update in case it exists.
     */
    where: UmkmProductWhereUniqueInput
    /**
     * In case the UmkmProduct found by the `where` argument doesn't exist, create a new UmkmProduct with this data.
     */
    create: XOR<UmkmProductCreateInput, UmkmProductUncheckedCreateInput>
    /**
     * In case the UmkmProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UmkmProductUpdateInput, UmkmProductUncheckedUpdateInput>
  }

  /**
   * UmkmProduct delete
   */
  export type UmkmProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductInclude<ExtArgs> | null
    /**
     * Filter which UmkmProduct to delete.
     */
    where: UmkmProductWhereUniqueInput
  }

  /**
   * UmkmProduct deleteMany
   */
  export type UmkmProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UmkmProducts to delete
     */
    where?: UmkmProductWhereInput
    /**
     * Limit how many UmkmProducts to delete.
     */
    limit?: number
  }

  /**
   * UmkmProduct without action
   */
  export type UmkmProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UmkmProduct
     */
    select?: UmkmProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UmkmProduct
     */
    omit?: UmkmProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmProductInclude<ExtArgs> | null
  }


  /**
   * Model VillagePotential
   */

  export type AggregateVillagePotential = {
    _count: VillagePotentialCountAggregateOutputType | null
    _avg: VillagePotentialAvgAggregateOutputType | null
    _sum: VillagePotentialSumAggregateOutputType | null
    _min: VillagePotentialMinAggregateOutputType | null
    _max: VillagePotentialMaxAggregateOutputType | null
  }

  export type VillagePotentialAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type VillagePotentialSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type VillagePotentialMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: $Enums.PotentialCategory | null
    overview: string | null
    description: string | null
    coverImage: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VillagePotentialMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: $Enums.PotentialCategory | null
    overview: string | null
    description: string | null
    coverImage: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VillagePotentialCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    category: number
    overview: number
    description: number
    coverImage: number
    gallery: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VillagePotentialAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type VillagePotentialSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type VillagePotentialMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    overview?: true
    description?: true
    coverImage?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VillagePotentialMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    overview?: true
    description?: true
    coverImage?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VillagePotentialCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    overview?: true
    description?: true
    coverImage?: true
    gallery?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VillagePotentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillagePotential to aggregate.
     */
    where?: VillagePotentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillagePotentials to fetch.
     */
    orderBy?: VillagePotentialOrderByWithRelationInput | VillagePotentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VillagePotentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillagePotentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillagePotentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VillagePotentials
    **/
    _count?: true | VillagePotentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VillagePotentialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VillagePotentialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillagePotentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillagePotentialMaxAggregateInputType
  }

  export type GetVillagePotentialAggregateType<T extends VillagePotentialAggregateArgs> = {
        [P in keyof T & keyof AggregateVillagePotential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillagePotential[P]>
      : GetScalarType<T[P], AggregateVillagePotential[P]>
  }




  export type VillagePotentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillagePotentialWhereInput
    orderBy?: VillagePotentialOrderByWithAggregationInput | VillagePotentialOrderByWithAggregationInput[]
    by: VillagePotentialScalarFieldEnum[] | VillagePotentialScalarFieldEnum
    having?: VillagePotentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillagePotentialCountAggregateInputType | true
    _avg?: VillagePotentialAvgAggregateInputType
    _sum?: VillagePotentialSumAggregateInputType
    _min?: VillagePotentialMinAggregateInputType
    _max?: VillagePotentialMaxAggregateInputType
  }

  export type VillagePotentialGroupByOutputType = {
    id: string
    title: string
    slug: string
    category: $Enums.PotentialCategory
    overview: string
    description: string
    coverImage: string
    gallery: JsonValue
    latitude: number
    longitude: number
    createdAt: Date
    updatedAt: Date
    _count: VillagePotentialCountAggregateOutputType | null
    _avg: VillagePotentialAvgAggregateOutputType | null
    _sum: VillagePotentialSumAggregateOutputType | null
    _min: VillagePotentialMinAggregateOutputType | null
    _max: VillagePotentialMaxAggregateOutputType | null
  }

  type GetVillagePotentialGroupByPayload<T extends VillagePotentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillagePotentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillagePotentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillagePotentialGroupByOutputType[P]>
            : GetScalarType<T[P], VillagePotentialGroupByOutputType[P]>
        }
      >
    >


  export type VillagePotentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    overview?: boolean
    description?: boolean
    coverImage?: boolean
    gallery?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    umkms?: boolean | VillagePotential$umkmsArgs<ExtArgs>
    _count?: boolean | VillagePotentialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["villagePotential"]>

  export type VillagePotentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    overview?: boolean
    description?: boolean
    coverImage?: boolean
    gallery?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["villagePotential"]>

  export type VillagePotentialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    overview?: boolean
    description?: boolean
    coverImage?: boolean
    gallery?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["villagePotential"]>

  export type VillagePotentialSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    overview?: boolean
    description?: boolean
    coverImage?: boolean
    gallery?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VillagePotentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "category" | "overview" | "description" | "coverImage" | "gallery" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["villagePotential"]>
  export type VillagePotentialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    umkms?: boolean | VillagePotential$umkmsArgs<ExtArgs>
    _count?: boolean | VillagePotentialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VillagePotentialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VillagePotentialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VillagePotentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VillagePotential"
    objects: {
      umkms: Prisma.$UmkmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      category: $Enums.PotentialCategory
      overview: string
      description: string
      coverImage: string
      gallery: Prisma.JsonValue
      latitude: number
      longitude: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["villagePotential"]>
    composites: {}
  }

  type VillagePotentialGetPayload<S extends boolean | null | undefined | VillagePotentialDefaultArgs> = $Result.GetResult<Prisma.$VillagePotentialPayload, S>

  type VillagePotentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VillagePotentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillagePotentialCountAggregateInputType | true
    }

  export interface VillagePotentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VillagePotential'], meta: { name: 'VillagePotential' } }
    /**
     * Find zero or one VillagePotential that matches the filter.
     * @param {VillagePotentialFindUniqueArgs} args - Arguments to find a VillagePotential
     * @example
     * // Get one VillagePotential
     * const villagePotential = await prisma.villagePotential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VillagePotentialFindUniqueArgs>(args: SelectSubset<T, VillagePotentialFindUniqueArgs<ExtArgs>>): Prisma__VillagePotentialClient<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VillagePotential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VillagePotentialFindUniqueOrThrowArgs} args - Arguments to find a VillagePotential
     * @example
     * // Get one VillagePotential
     * const villagePotential = await prisma.villagePotential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VillagePotentialFindUniqueOrThrowArgs>(args: SelectSubset<T, VillagePotentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VillagePotentialClient<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillagePotential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillagePotentialFindFirstArgs} args - Arguments to find a VillagePotential
     * @example
     * // Get one VillagePotential
     * const villagePotential = await prisma.villagePotential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VillagePotentialFindFirstArgs>(args?: SelectSubset<T, VillagePotentialFindFirstArgs<ExtArgs>>): Prisma__VillagePotentialClient<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillagePotential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillagePotentialFindFirstOrThrowArgs} args - Arguments to find a VillagePotential
     * @example
     * // Get one VillagePotential
     * const villagePotential = await prisma.villagePotential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VillagePotentialFindFirstOrThrowArgs>(args?: SelectSubset<T, VillagePotentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__VillagePotentialClient<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VillagePotentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillagePotentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VillagePotentials
     * const villagePotentials = await prisma.villagePotential.findMany()
     * 
     * // Get first 10 VillagePotentials
     * const villagePotentials = await prisma.villagePotential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villagePotentialWithIdOnly = await prisma.villagePotential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VillagePotentialFindManyArgs>(args?: SelectSubset<T, VillagePotentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VillagePotential.
     * @param {VillagePotentialCreateArgs} args - Arguments to create a VillagePotential.
     * @example
     * // Create one VillagePotential
     * const VillagePotential = await prisma.villagePotential.create({
     *   data: {
     *     // ... data to create a VillagePotential
     *   }
     * })
     * 
     */
    create<T extends VillagePotentialCreateArgs>(args: SelectSubset<T, VillagePotentialCreateArgs<ExtArgs>>): Prisma__VillagePotentialClient<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VillagePotentials.
     * @param {VillagePotentialCreateManyArgs} args - Arguments to create many VillagePotentials.
     * @example
     * // Create many VillagePotentials
     * const villagePotential = await prisma.villagePotential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VillagePotentialCreateManyArgs>(args?: SelectSubset<T, VillagePotentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VillagePotentials and returns the data saved in the database.
     * @param {VillagePotentialCreateManyAndReturnArgs} args - Arguments to create many VillagePotentials.
     * @example
     * // Create many VillagePotentials
     * const villagePotential = await prisma.villagePotential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VillagePotentials and only return the `id`
     * const villagePotentialWithIdOnly = await prisma.villagePotential.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VillagePotentialCreateManyAndReturnArgs>(args?: SelectSubset<T, VillagePotentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VillagePotential.
     * @param {VillagePotentialDeleteArgs} args - Arguments to delete one VillagePotential.
     * @example
     * // Delete one VillagePotential
     * const VillagePotential = await prisma.villagePotential.delete({
     *   where: {
     *     // ... filter to delete one VillagePotential
     *   }
     * })
     * 
     */
    delete<T extends VillagePotentialDeleteArgs>(args: SelectSubset<T, VillagePotentialDeleteArgs<ExtArgs>>): Prisma__VillagePotentialClient<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VillagePotential.
     * @param {VillagePotentialUpdateArgs} args - Arguments to update one VillagePotential.
     * @example
     * // Update one VillagePotential
     * const villagePotential = await prisma.villagePotential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VillagePotentialUpdateArgs>(args: SelectSubset<T, VillagePotentialUpdateArgs<ExtArgs>>): Prisma__VillagePotentialClient<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VillagePotentials.
     * @param {VillagePotentialDeleteManyArgs} args - Arguments to filter VillagePotentials to delete.
     * @example
     * // Delete a few VillagePotentials
     * const { count } = await prisma.villagePotential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VillagePotentialDeleteManyArgs>(args?: SelectSubset<T, VillagePotentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillagePotentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillagePotentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VillagePotentials
     * const villagePotential = await prisma.villagePotential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VillagePotentialUpdateManyArgs>(args: SelectSubset<T, VillagePotentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillagePotentials and returns the data updated in the database.
     * @param {VillagePotentialUpdateManyAndReturnArgs} args - Arguments to update many VillagePotentials.
     * @example
     * // Update many VillagePotentials
     * const villagePotential = await prisma.villagePotential.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VillagePotentials and only return the `id`
     * const villagePotentialWithIdOnly = await prisma.villagePotential.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VillagePotentialUpdateManyAndReturnArgs>(args: SelectSubset<T, VillagePotentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VillagePotential.
     * @param {VillagePotentialUpsertArgs} args - Arguments to update or create a VillagePotential.
     * @example
     * // Update or create a VillagePotential
     * const villagePotential = await prisma.villagePotential.upsert({
     *   create: {
     *     // ... data to create a VillagePotential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VillagePotential we want to update
     *   }
     * })
     */
    upsert<T extends VillagePotentialUpsertArgs>(args: SelectSubset<T, VillagePotentialUpsertArgs<ExtArgs>>): Prisma__VillagePotentialClient<$Result.GetResult<Prisma.$VillagePotentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VillagePotentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillagePotentialCountArgs} args - Arguments to filter VillagePotentials to count.
     * @example
     * // Count the number of VillagePotentials
     * const count = await prisma.villagePotential.count({
     *   where: {
     *     // ... the filter for the VillagePotentials we want to count
     *   }
     * })
    **/
    count<T extends VillagePotentialCountArgs>(
      args?: Subset<T, VillagePotentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillagePotentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VillagePotential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillagePotentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VillagePotentialAggregateArgs>(args: Subset<T, VillagePotentialAggregateArgs>): Prisma.PrismaPromise<GetVillagePotentialAggregateType<T>>

    /**
     * Group by VillagePotential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillagePotentialGroupByArgs} args - Group by arguments.
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
      T extends VillagePotentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VillagePotentialGroupByArgs['orderBy'] }
        : { orderBy?: VillagePotentialGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VillagePotentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillagePotentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VillagePotential model
   */
  readonly fields: VillagePotentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VillagePotential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VillagePotentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    umkms<T extends VillagePotential$umkmsArgs<ExtArgs> = {}>(args?: Subset<T, VillagePotential$umkmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UmkmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VillagePotential model
   */
  interface VillagePotentialFieldRefs {
    readonly id: FieldRef<"VillagePotential", 'String'>
    readonly title: FieldRef<"VillagePotential", 'String'>
    readonly slug: FieldRef<"VillagePotential", 'String'>
    readonly category: FieldRef<"VillagePotential", 'PotentialCategory'>
    readonly overview: FieldRef<"VillagePotential", 'String'>
    readonly description: FieldRef<"VillagePotential", 'String'>
    readonly coverImage: FieldRef<"VillagePotential", 'String'>
    readonly gallery: FieldRef<"VillagePotential", 'Json'>
    readonly latitude: FieldRef<"VillagePotential", 'Float'>
    readonly longitude: FieldRef<"VillagePotential", 'Float'>
    readonly createdAt: FieldRef<"VillagePotential", 'DateTime'>
    readonly updatedAt: FieldRef<"VillagePotential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VillagePotential findUnique
   */
  export type VillagePotentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillagePotentialInclude<ExtArgs> | null
    /**
     * Filter, which VillagePotential to fetch.
     */
    where: VillagePotentialWhereUniqueInput
  }

  /**
   * VillagePotential findUniqueOrThrow
   */
  export type VillagePotentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillagePotentialInclude<ExtArgs> | null
    /**
     * Filter, which VillagePotential to fetch.
     */
    where: VillagePotentialWhereUniqueInput
  }

  /**
   * VillagePotential findFirst
   */
  export type VillagePotentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillagePotentialInclude<ExtArgs> | null
    /**
     * Filter, which VillagePotential to fetch.
     */
    where?: VillagePotentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillagePotentials to fetch.
     */
    orderBy?: VillagePotentialOrderByWithRelationInput | VillagePotentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillagePotentials.
     */
    cursor?: VillagePotentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillagePotentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillagePotentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillagePotentials.
     */
    distinct?: VillagePotentialScalarFieldEnum | VillagePotentialScalarFieldEnum[]
  }

  /**
   * VillagePotential findFirstOrThrow
   */
  export type VillagePotentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillagePotentialInclude<ExtArgs> | null
    /**
     * Filter, which VillagePotential to fetch.
     */
    where?: VillagePotentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillagePotentials to fetch.
     */
    orderBy?: VillagePotentialOrderByWithRelationInput | VillagePotentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillagePotentials.
     */
    cursor?: VillagePotentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillagePotentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillagePotentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillagePotentials.
     */
    distinct?: VillagePotentialScalarFieldEnum | VillagePotentialScalarFieldEnum[]
  }

  /**
   * VillagePotential findMany
   */
  export type VillagePotentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillagePotentialInclude<ExtArgs> | null
    /**
     * Filter, which VillagePotentials to fetch.
     */
    where?: VillagePotentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillagePotentials to fetch.
     */
    orderBy?: VillagePotentialOrderByWithRelationInput | VillagePotentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VillagePotentials.
     */
    cursor?: VillagePotentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillagePotentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillagePotentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillagePotentials.
     */
    distinct?: VillagePotentialScalarFieldEnum | VillagePotentialScalarFieldEnum[]
  }

  /**
   * VillagePotential create
   */
  export type VillagePotentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillagePotentialInclude<ExtArgs> | null
    /**
     * The data needed to create a VillagePotential.
     */
    data: XOR<VillagePotentialCreateInput, VillagePotentialUncheckedCreateInput>
  }

  /**
   * VillagePotential createMany
   */
  export type VillagePotentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VillagePotentials.
     */
    data: VillagePotentialCreateManyInput | VillagePotentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VillagePotential createManyAndReturn
   */
  export type VillagePotentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * The data used to create many VillagePotentials.
     */
    data: VillagePotentialCreateManyInput | VillagePotentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VillagePotential update
   */
  export type VillagePotentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillagePotentialInclude<ExtArgs> | null
    /**
     * The data needed to update a VillagePotential.
     */
    data: XOR<VillagePotentialUpdateInput, VillagePotentialUncheckedUpdateInput>
    /**
     * Choose, which VillagePotential to update.
     */
    where: VillagePotentialWhereUniqueInput
  }

  /**
   * VillagePotential updateMany
   */
  export type VillagePotentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VillagePotentials.
     */
    data: XOR<VillagePotentialUpdateManyMutationInput, VillagePotentialUncheckedUpdateManyInput>
    /**
     * Filter which VillagePotentials to update
     */
    where?: VillagePotentialWhereInput
    /**
     * Limit how many VillagePotentials to update.
     */
    limit?: number
  }

  /**
   * VillagePotential updateManyAndReturn
   */
  export type VillagePotentialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * The data used to update VillagePotentials.
     */
    data: XOR<VillagePotentialUpdateManyMutationInput, VillagePotentialUncheckedUpdateManyInput>
    /**
     * Filter which VillagePotentials to update
     */
    where?: VillagePotentialWhereInput
    /**
     * Limit how many VillagePotentials to update.
     */
    limit?: number
  }

  /**
   * VillagePotential upsert
   */
  export type VillagePotentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillagePotentialInclude<ExtArgs> | null
    /**
     * The filter to search for the VillagePotential to update in case it exists.
     */
    where: VillagePotentialWhereUniqueInput
    /**
     * In case the VillagePotential found by the `where` argument doesn't exist, create a new VillagePotential with this data.
     */
    create: XOR<VillagePotentialCreateInput, VillagePotentialUncheckedCreateInput>
    /**
     * In case the VillagePotential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VillagePotentialUpdateInput, VillagePotentialUncheckedUpdateInput>
  }

  /**
   * VillagePotential delete
   */
  export type VillagePotentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillagePotentialInclude<ExtArgs> | null
    /**
     * Filter which VillagePotential to delete.
     */
    where: VillagePotentialWhereUniqueInput
  }

  /**
   * VillagePotential deleteMany
   */
  export type VillagePotentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillagePotentials to delete
     */
    where?: VillagePotentialWhereInput
    /**
     * Limit how many VillagePotentials to delete.
     */
    limit?: number
  }

  /**
   * VillagePotential.umkms
   */
  export type VillagePotential$umkmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Umkm
     */
    select?: UmkmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Umkm
     */
    omit?: UmkmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UmkmInclude<ExtArgs> | null
    where?: UmkmWhereInput
    orderBy?: UmkmOrderByWithRelationInput | UmkmOrderByWithRelationInput[]
    cursor?: UmkmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UmkmScalarFieldEnum | UmkmScalarFieldEnum[]
  }

  /**
   * VillagePotential without action
   */
  export type VillagePotentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillagePotential
     */
    select?: VillagePotentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillagePotential
     */
    omit?: VillagePotentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VillagePotentialInclude<ExtArgs> | null
  }


  /**
   * Model PublicFacility
   */

  export type AggregatePublicFacility = {
    _count: PublicFacilityCountAggregateOutputType | null
    _avg: PublicFacilityAvgAggregateOutputType | null
    _sum: PublicFacilitySumAggregateOutputType | null
    _min: PublicFacilityMinAggregateOutputType | null
    _max: PublicFacilityMaxAggregateOutputType | null
  }

  export type PublicFacilityAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PublicFacilitySumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PublicFacilityMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.FacilityCategory | null
    address: string | null
    latitude: number | null
    longitude: number | null
    image: string | null
    operatingHours: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicFacilityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.FacilityCategory | null
    address: string | null
    latitude: number | null
    longitude: number | null
    image: string | null
    operatingHours: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicFacilityCountAggregateOutputType = {
    id: number
    name: number
    category: number
    address: number
    latitude: number
    longitude: number
    image: number
    operatingHours: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublicFacilityAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PublicFacilitySumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PublicFacilityMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    address?: true
    latitude?: true
    longitude?: true
    image?: true
    operatingHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicFacilityMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    address?: true
    latitude?: true
    longitude?: true
    image?: true
    operatingHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicFacilityCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    address?: true
    latitude?: true
    longitude?: true
    image?: true
    operatingHours?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublicFacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicFacility to aggregate.
     */
    where?: PublicFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicFacilities to fetch.
     */
    orderBy?: PublicFacilityOrderByWithRelationInput | PublicFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicFacilities
    **/
    _count?: true | PublicFacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicFacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicFacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicFacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicFacilityMaxAggregateInputType
  }

  export type GetPublicFacilityAggregateType<T extends PublicFacilityAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicFacility[P]>
      : GetScalarType<T[P], AggregatePublicFacility[P]>
  }




  export type PublicFacilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicFacilityWhereInput
    orderBy?: PublicFacilityOrderByWithAggregationInput | PublicFacilityOrderByWithAggregationInput[]
    by: PublicFacilityScalarFieldEnum[] | PublicFacilityScalarFieldEnum
    having?: PublicFacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicFacilityCountAggregateInputType | true
    _avg?: PublicFacilityAvgAggregateInputType
    _sum?: PublicFacilitySumAggregateInputType
    _min?: PublicFacilityMinAggregateInputType
    _max?: PublicFacilityMaxAggregateInputType
  }

  export type PublicFacilityGroupByOutputType = {
    id: string
    name: string
    category: $Enums.FacilityCategory
    address: string
    latitude: number
    longitude: number
    image: string | null
    operatingHours: string | null
    createdAt: Date
    updatedAt: Date
    _count: PublicFacilityCountAggregateOutputType | null
    _avg: PublicFacilityAvgAggregateOutputType | null
    _sum: PublicFacilitySumAggregateOutputType | null
    _min: PublicFacilityMinAggregateOutputType | null
    _max: PublicFacilityMaxAggregateOutputType | null
  }

  type GetPublicFacilityGroupByPayload<T extends PublicFacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicFacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicFacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicFacilityGroupByOutputType[P]>
            : GetScalarType<T[P], PublicFacilityGroupByOutputType[P]>
        }
      >
    >


  export type PublicFacilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    image?: boolean
    operatingHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["publicFacility"]>

  export type PublicFacilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    image?: boolean
    operatingHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["publicFacility"]>

  export type PublicFacilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    image?: boolean
    operatingHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["publicFacility"]>

  export type PublicFacilitySelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    image?: boolean
    operatingHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PublicFacilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "address" | "latitude" | "longitude" | "image" | "operatingHours" | "createdAt" | "updatedAt", ExtArgs["result"]["publicFacility"]>

  export type $PublicFacilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicFacility"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: $Enums.FacilityCategory
      address: string
      latitude: number
      longitude: number
      image: string | null
      operatingHours: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publicFacility"]>
    composites: {}
  }

  type PublicFacilityGetPayload<S extends boolean | null | undefined | PublicFacilityDefaultArgs> = $Result.GetResult<Prisma.$PublicFacilityPayload, S>

  type PublicFacilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicFacilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicFacilityCountAggregateInputType | true
    }

  export interface PublicFacilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicFacility'], meta: { name: 'PublicFacility' } }
    /**
     * Find zero or one PublicFacility that matches the filter.
     * @param {PublicFacilityFindUniqueArgs} args - Arguments to find a PublicFacility
     * @example
     * // Get one PublicFacility
     * const publicFacility = await prisma.publicFacility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicFacilityFindUniqueArgs>(args: SelectSubset<T, PublicFacilityFindUniqueArgs<ExtArgs>>): Prisma__PublicFacilityClient<$Result.GetResult<Prisma.$PublicFacilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicFacility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicFacilityFindUniqueOrThrowArgs} args - Arguments to find a PublicFacility
     * @example
     * // Get one PublicFacility
     * const publicFacility = await prisma.publicFacility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicFacilityFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicFacilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicFacilityClient<$Result.GetResult<Prisma.$PublicFacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicFacility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFacilityFindFirstArgs} args - Arguments to find a PublicFacility
     * @example
     * // Get one PublicFacility
     * const publicFacility = await prisma.publicFacility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicFacilityFindFirstArgs>(args?: SelectSubset<T, PublicFacilityFindFirstArgs<ExtArgs>>): Prisma__PublicFacilityClient<$Result.GetResult<Prisma.$PublicFacilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicFacility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFacilityFindFirstOrThrowArgs} args - Arguments to find a PublicFacility
     * @example
     * // Get one PublicFacility
     * const publicFacility = await prisma.publicFacility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicFacilityFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicFacilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicFacilityClient<$Result.GetResult<Prisma.$PublicFacilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicFacilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFacilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicFacilities
     * const publicFacilities = await prisma.publicFacility.findMany()
     * 
     * // Get first 10 PublicFacilities
     * const publicFacilities = await prisma.publicFacility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicFacilityWithIdOnly = await prisma.publicFacility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicFacilityFindManyArgs>(args?: SelectSubset<T, PublicFacilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicFacilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicFacility.
     * @param {PublicFacilityCreateArgs} args - Arguments to create a PublicFacility.
     * @example
     * // Create one PublicFacility
     * const PublicFacility = await prisma.publicFacility.create({
     *   data: {
     *     // ... data to create a PublicFacility
     *   }
     * })
     * 
     */
    create<T extends PublicFacilityCreateArgs>(args: SelectSubset<T, PublicFacilityCreateArgs<ExtArgs>>): Prisma__PublicFacilityClient<$Result.GetResult<Prisma.$PublicFacilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicFacilities.
     * @param {PublicFacilityCreateManyArgs} args - Arguments to create many PublicFacilities.
     * @example
     * // Create many PublicFacilities
     * const publicFacility = await prisma.publicFacility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicFacilityCreateManyArgs>(args?: SelectSubset<T, PublicFacilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicFacilities and returns the data saved in the database.
     * @param {PublicFacilityCreateManyAndReturnArgs} args - Arguments to create many PublicFacilities.
     * @example
     * // Create many PublicFacilities
     * const publicFacility = await prisma.publicFacility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicFacilities and only return the `id`
     * const publicFacilityWithIdOnly = await prisma.publicFacility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicFacilityCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicFacilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicFacilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicFacility.
     * @param {PublicFacilityDeleteArgs} args - Arguments to delete one PublicFacility.
     * @example
     * // Delete one PublicFacility
     * const PublicFacility = await prisma.publicFacility.delete({
     *   where: {
     *     // ... filter to delete one PublicFacility
     *   }
     * })
     * 
     */
    delete<T extends PublicFacilityDeleteArgs>(args: SelectSubset<T, PublicFacilityDeleteArgs<ExtArgs>>): Prisma__PublicFacilityClient<$Result.GetResult<Prisma.$PublicFacilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicFacility.
     * @param {PublicFacilityUpdateArgs} args - Arguments to update one PublicFacility.
     * @example
     * // Update one PublicFacility
     * const publicFacility = await prisma.publicFacility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicFacilityUpdateArgs>(args: SelectSubset<T, PublicFacilityUpdateArgs<ExtArgs>>): Prisma__PublicFacilityClient<$Result.GetResult<Prisma.$PublicFacilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicFacilities.
     * @param {PublicFacilityDeleteManyArgs} args - Arguments to filter PublicFacilities to delete.
     * @example
     * // Delete a few PublicFacilities
     * const { count } = await prisma.publicFacility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicFacilityDeleteManyArgs>(args?: SelectSubset<T, PublicFacilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicFacilities
     * const publicFacility = await prisma.publicFacility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicFacilityUpdateManyArgs>(args: SelectSubset<T, PublicFacilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicFacilities and returns the data updated in the database.
     * @param {PublicFacilityUpdateManyAndReturnArgs} args - Arguments to update many PublicFacilities.
     * @example
     * // Update many PublicFacilities
     * const publicFacility = await prisma.publicFacility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicFacilities and only return the `id`
     * const publicFacilityWithIdOnly = await prisma.publicFacility.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicFacilityUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicFacilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicFacilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicFacility.
     * @param {PublicFacilityUpsertArgs} args - Arguments to update or create a PublicFacility.
     * @example
     * // Update or create a PublicFacility
     * const publicFacility = await prisma.publicFacility.upsert({
     *   create: {
     *     // ... data to create a PublicFacility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicFacility we want to update
     *   }
     * })
     */
    upsert<T extends PublicFacilityUpsertArgs>(args: SelectSubset<T, PublicFacilityUpsertArgs<ExtArgs>>): Prisma__PublicFacilityClient<$Result.GetResult<Prisma.$PublicFacilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFacilityCountArgs} args - Arguments to filter PublicFacilities to count.
     * @example
     * // Count the number of PublicFacilities
     * const count = await prisma.publicFacility.count({
     *   where: {
     *     // ... the filter for the PublicFacilities we want to count
     *   }
     * })
    **/
    count<T extends PublicFacilityCountArgs>(
      args?: Subset<T, PublicFacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicFacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicFacility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicFacilityAggregateArgs>(args: Subset<T, PublicFacilityAggregateArgs>): Prisma.PrismaPromise<GetPublicFacilityAggregateType<T>>

    /**
     * Group by PublicFacility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFacilityGroupByArgs} args - Group by arguments.
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
      T extends PublicFacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicFacilityGroupByArgs['orderBy'] }
        : { orderBy?: PublicFacilityGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicFacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicFacility model
   */
  readonly fields: PublicFacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicFacility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicFacilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublicFacility model
   */
  interface PublicFacilityFieldRefs {
    readonly id: FieldRef<"PublicFacility", 'String'>
    readonly name: FieldRef<"PublicFacility", 'String'>
    readonly category: FieldRef<"PublicFacility", 'FacilityCategory'>
    readonly address: FieldRef<"PublicFacility", 'String'>
    readonly latitude: FieldRef<"PublicFacility", 'Float'>
    readonly longitude: FieldRef<"PublicFacility", 'Float'>
    readonly image: FieldRef<"PublicFacility", 'String'>
    readonly operatingHours: FieldRef<"PublicFacility", 'String'>
    readonly createdAt: FieldRef<"PublicFacility", 'DateTime'>
    readonly updatedAt: FieldRef<"PublicFacility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublicFacility findUnique
   */
  export type PublicFacilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
    /**
     * Filter, which PublicFacility to fetch.
     */
    where: PublicFacilityWhereUniqueInput
  }

  /**
   * PublicFacility findUniqueOrThrow
   */
  export type PublicFacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
    /**
     * Filter, which PublicFacility to fetch.
     */
    where: PublicFacilityWhereUniqueInput
  }

  /**
   * PublicFacility findFirst
   */
  export type PublicFacilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
    /**
     * Filter, which PublicFacility to fetch.
     */
    where?: PublicFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicFacilities to fetch.
     */
    orderBy?: PublicFacilityOrderByWithRelationInput | PublicFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicFacilities.
     */
    cursor?: PublicFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicFacilities.
     */
    distinct?: PublicFacilityScalarFieldEnum | PublicFacilityScalarFieldEnum[]
  }

  /**
   * PublicFacility findFirstOrThrow
   */
  export type PublicFacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
    /**
     * Filter, which PublicFacility to fetch.
     */
    where?: PublicFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicFacilities to fetch.
     */
    orderBy?: PublicFacilityOrderByWithRelationInput | PublicFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicFacilities.
     */
    cursor?: PublicFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicFacilities.
     */
    distinct?: PublicFacilityScalarFieldEnum | PublicFacilityScalarFieldEnum[]
  }

  /**
   * PublicFacility findMany
   */
  export type PublicFacilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
    /**
     * Filter, which PublicFacilities to fetch.
     */
    where?: PublicFacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicFacilities to fetch.
     */
    orderBy?: PublicFacilityOrderByWithRelationInput | PublicFacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicFacilities.
     */
    cursor?: PublicFacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicFacilities.
     */
    distinct?: PublicFacilityScalarFieldEnum | PublicFacilityScalarFieldEnum[]
  }

  /**
   * PublicFacility create
   */
  export type PublicFacilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
    /**
     * The data needed to create a PublicFacility.
     */
    data: XOR<PublicFacilityCreateInput, PublicFacilityUncheckedCreateInput>
  }

  /**
   * PublicFacility createMany
   */
  export type PublicFacilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicFacilities.
     */
    data: PublicFacilityCreateManyInput | PublicFacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicFacility createManyAndReturn
   */
  export type PublicFacilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
    /**
     * The data used to create many PublicFacilities.
     */
    data: PublicFacilityCreateManyInput | PublicFacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicFacility update
   */
  export type PublicFacilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
    /**
     * The data needed to update a PublicFacility.
     */
    data: XOR<PublicFacilityUpdateInput, PublicFacilityUncheckedUpdateInput>
    /**
     * Choose, which PublicFacility to update.
     */
    where: PublicFacilityWhereUniqueInput
  }

  /**
   * PublicFacility updateMany
   */
  export type PublicFacilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicFacilities.
     */
    data: XOR<PublicFacilityUpdateManyMutationInput, PublicFacilityUncheckedUpdateManyInput>
    /**
     * Filter which PublicFacilities to update
     */
    where?: PublicFacilityWhereInput
    /**
     * Limit how many PublicFacilities to update.
     */
    limit?: number
  }

  /**
   * PublicFacility updateManyAndReturn
   */
  export type PublicFacilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
    /**
     * The data used to update PublicFacilities.
     */
    data: XOR<PublicFacilityUpdateManyMutationInput, PublicFacilityUncheckedUpdateManyInput>
    /**
     * Filter which PublicFacilities to update
     */
    where?: PublicFacilityWhereInput
    /**
     * Limit how many PublicFacilities to update.
     */
    limit?: number
  }

  /**
   * PublicFacility upsert
   */
  export type PublicFacilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
    /**
     * The filter to search for the PublicFacility to update in case it exists.
     */
    where: PublicFacilityWhereUniqueInput
    /**
     * In case the PublicFacility found by the `where` argument doesn't exist, create a new PublicFacility with this data.
     */
    create: XOR<PublicFacilityCreateInput, PublicFacilityUncheckedCreateInput>
    /**
     * In case the PublicFacility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicFacilityUpdateInput, PublicFacilityUncheckedUpdateInput>
  }

  /**
   * PublicFacility delete
   */
  export type PublicFacilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
    /**
     * Filter which PublicFacility to delete.
     */
    where: PublicFacilityWhereUniqueInput
  }

  /**
   * PublicFacility deleteMany
   */
  export type PublicFacilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicFacilities to delete
     */
    where?: PublicFacilityWhereInput
    /**
     * Limit how many PublicFacilities to delete.
     */
    limit?: number
  }

  /**
   * PublicFacility without action
   */
  export type PublicFacilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicFacility
     */
    select?: PublicFacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicFacility
     */
    omit?: PublicFacilityOmit<ExtArgs> | null
  }


  /**
   * Model VillageProfile
   */

  export type AggregateVillageProfile = {
    _count: VillageProfileCountAggregateOutputType | null
    _min: VillageProfileMinAggregateOutputType | null
    _max: VillageProfileMaxAggregateOutputType | null
  }

  export type VillageProfileMinAggregateOutputType = {
    id: string | null
    villageName: string | null
    headGreeting: string | null
    headPhoto: string | null
    historyText: string | null
    vision: string | null
    updatedAt: Date | null
  }

  export type VillageProfileMaxAggregateOutputType = {
    id: string | null
    villageName: string | null
    headGreeting: string | null
    headPhoto: string | null
    historyText: string | null
    vision: string | null
    updatedAt: Date | null
  }

  export type VillageProfileCountAggregateOutputType = {
    id: number
    villageName: number
    headGreeting: number
    headPhoto: number
    historyText: number
    vision: number
    missions: number
    officials: number
    updatedAt: number
    _all: number
  }


  export type VillageProfileMinAggregateInputType = {
    id?: true
    villageName?: true
    headGreeting?: true
    headPhoto?: true
    historyText?: true
    vision?: true
    updatedAt?: true
  }

  export type VillageProfileMaxAggregateInputType = {
    id?: true
    villageName?: true
    headGreeting?: true
    headPhoto?: true
    historyText?: true
    vision?: true
    updatedAt?: true
  }

  export type VillageProfileCountAggregateInputType = {
    id?: true
    villageName?: true
    headGreeting?: true
    headPhoto?: true
    historyText?: true
    vision?: true
    missions?: true
    officials?: true
    updatedAt?: true
    _all?: true
  }

  export type VillageProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillageProfile to aggregate.
     */
    where?: VillageProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillageProfiles to fetch.
     */
    orderBy?: VillageProfileOrderByWithRelationInput | VillageProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VillageProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillageProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillageProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VillageProfiles
    **/
    _count?: true | VillageProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillageProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillageProfileMaxAggregateInputType
  }

  export type GetVillageProfileAggregateType<T extends VillageProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateVillageProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillageProfile[P]>
      : GetScalarType<T[P], AggregateVillageProfile[P]>
  }




  export type VillageProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VillageProfileWhereInput
    orderBy?: VillageProfileOrderByWithAggregationInput | VillageProfileOrderByWithAggregationInput[]
    by: VillageProfileScalarFieldEnum[] | VillageProfileScalarFieldEnum
    having?: VillageProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillageProfileCountAggregateInputType | true
    _min?: VillageProfileMinAggregateInputType
    _max?: VillageProfileMaxAggregateInputType
  }

  export type VillageProfileGroupByOutputType = {
    id: string
    villageName: string
    headGreeting: string
    headPhoto: string
    historyText: string
    vision: string
    missions: JsonValue
    officials: JsonValue
    updatedAt: Date
    _count: VillageProfileCountAggregateOutputType | null
    _min: VillageProfileMinAggregateOutputType | null
    _max: VillageProfileMaxAggregateOutputType | null
  }

  type GetVillageProfileGroupByPayload<T extends VillageProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillageProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillageProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillageProfileGroupByOutputType[P]>
            : GetScalarType<T[P], VillageProfileGroupByOutputType[P]>
        }
      >
    >


  export type VillageProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    villageName?: boolean
    headGreeting?: boolean
    headPhoto?: boolean
    historyText?: boolean
    vision?: boolean
    missions?: boolean
    officials?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["villageProfile"]>

  export type VillageProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    villageName?: boolean
    headGreeting?: boolean
    headPhoto?: boolean
    historyText?: boolean
    vision?: boolean
    missions?: boolean
    officials?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["villageProfile"]>

  export type VillageProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    villageName?: boolean
    headGreeting?: boolean
    headPhoto?: boolean
    historyText?: boolean
    vision?: boolean
    missions?: boolean
    officials?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["villageProfile"]>

  export type VillageProfileSelectScalar = {
    id?: boolean
    villageName?: boolean
    headGreeting?: boolean
    headPhoto?: boolean
    historyText?: boolean
    vision?: boolean
    missions?: boolean
    officials?: boolean
    updatedAt?: boolean
  }

  export type VillageProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "villageName" | "headGreeting" | "headPhoto" | "historyText" | "vision" | "missions" | "officials" | "updatedAt", ExtArgs["result"]["villageProfile"]>

  export type $VillageProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VillageProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      villageName: string
      headGreeting: string
      headPhoto: string
      historyText: string
      vision: string
      missions: Prisma.JsonValue
      officials: Prisma.JsonValue
      updatedAt: Date
    }, ExtArgs["result"]["villageProfile"]>
    composites: {}
  }

  type VillageProfileGetPayload<S extends boolean | null | undefined | VillageProfileDefaultArgs> = $Result.GetResult<Prisma.$VillageProfilePayload, S>

  type VillageProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VillageProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillageProfileCountAggregateInputType | true
    }

  export interface VillageProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VillageProfile'], meta: { name: 'VillageProfile' } }
    /**
     * Find zero or one VillageProfile that matches the filter.
     * @param {VillageProfileFindUniqueArgs} args - Arguments to find a VillageProfile
     * @example
     * // Get one VillageProfile
     * const villageProfile = await prisma.villageProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VillageProfileFindUniqueArgs>(args: SelectSubset<T, VillageProfileFindUniqueArgs<ExtArgs>>): Prisma__VillageProfileClient<$Result.GetResult<Prisma.$VillageProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VillageProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VillageProfileFindUniqueOrThrowArgs} args - Arguments to find a VillageProfile
     * @example
     * // Get one VillageProfile
     * const villageProfile = await prisma.villageProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VillageProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, VillageProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VillageProfileClient<$Result.GetResult<Prisma.$VillageProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillageProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageProfileFindFirstArgs} args - Arguments to find a VillageProfile
     * @example
     * // Get one VillageProfile
     * const villageProfile = await prisma.villageProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VillageProfileFindFirstArgs>(args?: SelectSubset<T, VillageProfileFindFirstArgs<ExtArgs>>): Prisma__VillageProfileClient<$Result.GetResult<Prisma.$VillageProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VillageProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageProfileFindFirstOrThrowArgs} args - Arguments to find a VillageProfile
     * @example
     * // Get one VillageProfile
     * const villageProfile = await prisma.villageProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VillageProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, VillageProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__VillageProfileClient<$Result.GetResult<Prisma.$VillageProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VillageProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VillageProfiles
     * const villageProfiles = await prisma.villageProfile.findMany()
     * 
     * // Get first 10 VillageProfiles
     * const villageProfiles = await prisma.villageProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const villageProfileWithIdOnly = await prisma.villageProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VillageProfileFindManyArgs>(args?: SelectSubset<T, VillageProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillageProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VillageProfile.
     * @param {VillageProfileCreateArgs} args - Arguments to create a VillageProfile.
     * @example
     * // Create one VillageProfile
     * const VillageProfile = await prisma.villageProfile.create({
     *   data: {
     *     // ... data to create a VillageProfile
     *   }
     * })
     * 
     */
    create<T extends VillageProfileCreateArgs>(args: SelectSubset<T, VillageProfileCreateArgs<ExtArgs>>): Prisma__VillageProfileClient<$Result.GetResult<Prisma.$VillageProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VillageProfiles.
     * @param {VillageProfileCreateManyArgs} args - Arguments to create many VillageProfiles.
     * @example
     * // Create many VillageProfiles
     * const villageProfile = await prisma.villageProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VillageProfileCreateManyArgs>(args?: SelectSubset<T, VillageProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VillageProfiles and returns the data saved in the database.
     * @param {VillageProfileCreateManyAndReturnArgs} args - Arguments to create many VillageProfiles.
     * @example
     * // Create many VillageProfiles
     * const villageProfile = await prisma.villageProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VillageProfiles and only return the `id`
     * const villageProfileWithIdOnly = await prisma.villageProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VillageProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, VillageProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillageProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VillageProfile.
     * @param {VillageProfileDeleteArgs} args - Arguments to delete one VillageProfile.
     * @example
     * // Delete one VillageProfile
     * const VillageProfile = await prisma.villageProfile.delete({
     *   where: {
     *     // ... filter to delete one VillageProfile
     *   }
     * })
     * 
     */
    delete<T extends VillageProfileDeleteArgs>(args: SelectSubset<T, VillageProfileDeleteArgs<ExtArgs>>): Prisma__VillageProfileClient<$Result.GetResult<Prisma.$VillageProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VillageProfile.
     * @param {VillageProfileUpdateArgs} args - Arguments to update one VillageProfile.
     * @example
     * // Update one VillageProfile
     * const villageProfile = await prisma.villageProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VillageProfileUpdateArgs>(args: SelectSubset<T, VillageProfileUpdateArgs<ExtArgs>>): Prisma__VillageProfileClient<$Result.GetResult<Prisma.$VillageProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VillageProfiles.
     * @param {VillageProfileDeleteManyArgs} args - Arguments to filter VillageProfiles to delete.
     * @example
     * // Delete a few VillageProfiles
     * const { count } = await prisma.villageProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VillageProfileDeleteManyArgs>(args?: SelectSubset<T, VillageProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillageProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VillageProfiles
     * const villageProfile = await prisma.villageProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VillageProfileUpdateManyArgs>(args: SelectSubset<T, VillageProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VillageProfiles and returns the data updated in the database.
     * @param {VillageProfileUpdateManyAndReturnArgs} args - Arguments to update many VillageProfiles.
     * @example
     * // Update many VillageProfiles
     * const villageProfile = await prisma.villageProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VillageProfiles and only return the `id`
     * const villageProfileWithIdOnly = await prisma.villageProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VillageProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, VillageProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VillageProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VillageProfile.
     * @param {VillageProfileUpsertArgs} args - Arguments to update or create a VillageProfile.
     * @example
     * // Update or create a VillageProfile
     * const villageProfile = await prisma.villageProfile.upsert({
     *   create: {
     *     // ... data to create a VillageProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VillageProfile we want to update
     *   }
     * })
     */
    upsert<T extends VillageProfileUpsertArgs>(args: SelectSubset<T, VillageProfileUpsertArgs<ExtArgs>>): Prisma__VillageProfileClient<$Result.GetResult<Prisma.$VillageProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VillageProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageProfileCountArgs} args - Arguments to filter VillageProfiles to count.
     * @example
     * // Count the number of VillageProfiles
     * const count = await prisma.villageProfile.count({
     *   where: {
     *     // ... the filter for the VillageProfiles we want to count
     *   }
     * })
    **/
    count<T extends VillageProfileCountArgs>(
      args?: Subset<T, VillageProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillageProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VillageProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VillageProfileAggregateArgs>(args: Subset<T, VillageProfileAggregateArgs>): Prisma.PrismaPromise<GetVillageProfileAggregateType<T>>

    /**
     * Group by VillageProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageProfileGroupByArgs} args - Group by arguments.
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
      T extends VillageProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VillageProfileGroupByArgs['orderBy'] }
        : { orderBy?: VillageProfileGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VillageProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillageProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VillageProfile model
   */
  readonly fields: VillageProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VillageProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VillageProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VillageProfile model
   */
  interface VillageProfileFieldRefs {
    readonly id: FieldRef<"VillageProfile", 'String'>
    readonly villageName: FieldRef<"VillageProfile", 'String'>
    readonly headGreeting: FieldRef<"VillageProfile", 'String'>
    readonly headPhoto: FieldRef<"VillageProfile", 'String'>
    readonly historyText: FieldRef<"VillageProfile", 'String'>
    readonly vision: FieldRef<"VillageProfile", 'String'>
    readonly missions: FieldRef<"VillageProfile", 'Json'>
    readonly officials: FieldRef<"VillageProfile", 'Json'>
    readonly updatedAt: FieldRef<"VillageProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VillageProfile findUnique
   */
  export type VillageProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
    /**
     * Filter, which VillageProfile to fetch.
     */
    where: VillageProfileWhereUniqueInput
  }

  /**
   * VillageProfile findUniqueOrThrow
   */
  export type VillageProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
    /**
     * Filter, which VillageProfile to fetch.
     */
    where: VillageProfileWhereUniqueInput
  }

  /**
   * VillageProfile findFirst
   */
  export type VillageProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
    /**
     * Filter, which VillageProfile to fetch.
     */
    where?: VillageProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillageProfiles to fetch.
     */
    orderBy?: VillageProfileOrderByWithRelationInput | VillageProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillageProfiles.
     */
    cursor?: VillageProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillageProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillageProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillageProfiles.
     */
    distinct?: VillageProfileScalarFieldEnum | VillageProfileScalarFieldEnum[]
  }

  /**
   * VillageProfile findFirstOrThrow
   */
  export type VillageProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
    /**
     * Filter, which VillageProfile to fetch.
     */
    where?: VillageProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillageProfiles to fetch.
     */
    orderBy?: VillageProfileOrderByWithRelationInput | VillageProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VillageProfiles.
     */
    cursor?: VillageProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillageProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillageProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillageProfiles.
     */
    distinct?: VillageProfileScalarFieldEnum | VillageProfileScalarFieldEnum[]
  }

  /**
   * VillageProfile findMany
   */
  export type VillageProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
    /**
     * Filter, which VillageProfiles to fetch.
     */
    where?: VillageProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VillageProfiles to fetch.
     */
    orderBy?: VillageProfileOrderByWithRelationInput | VillageProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VillageProfiles.
     */
    cursor?: VillageProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VillageProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VillageProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VillageProfiles.
     */
    distinct?: VillageProfileScalarFieldEnum | VillageProfileScalarFieldEnum[]
  }

  /**
   * VillageProfile create
   */
  export type VillageProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a VillageProfile.
     */
    data: XOR<VillageProfileCreateInput, VillageProfileUncheckedCreateInput>
  }

  /**
   * VillageProfile createMany
   */
  export type VillageProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VillageProfiles.
     */
    data: VillageProfileCreateManyInput | VillageProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VillageProfile createManyAndReturn
   */
  export type VillageProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
    /**
     * The data used to create many VillageProfiles.
     */
    data: VillageProfileCreateManyInput | VillageProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VillageProfile update
   */
  export type VillageProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a VillageProfile.
     */
    data: XOR<VillageProfileUpdateInput, VillageProfileUncheckedUpdateInput>
    /**
     * Choose, which VillageProfile to update.
     */
    where: VillageProfileWhereUniqueInput
  }

  /**
   * VillageProfile updateMany
   */
  export type VillageProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VillageProfiles.
     */
    data: XOR<VillageProfileUpdateManyMutationInput, VillageProfileUncheckedUpdateManyInput>
    /**
     * Filter which VillageProfiles to update
     */
    where?: VillageProfileWhereInput
    /**
     * Limit how many VillageProfiles to update.
     */
    limit?: number
  }

  /**
   * VillageProfile updateManyAndReturn
   */
  export type VillageProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
    /**
     * The data used to update VillageProfiles.
     */
    data: XOR<VillageProfileUpdateManyMutationInput, VillageProfileUncheckedUpdateManyInput>
    /**
     * Filter which VillageProfiles to update
     */
    where?: VillageProfileWhereInput
    /**
     * Limit how many VillageProfiles to update.
     */
    limit?: number
  }

  /**
   * VillageProfile upsert
   */
  export type VillageProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the VillageProfile to update in case it exists.
     */
    where: VillageProfileWhereUniqueInput
    /**
     * In case the VillageProfile found by the `where` argument doesn't exist, create a new VillageProfile with this data.
     */
    create: XOR<VillageProfileCreateInput, VillageProfileUncheckedCreateInput>
    /**
     * In case the VillageProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VillageProfileUpdateInput, VillageProfileUncheckedUpdateInput>
  }

  /**
   * VillageProfile delete
   */
  export type VillageProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
    /**
     * Filter which VillageProfile to delete.
     */
    where: VillageProfileWhereUniqueInput
  }

  /**
   * VillageProfile deleteMany
   */
  export type VillageProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VillageProfiles to delete
     */
    where?: VillageProfileWhereInput
    /**
     * Limit how many VillageProfiles to delete.
     */
    limit?: number
  }

  /**
   * VillageProfile without action
   */
  export type VillageProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageProfile
     */
    select?: VillageProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VillageProfile
     */
    omit?: VillageProfileOmit<ExtArgs> | null
  }


  /**
   * Model RevisionHistory
   */

  export type AggregateRevisionHistory = {
    _count: RevisionHistoryCountAggregateOutputType | null
    _min: RevisionHistoryMinAggregateOutputType | null
    _max: RevisionHistoryMaxAggregateOutputType | null
  }

  export type RevisionHistoryMinAggregateOutputType = {
    id: string | null
    entityType: string | null
    entityId: string | null
    action: $Enums.ActionType | null
    notes: string | null
    adminId: string | null
    createdAt: Date | null
  }

  export type RevisionHistoryMaxAggregateOutputType = {
    id: string | null
    entityType: string | null
    entityId: string | null
    action: $Enums.ActionType | null
    notes: string | null
    adminId: string | null
    createdAt: Date | null
  }

  export type RevisionHistoryCountAggregateOutputType = {
    id: number
    entityType: number
    entityId: number
    action: number
    notes: number
    adminId: number
    createdAt: number
    _all: number
  }


  export type RevisionHistoryMinAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    action?: true
    notes?: true
    adminId?: true
    createdAt?: true
  }

  export type RevisionHistoryMaxAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    action?: true
    notes?: true
    adminId?: true
    createdAt?: true
  }

  export type RevisionHistoryCountAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    action?: true
    notes?: true
    adminId?: true
    createdAt?: true
    _all?: true
  }

  export type RevisionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevisionHistory to aggregate.
     */
    where?: RevisionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionHistories to fetch.
     */
    orderBy?: RevisionHistoryOrderByWithRelationInput | RevisionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevisionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevisionHistories
    **/
    _count?: true | RevisionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevisionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevisionHistoryMaxAggregateInputType
  }

  export type GetRevisionHistoryAggregateType<T extends RevisionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRevisionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevisionHistory[P]>
      : GetScalarType<T[P], AggregateRevisionHistory[P]>
  }




  export type RevisionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionHistoryWhereInput
    orderBy?: RevisionHistoryOrderByWithAggregationInput | RevisionHistoryOrderByWithAggregationInput[]
    by: RevisionHistoryScalarFieldEnum[] | RevisionHistoryScalarFieldEnum
    having?: RevisionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevisionHistoryCountAggregateInputType | true
    _min?: RevisionHistoryMinAggregateInputType
    _max?: RevisionHistoryMaxAggregateInputType
  }

  export type RevisionHistoryGroupByOutputType = {
    id: string
    entityType: string
    entityId: string
    action: $Enums.ActionType
    notes: string | null
    adminId: string | null
    createdAt: Date
    _count: RevisionHistoryCountAggregateOutputType | null
    _min: RevisionHistoryMinAggregateOutputType | null
    _max: RevisionHistoryMaxAggregateOutputType | null
  }

  type GetRevisionHistoryGroupByPayload<T extends RevisionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevisionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevisionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevisionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RevisionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RevisionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    notes?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | RevisionHistory$adminArgs<ExtArgs>
  }, ExtArgs["result"]["revisionHistory"]>

  export type RevisionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    notes?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | RevisionHistory$adminArgs<ExtArgs>
  }, ExtArgs["result"]["revisionHistory"]>

  export type RevisionHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    notes?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | RevisionHistory$adminArgs<ExtArgs>
  }, ExtArgs["result"]["revisionHistory"]>

  export type RevisionHistorySelectScalar = {
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    notes?: boolean
    adminId?: boolean
    createdAt?: boolean
  }

  export type RevisionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entityType" | "entityId" | "action" | "notes" | "adminId" | "createdAt", ExtArgs["result"]["revisionHistory"]>
  export type RevisionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | RevisionHistory$adminArgs<ExtArgs>
  }
  export type RevisionHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | RevisionHistory$adminArgs<ExtArgs>
  }
  export type RevisionHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | RevisionHistory$adminArgs<ExtArgs>
  }

  export type $RevisionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevisionHistory"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entityType: string
      entityId: string
      action: $Enums.ActionType
      notes: string | null
      adminId: string | null
      createdAt: Date
    }, ExtArgs["result"]["revisionHistory"]>
    composites: {}
  }

  type RevisionHistoryGetPayload<S extends boolean | null | undefined | RevisionHistoryDefaultArgs> = $Result.GetResult<Prisma.$RevisionHistoryPayload, S>

  type RevisionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevisionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevisionHistoryCountAggregateInputType | true
    }

  export interface RevisionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevisionHistory'], meta: { name: 'RevisionHistory' } }
    /**
     * Find zero or one RevisionHistory that matches the filter.
     * @param {RevisionHistoryFindUniqueArgs} args - Arguments to find a RevisionHistory
     * @example
     * // Get one RevisionHistory
     * const revisionHistory = await prisma.revisionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevisionHistoryFindUniqueArgs>(args: SelectSubset<T, RevisionHistoryFindUniqueArgs<ExtArgs>>): Prisma__RevisionHistoryClient<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RevisionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevisionHistoryFindUniqueOrThrowArgs} args - Arguments to find a RevisionHistory
     * @example
     * // Get one RevisionHistory
     * const revisionHistory = await prisma.revisionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevisionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RevisionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevisionHistoryClient<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevisionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHistoryFindFirstArgs} args - Arguments to find a RevisionHistory
     * @example
     * // Get one RevisionHistory
     * const revisionHistory = await prisma.revisionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevisionHistoryFindFirstArgs>(args?: SelectSubset<T, RevisionHistoryFindFirstArgs<ExtArgs>>): Prisma__RevisionHistoryClient<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevisionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHistoryFindFirstOrThrowArgs} args - Arguments to find a RevisionHistory
     * @example
     * // Get one RevisionHistory
     * const revisionHistory = await prisma.revisionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevisionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RevisionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevisionHistoryClient<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevisionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevisionHistories
     * const revisionHistories = await prisma.revisionHistory.findMany()
     * 
     * // Get first 10 RevisionHistories
     * const revisionHistories = await prisma.revisionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revisionHistoryWithIdOnly = await prisma.revisionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevisionHistoryFindManyArgs>(args?: SelectSubset<T, RevisionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RevisionHistory.
     * @param {RevisionHistoryCreateArgs} args - Arguments to create a RevisionHistory.
     * @example
     * // Create one RevisionHistory
     * const RevisionHistory = await prisma.revisionHistory.create({
     *   data: {
     *     // ... data to create a RevisionHistory
     *   }
     * })
     * 
     */
    create<T extends RevisionHistoryCreateArgs>(args: SelectSubset<T, RevisionHistoryCreateArgs<ExtArgs>>): Prisma__RevisionHistoryClient<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RevisionHistories.
     * @param {RevisionHistoryCreateManyArgs} args - Arguments to create many RevisionHistories.
     * @example
     * // Create many RevisionHistories
     * const revisionHistory = await prisma.revisionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevisionHistoryCreateManyArgs>(args?: SelectSubset<T, RevisionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RevisionHistories and returns the data saved in the database.
     * @param {RevisionHistoryCreateManyAndReturnArgs} args - Arguments to create many RevisionHistories.
     * @example
     * // Create many RevisionHistories
     * const revisionHistory = await prisma.revisionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RevisionHistories and only return the `id`
     * const revisionHistoryWithIdOnly = await prisma.revisionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RevisionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RevisionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RevisionHistory.
     * @param {RevisionHistoryDeleteArgs} args - Arguments to delete one RevisionHistory.
     * @example
     * // Delete one RevisionHistory
     * const RevisionHistory = await prisma.revisionHistory.delete({
     *   where: {
     *     // ... filter to delete one RevisionHistory
     *   }
     * })
     * 
     */
    delete<T extends RevisionHistoryDeleteArgs>(args: SelectSubset<T, RevisionHistoryDeleteArgs<ExtArgs>>): Prisma__RevisionHistoryClient<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RevisionHistory.
     * @param {RevisionHistoryUpdateArgs} args - Arguments to update one RevisionHistory.
     * @example
     * // Update one RevisionHistory
     * const revisionHistory = await prisma.revisionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevisionHistoryUpdateArgs>(args: SelectSubset<T, RevisionHistoryUpdateArgs<ExtArgs>>): Prisma__RevisionHistoryClient<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RevisionHistories.
     * @param {RevisionHistoryDeleteManyArgs} args - Arguments to filter RevisionHistories to delete.
     * @example
     * // Delete a few RevisionHistories
     * const { count } = await prisma.revisionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevisionHistoryDeleteManyArgs>(args?: SelectSubset<T, RevisionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevisionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevisionHistories
     * const revisionHistory = await prisma.revisionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevisionHistoryUpdateManyArgs>(args: SelectSubset<T, RevisionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevisionHistories and returns the data updated in the database.
     * @param {RevisionHistoryUpdateManyAndReturnArgs} args - Arguments to update many RevisionHistories.
     * @example
     * // Update many RevisionHistories
     * const revisionHistory = await prisma.revisionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RevisionHistories and only return the `id`
     * const revisionHistoryWithIdOnly = await prisma.revisionHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RevisionHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RevisionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RevisionHistory.
     * @param {RevisionHistoryUpsertArgs} args - Arguments to update or create a RevisionHistory.
     * @example
     * // Update or create a RevisionHistory
     * const revisionHistory = await prisma.revisionHistory.upsert({
     *   create: {
     *     // ... data to create a RevisionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevisionHistory we want to update
     *   }
     * })
     */
    upsert<T extends RevisionHistoryUpsertArgs>(args: SelectSubset<T, RevisionHistoryUpsertArgs<ExtArgs>>): Prisma__RevisionHistoryClient<$Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RevisionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHistoryCountArgs} args - Arguments to filter RevisionHistories to count.
     * @example
     * // Count the number of RevisionHistories
     * const count = await prisma.revisionHistory.count({
     *   where: {
     *     // ... the filter for the RevisionHistories we want to count
     *   }
     * })
    **/
    count<T extends RevisionHistoryCountArgs>(
      args?: Subset<T, RevisionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevisionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevisionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RevisionHistoryAggregateArgs>(args: Subset<T, RevisionHistoryAggregateArgs>): Prisma.PrismaPromise<GetRevisionHistoryAggregateType<T>>

    /**
     * Group by RevisionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionHistoryGroupByArgs} args - Group by arguments.
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
      T extends RevisionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevisionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RevisionHistoryGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevisionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevisionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevisionHistory model
   */
  readonly fields: RevisionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevisionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevisionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends RevisionHistory$adminArgs<ExtArgs> = {}>(args?: Subset<T, RevisionHistory$adminArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RevisionHistory model
   */
  interface RevisionHistoryFieldRefs {
    readonly id: FieldRef<"RevisionHistory", 'String'>
    readonly entityType: FieldRef<"RevisionHistory", 'String'>
    readonly entityId: FieldRef<"RevisionHistory", 'String'>
    readonly action: FieldRef<"RevisionHistory", 'ActionType'>
    readonly notes: FieldRef<"RevisionHistory", 'String'>
    readonly adminId: FieldRef<"RevisionHistory", 'String'>
    readonly createdAt: FieldRef<"RevisionHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RevisionHistory findUnique
   */
  export type RevisionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RevisionHistory to fetch.
     */
    where: RevisionHistoryWhereUniqueInput
  }

  /**
   * RevisionHistory findUniqueOrThrow
   */
  export type RevisionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RevisionHistory to fetch.
     */
    where: RevisionHistoryWhereUniqueInput
  }

  /**
   * RevisionHistory findFirst
   */
  export type RevisionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RevisionHistory to fetch.
     */
    where?: RevisionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionHistories to fetch.
     */
    orderBy?: RevisionHistoryOrderByWithRelationInput | RevisionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevisionHistories.
     */
    cursor?: RevisionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevisionHistories.
     */
    distinct?: RevisionHistoryScalarFieldEnum | RevisionHistoryScalarFieldEnum[]
  }

  /**
   * RevisionHistory findFirstOrThrow
   */
  export type RevisionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RevisionHistory to fetch.
     */
    where?: RevisionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionHistories to fetch.
     */
    orderBy?: RevisionHistoryOrderByWithRelationInput | RevisionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevisionHistories.
     */
    cursor?: RevisionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevisionHistories.
     */
    distinct?: RevisionHistoryScalarFieldEnum | RevisionHistoryScalarFieldEnum[]
  }

  /**
   * RevisionHistory findMany
   */
  export type RevisionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RevisionHistories to fetch.
     */
    where?: RevisionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevisionHistories to fetch.
     */
    orderBy?: RevisionHistoryOrderByWithRelationInput | RevisionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevisionHistories.
     */
    cursor?: RevisionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevisionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevisionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevisionHistories.
     */
    distinct?: RevisionHistoryScalarFieldEnum | RevisionHistoryScalarFieldEnum[]
  }

  /**
   * RevisionHistory create
   */
  export type RevisionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RevisionHistory.
     */
    data: XOR<RevisionHistoryCreateInput, RevisionHistoryUncheckedCreateInput>
  }

  /**
   * RevisionHistory createMany
   */
  export type RevisionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevisionHistories.
     */
    data: RevisionHistoryCreateManyInput | RevisionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RevisionHistory createManyAndReturn
   */
  export type RevisionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many RevisionHistories.
     */
    data: RevisionHistoryCreateManyInput | RevisionHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevisionHistory update
   */
  export type RevisionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RevisionHistory.
     */
    data: XOR<RevisionHistoryUpdateInput, RevisionHistoryUncheckedUpdateInput>
    /**
     * Choose, which RevisionHistory to update.
     */
    where: RevisionHistoryWhereUniqueInput
  }

  /**
   * RevisionHistory updateMany
   */
  export type RevisionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevisionHistories.
     */
    data: XOR<RevisionHistoryUpdateManyMutationInput, RevisionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RevisionHistories to update
     */
    where?: RevisionHistoryWhereInput
    /**
     * Limit how many RevisionHistories to update.
     */
    limit?: number
  }

  /**
   * RevisionHistory updateManyAndReturn
   */
  export type RevisionHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * The data used to update RevisionHistories.
     */
    data: XOR<RevisionHistoryUpdateManyMutationInput, RevisionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RevisionHistories to update
     */
    where?: RevisionHistoryWhereInput
    /**
     * Limit how many RevisionHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevisionHistory upsert
   */
  export type RevisionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RevisionHistory to update in case it exists.
     */
    where: RevisionHistoryWhereUniqueInput
    /**
     * In case the RevisionHistory found by the `where` argument doesn't exist, create a new RevisionHistory with this data.
     */
    create: XOR<RevisionHistoryCreateInput, RevisionHistoryUncheckedCreateInput>
    /**
     * In case the RevisionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevisionHistoryUpdateInput, RevisionHistoryUncheckedUpdateInput>
  }

  /**
   * RevisionHistory delete
   */
  export type RevisionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryInclude<ExtArgs> | null
    /**
     * Filter which RevisionHistory to delete.
     */
    where: RevisionHistoryWhereUniqueInput
  }

  /**
   * RevisionHistory deleteMany
   */
  export type RevisionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevisionHistories to delete
     */
    where?: RevisionHistoryWhereInput
    /**
     * Limit how many RevisionHistories to delete.
     */
    limit?: number
  }

  /**
   * RevisionHistory.admin
   */
  export type RevisionHistory$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RevisionHistory without action
   */
  export type RevisionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevisionHistory
     */
    select?: RevisionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevisionHistory
     */
    omit?: RevisionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionHistoryInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entityType: number
    entityId: number
    payload: number
    ipAddress: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    ipAddress?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    ipAddress?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    payload?: true
    ipAddress?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    entityType: string
    entityId: string
    payload: JsonValue | null
    ipAddress: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    ipAddress?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "entityType" | "entityId" | "payload" | "ipAddress" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      entityType: string
      entityId: string
      payload: Prisma.JsonValue | null
      ipAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly payload: FieldRef<"AuditLog", 'Json'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    order: number | null
  }

  export type BannerSumAggregateOutputType = {
    order: number | null
  }

  export type BannerMinAggregateOutputType = {
    id: string | null
    title: string | null
    imageUrl: string | null
    linkUrl: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerMaxAggregateOutputType = {
    id: string | null
    title: string | null
    imageUrl: string | null
    linkUrl: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    title: number
    imageUrl: number
    linkUrl: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    order?: true
  }

  export type BannerSumAggregateInputType = {
    order?: true
  }

  export type BannerMinAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    linkUrl?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    linkUrl?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    linkUrl?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: string
    title: string
    imageUrl: string
    linkUrl: string | null
    order: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "imageUrl" | "linkUrl" | "order" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["banner"]>

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      imageUrl: string
      linkUrl: string | null
      order: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {BannerUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BannerUpdateManyAndReturnArgs>(args: SelectSubset<T, BannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'String'>
    readonly title: FieldRef<"Banner", 'String'>
    readonly imageUrl: FieldRef<"Banner", 'String'>
    readonly linkUrl: FieldRef<"Banner", 'String'>
    readonly order: FieldRef<"Banner", 'Int'>
    readonly isActive: FieldRef<"Banner", 'Boolean'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly updatedAt: FieldRef<"Banner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner updateManyAndReturn
   */
  export type BannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    updatedAt: number
    _all: number
  }


  export type SettingsMinAggregateInputType = {
    id?: true
    key?: true
    description?: true
    updatedAt?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    key?: true
    description?: true
    updatedAt?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    key: string
    value: JsonValue
    description: string | null
    updatedAt: Date
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    updatedAt?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description" | "updatedAt", ExtArgs["result"]["settings"]>

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: Prisma.JsonValue
      description: string | null
      updatedAt: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly key: FieldRef<"Settings", 'String'>
    readonly value: FieldRef<"Settings", 'Json'>
    readonly description: FieldRef<"Settings", 'String'>
    readonly updatedAt: FieldRef<"Settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NewsCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt'
  };

  export type NewsCategoryScalarFieldEnum = (typeof NewsCategoryScalarFieldEnum)[keyof typeof NewsCategoryScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    authorId: 'authorId',
    title: 'title',
    slug: 'slug',
    summary: 'summary',
    coverImage: 'coverImage',
    coverCaption: 'coverCaption',
    contentSections: 'contentSections',
    status: 'status',
    submitterName: 'submitterName',
    submitterEmail: 'submitterEmail',
    submitterPhone: 'submitterPhone',
    revisionToken: 'revisionToken',
    adminFeedback: 'adminFeedback',
    publishedAt: 'publishedAt',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const UmkmScalarFieldEnum: {
    id: 'id',
    potentialId: 'potentialId',
    name: 'name',
    slug: 'slug',
    ownerName: 'ownerName',
    category: 'category',
    description: 'description',
    whatsappNumber: 'whatsappNumber',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    logo: 'logo',
    gallery: 'gallery',
    status: 'status',
    submitterEmail: 'submitterEmail',
    revisionToken: 'revisionToken',
    adminFeedback: 'adminFeedback',
    publishedAt: 'publishedAt',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UmkmScalarFieldEnum = (typeof UmkmScalarFieldEnum)[keyof typeof UmkmScalarFieldEnum]


  export const UmkmProductScalarFieldEnum: {
    id: 'id',
    umkmId: 'umkmId',
    productName: 'productName',
    price: 'price',
    productPhoto: 'productPhoto'
  };

  export type UmkmProductScalarFieldEnum = (typeof UmkmProductScalarFieldEnum)[keyof typeof UmkmProductScalarFieldEnum]


  export const VillagePotentialScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    category: 'category',
    overview: 'overview',
    description: 'description',
    coverImage: 'coverImage',
    gallery: 'gallery',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VillagePotentialScalarFieldEnum = (typeof VillagePotentialScalarFieldEnum)[keyof typeof VillagePotentialScalarFieldEnum]


  export const PublicFacilityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    image: 'image',
    operatingHours: 'operatingHours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublicFacilityScalarFieldEnum = (typeof PublicFacilityScalarFieldEnum)[keyof typeof PublicFacilityScalarFieldEnum]


  export const VillageProfileScalarFieldEnum: {
    id: 'id',
    villageName: 'villageName',
    headGreeting: 'headGreeting',
    headPhoto: 'headPhoto',
    historyText: 'historyText',
    vision: 'vision',
    missions: 'missions',
    officials: 'officials',
    updatedAt: 'updatedAt'
  };

  export type VillageProfileScalarFieldEnum = (typeof VillageProfileScalarFieldEnum)[keyof typeof VillageProfileScalarFieldEnum]


  export const RevisionHistoryScalarFieldEnum: {
    id: 'id',
    entityType: 'entityType',
    entityId: 'entityId',
    action: 'action',
    notes: 'notes',
    adminId: 'adminId',
    createdAt: 'createdAt'
  };

  export type RevisionHistoryScalarFieldEnum = (typeof RevisionHistoryScalarFieldEnum)[keyof typeof RevisionHistoryScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    payload: 'payload',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    imageUrl: 'imageUrl',
    linkUrl: 'linkUrl',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    updatedAt: 'updatedAt'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ContentStatus'
   */
  export type EnumContentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentStatus'>
    


  /**
   * Reference to a field of type 'ContentStatus[]'
   */
  export type ListEnumContentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentStatus[]'>
    


  /**
   * Reference to a field of type 'UmkmCategory'
   */
  export type EnumUmkmCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UmkmCategory'>
    


  /**
   * Reference to a field of type 'UmkmCategory[]'
   */
  export type ListEnumUmkmCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UmkmCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PotentialCategory'
   */
  export type EnumPotentialCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PotentialCategory'>
    


  /**
   * Reference to a field of type 'PotentialCategory[]'
   */
  export type ListEnumPotentialCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PotentialCategory[]'>
    


  /**
   * Reference to a field of type 'FacilityCategory'
   */
  export type EnumFacilityCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacilityCategory'>
    


  /**
   * Reference to a field of type 'FacilityCategory[]'
   */
  export type ListEnumFacilityCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacilityCategory[]'>
    


  /**
   * Reference to a field of type 'ActionType'
   */
  export type EnumActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionType'>
    


  /**
   * Reference to a field of type 'ActionType[]'
   */
  export type ListEnumActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    newsCreated?: NewsListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    revisions?: RevisionHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    newsCreated?: NewsOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    revisions?: RevisionHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    newsCreated?: NewsListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    revisions?: RevisionHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NewsCategoryWhereInput = {
    AND?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    OR?: NewsCategoryWhereInput[]
    NOT?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    id?: UuidFilter<"NewsCategory"> | string
    name?: StringFilter<"NewsCategory"> | string
    slug?: StringFilter<"NewsCategory"> | string
    createdAt?: DateTimeFilter<"NewsCategory"> | Date | string
    news?: NewsListRelationFilter
  }

  export type NewsCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    news?: NewsOrderByRelationAggregateInput
  }

  export type NewsCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    OR?: NewsCategoryWhereInput[]
    NOT?: NewsCategoryWhereInput | NewsCategoryWhereInput[]
    createdAt?: DateTimeFilter<"NewsCategory"> | Date | string
    news?: NewsListRelationFilter
  }, "id" | "name" | "slug">

  export type NewsCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    _count?: NewsCategoryCountOrderByAggregateInput
    _max?: NewsCategoryMaxOrderByAggregateInput
    _min?: NewsCategoryMinOrderByAggregateInput
  }

  export type NewsCategoryScalarWhereWithAggregatesInput = {
    AND?: NewsCategoryScalarWhereWithAggregatesInput | NewsCategoryScalarWhereWithAggregatesInput[]
    OR?: NewsCategoryScalarWhereWithAggregatesInput[]
    NOT?: NewsCategoryScalarWhereWithAggregatesInput | NewsCategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NewsCategory"> | string
    name?: StringWithAggregatesFilter<"NewsCategory"> | string
    slug?: StringWithAggregatesFilter<"NewsCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsCategory"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: UuidFilter<"News"> | string
    categoryId?: UuidFilter<"News"> | string
    authorId?: UuidNullableFilter<"News"> | string | null
    title?: StringFilter<"News"> | string
    slug?: StringFilter<"News"> | string
    summary?: StringFilter<"News"> | string
    coverImage?: StringFilter<"News"> | string
    coverCaption?: StringFilter<"News"> | string
    contentSections?: JsonFilter<"News">
    status?: EnumContentStatusFilter<"News"> | $Enums.ContentStatus
    submitterName?: StringNullableFilter<"News"> | string | null
    submitterEmail?: StringNullableFilter<"News"> | string | null
    submitterPhone?: StringNullableFilter<"News"> | string | null
    revisionToken?: StringNullableFilter<"News"> | string | null
    adminFeedback?: StringNullableFilter<"News"> | string | null
    publishedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    category?: XOR<NewsCategoryScalarRelationFilter, NewsCategoryWhereInput>
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrderInput | SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    coverImage?: SortOrder
    coverCaption?: SortOrder
    contentSections?: SortOrder
    status?: SortOrder
    submitterName?: SortOrderInput | SortOrder
    submitterEmail?: SortOrderInput | SortOrder
    submitterPhone?: SortOrderInput | SortOrder
    revisionToken?: SortOrderInput | SortOrder
    adminFeedback?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: NewsCategoryOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    revisionToken?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    categoryId?: UuidFilter<"News"> | string
    authorId?: UuidNullableFilter<"News"> | string | null
    title?: StringFilter<"News"> | string
    summary?: StringFilter<"News"> | string
    coverImage?: StringFilter<"News"> | string
    coverCaption?: StringFilter<"News"> | string
    contentSections?: JsonFilter<"News">
    status?: EnumContentStatusFilter<"News"> | $Enums.ContentStatus
    submitterName?: StringNullableFilter<"News"> | string | null
    submitterEmail?: StringNullableFilter<"News"> | string | null
    submitterPhone?: StringNullableFilter<"News"> | string | null
    adminFeedback?: StringNullableFilter<"News"> | string | null
    publishedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    category?: XOR<NewsCategoryScalarRelationFilter, NewsCategoryWhereInput>
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "slug" | "revisionToken">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrderInput | SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    coverImage?: SortOrder
    coverCaption?: SortOrder
    contentSections?: SortOrder
    status?: SortOrder
    submitterName?: SortOrderInput | SortOrder
    submitterEmail?: SortOrderInput | SortOrder
    submitterPhone?: SortOrderInput | SortOrder
    revisionToken?: SortOrderInput | SortOrder
    adminFeedback?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"News"> | string
    categoryId?: UuidWithAggregatesFilter<"News"> | string
    authorId?: UuidNullableWithAggregatesFilter<"News"> | string | null
    title?: StringWithAggregatesFilter<"News"> | string
    slug?: StringWithAggregatesFilter<"News"> | string
    summary?: StringWithAggregatesFilter<"News"> | string
    coverImage?: StringWithAggregatesFilter<"News"> | string
    coverCaption?: StringWithAggregatesFilter<"News"> | string
    contentSections?: JsonWithAggregatesFilter<"News">
    status?: EnumContentStatusWithAggregatesFilter<"News"> | $Enums.ContentStatus
    submitterName?: StringNullableWithAggregatesFilter<"News"> | string | null
    submitterEmail?: StringNullableWithAggregatesFilter<"News"> | string | null
    submitterPhone?: StringNullableWithAggregatesFilter<"News"> | string | null
    revisionToken?: StringNullableWithAggregatesFilter<"News"> | string | null
    adminFeedback?: StringNullableWithAggregatesFilter<"News"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"News"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"News"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type UmkmWhereInput = {
    AND?: UmkmWhereInput | UmkmWhereInput[]
    OR?: UmkmWhereInput[]
    NOT?: UmkmWhereInput | UmkmWhereInput[]
    id?: UuidFilter<"Umkm"> | string
    potentialId?: UuidNullableFilter<"Umkm"> | string | null
    name?: StringFilter<"Umkm"> | string
    slug?: StringFilter<"Umkm"> | string
    ownerName?: StringFilter<"Umkm"> | string
    category?: EnumUmkmCategoryFilter<"Umkm"> | $Enums.UmkmCategory
    description?: StringFilter<"Umkm"> | string
    whatsappNumber?: StringFilter<"Umkm"> | string
    address?: StringFilter<"Umkm"> | string
    latitude?: FloatFilter<"Umkm"> | number
    longitude?: FloatFilter<"Umkm"> | number
    logo?: StringFilter<"Umkm"> | string
    gallery?: JsonFilter<"Umkm">
    status?: EnumContentStatusFilter<"Umkm"> | $Enums.ContentStatus
    submitterEmail?: StringNullableFilter<"Umkm"> | string | null
    revisionToken?: StringNullableFilter<"Umkm"> | string | null
    adminFeedback?: StringNullableFilter<"Umkm"> | string | null
    publishedAt?: DateTimeNullableFilter<"Umkm"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Umkm"> | Date | string | null
    createdAt?: DateTimeFilter<"Umkm"> | Date | string
    updatedAt?: DateTimeFilter<"Umkm"> | Date | string
    potential?: XOR<VillagePotentialNullableScalarRelationFilter, VillagePotentialWhereInput> | null
    products?: UmkmProductListRelationFilter
  }

  export type UmkmOrderByWithRelationInput = {
    id?: SortOrder
    potentialId?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    ownerName?: SortOrder
    category?: SortOrder
    description?: SortOrder
    whatsappNumber?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    logo?: SortOrder
    gallery?: SortOrder
    status?: SortOrder
    submitterEmail?: SortOrderInput | SortOrder
    revisionToken?: SortOrderInput | SortOrder
    adminFeedback?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    potential?: VillagePotentialOrderByWithRelationInput
    products?: UmkmProductOrderByRelationAggregateInput
  }

  export type UmkmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    revisionToken?: string
    AND?: UmkmWhereInput | UmkmWhereInput[]
    OR?: UmkmWhereInput[]
    NOT?: UmkmWhereInput | UmkmWhereInput[]
    potentialId?: UuidNullableFilter<"Umkm"> | string | null
    name?: StringFilter<"Umkm"> | string
    ownerName?: StringFilter<"Umkm"> | string
    category?: EnumUmkmCategoryFilter<"Umkm"> | $Enums.UmkmCategory
    description?: StringFilter<"Umkm"> | string
    whatsappNumber?: StringFilter<"Umkm"> | string
    address?: StringFilter<"Umkm"> | string
    latitude?: FloatFilter<"Umkm"> | number
    longitude?: FloatFilter<"Umkm"> | number
    logo?: StringFilter<"Umkm"> | string
    gallery?: JsonFilter<"Umkm">
    status?: EnumContentStatusFilter<"Umkm"> | $Enums.ContentStatus
    submitterEmail?: StringNullableFilter<"Umkm"> | string | null
    adminFeedback?: StringNullableFilter<"Umkm"> | string | null
    publishedAt?: DateTimeNullableFilter<"Umkm"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Umkm"> | Date | string | null
    createdAt?: DateTimeFilter<"Umkm"> | Date | string
    updatedAt?: DateTimeFilter<"Umkm"> | Date | string
    potential?: XOR<VillagePotentialNullableScalarRelationFilter, VillagePotentialWhereInput> | null
    products?: UmkmProductListRelationFilter
  }, "id" | "slug" | "revisionToken">

  export type UmkmOrderByWithAggregationInput = {
    id?: SortOrder
    potentialId?: SortOrderInput | SortOrder
    name?: SortOrder
    slug?: SortOrder
    ownerName?: SortOrder
    category?: SortOrder
    description?: SortOrder
    whatsappNumber?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    logo?: SortOrder
    gallery?: SortOrder
    status?: SortOrder
    submitterEmail?: SortOrderInput | SortOrder
    revisionToken?: SortOrderInput | SortOrder
    adminFeedback?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UmkmCountOrderByAggregateInput
    _avg?: UmkmAvgOrderByAggregateInput
    _max?: UmkmMaxOrderByAggregateInput
    _min?: UmkmMinOrderByAggregateInput
    _sum?: UmkmSumOrderByAggregateInput
  }

  export type UmkmScalarWhereWithAggregatesInput = {
    AND?: UmkmScalarWhereWithAggregatesInput | UmkmScalarWhereWithAggregatesInput[]
    OR?: UmkmScalarWhereWithAggregatesInput[]
    NOT?: UmkmScalarWhereWithAggregatesInput | UmkmScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Umkm"> | string
    potentialId?: UuidNullableWithAggregatesFilter<"Umkm"> | string | null
    name?: StringWithAggregatesFilter<"Umkm"> | string
    slug?: StringWithAggregatesFilter<"Umkm"> | string
    ownerName?: StringWithAggregatesFilter<"Umkm"> | string
    category?: EnumUmkmCategoryWithAggregatesFilter<"Umkm"> | $Enums.UmkmCategory
    description?: StringWithAggregatesFilter<"Umkm"> | string
    whatsappNumber?: StringWithAggregatesFilter<"Umkm"> | string
    address?: StringWithAggregatesFilter<"Umkm"> | string
    latitude?: FloatWithAggregatesFilter<"Umkm"> | number
    longitude?: FloatWithAggregatesFilter<"Umkm"> | number
    logo?: StringWithAggregatesFilter<"Umkm"> | string
    gallery?: JsonWithAggregatesFilter<"Umkm">
    status?: EnumContentStatusWithAggregatesFilter<"Umkm"> | $Enums.ContentStatus
    submitterEmail?: StringNullableWithAggregatesFilter<"Umkm"> | string | null
    revisionToken?: StringNullableWithAggregatesFilter<"Umkm"> | string | null
    adminFeedback?: StringNullableWithAggregatesFilter<"Umkm"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Umkm"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Umkm"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Umkm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Umkm"> | Date | string
  }

  export type UmkmProductWhereInput = {
    AND?: UmkmProductWhereInput | UmkmProductWhereInput[]
    OR?: UmkmProductWhereInput[]
    NOT?: UmkmProductWhereInput | UmkmProductWhereInput[]
    id?: UuidFilter<"UmkmProduct"> | string
    umkmId?: UuidFilter<"UmkmProduct"> | string
    productName?: StringFilter<"UmkmProduct"> | string
    price?: IntNullableFilter<"UmkmProduct"> | number | null
    productPhoto?: StringNullableFilter<"UmkmProduct"> | string | null
    umkm?: XOR<UmkmScalarRelationFilter, UmkmWhereInput>
  }

  export type UmkmProductOrderByWithRelationInput = {
    id?: SortOrder
    umkmId?: SortOrder
    productName?: SortOrder
    price?: SortOrderInput | SortOrder
    productPhoto?: SortOrderInput | SortOrder
    umkm?: UmkmOrderByWithRelationInput
  }

  export type UmkmProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UmkmProductWhereInput | UmkmProductWhereInput[]
    OR?: UmkmProductWhereInput[]
    NOT?: UmkmProductWhereInput | UmkmProductWhereInput[]
    umkmId?: UuidFilter<"UmkmProduct"> | string
    productName?: StringFilter<"UmkmProduct"> | string
    price?: IntNullableFilter<"UmkmProduct"> | number | null
    productPhoto?: StringNullableFilter<"UmkmProduct"> | string | null
    umkm?: XOR<UmkmScalarRelationFilter, UmkmWhereInput>
  }, "id">

  export type UmkmProductOrderByWithAggregationInput = {
    id?: SortOrder
    umkmId?: SortOrder
    productName?: SortOrder
    price?: SortOrderInput | SortOrder
    productPhoto?: SortOrderInput | SortOrder
    _count?: UmkmProductCountOrderByAggregateInput
    _avg?: UmkmProductAvgOrderByAggregateInput
    _max?: UmkmProductMaxOrderByAggregateInput
    _min?: UmkmProductMinOrderByAggregateInput
    _sum?: UmkmProductSumOrderByAggregateInput
  }

  export type UmkmProductScalarWhereWithAggregatesInput = {
    AND?: UmkmProductScalarWhereWithAggregatesInput | UmkmProductScalarWhereWithAggregatesInput[]
    OR?: UmkmProductScalarWhereWithAggregatesInput[]
    NOT?: UmkmProductScalarWhereWithAggregatesInput | UmkmProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UmkmProduct"> | string
    umkmId?: UuidWithAggregatesFilter<"UmkmProduct"> | string
    productName?: StringWithAggregatesFilter<"UmkmProduct"> | string
    price?: IntNullableWithAggregatesFilter<"UmkmProduct"> | number | null
    productPhoto?: StringNullableWithAggregatesFilter<"UmkmProduct"> | string | null
  }

  export type VillagePotentialWhereInput = {
    AND?: VillagePotentialWhereInput | VillagePotentialWhereInput[]
    OR?: VillagePotentialWhereInput[]
    NOT?: VillagePotentialWhereInput | VillagePotentialWhereInput[]
    id?: UuidFilter<"VillagePotential"> | string
    title?: StringFilter<"VillagePotential"> | string
    slug?: StringFilter<"VillagePotential"> | string
    category?: EnumPotentialCategoryFilter<"VillagePotential"> | $Enums.PotentialCategory
    overview?: StringFilter<"VillagePotential"> | string
    description?: StringFilter<"VillagePotential"> | string
    coverImage?: StringFilter<"VillagePotential"> | string
    gallery?: JsonFilter<"VillagePotential">
    latitude?: FloatFilter<"VillagePotential"> | number
    longitude?: FloatFilter<"VillagePotential"> | number
    createdAt?: DateTimeFilter<"VillagePotential"> | Date | string
    updatedAt?: DateTimeFilter<"VillagePotential"> | Date | string
    umkms?: UmkmListRelationFilter
  }

  export type VillagePotentialOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    overview?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    gallery?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    umkms?: UmkmOrderByRelationAggregateInput
  }

  export type VillagePotentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: VillagePotentialWhereInput | VillagePotentialWhereInput[]
    OR?: VillagePotentialWhereInput[]
    NOT?: VillagePotentialWhereInput | VillagePotentialWhereInput[]
    title?: StringFilter<"VillagePotential"> | string
    category?: EnumPotentialCategoryFilter<"VillagePotential"> | $Enums.PotentialCategory
    overview?: StringFilter<"VillagePotential"> | string
    description?: StringFilter<"VillagePotential"> | string
    coverImage?: StringFilter<"VillagePotential"> | string
    gallery?: JsonFilter<"VillagePotential">
    latitude?: FloatFilter<"VillagePotential"> | number
    longitude?: FloatFilter<"VillagePotential"> | number
    createdAt?: DateTimeFilter<"VillagePotential"> | Date | string
    updatedAt?: DateTimeFilter<"VillagePotential"> | Date | string
    umkms?: UmkmListRelationFilter
  }, "id" | "slug">

  export type VillagePotentialOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    overview?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    gallery?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VillagePotentialCountOrderByAggregateInput
    _avg?: VillagePotentialAvgOrderByAggregateInput
    _max?: VillagePotentialMaxOrderByAggregateInput
    _min?: VillagePotentialMinOrderByAggregateInput
    _sum?: VillagePotentialSumOrderByAggregateInput
  }

  export type VillagePotentialScalarWhereWithAggregatesInput = {
    AND?: VillagePotentialScalarWhereWithAggregatesInput | VillagePotentialScalarWhereWithAggregatesInput[]
    OR?: VillagePotentialScalarWhereWithAggregatesInput[]
    NOT?: VillagePotentialScalarWhereWithAggregatesInput | VillagePotentialScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"VillagePotential"> | string
    title?: StringWithAggregatesFilter<"VillagePotential"> | string
    slug?: StringWithAggregatesFilter<"VillagePotential"> | string
    category?: EnumPotentialCategoryWithAggregatesFilter<"VillagePotential"> | $Enums.PotentialCategory
    overview?: StringWithAggregatesFilter<"VillagePotential"> | string
    description?: StringWithAggregatesFilter<"VillagePotential"> | string
    coverImage?: StringWithAggregatesFilter<"VillagePotential"> | string
    gallery?: JsonWithAggregatesFilter<"VillagePotential">
    latitude?: FloatWithAggregatesFilter<"VillagePotential"> | number
    longitude?: FloatWithAggregatesFilter<"VillagePotential"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VillagePotential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VillagePotential"> | Date | string
  }

  export type PublicFacilityWhereInput = {
    AND?: PublicFacilityWhereInput | PublicFacilityWhereInput[]
    OR?: PublicFacilityWhereInput[]
    NOT?: PublicFacilityWhereInput | PublicFacilityWhereInput[]
    id?: UuidFilter<"PublicFacility"> | string
    name?: StringFilter<"PublicFacility"> | string
    category?: EnumFacilityCategoryFilter<"PublicFacility"> | $Enums.FacilityCategory
    address?: StringFilter<"PublicFacility"> | string
    latitude?: FloatFilter<"PublicFacility"> | number
    longitude?: FloatFilter<"PublicFacility"> | number
    image?: StringNullableFilter<"PublicFacility"> | string | null
    operatingHours?: StringNullableFilter<"PublicFacility"> | string | null
    createdAt?: DateTimeFilter<"PublicFacility"> | Date | string
    updatedAt?: DateTimeFilter<"PublicFacility"> | Date | string
  }

  export type PublicFacilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    image?: SortOrderInput | SortOrder
    operatingHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicFacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicFacilityWhereInput | PublicFacilityWhereInput[]
    OR?: PublicFacilityWhereInput[]
    NOT?: PublicFacilityWhereInput | PublicFacilityWhereInput[]
    name?: StringFilter<"PublicFacility"> | string
    category?: EnumFacilityCategoryFilter<"PublicFacility"> | $Enums.FacilityCategory
    address?: StringFilter<"PublicFacility"> | string
    latitude?: FloatFilter<"PublicFacility"> | number
    longitude?: FloatFilter<"PublicFacility"> | number
    image?: StringNullableFilter<"PublicFacility"> | string | null
    operatingHours?: StringNullableFilter<"PublicFacility"> | string | null
    createdAt?: DateTimeFilter<"PublicFacility"> | Date | string
    updatedAt?: DateTimeFilter<"PublicFacility"> | Date | string
  }, "id">

  export type PublicFacilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    image?: SortOrderInput | SortOrder
    operatingHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublicFacilityCountOrderByAggregateInput
    _avg?: PublicFacilityAvgOrderByAggregateInput
    _max?: PublicFacilityMaxOrderByAggregateInput
    _min?: PublicFacilityMinOrderByAggregateInput
    _sum?: PublicFacilitySumOrderByAggregateInput
  }

  export type PublicFacilityScalarWhereWithAggregatesInput = {
    AND?: PublicFacilityScalarWhereWithAggregatesInput | PublicFacilityScalarWhereWithAggregatesInput[]
    OR?: PublicFacilityScalarWhereWithAggregatesInput[]
    NOT?: PublicFacilityScalarWhereWithAggregatesInput | PublicFacilityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PublicFacility"> | string
    name?: StringWithAggregatesFilter<"PublicFacility"> | string
    category?: EnumFacilityCategoryWithAggregatesFilter<"PublicFacility"> | $Enums.FacilityCategory
    address?: StringWithAggregatesFilter<"PublicFacility"> | string
    latitude?: FloatWithAggregatesFilter<"PublicFacility"> | number
    longitude?: FloatWithAggregatesFilter<"PublicFacility"> | number
    image?: StringNullableWithAggregatesFilter<"PublicFacility"> | string | null
    operatingHours?: StringNullableWithAggregatesFilter<"PublicFacility"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PublicFacility"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PublicFacility"> | Date | string
  }

  export type VillageProfileWhereInput = {
    AND?: VillageProfileWhereInput | VillageProfileWhereInput[]
    OR?: VillageProfileWhereInput[]
    NOT?: VillageProfileWhereInput | VillageProfileWhereInput[]
    id?: UuidFilter<"VillageProfile"> | string
    villageName?: StringFilter<"VillageProfile"> | string
    headGreeting?: StringFilter<"VillageProfile"> | string
    headPhoto?: StringFilter<"VillageProfile"> | string
    historyText?: StringFilter<"VillageProfile"> | string
    vision?: StringFilter<"VillageProfile"> | string
    missions?: JsonFilter<"VillageProfile">
    officials?: JsonFilter<"VillageProfile">
    updatedAt?: DateTimeFilter<"VillageProfile"> | Date | string
  }

  export type VillageProfileOrderByWithRelationInput = {
    id?: SortOrder
    villageName?: SortOrder
    headGreeting?: SortOrder
    headPhoto?: SortOrder
    historyText?: SortOrder
    vision?: SortOrder
    missions?: SortOrder
    officials?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VillageProfileWhereInput | VillageProfileWhereInput[]
    OR?: VillageProfileWhereInput[]
    NOT?: VillageProfileWhereInput | VillageProfileWhereInput[]
    villageName?: StringFilter<"VillageProfile"> | string
    headGreeting?: StringFilter<"VillageProfile"> | string
    headPhoto?: StringFilter<"VillageProfile"> | string
    historyText?: StringFilter<"VillageProfile"> | string
    vision?: StringFilter<"VillageProfile"> | string
    missions?: JsonFilter<"VillageProfile">
    officials?: JsonFilter<"VillageProfile">
    updatedAt?: DateTimeFilter<"VillageProfile"> | Date | string
  }, "id">

  export type VillageProfileOrderByWithAggregationInput = {
    id?: SortOrder
    villageName?: SortOrder
    headGreeting?: SortOrder
    headPhoto?: SortOrder
    historyText?: SortOrder
    vision?: SortOrder
    missions?: SortOrder
    officials?: SortOrder
    updatedAt?: SortOrder
    _count?: VillageProfileCountOrderByAggregateInput
    _max?: VillageProfileMaxOrderByAggregateInput
    _min?: VillageProfileMinOrderByAggregateInput
  }

  export type VillageProfileScalarWhereWithAggregatesInput = {
    AND?: VillageProfileScalarWhereWithAggregatesInput | VillageProfileScalarWhereWithAggregatesInput[]
    OR?: VillageProfileScalarWhereWithAggregatesInput[]
    NOT?: VillageProfileScalarWhereWithAggregatesInput | VillageProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"VillageProfile"> | string
    villageName?: StringWithAggregatesFilter<"VillageProfile"> | string
    headGreeting?: StringWithAggregatesFilter<"VillageProfile"> | string
    headPhoto?: StringWithAggregatesFilter<"VillageProfile"> | string
    historyText?: StringWithAggregatesFilter<"VillageProfile"> | string
    vision?: StringWithAggregatesFilter<"VillageProfile"> | string
    missions?: JsonWithAggregatesFilter<"VillageProfile">
    officials?: JsonWithAggregatesFilter<"VillageProfile">
    updatedAt?: DateTimeWithAggregatesFilter<"VillageProfile"> | Date | string
  }

  export type RevisionHistoryWhereInput = {
    AND?: RevisionHistoryWhereInput | RevisionHistoryWhereInput[]
    OR?: RevisionHistoryWhereInput[]
    NOT?: RevisionHistoryWhereInput | RevisionHistoryWhereInput[]
    id?: UuidFilter<"RevisionHistory"> | string
    entityType?: StringFilter<"RevisionHistory"> | string
    entityId?: UuidFilter<"RevisionHistory"> | string
    action?: EnumActionTypeFilter<"RevisionHistory"> | $Enums.ActionType
    notes?: StringNullableFilter<"RevisionHistory"> | string | null
    adminId?: UuidNullableFilter<"RevisionHistory"> | string | null
    createdAt?: DateTimeFilter<"RevisionHistory"> | Date | string
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RevisionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    notes?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    admin?: UserOrderByWithRelationInput
  }

  export type RevisionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RevisionHistoryWhereInput | RevisionHistoryWhereInput[]
    OR?: RevisionHistoryWhereInput[]
    NOT?: RevisionHistoryWhereInput | RevisionHistoryWhereInput[]
    entityType?: StringFilter<"RevisionHistory"> | string
    entityId?: UuidFilter<"RevisionHistory"> | string
    action?: EnumActionTypeFilter<"RevisionHistory"> | $Enums.ActionType
    notes?: StringNullableFilter<"RevisionHistory"> | string | null
    adminId?: UuidNullableFilter<"RevisionHistory"> | string | null
    createdAt?: DateTimeFilter<"RevisionHistory"> | Date | string
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RevisionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    notes?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RevisionHistoryCountOrderByAggregateInput
    _max?: RevisionHistoryMaxOrderByAggregateInput
    _min?: RevisionHistoryMinOrderByAggregateInput
  }

  export type RevisionHistoryScalarWhereWithAggregatesInput = {
    AND?: RevisionHistoryScalarWhereWithAggregatesInput | RevisionHistoryScalarWhereWithAggregatesInput[]
    OR?: RevisionHistoryScalarWhereWithAggregatesInput[]
    NOT?: RevisionHistoryScalarWhereWithAggregatesInput | RevisionHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RevisionHistory"> | string
    entityType?: StringWithAggregatesFilter<"RevisionHistory"> | string
    entityId?: UuidWithAggregatesFilter<"RevisionHistory"> | string
    action?: EnumActionTypeWithAggregatesFilter<"RevisionHistory"> | $Enums.ActionType
    notes?: StringNullableWithAggregatesFilter<"RevisionHistory"> | string | null
    adminId?: UuidNullableWithAggregatesFilter<"RevisionHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RevisionHistory"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    userId?: UuidNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: UuidFilter<"AuditLog"> | string
    payload?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: UuidNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: UuidFilter<"AuditLog"> | string
    payload?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AuditLog"> | string
    userId?: UuidNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: UuidWithAggregatesFilter<"AuditLog"> | string
    payload?: JsonNullableWithAggregatesFilter<"AuditLog">
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: UuidFilter<"Banner"> | string
    title?: StringFilter<"Banner"> | string
    imageUrl?: StringFilter<"Banner"> | string
    linkUrl?: StringNullableFilter<"Banner"> | string | null
    order?: IntFilter<"Banner"> | number
    isActive?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    title?: StringFilter<"Banner"> | string
    imageUrl?: StringFilter<"Banner"> | string
    linkUrl?: StringNullableFilter<"Banner"> | string | null
    order?: IntFilter<"Banner"> | number
    isActive?: BoolFilter<"Banner"> | boolean
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _avg?: BannerAvgOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
    _sum?: BannerSumOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Banner"> | string
    title?: StringWithAggregatesFilter<"Banner"> | string
    imageUrl?: StringWithAggregatesFilter<"Banner"> | string
    linkUrl?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    order?: IntWithAggregatesFilter<"Banner"> | number
    isActive?: BoolWithAggregatesFilter<"Banner"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: UuidFilter<"Settings"> | string
    key?: StringFilter<"Settings"> | string
    value?: JsonFilter<"Settings">
    description?: StringNullableFilter<"Settings"> | string | null
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    value?: JsonFilter<"Settings">
    description?: StringNullableFilter<"Settings"> | string | null
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }, "id" | "key">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Settings"> | string
    key?: StringWithAggregatesFilter<"Settings"> | string
    value?: JsonWithAggregatesFilter<"Settings">
    description?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    newsCreated?: NewsCreateNestedManyWithoutAuthorInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    revisions?: RevisionHistoryCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    newsCreated?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    revisions?: RevisionHistoryUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsCreated?: NewsUpdateManyWithoutAuthorNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    revisions?: RevisionHistoryUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsCreated?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    revisions?: RevisionHistoryUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    news?: NewsCreateNestedManyWithoutCategoryInput
  }

  export type NewsCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type NewsCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutCategoryNestedInput
  }

  export type NewsCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type NewsCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type NewsCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    slug: string
    summary: string
    coverImage: string
    coverCaption: string
    contentSections: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterName?: string | null
    submitterEmail?: string | null
    submitterPhone?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: NewsCategoryCreateNestedOneWithoutNewsInput
    author?: UserCreateNestedOneWithoutNewsCreatedInput
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    categoryId: string
    authorId?: string | null
    title: string
    slug: string
    summary: string
    coverImage: string
    coverCaption: string
    contentSections: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterName?: string | null
    submitterEmail?: string | null
    submitterPhone?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    coverCaption?: StringFieldUpdateOperationsInput | string
    contentSections?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submitterPhone?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NewsCategoryUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneWithoutNewsCreatedNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    coverCaption?: StringFieldUpdateOperationsInput | string
    contentSections?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submitterPhone?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: string
    categoryId: string
    authorId?: string | null
    title: string
    slug: string
    summary: string
    coverImage: string
    coverCaption: string
    contentSections: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterName?: string | null
    submitterEmail?: string | null
    submitterPhone?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    coverCaption?: StringFieldUpdateOperationsInput | string
    contentSections?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submitterPhone?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    coverCaption?: StringFieldUpdateOperationsInput | string
    contentSections?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submitterPhone?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UmkmCreateInput = {
    id?: string
    name: string
    slug: string
    ownerName: string
    category: $Enums.UmkmCategory
    description: string
    whatsappNumber: string
    address: string
    latitude: number
    longitude: number
    logo: string
    gallery: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterEmail?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    potential?: VillagePotentialCreateNestedOneWithoutUmkmsInput
    products?: UmkmProductCreateNestedManyWithoutUmkmInput
  }

  export type UmkmUncheckedCreateInput = {
    id?: string
    potentialId?: string | null
    name: string
    slug: string
    ownerName: string
    category: $Enums.UmkmCategory
    description: string
    whatsappNumber: string
    address: string
    latitude: number
    longitude: number
    logo: string
    gallery: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterEmail?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: UmkmProductUncheckedCreateNestedManyWithoutUmkmInput
  }

  export type UmkmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    category?: EnumUmkmCategoryFieldUpdateOperationsInput | $Enums.UmkmCategory
    description?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    potential?: VillagePotentialUpdateOneWithoutUmkmsNestedInput
    products?: UmkmProductUpdateManyWithoutUmkmNestedInput
  }

  export type UmkmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    potentialId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    category?: EnumUmkmCategoryFieldUpdateOperationsInput | $Enums.UmkmCategory
    description?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: UmkmProductUncheckedUpdateManyWithoutUmkmNestedInput
  }

  export type UmkmCreateManyInput = {
    id?: string
    potentialId?: string | null
    name: string
    slug: string
    ownerName: string
    category: $Enums.UmkmCategory
    description: string
    whatsappNumber: string
    address: string
    latitude: number
    longitude: number
    logo: string
    gallery: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterEmail?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UmkmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    category?: EnumUmkmCategoryFieldUpdateOperationsInput | $Enums.UmkmCategory
    description?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UmkmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    potentialId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    category?: EnumUmkmCategoryFieldUpdateOperationsInput | $Enums.UmkmCategory
    description?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UmkmProductCreateInput = {
    id?: string
    productName: string
    price?: number | null
    productPhoto?: string | null
    umkm: UmkmCreateNestedOneWithoutProductsInput
  }

  export type UmkmProductUncheckedCreateInput = {
    id?: string
    umkmId: string
    productName: string
    price?: number | null
    productPhoto?: string | null
  }

  export type UmkmProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    productPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    umkm?: UmkmUpdateOneRequiredWithoutProductsNestedInput
  }

  export type UmkmProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    umkmId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    productPhoto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UmkmProductCreateManyInput = {
    id?: string
    umkmId: string
    productName: string
    price?: number | null
    productPhoto?: string | null
  }

  export type UmkmProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    productPhoto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UmkmProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    umkmId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    productPhoto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VillagePotentialCreateInput = {
    id?: string
    title: string
    slug: string
    category: $Enums.PotentialCategory
    overview: string
    description: string
    coverImage: string
    gallery: JsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    umkms?: UmkmCreateNestedManyWithoutPotentialInput
  }

  export type VillagePotentialUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    category: $Enums.PotentialCategory
    overview: string
    description: string
    coverImage: string
    gallery: JsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    umkms?: UmkmUncheckedCreateNestedManyWithoutPotentialInput
  }

  export type VillagePotentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumPotentialCategoryFieldUpdateOperationsInput | $Enums.PotentialCategory
    overview?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    umkms?: UmkmUpdateManyWithoutPotentialNestedInput
  }

  export type VillagePotentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumPotentialCategoryFieldUpdateOperationsInput | $Enums.PotentialCategory
    overview?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    umkms?: UmkmUncheckedUpdateManyWithoutPotentialNestedInput
  }

  export type VillagePotentialCreateManyInput = {
    id?: string
    title: string
    slug: string
    category: $Enums.PotentialCategory
    overview: string
    description: string
    coverImage: string
    gallery: JsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillagePotentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumPotentialCategoryFieldUpdateOperationsInput | $Enums.PotentialCategory
    overview?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillagePotentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumPotentialCategoryFieldUpdateOperationsInput | $Enums.PotentialCategory
    overview?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicFacilityCreateInput = {
    id?: string
    name: string
    category: $Enums.FacilityCategory
    address: string
    latitude: number
    longitude: number
    image?: string | null
    operatingHours?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicFacilityUncheckedCreateInput = {
    id?: string
    name: string
    category: $Enums.FacilityCategory
    address: string
    latitude: number
    longitude: number
    image?: string | null
    operatingHours?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicFacilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFacilityCategoryFieldUpdateOperationsInput | $Enums.FacilityCategory
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicFacilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFacilityCategoryFieldUpdateOperationsInput | $Enums.FacilityCategory
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicFacilityCreateManyInput = {
    id?: string
    name: string
    category: $Enums.FacilityCategory
    address: string
    latitude: number
    longitude: number
    image?: string | null
    operatingHours?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicFacilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFacilityCategoryFieldUpdateOperationsInput | $Enums.FacilityCategory
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicFacilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumFacilityCategoryFieldUpdateOperationsInput | $Enums.FacilityCategory
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageProfileCreateInput = {
    id?: string
    villageName: string
    headGreeting: string
    headPhoto: string
    historyText: string
    vision: string
    missions: JsonNullValueInput | InputJsonValue
    officials: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type VillageProfileUncheckedCreateInput = {
    id?: string
    villageName: string
    headGreeting: string
    headPhoto: string
    historyText: string
    vision: string
    missions: JsonNullValueInput | InputJsonValue
    officials: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type VillageProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    villageName?: StringFieldUpdateOperationsInput | string
    headGreeting?: StringFieldUpdateOperationsInput | string
    headPhoto?: StringFieldUpdateOperationsInput | string
    historyText?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    missions?: JsonNullValueInput | InputJsonValue
    officials?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    villageName?: StringFieldUpdateOperationsInput | string
    headGreeting?: StringFieldUpdateOperationsInput | string
    headPhoto?: StringFieldUpdateOperationsInput | string
    historyText?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    missions?: JsonNullValueInput | InputJsonValue
    officials?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageProfileCreateManyInput = {
    id?: string
    villageName: string
    headGreeting: string
    headPhoto: string
    historyText: string
    vision: string
    missions: JsonNullValueInput | InputJsonValue
    officials: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type VillageProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    villageName?: StringFieldUpdateOperationsInput | string
    headGreeting?: StringFieldUpdateOperationsInput | string
    headPhoto?: StringFieldUpdateOperationsInput | string
    historyText?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    missions?: JsonNullValueInput | InputJsonValue
    officials?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillageProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    villageName?: StringFieldUpdateOperationsInput | string
    headGreeting?: StringFieldUpdateOperationsInput | string
    headPhoto?: StringFieldUpdateOperationsInput | string
    historyText?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    missions?: JsonNullValueInput | InputJsonValue
    officials?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHistoryCreateInput = {
    id?: string
    entityType: string
    entityId: string
    action: $Enums.ActionType
    notes?: string | null
    createdAt?: Date | string
    admin?: UserCreateNestedOneWithoutRevisionsInput
  }

  export type RevisionHistoryUncheckedCreateInput = {
    id?: string
    entityType: string
    entityId: string
    action: $Enums.ActionType
    notes?: string | null
    adminId?: string | null
    createdAt?: Date | string
  }

  export type RevisionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneWithoutRevisionsNestedInput
  }

  export type RevisionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHistoryCreateManyInput = {
    id?: string
    entityType: string
    entityId: string
    action: $Enums.ActionType
    notes?: string | null
    adminId?: string | null
    createdAt?: Date | string
  }

  export type RevisionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateInput = {
    id?: string
    title: string
    imageUrl: string
    linkUrl?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUncheckedCreateInput = {
    id?: string
    title: string
    imageUrl: string
    linkUrl?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateManyInput = {
    id?: string
    title: string
    imageUrl: string
    linkUrl?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    description?: string | null
    updatedAt?: Date | string
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    description?: string | null
    updatedAt?: Date | string
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateManyInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    description?: string | null
    updatedAt?: Date | string
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type RevisionHistoryListRelationFilter = {
    every?: RevisionHistoryWhereInput
    some?: RevisionHistoryWhereInput
    none?: RevisionHistoryWhereInput
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RevisionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NewsCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumContentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStatusFilter<$PrismaModel> | $Enums.ContentStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NewsCategoryScalarRelationFilter = {
    is?: NewsCategoryWhereInput
    isNot?: NewsCategoryWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    coverImage?: SortOrder
    coverCaption?: SortOrder
    contentSections?: SortOrder
    status?: SortOrder
    submitterName?: SortOrder
    submitterEmail?: SortOrder
    submitterPhone?: SortOrder
    revisionToken?: SortOrder
    adminFeedback?: SortOrder
    publishedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    coverImage?: SortOrder
    coverCaption?: SortOrder
    status?: SortOrder
    submitterName?: SortOrder
    submitterEmail?: SortOrder
    submitterPhone?: SortOrder
    revisionToken?: SortOrder
    adminFeedback?: SortOrder
    publishedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    coverImage?: SortOrder
    coverCaption?: SortOrder
    status?: SortOrder
    submitterName?: SortOrder
    submitterEmail?: SortOrder
    submitterPhone?: SortOrder
    revisionToken?: SortOrder
    adminFeedback?: SortOrder
    publishedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumContentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentStatusFilter<$PrismaModel>
    _max?: NestedEnumContentStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUmkmCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.UmkmCategory | EnumUmkmCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.UmkmCategory[] | ListEnumUmkmCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.UmkmCategory[] | ListEnumUmkmCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumUmkmCategoryFilter<$PrismaModel> | $Enums.UmkmCategory
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VillagePotentialNullableScalarRelationFilter = {
    is?: VillagePotentialWhereInput | null
    isNot?: VillagePotentialWhereInput | null
  }

  export type UmkmProductListRelationFilter = {
    every?: UmkmProductWhereInput
    some?: UmkmProductWhereInput
    none?: UmkmProductWhereInput
  }

  export type UmkmProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UmkmCountOrderByAggregateInput = {
    id?: SortOrder
    potentialId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    ownerName?: SortOrder
    category?: SortOrder
    description?: SortOrder
    whatsappNumber?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    logo?: SortOrder
    gallery?: SortOrder
    status?: SortOrder
    submitterEmail?: SortOrder
    revisionToken?: SortOrder
    adminFeedback?: SortOrder
    publishedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UmkmAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UmkmMaxOrderByAggregateInput = {
    id?: SortOrder
    potentialId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    ownerName?: SortOrder
    category?: SortOrder
    description?: SortOrder
    whatsappNumber?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    logo?: SortOrder
    status?: SortOrder
    submitterEmail?: SortOrder
    revisionToken?: SortOrder
    adminFeedback?: SortOrder
    publishedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UmkmMinOrderByAggregateInput = {
    id?: SortOrder
    potentialId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    ownerName?: SortOrder
    category?: SortOrder
    description?: SortOrder
    whatsappNumber?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    logo?: SortOrder
    status?: SortOrder
    submitterEmail?: SortOrder
    revisionToken?: SortOrder
    adminFeedback?: SortOrder
    publishedAt?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UmkmSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumUmkmCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UmkmCategory | EnumUmkmCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.UmkmCategory[] | ListEnumUmkmCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.UmkmCategory[] | ListEnumUmkmCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumUmkmCategoryWithAggregatesFilter<$PrismaModel> | $Enums.UmkmCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUmkmCategoryFilter<$PrismaModel>
    _max?: NestedEnumUmkmCategoryFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UmkmScalarRelationFilter = {
    is?: UmkmWhereInput
    isNot?: UmkmWhereInput
  }

  export type UmkmProductCountOrderByAggregateInput = {
    id?: SortOrder
    umkmId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    productPhoto?: SortOrder
  }

  export type UmkmProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type UmkmProductMaxOrderByAggregateInput = {
    id?: SortOrder
    umkmId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    productPhoto?: SortOrder
  }

  export type UmkmProductMinOrderByAggregateInput = {
    id?: SortOrder
    umkmId?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    productPhoto?: SortOrder
  }

  export type UmkmProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPotentialCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PotentialCategory | EnumPotentialCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PotentialCategory[] | ListEnumPotentialCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PotentialCategory[] | ListEnumPotentialCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPotentialCategoryFilter<$PrismaModel> | $Enums.PotentialCategory
  }

  export type UmkmListRelationFilter = {
    every?: UmkmWhereInput
    some?: UmkmWhereInput
    none?: UmkmWhereInput
  }

  export type UmkmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VillagePotentialCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    overview?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    gallery?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillagePotentialAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type VillagePotentialMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    overview?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillagePotentialMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    overview?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillagePotentialSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumPotentialCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PotentialCategory | EnumPotentialCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PotentialCategory[] | ListEnumPotentialCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PotentialCategory[] | ListEnumPotentialCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPotentialCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PotentialCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPotentialCategoryFilter<$PrismaModel>
    _max?: NestedEnumPotentialCategoryFilter<$PrismaModel>
  }

  export type EnumFacilityCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityCategory | EnumFacilityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityCategory[] | ListEnumFacilityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityCategory[] | ListEnumFacilityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityCategoryFilter<$PrismaModel> | $Enums.FacilityCategory
  }

  export type PublicFacilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    image?: SortOrder
    operatingHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicFacilityAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PublicFacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    image?: SortOrder
    operatingHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicFacilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    image?: SortOrder
    operatingHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicFacilitySumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumFacilityCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityCategory | EnumFacilityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityCategory[] | ListEnumFacilityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityCategory[] | ListEnumFacilityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FacilityCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacilityCategoryFilter<$PrismaModel>
    _max?: NestedEnumFacilityCategoryFilter<$PrismaModel>
  }

  export type VillageProfileCountOrderByAggregateInput = {
    id?: SortOrder
    villageName?: SortOrder
    headGreeting?: SortOrder
    headPhoto?: SortOrder
    historyText?: SortOrder
    vision?: SortOrder
    missions?: SortOrder
    officials?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    villageName?: SortOrder
    headGreeting?: SortOrder
    headPhoto?: SortOrder
    historyText?: SortOrder
    vision?: SortOrder
    updatedAt?: SortOrder
  }

  export type VillageProfileMinOrderByAggregateInput = {
    id?: SortOrder
    villageName?: SortOrder
    headGreeting?: SortOrder
    headPhoto?: SortOrder
    historyText?: SortOrder
    vision?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType
  }

  export type RevisionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    notes?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type RevisionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    notes?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type RevisionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    notes?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActionTypeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type RevisionHistoryCreateNestedManyWithoutAdminInput = {
    create?: XOR<RevisionHistoryCreateWithoutAdminInput, RevisionHistoryUncheckedCreateWithoutAdminInput> | RevisionHistoryCreateWithoutAdminInput[] | RevisionHistoryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RevisionHistoryCreateOrConnectWithoutAdminInput | RevisionHistoryCreateOrConnectWithoutAdminInput[]
    createMany?: RevisionHistoryCreateManyAdminInputEnvelope
    connect?: RevisionHistoryWhereUniqueInput | RevisionHistoryWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type RevisionHistoryUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<RevisionHistoryCreateWithoutAdminInput, RevisionHistoryUncheckedCreateWithoutAdminInput> | RevisionHistoryCreateWithoutAdminInput[] | RevisionHistoryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RevisionHistoryCreateOrConnectWithoutAdminInput | RevisionHistoryCreateOrConnectWithoutAdminInput[]
    createMany?: RevisionHistoryCreateManyAdminInputEnvelope
    connect?: RevisionHistoryWhereUniqueInput | RevisionHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NewsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type RevisionHistoryUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RevisionHistoryCreateWithoutAdminInput, RevisionHistoryUncheckedCreateWithoutAdminInput> | RevisionHistoryCreateWithoutAdminInput[] | RevisionHistoryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RevisionHistoryCreateOrConnectWithoutAdminInput | RevisionHistoryCreateOrConnectWithoutAdminInput[]
    upsert?: RevisionHistoryUpsertWithWhereUniqueWithoutAdminInput | RevisionHistoryUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RevisionHistoryCreateManyAdminInputEnvelope
    set?: RevisionHistoryWhereUniqueInput | RevisionHistoryWhereUniqueInput[]
    disconnect?: RevisionHistoryWhereUniqueInput | RevisionHistoryWhereUniqueInput[]
    delete?: RevisionHistoryWhereUniqueInput | RevisionHistoryWhereUniqueInput[]
    connect?: RevisionHistoryWhereUniqueInput | RevisionHistoryWhereUniqueInput[]
    update?: RevisionHistoryUpdateWithWhereUniqueWithoutAdminInput | RevisionHistoryUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RevisionHistoryUpdateManyWithWhereWithoutAdminInput | RevisionHistoryUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RevisionHistoryScalarWhereInput | RevisionHistoryScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type RevisionHistoryUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RevisionHistoryCreateWithoutAdminInput, RevisionHistoryUncheckedCreateWithoutAdminInput> | RevisionHistoryCreateWithoutAdminInput[] | RevisionHistoryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RevisionHistoryCreateOrConnectWithoutAdminInput | RevisionHistoryCreateOrConnectWithoutAdminInput[]
    upsert?: RevisionHistoryUpsertWithWhereUniqueWithoutAdminInput | RevisionHistoryUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RevisionHistoryCreateManyAdminInputEnvelope
    set?: RevisionHistoryWhereUniqueInput | RevisionHistoryWhereUniqueInput[]
    disconnect?: RevisionHistoryWhereUniqueInput | RevisionHistoryWhereUniqueInput[]
    delete?: RevisionHistoryWhereUniqueInput | RevisionHistoryWhereUniqueInput[]
    connect?: RevisionHistoryWhereUniqueInput | RevisionHistoryWhereUniqueInput[]
    update?: RevisionHistoryUpdateWithWhereUniqueWithoutAdminInput | RevisionHistoryUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RevisionHistoryUpdateManyWithWhereWithoutAdminInput | RevisionHistoryUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RevisionHistoryScalarWhereInput | RevisionHistoryScalarWhereInput[]
  }

  export type NewsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutCategoryInput | NewsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutCategoryInput | NewsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutCategoryInput | NewsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutCategoryInput | NewsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutCategoryInput | NewsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutCategoryInput | NewsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NewsCategoryCreateNestedOneWithoutNewsInput = {
    create?: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: NewsCategoryCreateOrConnectWithoutNewsInput
    connect?: NewsCategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNewsCreatedInput = {
    create?: XOR<UserCreateWithoutNewsCreatedInput, UserUncheckedCreateWithoutNewsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumContentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContentStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NewsCategoryUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: NewsCategoryCreateOrConnectWithoutNewsInput
    upsert?: NewsCategoryUpsertWithoutNewsInput
    connect?: NewsCategoryWhereUniqueInput
    update?: XOR<XOR<NewsCategoryUpdateToOneWithWhereWithoutNewsInput, NewsCategoryUpdateWithoutNewsInput>, NewsCategoryUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateOneWithoutNewsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutNewsCreatedInput, UserUncheckedCreateWithoutNewsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsCreatedInput
    upsert?: UserUpsertWithoutNewsCreatedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsCreatedInput, UserUpdateWithoutNewsCreatedInput>, UserUncheckedUpdateWithoutNewsCreatedInput>
  }

  export type VillagePotentialCreateNestedOneWithoutUmkmsInput = {
    create?: XOR<VillagePotentialCreateWithoutUmkmsInput, VillagePotentialUncheckedCreateWithoutUmkmsInput>
    connectOrCreate?: VillagePotentialCreateOrConnectWithoutUmkmsInput
    connect?: VillagePotentialWhereUniqueInput
  }

  export type UmkmProductCreateNestedManyWithoutUmkmInput = {
    create?: XOR<UmkmProductCreateWithoutUmkmInput, UmkmProductUncheckedCreateWithoutUmkmInput> | UmkmProductCreateWithoutUmkmInput[] | UmkmProductUncheckedCreateWithoutUmkmInput[]
    connectOrCreate?: UmkmProductCreateOrConnectWithoutUmkmInput | UmkmProductCreateOrConnectWithoutUmkmInput[]
    createMany?: UmkmProductCreateManyUmkmInputEnvelope
    connect?: UmkmProductWhereUniqueInput | UmkmProductWhereUniqueInput[]
  }

  export type UmkmProductUncheckedCreateNestedManyWithoutUmkmInput = {
    create?: XOR<UmkmProductCreateWithoutUmkmInput, UmkmProductUncheckedCreateWithoutUmkmInput> | UmkmProductCreateWithoutUmkmInput[] | UmkmProductUncheckedCreateWithoutUmkmInput[]
    connectOrCreate?: UmkmProductCreateOrConnectWithoutUmkmInput | UmkmProductCreateOrConnectWithoutUmkmInput[]
    createMany?: UmkmProductCreateManyUmkmInputEnvelope
    connect?: UmkmProductWhereUniqueInput | UmkmProductWhereUniqueInput[]
  }

  export type EnumUmkmCategoryFieldUpdateOperationsInput = {
    set?: $Enums.UmkmCategory
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VillagePotentialUpdateOneWithoutUmkmsNestedInput = {
    create?: XOR<VillagePotentialCreateWithoutUmkmsInput, VillagePotentialUncheckedCreateWithoutUmkmsInput>
    connectOrCreate?: VillagePotentialCreateOrConnectWithoutUmkmsInput
    upsert?: VillagePotentialUpsertWithoutUmkmsInput
    disconnect?: VillagePotentialWhereInput | boolean
    delete?: VillagePotentialWhereInput | boolean
    connect?: VillagePotentialWhereUniqueInput
    update?: XOR<XOR<VillagePotentialUpdateToOneWithWhereWithoutUmkmsInput, VillagePotentialUpdateWithoutUmkmsInput>, VillagePotentialUncheckedUpdateWithoutUmkmsInput>
  }

  export type UmkmProductUpdateManyWithoutUmkmNestedInput = {
    create?: XOR<UmkmProductCreateWithoutUmkmInput, UmkmProductUncheckedCreateWithoutUmkmInput> | UmkmProductCreateWithoutUmkmInput[] | UmkmProductUncheckedCreateWithoutUmkmInput[]
    connectOrCreate?: UmkmProductCreateOrConnectWithoutUmkmInput | UmkmProductCreateOrConnectWithoutUmkmInput[]
    upsert?: UmkmProductUpsertWithWhereUniqueWithoutUmkmInput | UmkmProductUpsertWithWhereUniqueWithoutUmkmInput[]
    createMany?: UmkmProductCreateManyUmkmInputEnvelope
    set?: UmkmProductWhereUniqueInput | UmkmProductWhereUniqueInput[]
    disconnect?: UmkmProductWhereUniqueInput | UmkmProductWhereUniqueInput[]
    delete?: UmkmProductWhereUniqueInput | UmkmProductWhereUniqueInput[]
    connect?: UmkmProductWhereUniqueInput | UmkmProductWhereUniqueInput[]
    update?: UmkmProductUpdateWithWhereUniqueWithoutUmkmInput | UmkmProductUpdateWithWhereUniqueWithoutUmkmInput[]
    updateMany?: UmkmProductUpdateManyWithWhereWithoutUmkmInput | UmkmProductUpdateManyWithWhereWithoutUmkmInput[]
    deleteMany?: UmkmProductScalarWhereInput | UmkmProductScalarWhereInput[]
  }

  export type UmkmProductUncheckedUpdateManyWithoutUmkmNestedInput = {
    create?: XOR<UmkmProductCreateWithoutUmkmInput, UmkmProductUncheckedCreateWithoutUmkmInput> | UmkmProductCreateWithoutUmkmInput[] | UmkmProductUncheckedCreateWithoutUmkmInput[]
    connectOrCreate?: UmkmProductCreateOrConnectWithoutUmkmInput | UmkmProductCreateOrConnectWithoutUmkmInput[]
    upsert?: UmkmProductUpsertWithWhereUniqueWithoutUmkmInput | UmkmProductUpsertWithWhereUniqueWithoutUmkmInput[]
    createMany?: UmkmProductCreateManyUmkmInputEnvelope
    set?: UmkmProductWhereUniqueInput | UmkmProductWhereUniqueInput[]
    disconnect?: UmkmProductWhereUniqueInput | UmkmProductWhereUniqueInput[]
    delete?: UmkmProductWhereUniqueInput | UmkmProductWhereUniqueInput[]
    connect?: UmkmProductWhereUniqueInput | UmkmProductWhereUniqueInput[]
    update?: UmkmProductUpdateWithWhereUniqueWithoutUmkmInput | UmkmProductUpdateWithWhereUniqueWithoutUmkmInput[]
    updateMany?: UmkmProductUpdateManyWithWhereWithoutUmkmInput | UmkmProductUpdateManyWithWhereWithoutUmkmInput[]
    deleteMany?: UmkmProductScalarWhereInput | UmkmProductScalarWhereInput[]
  }

  export type UmkmCreateNestedOneWithoutProductsInput = {
    create?: XOR<UmkmCreateWithoutProductsInput, UmkmUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UmkmCreateOrConnectWithoutProductsInput
    connect?: UmkmWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UmkmUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<UmkmCreateWithoutProductsInput, UmkmUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UmkmCreateOrConnectWithoutProductsInput
    upsert?: UmkmUpsertWithoutProductsInput
    connect?: UmkmWhereUniqueInput
    update?: XOR<XOR<UmkmUpdateToOneWithWhereWithoutProductsInput, UmkmUpdateWithoutProductsInput>, UmkmUncheckedUpdateWithoutProductsInput>
  }

  export type UmkmCreateNestedManyWithoutPotentialInput = {
    create?: XOR<UmkmCreateWithoutPotentialInput, UmkmUncheckedCreateWithoutPotentialInput> | UmkmCreateWithoutPotentialInput[] | UmkmUncheckedCreateWithoutPotentialInput[]
    connectOrCreate?: UmkmCreateOrConnectWithoutPotentialInput | UmkmCreateOrConnectWithoutPotentialInput[]
    createMany?: UmkmCreateManyPotentialInputEnvelope
    connect?: UmkmWhereUniqueInput | UmkmWhereUniqueInput[]
  }

  export type UmkmUncheckedCreateNestedManyWithoutPotentialInput = {
    create?: XOR<UmkmCreateWithoutPotentialInput, UmkmUncheckedCreateWithoutPotentialInput> | UmkmCreateWithoutPotentialInput[] | UmkmUncheckedCreateWithoutPotentialInput[]
    connectOrCreate?: UmkmCreateOrConnectWithoutPotentialInput | UmkmCreateOrConnectWithoutPotentialInput[]
    createMany?: UmkmCreateManyPotentialInputEnvelope
    connect?: UmkmWhereUniqueInput | UmkmWhereUniqueInput[]
  }

  export type EnumPotentialCategoryFieldUpdateOperationsInput = {
    set?: $Enums.PotentialCategory
  }

  export type UmkmUpdateManyWithoutPotentialNestedInput = {
    create?: XOR<UmkmCreateWithoutPotentialInput, UmkmUncheckedCreateWithoutPotentialInput> | UmkmCreateWithoutPotentialInput[] | UmkmUncheckedCreateWithoutPotentialInput[]
    connectOrCreate?: UmkmCreateOrConnectWithoutPotentialInput | UmkmCreateOrConnectWithoutPotentialInput[]
    upsert?: UmkmUpsertWithWhereUniqueWithoutPotentialInput | UmkmUpsertWithWhereUniqueWithoutPotentialInput[]
    createMany?: UmkmCreateManyPotentialInputEnvelope
    set?: UmkmWhereUniqueInput | UmkmWhereUniqueInput[]
    disconnect?: UmkmWhereUniqueInput | UmkmWhereUniqueInput[]
    delete?: UmkmWhereUniqueInput | UmkmWhereUniqueInput[]
    connect?: UmkmWhereUniqueInput | UmkmWhereUniqueInput[]
    update?: UmkmUpdateWithWhereUniqueWithoutPotentialInput | UmkmUpdateWithWhereUniqueWithoutPotentialInput[]
    updateMany?: UmkmUpdateManyWithWhereWithoutPotentialInput | UmkmUpdateManyWithWhereWithoutPotentialInput[]
    deleteMany?: UmkmScalarWhereInput | UmkmScalarWhereInput[]
  }

  export type UmkmUncheckedUpdateManyWithoutPotentialNestedInput = {
    create?: XOR<UmkmCreateWithoutPotentialInput, UmkmUncheckedCreateWithoutPotentialInput> | UmkmCreateWithoutPotentialInput[] | UmkmUncheckedCreateWithoutPotentialInput[]
    connectOrCreate?: UmkmCreateOrConnectWithoutPotentialInput | UmkmCreateOrConnectWithoutPotentialInput[]
    upsert?: UmkmUpsertWithWhereUniqueWithoutPotentialInput | UmkmUpsertWithWhereUniqueWithoutPotentialInput[]
    createMany?: UmkmCreateManyPotentialInputEnvelope
    set?: UmkmWhereUniqueInput | UmkmWhereUniqueInput[]
    disconnect?: UmkmWhereUniqueInput | UmkmWhereUniqueInput[]
    delete?: UmkmWhereUniqueInput | UmkmWhereUniqueInput[]
    connect?: UmkmWhereUniqueInput | UmkmWhereUniqueInput[]
    update?: UmkmUpdateWithWhereUniqueWithoutPotentialInput | UmkmUpdateWithWhereUniqueWithoutPotentialInput[]
    updateMany?: UmkmUpdateManyWithWhereWithoutPotentialInput | UmkmUpdateManyWithWhereWithoutPotentialInput[]
    deleteMany?: UmkmScalarWhereInput | UmkmScalarWhereInput[]
  }

  export type EnumFacilityCategoryFieldUpdateOperationsInput = {
    set?: $Enums.FacilityCategory
  }

  export type UserCreateNestedOneWithoutRevisionsInput = {
    create?: XOR<UserCreateWithoutRevisionsInput, UserUncheckedCreateWithoutRevisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRevisionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActionType
  }

  export type UserUpdateOneWithoutRevisionsNestedInput = {
    create?: XOR<UserCreateWithoutRevisionsInput, UserUncheckedCreateWithoutRevisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRevisionsInput
    upsert?: UserUpsertWithoutRevisionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRevisionsInput, UserUpdateWithoutRevisionsInput>, UserUncheckedUpdateWithoutRevisionsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumContentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStatusFilter<$PrismaModel> | $Enums.ContentStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumContentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentStatusFilter<$PrismaModel>
    _max?: NestedEnumContentStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUmkmCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.UmkmCategory | EnumUmkmCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.UmkmCategory[] | ListEnumUmkmCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.UmkmCategory[] | ListEnumUmkmCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumUmkmCategoryFilter<$PrismaModel> | $Enums.UmkmCategory
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumUmkmCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UmkmCategory | EnumUmkmCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.UmkmCategory[] | ListEnumUmkmCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.UmkmCategory[] | ListEnumUmkmCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumUmkmCategoryWithAggregatesFilter<$PrismaModel> | $Enums.UmkmCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUmkmCategoryFilter<$PrismaModel>
    _max?: NestedEnumUmkmCategoryFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPotentialCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PotentialCategory | EnumPotentialCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PotentialCategory[] | ListEnumPotentialCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PotentialCategory[] | ListEnumPotentialCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPotentialCategoryFilter<$PrismaModel> | $Enums.PotentialCategory
  }

  export type NestedEnumPotentialCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PotentialCategory | EnumPotentialCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PotentialCategory[] | ListEnumPotentialCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PotentialCategory[] | ListEnumPotentialCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPotentialCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PotentialCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPotentialCategoryFilter<$PrismaModel>
    _max?: NestedEnumPotentialCategoryFilter<$PrismaModel>
  }

  export type NestedEnumFacilityCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityCategory | EnumFacilityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityCategory[] | ListEnumFacilityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityCategory[] | ListEnumFacilityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityCategoryFilter<$PrismaModel> | $Enums.FacilityCategory
  }

  export type NestedEnumFacilityCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityCategory | EnumFacilityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityCategory[] | ListEnumFacilityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityCategory[] | ListEnumFacilityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FacilityCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacilityCategoryFilter<$PrismaModel>
    _max?: NestedEnumFacilityCategoryFilter<$PrismaModel>
  }

  export type NestedEnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType
  }

  export type NestedEnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActionTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NewsCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    summary: string
    coverImage: string
    coverCaption: string
    contentSections: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterName?: string | null
    submitterEmail?: string | null
    submitterPhone?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: NewsCategoryCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutAuthorInput = {
    id?: string
    categoryId: string
    title: string
    slug: string
    summary: string
    coverImage: string
    coverCaption: string
    contentSections: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterName?: string | null
    submitterEmail?: string | null
    submitterPhone?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCreateOrConnectWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsCreateManyAuthorInputEnvelope = {
    data: NewsCreateManyAuthorInput | NewsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RevisionHistoryCreateWithoutAdminInput = {
    id?: string
    entityType: string
    entityId: string
    action: $Enums.ActionType
    notes?: string | null
    createdAt?: Date | string
  }

  export type RevisionHistoryUncheckedCreateWithoutAdminInput = {
    id?: string
    entityType: string
    entityId: string
    action: $Enums.ActionType
    notes?: string | null
    createdAt?: Date | string
  }

  export type RevisionHistoryCreateOrConnectWithoutAdminInput = {
    where: RevisionHistoryWhereUniqueInput
    create: XOR<RevisionHistoryCreateWithoutAdminInput, RevisionHistoryUncheckedCreateWithoutAdminInput>
  }

  export type RevisionHistoryCreateManyAdminInputEnvelope = {
    data: RevisionHistoryCreateManyAdminInput | RevisionHistoryCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
  }

  export type NewsUpdateManyWithWhereWithoutAuthorInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id?: UuidFilter<"News"> | string
    categoryId?: UuidFilter<"News"> | string
    authorId?: UuidNullableFilter<"News"> | string | null
    title?: StringFilter<"News"> | string
    slug?: StringFilter<"News"> | string
    summary?: StringFilter<"News"> | string
    coverImage?: StringFilter<"News"> | string
    coverCaption?: StringFilter<"News"> | string
    contentSections?: JsonFilter<"News">
    status?: EnumContentStatusFilter<"News"> | $Enums.ContentStatus
    submitterName?: StringNullableFilter<"News"> | string | null
    submitterEmail?: StringNullableFilter<"News"> | string | null
    submitterPhone?: StringNullableFilter<"News"> | string | null
    revisionToken?: StringNullableFilter<"News"> | string | null
    adminFeedback?: StringNullableFilter<"News"> | string | null
    publishedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    userId?: UuidNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: UuidFilter<"AuditLog"> | string
    payload?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type RevisionHistoryUpsertWithWhereUniqueWithoutAdminInput = {
    where: RevisionHistoryWhereUniqueInput
    update: XOR<RevisionHistoryUpdateWithoutAdminInput, RevisionHistoryUncheckedUpdateWithoutAdminInput>
    create: XOR<RevisionHistoryCreateWithoutAdminInput, RevisionHistoryUncheckedCreateWithoutAdminInput>
  }

  export type RevisionHistoryUpdateWithWhereUniqueWithoutAdminInput = {
    where: RevisionHistoryWhereUniqueInput
    data: XOR<RevisionHistoryUpdateWithoutAdminInput, RevisionHistoryUncheckedUpdateWithoutAdminInput>
  }

  export type RevisionHistoryUpdateManyWithWhereWithoutAdminInput = {
    where: RevisionHistoryScalarWhereInput
    data: XOR<RevisionHistoryUpdateManyMutationInput, RevisionHistoryUncheckedUpdateManyWithoutAdminInput>
  }

  export type RevisionHistoryScalarWhereInput = {
    AND?: RevisionHistoryScalarWhereInput | RevisionHistoryScalarWhereInput[]
    OR?: RevisionHistoryScalarWhereInput[]
    NOT?: RevisionHistoryScalarWhereInput | RevisionHistoryScalarWhereInput[]
    id?: UuidFilter<"RevisionHistory"> | string
    entityType?: StringFilter<"RevisionHistory"> | string
    entityId?: UuidFilter<"RevisionHistory"> | string
    action?: EnumActionTypeFilter<"RevisionHistory"> | $Enums.ActionType
    notes?: StringNullableFilter<"RevisionHistory"> | string | null
    adminId?: UuidNullableFilter<"RevisionHistory"> | string | null
    createdAt?: DateTimeFilter<"RevisionHistory"> | Date | string
  }

  export type NewsCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    summary: string
    coverImage: string
    coverCaption: string
    contentSections: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterName?: string | null
    submitterEmail?: string | null
    submitterPhone?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutNewsCreatedInput
  }

  export type NewsUncheckedCreateWithoutCategoryInput = {
    id?: string
    authorId?: string | null
    title: string
    slug: string
    summary: string
    coverImage: string
    coverCaption: string
    contentSections: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterName?: string | null
    submitterEmail?: string | null
    submitterPhone?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCreateOrConnectWithoutCategoryInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput>
  }

  export type NewsCreateManyCategoryInputEnvelope = {
    data: NewsCreateManyCategoryInput | NewsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutCategoryInput, NewsUncheckedUpdateWithoutCategoryInput>
    create: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutCategoryInput, NewsUncheckedUpdateWithoutCategoryInput>
  }

  export type NewsUpdateManyWithWhereWithoutCategoryInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type NewsCategoryCreateWithoutNewsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type NewsCategoryUncheckedCreateWithoutNewsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type NewsCategoryCreateOrConnectWithoutNewsInput = {
    where: NewsCategoryWhereUniqueInput
    create: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
  }

  export type UserCreateWithoutNewsCreatedInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    revisions?: RevisionHistoryCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutNewsCreatedInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    revisions?: RevisionHistoryUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutNewsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsCreatedInput, UserUncheckedCreateWithoutNewsCreatedInput>
  }

  export type NewsCategoryUpsertWithoutNewsInput = {
    update: XOR<NewsCategoryUpdateWithoutNewsInput, NewsCategoryUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsCategoryCreateWithoutNewsInput, NewsCategoryUncheckedCreateWithoutNewsInput>
    where?: NewsCategoryWhereInput
  }

  export type NewsCategoryUpdateToOneWithWhereWithoutNewsInput = {
    where?: NewsCategoryWhereInput
    data: XOR<NewsCategoryUpdateWithoutNewsInput, NewsCategoryUncheckedUpdateWithoutNewsInput>
  }

  export type NewsCategoryUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCategoryUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutNewsCreatedInput = {
    update: XOR<UserUpdateWithoutNewsCreatedInput, UserUncheckedUpdateWithoutNewsCreatedInput>
    create: XOR<UserCreateWithoutNewsCreatedInput, UserUncheckedCreateWithoutNewsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsCreatedInput, UserUncheckedUpdateWithoutNewsCreatedInput>
  }

  export type UserUpdateWithoutNewsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    revisions?: RevisionHistoryUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    revisions?: RevisionHistoryUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type VillagePotentialCreateWithoutUmkmsInput = {
    id?: string
    title: string
    slug: string
    category: $Enums.PotentialCategory
    overview: string
    description: string
    coverImage: string
    gallery: JsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillagePotentialUncheckedCreateWithoutUmkmsInput = {
    id?: string
    title: string
    slug: string
    category: $Enums.PotentialCategory
    overview: string
    description: string
    coverImage: string
    gallery: JsonNullValueInput | InputJsonValue
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VillagePotentialCreateOrConnectWithoutUmkmsInput = {
    where: VillagePotentialWhereUniqueInput
    create: XOR<VillagePotentialCreateWithoutUmkmsInput, VillagePotentialUncheckedCreateWithoutUmkmsInput>
  }

  export type UmkmProductCreateWithoutUmkmInput = {
    id?: string
    productName: string
    price?: number | null
    productPhoto?: string | null
  }

  export type UmkmProductUncheckedCreateWithoutUmkmInput = {
    id?: string
    productName: string
    price?: number | null
    productPhoto?: string | null
  }

  export type UmkmProductCreateOrConnectWithoutUmkmInput = {
    where: UmkmProductWhereUniqueInput
    create: XOR<UmkmProductCreateWithoutUmkmInput, UmkmProductUncheckedCreateWithoutUmkmInput>
  }

  export type UmkmProductCreateManyUmkmInputEnvelope = {
    data: UmkmProductCreateManyUmkmInput | UmkmProductCreateManyUmkmInput[]
    skipDuplicates?: boolean
  }

  export type VillagePotentialUpsertWithoutUmkmsInput = {
    update: XOR<VillagePotentialUpdateWithoutUmkmsInput, VillagePotentialUncheckedUpdateWithoutUmkmsInput>
    create: XOR<VillagePotentialCreateWithoutUmkmsInput, VillagePotentialUncheckedCreateWithoutUmkmsInput>
    where?: VillagePotentialWhereInput
  }

  export type VillagePotentialUpdateToOneWithWhereWithoutUmkmsInput = {
    where?: VillagePotentialWhereInput
    data: XOR<VillagePotentialUpdateWithoutUmkmsInput, VillagePotentialUncheckedUpdateWithoutUmkmsInput>
  }

  export type VillagePotentialUpdateWithoutUmkmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumPotentialCategoryFieldUpdateOperationsInput | $Enums.PotentialCategory
    overview?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VillagePotentialUncheckedUpdateWithoutUmkmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumPotentialCategoryFieldUpdateOperationsInput | $Enums.PotentialCategory
    overview?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UmkmProductUpsertWithWhereUniqueWithoutUmkmInput = {
    where: UmkmProductWhereUniqueInput
    update: XOR<UmkmProductUpdateWithoutUmkmInput, UmkmProductUncheckedUpdateWithoutUmkmInput>
    create: XOR<UmkmProductCreateWithoutUmkmInput, UmkmProductUncheckedCreateWithoutUmkmInput>
  }

  export type UmkmProductUpdateWithWhereUniqueWithoutUmkmInput = {
    where: UmkmProductWhereUniqueInput
    data: XOR<UmkmProductUpdateWithoutUmkmInput, UmkmProductUncheckedUpdateWithoutUmkmInput>
  }

  export type UmkmProductUpdateManyWithWhereWithoutUmkmInput = {
    where: UmkmProductScalarWhereInput
    data: XOR<UmkmProductUpdateManyMutationInput, UmkmProductUncheckedUpdateManyWithoutUmkmInput>
  }

  export type UmkmProductScalarWhereInput = {
    AND?: UmkmProductScalarWhereInput | UmkmProductScalarWhereInput[]
    OR?: UmkmProductScalarWhereInput[]
    NOT?: UmkmProductScalarWhereInput | UmkmProductScalarWhereInput[]
    id?: UuidFilter<"UmkmProduct"> | string
    umkmId?: UuidFilter<"UmkmProduct"> | string
    productName?: StringFilter<"UmkmProduct"> | string
    price?: IntNullableFilter<"UmkmProduct"> | number | null
    productPhoto?: StringNullableFilter<"UmkmProduct"> | string | null
  }

  export type UmkmCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    ownerName: string
    category: $Enums.UmkmCategory
    description: string
    whatsappNumber: string
    address: string
    latitude: number
    longitude: number
    logo: string
    gallery: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterEmail?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    potential?: VillagePotentialCreateNestedOneWithoutUmkmsInput
  }

  export type UmkmUncheckedCreateWithoutProductsInput = {
    id?: string
    potentialId?: string | null
    name: string
    slug: string
    ownerName: string
    category: $Enums.UmkmCategory
    description: string
    whatsappNumber: string
    address: string
    latitude: number
    longitude: number
    logo: string
    gallery: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterEmail?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UmkmCreateOrConnectWithoutProductsInput = {
    where: UmkmWhereUniqueInput
    create: XOR<UmkmCreateWithoutProductsInput, UmkmUncheckedCreateWithoutProductsInput>
  }

  export type UmkmUpsertWithoutProductsInput = {
    update: XOR<UmkmUpdateWithoutProductsInput, UmkmUncheckedUpdateWithoutProductsInput>
    create: XOR<UmkmCreateWithoutProductsInput, UmkmUncheckedCreateWithoutProductsInput>
    where?: UmkmWhereInput
  }

  export type UmkmUpdateToOneWithWhereWithoutProductsInput = {
    where?: UmkmWhereInput
    data: XOR<UmkmUpdateWithoutProductsInput, UmkmUncheckedUpdateWithoutProductsInput>
  }

  export type UmkmUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    category?: EnumUmkmCategoryFieldUpdateOperationsInput | $Enums.UmkmCategory
    description?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    potential?: VillagePotentialUpdateOneWithoutUmkmsNestedInput
  }

  export type UmkmUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    potentialId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    category?: EnumUmkmCategoryFieldUpdateOperationsInput | $Enums.UmkmCategory
    description?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UmkmCreateWithoutPotentialInput = {
    id?: string
    name: string
    slug: string
    ownerName: string
    category: $Enums.UmkmCategory
    description: string
    whatsappNumber: string
    address: string
    latitude: number
    longitude: number
    logo: string
    gallery: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterEmail?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: UmkmProductCreateNestedManyWithoutUmkmInput
  }

  export type UmkmUncheckedCreateWithoutPotentialInput = {
    id?: string
    name: string
    slug: string
    ownerName: string
    category: $Enums.UmkmCategory
    description: string
    whatsappNumber: string
    address: string
    latitude: number
    longitude: number
    logo: string
    gallery: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterEmail?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: UmkmProductUncheckedCreateNestedManyWithoutUmkmInput
  }

  export type UmkmCreateOrConnectWithoutPotentialInput = {
    where: UmkmWhereUniqueInput
    create: XOR<UmkmCreateWithoutPotentialInput, UmkmUncheckedCreateWithoutPotentialInput>
  }

  export type UmkmCreateManyPotentialInputEnvelope = {
    data: UmkmCreateManyPotentialInput | UmkmCreateManyPotentialInput[]
    skipDuplicates?: boolean
  }

  export type UmkmUpsertWithWhereUniqueWithoutPotentialInput = {
    where: UmkmWhereUniqueInput
    update: XOR<UmkmUpdateWithoutPotentialInput, UmkmUncheckedUpdateWithoutPotentialInput>
    create: XOR<UmkmCreateWithoutPotentialInput, UmkmUncheckedCreateWithoutPotentialInput>
  }

  export type UmkmUpdateWithWhereUniqueWithoutPotentialInput = {
    where: UmkmWhereUniqueInput
    data: XOR<UmkmUpdateWithoutPotentialInput, UmkmUncheckedUpdateWithoutPotentialInput>
  }

  export type UmkmUpdateManyWithWhereWithoutPotentialInput = {
    where: UmkmScalarWhereInput
    data: XOR<UmkmUpdateManyMutationInput, UmkmUncheckedUpdateManyWithoutPotentialInput>
  }

  export type UmkmScalarWhereInput = {
    AND?: UmkmScalarWhereInput | UmkmScalarWhereInput[]
    OR?: UmkmScalarWhereInput[]
    NOT?: UmkmScalarWhereInput | UmkmScalarWhereInput[]
    id?: UuidFilter<"Umkm"> | string
    potentialId?: UuidNullableFilter<"Umkm"> | string | null
    name?: StringFilter<"Umkm"> | string
    slug?: StringFilter<"Umkm"> | string
    ownerName?: StringFilter<"Umkm"> | string
    category?: EnumUmkmCategoryFilter<"Umkm"> | $Enums.UmkmCategory
    description?: StringFilter<"Umkm"> | string
    whatsappNumber?: StringFilter<"Umkm"> | string
    address?: StringFilter<"Umkm"> | string
    latitude?: FloatFilter<"Umkm"> | number
    longitude?: FloatFilter<"Umkm"> | number
    logo?: StringFilter<"Umkm"> | string
    gallery?: JsonFilter<"Umkm">
    status?: EnumContentStatusFilter<"Umkm"> | $Enums.ContentStatus
    submitterEmail?: StringNullableFilter<"Umkm"> | string | null
    revisionToken?: StringNullableFilter<"Umkm"> | string | null
    adminFeedback?: StringNullableFilter<"Umkm"> | string | null
    publishedAt?: DateTimeNullableFilter<"Umkm"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Umkm"> | Date | string | null
    createdAt?: DateTimeFilter<"Umkm"> | Date | string
    updatedAt?: DateTimeFilter<"Umkm"> | Date | string
  }

  export type UserCreateWithoutRevisionsInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    newsCreated?: NewsCreateNestedManyWithoutAuthorInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRevisionsInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    newsCreated?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRevisionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRevisionsInput, UserUncheckedCreateWithoutRevisionsInput>
  }

  export type UserUpsertWithoutRevisionsInput = {
    update: XOR<UserUpdateWithoutRevisionsInput, UserUncheckedUpdateWithoutRevisionsInput>
    create: XOR<UserCreateWithoutRevisionsInput, UserUncheckedCreateWithoutRevisionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRevisionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRevisionsInput, UserUncheckedUpdateWithoutRevisionsInput>
  }

  export type UserUpdateWithoutRevisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsCreated?: NewsUpdateManyWithoutAuthorNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRevisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsCreated?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    newsCreated?: NewsCreateNestedManyWithoutAuthorInput
    revisions?: RevisionHistoryCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    newsCreated?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    revisions?: RevisionHistoryUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsCreated?: NewsUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionHistoryUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsCreated?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionHistoryUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type NewsCreateManyAuthorInput = {
    id?: string
    categoryId: string
    title: string
    slug: string
    summary: string
    coverImage: string
    coverCaption: string
    contentSections: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterName?: string | null
    submitterEmail?: string | null
    submitterPhone?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type RevisionHistoryCreateManyAdminInput = {
    id?: string
    entityType: string
    entityId: string
    action: $Enums.ActionType
    notes?: string | null
    createdAt?: Date | string
  }

  export type NewsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    coverCaption?: StringFieldUpdateOperationsInput | string
    contentSections?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submitterPhone?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NewsCategoryUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    coverCaption?: StringFieldUpdateOperationsInput | string
    contentSections?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submitterPhone?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    coverCaption?: StringFieldUpdateOperationsInput | string
    contentSections?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submitterPhone?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHistoryUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHistoryUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionHistoryUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyCategoryInput = {
    id?: string
    authorId?: string | null
    title: string
    slug: string
    summary: string
    coverImage: string
    coverCaption: string
    contentSections: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterName?: string | null
    submitterEmail?: string | null
    submitterPhone?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    coverCaption?: StringFieldUpdateOperationsInput | string
    contentSections?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submitterPhone?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutNewsCreatedNestedInput
  }

  export type NewsUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    coverCaption?: StringFieldUpdateOperationsInput | string
    contentSections?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submitterPhone?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    coverCaption?: StringFieldUpdateOperationsInput | string
    contentSections?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    submitterPhone?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UmkmProductCreateManyUmkmInput = {
    id?: string
    productName: string
    price?: number | null
    productPhoto?: string | null
  }

  export type UmkmProductUpdateWithoutUmkmInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    productPhoto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UmkmProductUncheckedUpdateWithoutUmkmInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    productPhoto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UmkmProductUncheckedUpdateManyWithoutUmkmInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    productPhoto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UmkmCreateManyPotentialInput = {
    id?: string
    name: string
    slug: string
    ownerName: string
    category: $Enums.UmkmCategory
    description: string
    whatsappNumber: string
    address: string
    latitude: number
    longitude: number
    logo: string
    gallery: JsonNullValueInput | InputJsonValue
    status?: $Enums.ContentStatus
    submitterEmail?: string | null
    revisionToken?: string | null
    adminFeedback?: string | null
    publishedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UmkmUpdateWithoutPotentialInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    category?: EnumUmkmCategoryFieldUpdateOperationsInput | $Enums.UmkmCategory
    description?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: UmkmProductUpdateManyWithoutUmkmNestedInput
  }

  export type UmkmUncheckedUpdateWithoutPotentialInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    category?: EnumUmkmCategoryFieldUpdateOperationsInput | $Enums.UmkmCategory
    description?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: UmkmProductUncheckedUpdateManyWithoutUmkmNestedInput
  }

  export type UmkmUncheckedUpdateManyWithoutPotentialInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    category?: EnumUmkmCategoryFieldUpdateOperationsInput | $Enums.UmkmCategory
    description?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    logo?: StringFieldUpdateOperationsInput | string
    gallery?: JsonNullValueInput | InputJsonValue
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    revisionToken?: NullableStringFieldUpdateOperationsInput | string | null
    adminFeedback?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}