/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import MountClientData = require('../../../../types/game/mount/mount-client-data');

class ExchangeStartOkMountWithOutPaddockMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5991;

    stabledMountsDescription: MountClientData[];

    constructor() {
        this.stabledMountsDescription = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeStartOkMountWithOutPaddockMessage.ID;
    }

    public reset(): void {
        this.stabledMountsDescription = [];
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ExchangeStartOkMountWithOutPaddockMessage(param1);
    }

    public serializeAs_ExchangeStartOkMountWithOutPaddockMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.stabledMountsDescription.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.stabledMountsDescription.length) {
            (this.stabledMountsDescription[_loc2_]).serializeAs_MountClientData(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartOkMountWithOutPaddockMessage(param1);
    }

    public deserializeAs_ExchangeStartOkMountWithOutPaddockMessage(param1: ICustomDataInput): void {
        var _loc4_: MountClientData = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new MountClientData();
            _loc4_.deserialize(param1);
            this.stabledMountsDescription.push(_loc4_);
            _loc3_++;
        }

    }
}

export = ExchangeStartOkMountWithOutPaddockMessage;
