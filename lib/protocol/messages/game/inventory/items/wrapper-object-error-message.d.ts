/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import SymbioticObjectErrorMessage = require('./symbiotic-object-error-message');
declare class WrapperObjectErrorMessage extends SymbioticObjectErrorMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_WrapperObjectErrorMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_WrapperObjectErrorMessage(param1: ICustomDataInput): void;
}
export = WrapperObjectErrorMessage;
