/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ShortcutObject = require('./shortcut-object');

class ShortcutObjectPreset extends ShortcutObject implements INetworkType {
    public static ID: number = 370;

    presetId: number;

    constructor() {
        this.presetId = 0;
        super();
    }

    public getTypeId(): number {
        return ShortcutObjectPreset.ID;
    }

    public reset(): void {
        this.presetId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ShortcutObjectPreset(param1);
    }

    public serializeAs_ShortcutObjectPreset(param1: ICustomDataOutput): void {
        super.serializeAs_ShortcutObject(param1);
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShortcutObjectPreset(param1);
    }

    public deserializeAs_ShortcutObjectPreset(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of ShortcutObjectPreset.presetId.');
        }

    }
}

export = ShortcutObjectPreset;
