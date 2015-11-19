/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import FriendInformations = require('../../../types/game/friend/friend-informations');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class FriendUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5924;

    friendUpdated: FriendInformations;

    constructor() {
        this.friendUpdated = new FriendInformations();
        super();
    }

    public getMessageId(): number {
        return FriendUpdateMessage.ID;
    }

    public reset(): void {
        this.friendUpdated = new FriendInformations();
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
        this.serializeAs_FriendUpdateMessage(param1);
    }

    public serializeAs_FriendUpdateMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.friendUpdated.getTypeId());
        this.friendUpdated.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FriendUpdateMessage(param1);
    }

    public deserializeAs_FriendUpdateMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readUnsignedShort();
        this.friendUpdated = <FriendInformations>ProtocolTypeManager.getInstance(FriendInformations, _loc2_);
        this.friendUpdated.deserialize(param1);

    }
}

export = FriendUpdateMessage;
