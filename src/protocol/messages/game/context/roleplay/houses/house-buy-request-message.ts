/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class HouseBuyRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5738;

    proposedPrice: number;

    constructor() {
        this.proposedPrice = 0;
        super();
    }

    public getMessageId(): number {
        return HouseBuyRequestMessage.ID;
    }

    public reset(): void {
        this.proposedPrice = 0;
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
        this.serializeAs_HouseBuyRequestMessage(param1);
    }

    public serializeAs_HouseBuyRequestMessage(param1: ICustomDataOutput): void {
        if (this.proposedPrice < 0) {
            throw new Error('Forbidden value (' + this.proposedPrice + ') on element proposedPrice.');
        }
        param1.writeVarInt(this.proposedPrice);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HouseBuyRequestMessage(param1);
    }

    public deserializeAs_HouseBuyRequestMessage(param1: ICustomDataInput): void {
        this.proposedPrice = param1.readVarUhInt();
        if (this.proposedPrice < 0) {
            throw new Error('Forbidden value (' + this.proposedPrice + ') on element of HouseBuyRequestMessage.proposedPrice.');
        }

    }
}

export = HouseBuyRequestMessage;
