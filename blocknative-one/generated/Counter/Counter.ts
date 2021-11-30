// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Called extends ethereum.Event {
  get params(): Called__Params {
    return new Called__Params(this);
  }
}

export class Called__Params {
  _event: Called;

  constructor(event: Called) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get count(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Counter extends ethereum.SmartContract {
  static bind(address: Address): Counter {
    return new Counter("Counter", address);
  }

  callerCount(param0: Address): BigInt {
    let result = super.call("callerCount", "callerCount(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_callerCount(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "callerCount",
      "callerCount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class CallCall extends ethereum.Call {
  get inputs(): CallCall__Inputs {
    return new CallCall__Inputs(this);
  }

  get outputs(): CallCall__Outputs {
    return new CallCall__Outputs(this);
  }
}

export class CallCall__Inputs {
  _call: CallCall;

  constructor(call: CallCall) {
    this._call = call;
  }
}

export class CallCall__Outputs {
  _call: CallCall;

  constructor(call: CallCall) {
    this._call = call;
  }
}
