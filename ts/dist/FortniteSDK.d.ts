import { CosmeticEntity } from './entity/CosmeticEntity';
import { ShopEntity } from './entity/ShopEntity';
import { StatisticEntity } from './entity/StatisticEntity';
export type * from './FortniteTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { FortniteEntityBase } from './FortniteEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class FortniteSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Cosmetic(entopts?: Record<string, any>): CosmeticEntity;
    Shop(entopts?: Record<string, any>): ShopEntity;
    Statistic(entopts?: Record<string, any>): StatisticEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): FortniteSDK;
    tester(testopts?: any, sdkopts?: any): FortniteSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof FortniteSDK;
export { stdutil, config, BaseFeature, FortniteEntityBase, FortniteSDK, SDK, };
