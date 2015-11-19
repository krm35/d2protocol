/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightFighterInformations = require('./game-fight-fighter-informations');
import PlayerStatus = require('../../character/status/player-status');
declare class GameFightFighterNamedInformations extends GameFightFighterInformations implements INetworkType {
    static ID: number;
    name: string;
    status: PlayerStatus;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightFighterNamedInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightFighterNamedInformations(param1: ICustomDataInput): void;
}
export = GameFightFighterNamedInformations;
