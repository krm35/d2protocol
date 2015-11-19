/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AllianceInformations = require('../../../types/game/context/roleplay/alliance-informations');
declare class AllianceJoinedMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    allianceInfo: AllianceInformations;
    enabled: boolean;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AllianceJoinedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AllianceJoinedMessage(param1: ICustomDataInput): void;
}
export = AllianceJoinedMessage;
