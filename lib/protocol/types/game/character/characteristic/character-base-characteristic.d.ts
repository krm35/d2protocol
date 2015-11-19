/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class CharacterBaseCharacteristic implements INetworkType {
    static ID: number;
    base: number;
    additionnal: number;
    objectsAndMountBonus: number;
    alignGiftBonus: number;
    contextModif: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterBaseCharacteristic(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterBaseCharacteristic(param1: ICustomDataInput): void;
}
export = CharacterBaseCharacteristic;
