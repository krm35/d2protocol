/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MountEmoteIconUsedOkMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5978;

    mountId: number;
    reactionType: number;

    constructor() {
        this.mountId = 0;
        this.reactionType = 0;
        super();
    }

    public getMessageId(): number {
        return MountEmoteIconUsedOkMessage.ID;
    }

    public reset(): void {
        this.mountId = 0;
        this.reactionType = 0;
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
        this.serializeAs_MountEmoteIconUsedOkMessage(param1);
    }

    public serializeAs_MountEmoteIconUsedOkMessage(param1: ICustomDataOutput): void {
        param1.writeVarInt(this.mountId);
        if (this.reactionType < 0) {
            throw new Error('Forbidden value (' + this.reactionType + ') on element reactionType.');
        }
        param1.writeByte(this.reactionType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountEmoteIconUsedOkMessage(param1);
    }

    public deserializeAs_MountEmoteIconUsedOkMessage(param1: ICustomDataInput): void {
        this.mountId = param1.readVarInt();
        this.reactionType = param1.readByte();
        if (this.reactionType < 0) {
            throw new Error('Forbidden value (' + this.reactionType + ') on element of MountEmoteIconUsedOkMessage.reactionType.');
        }

    }
}

export = MountEmoteIconUsedOkMessage;
