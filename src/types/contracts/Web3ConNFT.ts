/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface Web3ConNFTInterface extends utils.Interface {
  contractName: "Web3ConNFT";
  functions: {
    "_host()": FunctionFragment;
    "_receiver()": FunctionFragment;
    "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "afterAgreementTerminated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "afterAgreementUpdated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "baseExtension()": FunctionFragment;
    "baseURI()": FunctionFragment;
    "beforeAgreementCreated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "beforeAgreementTerminated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "beforeAgreementUpdated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "changeURI(string)": FunctionFragment;
    "currentReceiver()": FunctionFragment;
    "destroyNFT(uint256)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenByIndex(uint256)": FunctionFragment;
    "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "uData()": FunctionFragment;
    "userData()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "_host", values?: undefined): string;
  encodeFunctionData(functionFragment: "_receiver", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "afterAgreementCreated",
    values: [string, string, BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "afterAgreementTerminated",
    values: [string, string, BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "afterAgreementUpdated",
    values: [string, string, BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "baseExtension",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementCreated",
    values: [string, string, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementTerminated",
    values: [string, string, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementUpdated",
    values: [string, string, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "changeURI", values: [string]): string;
  encodeFunctionData(
    functionFragment: "currentReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "destroyNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "uData", values?: undefined): string;
  encodeFunctionData(functionFragment: "userData", values?: undefined): string;

  decodeFunctionResult(functionFragment: "_host", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_receiver", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "afterAgreementCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterAgreementTerminated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterAgreementUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "baseExtension",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementTerminated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "changeURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "destroyNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userData", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "ReceiverChanged(address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceiverChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; approved: string; tokenId: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  { owner: string; operator: string; approved: boolean }
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export type ReceiverChangedEvent = TypedEvent<[string], { receiver: string }>;

export type ReceiverChangedEventFilter = TypedEventFilter<ReceiverChangedEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; tokenId: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface Web3ConNFT extends BaseContract {
  contractName: "Web3ConNFT";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Web3ConNFTInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _host(overrides?: CallOverrides): Promise<[string]>;

    _receiver(overrides?: CallOverrides): Promise<[string]>;

    afterAgreementCreated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    afterAgreementTerminated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    afterAgreementUpdated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    baseExtension(overrides?: CallOverrides): Promise<[string]>;

    baseURI(overrides?: CallOverrides): Promise<[string]>;

    beforeAgreementCreated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    beforeAgreementTerminated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    beforeAgreementUpdated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    changeURI(
      _tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentReceiver(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        startTime: BigNumber;
        receiver: string;
        flowRate: BigNumber;
      }
    >;

    destroyNFT(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uData(
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
      ] & {
        appLevel: number;
        callType: number;
        timestamp: BigNumber;
        msgSender: string;
        agreementSelector: string;
        userData: string;
        appAllowanceGranted: BigNumber;
        appAllowanceWanted: BigNumber;
        appAllowanceUsed: BigNumber;
        appAddress: string;
        appAllowanceToken: string;
      }
    >;

    userData(overrides?: CallOverrides): Promise<[string]>;
  };

  _host(overrides?: CallOverrides): Promise<string>;

  _receiver(overrides?: CallOverrides): Promise<string>;

  afterAgreementCreated(
    _superToken: string,
    _agreementClass: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    _ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  afterAgreementTerminated(
    _superToken: string,
    _agreementClass: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    _ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  afterAgreementUpdated(
    _superToken: string,
    _agreementClass: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    _ctx: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  baseExtension(overrides?: CallOverrides): Promise<string>;

  baseURI(overrides?: CallOverrides): Promise<string>;

  beforeAgreementCreated(
    arg0: string,
    arg1: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  beforeAgreementTerminated(
    arg0: string,
    arg1: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  beforeAgreementUpdated(
    arg0: string,
    arg1: string,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  changeURI(
    _tokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentReceiver(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber] & {
      startTime: BigNumber;
      receiver: string;
      flowRate: BigNumber;
    }
  >;

  destroyNFT(
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenByIndex(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenOfOwnerByIndex(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uData(
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      number,
      BigNumber,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string
    ] & {
      appLevel: number;
      callType: number;
      timestamp: BigNumber;
      msgSender: string;
      agreementSelector: string;
      userData: string;
      appAllowanceGranted: BigNumber;
      appAllowanceWanted: BigNumber;
      appAllowanceUsed: BigNumber;
      appAddress: string;
      appAllowanceToken: string;
    }
  >;

  userData(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _host(overrides?: CallOverrides): Promise<string>;

    _receiver(overrides?: CallOverrides): Promise<string>;

    afterAgreementCreated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    afterAgreementTerminated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    afterAgreementUpdated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseExtension(overrides?: CallOverrides): Promise<string>;

    baseURI(overrides?: CallOverrides): Promise<string>;

    beforeAgreementCreated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    beforeAgreementTerminated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    beforeAgreementUpdated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    changeURI(_tokenURI: string, overrides?: CallOverrides): Promise<void>;

    currentReceiver(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        startTime: BigNumber;
        receiver: string;
        flowRate: BigNumber;
      }
    >;

    destroyNFT(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    uData(
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
      ] & {
        appLevel: number;
        callType: number;
        timestamp: BigNumber;
        msgSender: string;
        agreementSelector: string;
        userData: string;
        appAllowanceGranted: BigNumber;
        appAllowanceWanted: BigNumber;
        appAllowanceUsed: BigNumber;
        appAddress: string;
        appAllowanceToken: string;
      }
    >;

    userData(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "ReceiverChanged(address)"(receiver?: null): ReceiverChangedEventFilter;
    ReceiverChanged(receiver?: null): ReceiverChangedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
  };

  estimateGas: {
    _host(overrides?: CallOverrides): Promise<BigNumber>;

    _receiver(overrides?: CallOverrides): Promise<BigNumber>;

    afterAgreementCreated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    afterAgreementTerminated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    afterAgreementUpdated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseExtension(overrides?: CallOverrides): Promise<BigNumber>;

    baseURI(overrides?: CallOverrides): Promise<BigNumber>;

    beforeAgreementCreated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    beforeAgreementTerminated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    beforeAgreementUpdated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeURI(
      _tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    destroyNFT(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uData(overrides?: CallOverrides): Promise<BigNumber>;

    userData(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _host(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _receiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    afterAgreementCreated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    afterAgreementTerminated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    afterAgreementUpdated(
      _superToken: string,
      _agreementClass: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      _ctx: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseExtension(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    beforeAgreementCreated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beforeAgreementTerminated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beforeAgreementUpdated(
      arg0: string,
      arg1: string,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeURI(
      _tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    destroyNFT(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
