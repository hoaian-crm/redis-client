/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "product";

export interface GetProductDto {
  id: number[];
}

export interface IProductDetail {
  id: number;
  name: string;
  alias: string;
  price: number;
  discount: number;
}

export interface IProductResponse {
  products: IProductDetail[];
}

function createBaseGetProductDto(): GetProductDto {
  return { id: [] };
}

export const GetProductDto = {
  encode(message: GetProductDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.id) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProductDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProductDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.id.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.id.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProductDto {
    return { id: globalThis.Array.isArray(object?.id) ? object.id.map((e: any) => globalThis.Number(e)) : [] };
  },

  toJSON(message: GetProductDto): unknown {
    const obj: any = {};
    if (message.id?.length) {
      obj.id = message.id.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProductDto>, I>>(base?: I): GetProductDto {
    return GetProductDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProductDto>, I>>(object: I): GetProductDto {
    const message = createBaseGetProductDto();
    message.id = object.id?.map((e) => e) || [];
    return message;
  },
};

function createBaseIProductDetail(): IProductDetail {
  return { id: 0, name: "", alias: "", price: 0, discount: 0 };
}

export const IProductDetail = {
  encode(message: IProductDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.alias !== "") {
      writer.uint32(26).string(message.alias);
    }
    if (message.price !== 0) {
      writer.uint32(32).int64(message.price);
    }
    if (message.discount !== 0) {
      writer.uint32(40).int64(message.discount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IProductDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIProductDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.alias = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.price = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.discount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IProductDetail {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
      discount: isSet(object.discount) ? globalThis.Number(object.discount) : 0,
    };
  },

  toJSON(message: IProductDetail): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.price !== 0) {
      obj.price = Math.round(message.price);
    }
    if (message.discount !== 0) {
      obj.discount = Math.round(message.discount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IProductDetail>, I>>(base?: I): IProductDetail {
    return IProductDetail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IProductDetail>, I>>(object: I): IProductDetail {
    const message = createBaseIProductDetail();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.alias = object.alias ?? "";
    message.price = object.price ?? 0;
    message.discount = object.discount ?? 0;
    return message;
  },
};

function createBaseIProductResponse(): IProductResponse {
  return { products: [] };
}

export const IProductResponse = {
  encode(message: IProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.products) {
      IProductDetail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.products.push(IProductDetail.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IProductResponse {
    return {
      products: globalThis.Array.isArray(object?.products)
        ? object.products.map((e: any) => IProductDetail.fromJSON(e))
        : [],
    };
  },

  toJSON(message: IProductResponse): unknown {
    const obj: any = {};
    if (message.products?.length) {
      obj.products = message.products.map((e) => IProductDetail.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IProductResponse>, I>>(base?: I): IProductResponse {
    return IProductResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IProductResponse>, I>>(object: I): IProductResponse {
    const message = createBaseIProductResponse();
    message.products = object.products?.map((e) => IProductDetail.fromPartial(e)) || [];
    return message;
  },
};

export interface IProductController {
  GetById(request: GetProductDto): Promise<IProductResponse>;
}

export const IProductControllerServiceName = "product.IProductController";
export class IProductControllerClientImpl implements IProductController {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || IProductControllerServiceName;
    this.rpc = rpc;
    this.GetById = this.GetById.bind(this);
  }
  GetById(request: GetProductDto): Promise<IProductResponse> {
    const data = GetProductDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetById", data);
    return promise.then((data) => IProductResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
