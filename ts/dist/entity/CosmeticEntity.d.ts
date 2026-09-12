import { FortniteEntityBase } from '../FortniteEntityBase';
import type { FortniteSDK } from '../FortniteSDK';
import type { Control } from '../types';
import type { Cosmetic, CosmeticListMatch } from '../FortniteTypes';
declare class CosmeticEntity extends FortniteEntityBase<Cosmetic> {
    constructor(client: FortniteSDK, entopts: any);
    make(this: CosmeticEntity): CosmeticEntity;
    list(this: any, reqmatch?: CosmeticListMatch, ctrl?: Control): Promise<CosmeticEntity[]>;
}
export { CosmeticEntity };
