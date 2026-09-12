import { FortniteEntityBase } from '../FortniteEntityBase';
import type { FortniteSDK } from '../FortniteSDK';
import type { Control } from '../types';
import type { Statistic, StatisticLoadMatch } from '../FortniteTypes';
declare class StatisticEntity extends FortniteEntityBase<Statistic> {
    constructor(client: FortniteSDK, entopts: any);
    make(this: StatisticEntity): StatisticEntity;
    load(this: any, reqmatch?: StatisticLoadMatch, ctrl?: Control): Promise<StatisticEntity>;
}
export { StatisticEntity };
