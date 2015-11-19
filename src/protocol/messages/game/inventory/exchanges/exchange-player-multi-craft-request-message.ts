/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeRequestMessage = require('./exchange-request-message');

class ExchangePlayerMultiCraftRequestMessage extends ExchangeRequestMessage {
    public static ID: number = 5784;

    target: number;
    skillId: number;

    constructor() {
        this.target = 0;
        this.skillId = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangePlayerMultiCraftRequestMessage.ID;
    }

    public reset(): void {
        this.target = 0;
        this.skillId = 0;
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
        this.serializeAs_ExchangePlayerMultiCraftRequestMessage(param1);
    }

    public serializeAs_ExchangePlayerMultiCraftRequestMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeRequestMessage(param1);
        if (this.target < 0) {
            throw new Error('Forbidden value (' + this.target + ') on element target.');
        }
        param1.writeVarInt(this.target);
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarInt(this.skillId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangePlayerMultiCraftRequestMessage(param1);
    }

    public deserializeAs_ExchangePlayerMultiCraftRequestMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.target = param1.readVarUhInt();
        if (this.target < 0) {
            throw new Error('Forbidden value (' + this.target + ') on element of ExchangePlayerMultiCraftRequestMessage.target.');
        }
        this.skillId = param1.readVarUhInt();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of ExchangePlayerMultiCraftRequestMessage.skillId.');
        }

    }
}

export = ExchangePlayerMultiCraftRequestMessage;
