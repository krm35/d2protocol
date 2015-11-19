/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyEventMessage = require('./abstract-party-event-message');

class PartyCancelInvitationNotificationMessage extends AbstractPartyEventMessage {
    public static ID: number = 6251;

    cancelerId: number;
    guestId: number;

    constructor() {
        this.cancelerId = 0;
        this.guestId = 0;
        super();
    }

    public getMessageId(): number {
        return PartyCancelInvitationNotificationMessage.ID;
    }

    public reset(): void {
        this.cancelerId = 0;
        this.guestId = 0;
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
        this.serializeAs_PartyCancelInvitationNotificationMessage(param1);
    }

    public serializeAs_PartyCancelInvitationNotificationMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyEventMessage(param1);
        if (this.cancelerId < 0) {
            throw new Error('Forbidden value (' + this.cancelerId + ') on element cancelerId.');
        }
        param1.writeVarInt(this.cancelerId);
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element guestId.');
        }
        param1.writeVarInt(this.guestId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyCancelInvitationNotificationMessage(param1);
    }

    public deserializeAs_PartyCancelInvitationNotificationMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.cancelerId = param1.readVarUhInt();
        if (this.cancelerId < 0) {
            throw new Error('Forbidden value (' + this.cancelerId + ') on element of PartyCancelInvitationNotificationMessage.cancelerId.');
        }
        this.guestId = param1.readVarUhInt();
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element of PartyCancelInvitationNotificationMessage.guestId.');
        }

    }
}

export = PartyCancelInvitationNotificationMessage;
