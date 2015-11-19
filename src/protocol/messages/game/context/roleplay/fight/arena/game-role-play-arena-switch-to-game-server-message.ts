/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../../boolean-byte-wrapper');

class GameRolePlayArenaSwitchToGameServerMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6574;

    validToken: boolean;
    ticket: number[];
    homeServerId: number;

    constructor() {
        this.validToken = false;
        this.ticket = [];
        this.homeServerId = 0;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayArenaSwitchToGameServerMessage.ID;
    }

    public reset(): void {
        this.validToken = false;
        this.ticket = [];
        this.homeServerId = 0;
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
        this.serializeAs_GameRolePlayArenaSwitchToGameServerMessage(param1);
    }

    public serializeAs_GameRolePlayArenaSwitchToGameServerMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.validToken);
        param1.writeVarInt(this.ticket.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.ticket.length) {
            param1.writeByte(this.ticket[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.homeServerId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayArenaSwitchToGameServerMessage(param1);
    }

    public deserializeAs_GameRolePlayArenaSwitchToGameServerMessage(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        this.validToken = param1.readBoolean();
        var _loc2_: number = param1.readVarInt();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readByte();
            this.ticket.push(_loc4_);
            _loc3_++;
        }
        this.homeServerId = param1.readShort();

    }
}

export = GameRolePlayArenaSwitchToGameServerMessage;
