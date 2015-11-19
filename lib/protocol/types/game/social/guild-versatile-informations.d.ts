/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class GuildVersatileInformations implements INetworkType {
    static ID: number;
    guildId: number;
    leaderId: number;
    guildLevel: number;
    nbMembers: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildVersatileInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildVersatileInformations(param1: ICustomDataInput): void;
}
export = GuildVersatileInformations;
