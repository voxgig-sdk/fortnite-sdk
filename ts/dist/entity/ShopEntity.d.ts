import { FortniteEntityBase } from '../FortniteEntityBase';
import type { FortniteSDK } from '../FortniteSDK';
import type { Control } from '../types';
import type { Shop, ShopLoadMatch } from '../FortniteTypes';
declare class ShopEntity extends FortniteEntityBase<Shop> {
    constructor(client: FortniteSDK, entopts: any);
    make(this: ShopEntity): ShopEntity;
    load(this: any, reqmatch?: ShopLoadMatch, ctrl?: Control): Promise<ShopEntity>;
}
export { ShopEntity };
