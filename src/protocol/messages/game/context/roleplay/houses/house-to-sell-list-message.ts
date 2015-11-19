/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import HouseInformationsForSell = require('../../../../../types/game/house/house-informations-for-sell');

class HouseToSellListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6140;

    pageIndex: number;
    totalPage: number;
    houseList: HouseInformationsForSell[];

    constructor() {
        this.pageIndex = 0;
        this.totalPage = 0;
        this.houseList = [];
        super();
    }

    public getMessageId(): number {
        return HouseToSellListMessage.ID;
    }

    public reset(): void {
        this.pageIndex = 0;
        this.totalPage = 0;
        this.houseList = [];
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
        this.serializeAs_HouseToSellListMessage(param1);
    }

    public serializeAs_HouseToSellListMessage(param1: ICustomDataOutput): void {
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element pageIndex.');
        }
        param1.writeVarShort(this.pageIndex);
        if (this.totalPage < 0) {
            throw new Error('Forbidden value (' + this.totalPage + ') on element totalPage.');
        }
        param1.writeVarShort(this.totalPage);
        param1.writeShort(this.houseList.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.houseList.length) {
            (this.houseList[_loc2_]).serializeAs_HouseInformationsForSell(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HouseToSellListMessage(param1);
    }

    public deserializeAs_HouseToSellListMessage(param1: ICustomDataInput): void {
        var _loc4_: HouseInformationsForSell = null;
        this.pageIndex = param1.readVarUhShort();
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element of HouseToSellListMessage.pageIndex.');
        }
        this.totalPage = param1.readVarUhShort();
        if (this.totalPage < 0) {
            throw new Error('Forbidden value (' + this.totalPage + ') on element of HouseToSellListMessage.totalPage.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new HouseInformationsForSell();
            _loc4_.deserialize(param1);
            this.houseList.push(_loc4_);
            _loc3_++;
        }

    }
}

export = HouseToSellListMessage;
