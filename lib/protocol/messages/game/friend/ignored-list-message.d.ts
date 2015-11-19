/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import IgnoredInformations = require('../../../types/game/friend/ignored-informations');
declare class IgnoredListMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    ignoredList: IgnoredInformations[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_IgnoredListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_IgnoredListMessage(param1: ICustomDataInput): void;
}
export = IgnoredListMessage;
